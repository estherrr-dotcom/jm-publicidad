import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface NavBarProps {
  activeLink?: 'home' | 'services' | 'projects' | 'contact'
}

export default function NavBar({ activeLink = 'home' }: NavBarProps) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  const linkClass = (key: NavBarProps['activeLink']) =>
    key === activeLink
      ? 'border-b-2 border-mint pb-[2px] font-manrope font-bold text-[16px] tracking-[-0.8px] uppercase text-mint whitespace-nowrap'
      : 'px-2 py-1 font-manrope font-medium text-[16px] tracking-[-0.8px] uppercase text-nav-inactive whitespace-nowrap hover:text-body-text transition-colors'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[12px] bg-[rgba(12,10,9,0.7)]">
      <div className="page-container flex h-[68px] items-center justify-between">

        {/* Left — logo + nav */}
        <div className="flex items-center gap-8">
          <Link to="/" className="font-manrope font-black text-[20px] tracking-[-1px] text-logo-white whitespace-nowrap">
            JM PUBLICIDAD
          </Link>

          <nav className="flex items-center gap-6">
            <Link to="/"         className={linkClass('home')}     >{t('nav.home')}</Link>
            <Link to="/services" className={linkClass('services')} >{t('nav.services')}</Link>
            <Link to="/projects" className={linkClass('projects')} >{t('nav.projects')}</Link>
            <Link to="/contact"  className={linkClass('contact')}  >{t('nav.contact')}</Link>
          </nav>
        </div>

        {/* Right — language toggle + CTA */}
        <div className="flex items-center gap-[26px]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => i18n.changeLanguage('en')}
              aria-label="Switch to English"
              className={`font-inter text-[12px] tracking-[1.2px] uppercase transition-colors ${lang === 'en' ? 'text-mint' : 'text-muted hover:text-body-text cursor-pointer'}`}
            >
              EN
            </button>
            <div className="w-px h-[12px] bg-divider" />
            <button
              onClick={() => i18n.changeLanguage('es')}
              aria-label="Cambiar a español"
              className={`font-inter text-[12px] tracking-[1.2px] uppercase transition-colors ${lang === 'es' ? 'text-mint' : 'text-muted hover:text-body-text cursor-pointer'}`}
            >
              ES
            </button>
          </div>

          <Link
            to="/contact"
            className="bg-accent text-btn-text font-space font-bold text-[12px] tracking-[1.2px] uppercase px-6 py-[10px] hover:bg-heading transition-colors whitespace-nowrap"
          >
            {t('nav.cta')}
          </Link>
        </div>

      </div>
    </header>
  )
}
