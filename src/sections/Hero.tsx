import { useTranslation } from 'react-i18next'
import { IMG_HERO_PHOTO, ICON_ARROW, ICON_PLAY } from '../assets/images'
import UnicornScene from 'unicornstudio-react'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-[921px] overflow-hidden flex flex-col justify-end pb-24">

      {/* Full-bleed background photo — desaturated */}
      <div className="absolute inset-0 opacity-40">
        <img
          src={IMG_HERO_PHOTO}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(0)' }}
        />
      </div>

      {/* Animated overlay — Unicorn Studio scene */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.85 }}>
        <UnicornScene
          projectId="8w4d650UN2E6wsPOCmhU"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent" />

      {/* Watermark */}
      <div className="absolute bottom-0 right-6 pointer-events-none select-none">
        <span className="font-space font-black text-[192px] leading-none tracking-[-4.8px] uppercase text-white/[0.02]">
          PRODUCTION
        </span>
      </div>

      {/* Content — page-container aligns left edge with NavBar logo on all screen widths */}
      <div className="relative z-10 page-container">
      <div className="max-w-[896px]">

        {/* Badge */}
        <div className="inline-flex items-center px-[13px] py-[5px] mb-4 bg-[rgba(189,203,175,0.1)] border border-[rgba(189,203,175,0.2)]">
          <span className="font-inter text-[10px] tracking-[2px] uppercase text-accent">
            {t('hero.badge')}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-space font-black text-[96px] leading-none tracking-[-4.8px] uppercase mb-6">
          <span className="block text-heading">{t('hero.headline_1')}</span>
          <span className="block text-heading">{t('hero.headline_2')}</span>
          <span className="block text-accent font-bold">{t('hero.headline_3')}</span>
        </h1>

        {/* CTAs */}
        <div className="flex items-center gap-8 mt-4">
          <a
            href="#"
            className="inline-flex items-center gap-4 bg-accent text-btn-text font-space font-bold text-[14px] tracking-[1.4px] uppercase px-10 py-5 hover:bg-heading transition-colors"
          >
            {t('hero.cta_primary')}
            <img src={ICON_ARROW} alt="" className="w-4 h-4" />
          </a>

          <a href="#" className="flex items-center gap-4 group">
            <div className="flex items-center justify-center w-14 h-14 rounded-[12px] border border-nav-border group-hover:border-body-text transition-colors">
              <img src={ICON_PLAY} alt="" className="w-[11px] h-[14px]" />
            </div>
            <span className="font-inter font-semibold text-[12px] tracking-[1.2px] uppercase text-body-text group-hover:text-heading transition-colors">
              {t('hero.cta_secondary')}
            </span>
          </a>
        </div>
      </div>{/* max-w-[896px] */}
      </div>{/* page-container */}

    </section>
  )
}
