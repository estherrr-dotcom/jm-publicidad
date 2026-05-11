export default function FinalCTA() {
  return (
    <section className="bg-primary-bg py-40 px-16 relative">
      {/* Subtle side borders */}
      <div className="absolute inset-0 border-l border-r border-divider opacity-10 mx-auto w-full max-w-[1280px]" />

      <div className="relative flex flex-col items-center gap-6 max-w-[896px] mx-auto">
        <p className="font-inter text-[12px] tracking-[4.8px] uppercase text-accent text-center">
          READY FOR CALIBRATION?
        </p>

        <h2 className="font-space font-black text-[72px] leading-none tracking-[-3.6px] uppercase text-heading text-center whitespace-nowrap">
          <span className="block">LET'S BUILD YOUR</span>
          <span className="block">INDUSTRIAL VISION.</span>
        </h2>

        <div className="flex items-center gap-6 mt-6">
          <a
            href="#"
            className="bg-accent text-btn-text font-space font-bold text-[14px] tracking-[1.4px] uppercase px-12 py-5 hover:bg-heading transition-colors whitespace-nowrap"
          >
            GET A QUOTE
          </a>
          <a
            href="#"
            className="border border-nav-border text-heading font-space font-bold text-[14px] tracking-[1.4px] uppercase px-12 py-5 hover:border-body-text transition-colors whitespace-nowrap"
          >
            VIEW ALL WORKS
          </a>
        </div>
      </div>
    </section>
  )
}
