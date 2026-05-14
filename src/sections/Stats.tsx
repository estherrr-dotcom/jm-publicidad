import { useTranslation } from 'react-i18next'

interface StatItem {
  value: string
  label: string
}

export default function Stats() {
  const { t } = useTranslation()
  const stats = t('stats.items', { returnObjects: true }) as StatItem[]

  return (
    <section className="bg-secondary-bg py-12">
      <div className="grid grid-cols-3 gap-12 px-6 mx-auto w-[1024px]">
        {stats.map((s) => (
          <div key={s.value} className="flex flex-col gap-2">
            <span className="font-space font-bold text-[36px] tracking-[-1.8px] leading-[40px] text-accent">
              {s.value}
            </span>
            <span className="font-inter text-[12px] tracking-[1.2px] uppercase text-body-text">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
