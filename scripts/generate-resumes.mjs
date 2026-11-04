import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDirectory = fileURLToPath(new URL('../', import.meta.url))
const outputDirectory = path.join(rootDirectory, 'public', 'documents')
const baseUrl = 'http://127.0.0.1:4173'

const resumes = [
  {
    language: 'fr',
    filename: 'maxime-brochot-resume-fr.pdf',
  },
  {
    language: 'en',
    filename: 'maxime-brochot-resume-en.pdf',
  },
]

function startPreviewServer() {
  const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'

  return spawn(
    npmCommand,
    ['run', 'preview', '--', '--host', '127.0.0.1', '--port', '4173', '--strictPort'],
    {
      cwd: rootDirectory,
      stdio: 'inherit',
      shell: process.platform === 'win32',
    },
  )
}

async function waitForServer(serverProcess) {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (serverProcess.exitCode !== null) {
      throw new Error('The preview server stopped unexpectedly.')
    }

    try {
      const response = await fetch(baseUrl)

      if (response.ok) {
        return
      }
    } catch {
      // The preview server is not ready yet.
    }

    await new Promise((resolve) => setTimeout(resolve, 500))
  }

  throw new Error('Timed out waiting for the preview server.')
}

async function generateResumes() {
  await mkdir(outputDirectory, { recursive: true })

  const server = startPreviewServer()
  let browser

  try {
    await waitForServer(server)

    browser = await chromium.launch({ headless: true })

    const page = await browser.newPage({
      viewport: { width: 1280, height: 900 },
      deviceScaleFactor: 1,
    })

    for (const resume of resumes) {
      const url = `${baseUrl}/resume/${resume.language}`
      const outputPath = path.join(outputDirectory, resume.filename)

      await page.goto(url, { waitUntil: 'networkidle' })
      await page.evaluate(() => document.fonts.ready)

      await page.locator('.resume-document').waitFor()

      await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: false,
        margin: {
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
        },
      })

      console.log(`Generated: ${resume.filename}`)
    }

    await page.close()
  } finally {
    await browser?.close()
    server.kill()
  }
}

generateResumes().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
