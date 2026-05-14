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
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
    </Helmet>
  )
}
