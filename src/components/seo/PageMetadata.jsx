import { SITE_CONFIG, getAbsoluteUrl } from '../../data/seo'

function PageMetadata({
  title = SITE_CONFIG.defaultTitle,
  description = SITE_CONFIG.defaultDescription,
  path = '/',
  image = SITE_CONFIG.defaultImage,
  noindex = false,
}) {
  const canonicalUrl = getAbsoluteUrl(path)
  const imageUrl = image ? getAbsoluteUrl(image) : null

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <link rel="canonical" href={canonicalUrl} />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:locale" content={SITE_CONFIG.locale} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />

      {imageUrl && <meta property="og:image" content={imageUrl} />}

      <meta name="twitter:card" content={imageUrl ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    </>
  )
}

export default PageMetadata
