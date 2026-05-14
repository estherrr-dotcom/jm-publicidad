import { Helmet } from 'react-helmet-async'

interface PageSeoProps {
  title: string
  description: string
  path: string
}

const BASE_URL = 'https://jm-publicidad.pages.dev'

export default function PageSeo({ title, description, path }: PageSeoProps) {
  const canonical = `${BASE_URL}${path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:locale:alternate" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
