import { useTranslation } from 'react-i18next'
import NavBar from '../sections/NavBar'
import Footer from '../sections/Footer'
import {
  IMG_SERVICES_BG,
  IMG_LARGE_FORMAT, IMG_VEHICLE, IMG_SIGNAGE,
  IMG_POP, IMG_VOLUMETRIC, IMG_CNC,
  ICON_ARROW, ICON_PRECISION, ICON_RAPID,
} from '../assets/images'

interface ServiceGridItem {
  number: string
  title: string
  description: string
  bullets: string[]
}

const SERVICE_IMAGES = [
  IMG_LARGE_FORMAT,
  IMG_VEHICLE,
  IMG_SIGNAGE,
  IMG_POP,
  IMG_VOLUMETRIC,
  IMG_CNC,
]

export default function Services() {
  const { t } = useTranslation()
  const grid = t('servicesPage.grid', { returnObjects: true }) as ServiceGridItem[]

  return (
    <div className="flex flex-col min-h-screen bg-primary-bg">
      <NavBar activeLink="services" />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative h-[716px] overflow-hidden flex items-end">
        {/* Background */}
        <div className="absolute inset-0 opacity-40">
          <img
            src={IMG_SERVICES_BG}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'saturate(0)' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 px-8 pb-16 max-w-[1280px] mx-auto w-full">
          <div className="max-w-[768px] flex flex-col gap-6">
            {/* Badge */}
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-accent" />
              <span className="font-inter font-bold text-[10px] tracking-[4px] uppercase text-accent">
                {t('servicesPage.badge')}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-space font-black text-[96px] leading-none tracking-[-4.8px] uppercase">
              <span className="block text-heading">{t('servicesPage.heading_1')}</span>
              <span className="block text-accent font-bold">{t('servicesPage.heading_2')}</span>
            </h1>

            {/* Body */}
            <p className="font-manrope text-[18px] leading-[29px] text-body-text max-w-[576px]">
              {t('servicesPage.body')}
            </p>
          </div>
        </div>
      </section>

      {/* ── Services 3×2 Grid ──────────────────────────────── */}
      <section className="bg-primary-bg px-8 py-16 max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-3 gap-x-12 gap-y-20">
          {grid.map((svc, i) => (
            <article key={svc.title} className="flex flex-col">
              {/* Card image */}
              <div className="relative h-[360px] overflow-hidden bg-card-bg rounded-[6px] mb-8">
                <img
                  src={SERVICE_IMAGES[i]}
                  alt=""
                  className="absolute inset-0 w-[125%] h-full object-cover left-[-12.5%] opacity-80"
                  style={{ filter: 'saturate(0)' }}
                />
                {/* Number badge */}
                <div className="absolute bottom-4 left-4 backdrop-blur-[4px] bg-primary-bg/80 px-3 py-1 rounded-[2px]">
                  <span className="font-inter font-bold text-[10px] tracking-[1px] uppercase text-accent">
                    {svc.number}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-space font-bold text-[24px] leading-[32px] tracking-[-1.2px] uppercase text-heading mb-4">
                {svc.title}
              </h3>

              {/* Description */}
              <p className="font-manrope text-[14px] leading-[22.75px] text-body-text mb-4">
                {svc.description}
              </p>

              {/* Bullet list */}
              <ul className="flex flex-col gap-[7.5px]">
                {svc.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent/40 shrink-0" />
                    <span className="font-inter text-[12px] tracking-[0.9px] uppercase text-muted">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── Conversion Section ─────────────────────────────── */}
      <section className="relative bg-secondary-bg overflow-hidden px-8 py-32">
        {/* Diagonal overlay */}
        <div
          className="absolute right-[-15%] inset-y-0 w-[70%] opacity-5 bg-accent"
          style={{ transform: 'skewX(-12deg)' }}
        />

        <div className="relative max-w-[1280px] mx-auto w-full grid grid-cols-2 gap-16 items-center">
          {/* Left — copy + CTAs */}
          <div className="flex flex-col gap-6">
            <h2 className="font-space font-black text-[48px] leading-[60px] tracking-[-2.4px] uppercase text-heading">
              <span className="block">{t('conversion.heading_1')}</span>
              <span className="block">{t('conversion.heading_2')}</span>
            </h2>

            <p className="font-manrope text-[16px] leading-[26px] text-body-text max-w-[448px]">
              {t('conversion.body')}
            </p>

            <div className="flex flex-col gap-6 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-accent text-btn-text font-space font-bold text-[14px] tracking-[1.4px] uppercase px-10 py-5 rounded-[6px] hover:bg-heading transition-colors w-fit"
              >
                {t('conversion.cta_primary')}
                <img src={ICON_ARROW} alt="" className="w-3 h-3" />
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center border border-nav-border text-heading font-space font-bold text-[14px] tracking-[1.4px] uppercase px-10 py-5 rounded-[6px] hover:border-body-text transition-colors w-fit"
              >
                {t('conversion.cta_secondary')}
              </a>
            </div>
          </div>

          {/* Right — feature cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card-bg flex flex-col items-start justify-end p-8 min-h-[216px]">
              <img src={ICON_PRECISION} alt="" className="w-7 h-7 mb-4" />
              <span className="font-space font-bold text-[12px] tracking-[1.2px] uppercase text-heading">
                {t('conversion.feature_1')}
              </span>
            </div>
            <div className="bg-accent flex flex-col items-start justify-end p-8 min-h-[216px]">
              <img src={ICON_RAPID} alt="" className="w-8 h-8 mb-4" />
              <span className="font-space font-bold text-[12px] tracking-[1.2px] uppercase text-btn-text">
                {t('conversion.feature_2')}
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
