import { useTranslation } from 'react-i18next'
import NavBar from '../sections/NavBar'
import Hero from '../sections/Hero'
import Stats from '../sections/Stats'
import Capabilities from '../sections/Capabilities'
import Portfolio from '../sections/Portfolio'
import FinalCTA from '../sections/FinalCTA'
import Footer from '../sections/Footer'
import PageSeo from '../components/PageSeo'

export default function Home() {
  const { t } = useTranslation()
  return (
    <div className="bg-primary-bg min-h-screen">
      <PageSeo
        title={t('seo.home_title')}
        description={t('seo.home_description')}
        path="/"
      />
      <NavBar activeLink="home" />
      <main className="pt-[68px]">
        <Hero />
        <Stats />
        <Capabilities />
        <Portfolio />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
