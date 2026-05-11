const stats = [
  { value: '15+ Years XP',    label: 'DECADES OF TECHNICAL MASTERY'   },
  { value: '2.4k Deliveries', label: 'SUCCESSFUL PROJECT EXECUTIONS'  },
  { value: '100% Precision',  label: 'ZERO-TOLERANCE FOR ERROR'       },
]

export default function Stats() {
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
