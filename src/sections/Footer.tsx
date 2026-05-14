import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const socials = t('footer.socials', { returnObjects: true }) as string[]

  return (
    <footer className="bg-footer-bg py-20">
      <div className="mx-auto w-[1024px] px-8">
        <div className="grid grid-cols-2 gap-8 border-t border-divider pt-12">

          {/* Left — logo + tagline + socials */}
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-[15px]">
              <span className="font-space font-bold text-[24px] tracking-[-1.2px] leading-[32px] text-logo-white">
                JM PUBLICIDAD
              </span>
              <p className="font-manrope text-[14px] leading-[23px] text-muted max-w-[320px]">
                {t('footer.tagline')}
              </p>
            </div>
            <div className="flex gap-6 pt-12">
              {socials.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-manrope text-[12px] tracking-[1.2px] uppercase text-muted hover:text-body-text transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right — contact + copyright */}
          <div className="flex flex-col items-end justify-between">
            <div className="flex flex-col items-end gap-4">
              <a
                href={`mailto:${t('footer.email').toLowerCase()}`}
                className="font-manrope text-[14px] tracking-[1.4px] uppercase text-mint hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                {t('footer.email')}
              </a>
              <span className="font-manrope text-[14px] tracking-[1.4px] uppercase text-nav-inactive whitespace-nowrap">
                {t('footer.phone')}
              </span>
            </div>
            <div className="flex flex-col items-end gap-2 pt-12">
              <span className="font-manrope text-[12px] tracking-[1.2px] uppercase text-muted text-right">
                {t('footer.copyright')}
              </span>
              <a href="#" className="font-manrope text-[10px] tracking-[1px] uppercase text-muted hover:text-body-text transition-colors">
                {t('footer.privacy')}
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
