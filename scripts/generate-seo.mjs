import { readFile, mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import projects from '../src/data/projects.js'
import { PAGE_METADATA, SITE_CONFIG, getAbsoluteUrl, getProjectMetadata } from '../src/data/seo.js'

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDirectory, '..')
const distDirectory = path.join(projectRoot, 'dist')
const templatePath = path.join(distDirectory, 'index.html')

const resumePages = [
  {
    title: 'CV | Maxime Brochot',
    description: 'Curriculum vitae de Maxime Brochot, développeur web.',
    path: '/resume/fr',
    language: 'fr',
    noindex: true,
    image: null,
  },
  {
    title: 'Resume | Maxime Brochot',
    description: 'Curriculum vitae of Maxime Brochot, web developer.',
    path: '/resume/en',
    language: 'en',
    noindex: true,
    image: null,
  },
]

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }

    return entities[character]
  })
}

function createMetadataTags(metadata) {
  const {
    title = SITE_CONFIG.defaultTitle,
    description = SITE_CONFIG.defaultDescription,
    path: pagePath = '/',
    image = SITE_CONFIG.defaultImage,
    noindex = false,
  } = metadata

  const canonicalUrl = getAbsoluteUrl(pagePath)
  const imageUrl = image ? getAbsoluteUrl(image) : null

  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
  ]

  if (noindex) {
    tags.push('<meta name="robots" content="noindex, follow" />')
  } else {
    tags.push(`<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`)
  }

  tags.push(
    '<meta property="og:type" content="website" />',
    `<meta property="og:locale" content="${escapeHtml(SITE_CONFIG.locale)}" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_CONFIG.name)}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
  )

  if (imageUrl) {
    tags.push(`<meta property="og:image" content="${escapeHtml(imageUrl)}" />`)
  }

  tags.push(
    `<meta name="twitter:card" content="${imageUrl ? 'summary_large_image' : 'summary'}" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
  )

  if (imageUrl) {
    tags.push(`<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`)
  }

  return tags
    .map((tag) => tag.replace(/^<([a-z]+)/, '<$1 data-static-seo="true"'))
    .map((tag) => `    ${tag}`)
    .join('\n')
}

function createPageHtml(template, metadata) {
  const metadataTags = createMetadataTags(metadata)

  if (!template.includes('</head>')) {
    throw new Error('The HTML template does not contain a closing </head> tag.')
  }

  let html = template.replace('</head>', `${metadataTags}\n  </head>`)

  if (metadata.language) {
    html = html.replace(/<html lang="[^"]*">/, `<html lang="${escapeHtml(metadata.language)}">`)
  }

  return html
}

async function generatePage(template, metadata) {
  const pagePath = metadata.path ?? '/'
  const segments = pagePath.split('/').filter(Boolean)

  const outputDirectory = path.join(distDirectory, ...segments)
  const outputPath = path.join(outputDirectory, 'index.html')

  await mkdir(outputDirectory, { recursive: true })
  await writeFile(outputPath, createPageHtml(template, metadata), 'utf8')

  console.log(`Generated: ${pagePath}`)
}

async function generateSitemap(pages) {
  const publicPages = pages.filter((metadata) => !metadata.noindex)

  const urls = publicPages
    .map((metadata) => {
      const pageUrl = getAbsoluteUrl(metadata.path ?? '/')

      return `  <url>
    <loc>${escapeHtml(pageUrl)}</loc>
  </url>`
    })
    .join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

  const outputPath = path.join(distDirectory, 'sitemap.xml')

  await writeFile(outputPath, sitemap, 'utf8')

  console.log(`Sitemap generated: ${publicPages.length} URLs.`)
}

async function main() {
  const template = await readFile(templatePath, 'utf8')

  const staticPages = Object.values(PAGE_METADATA)
  const projectPages = projects.map(getProjectMetadata)

  const pages = [...staticPages, ...projectPages, ...resumePages]

  for (const metadata of pages) {
    await generatePage(template, metadata)
  }

  await generateSitemap(pages)

  console.log(`SEO generation completed: ${pages.length} pages.`)
}

main().catch((error) => {
  console.error('SEO generation failed:', error)
  process.exitCode = 1
})
