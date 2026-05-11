export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[12px] bg-[rgba(12,10,9,0.7)]">
      <div className="flex h-[68px] items-center justify-between px-6 mx-auto w-[1024px]">

        {/* Left — logo + nav */}
        <div className="flex items-center gap-8">
          <span className="font-manrope font-black text-[20px] tracking-[-1px] text-logo-white whitespace-nowrap">
            JM PUBLICIDAD
          </span>

          <nav className="flex items-center gap-6">
            <a href="#" className="border-b-2 border-mint pb-[2px] font-manrope font-bold text-[16px] tracking-[-0.8px] uppercase text-mint whitespace-nowrap">
              INICIO
            </a>
            <a href="#" className="px-2 py-1 font-manrope font-medium text-[16px] tracking-[-0.8px] uppercase text-nav-inactive whitespace-nowrap hover:text-body-text transition-colors">
              SERVICIOS
            </a>
            <a href="#" className="px-2 py-1 font-manrope font-medium text-[16px] tracking-[-0.8px] uppercase text-nav-inactive whitespace-nowrap hover:text-body-text transition-colors">
              PROYECTOS
            </a>
            <a href="#" className="px-2 py-1 font-manrope font-medium text-[16px] tracking-[-0.8px] uppercase text-nav-inactive whitespace-nowrap hover:text-body-text transition-colors">
              CONTACTO
            </a>
          </nav>
        </div>

        {/* Right — language toggle + CTA */}
        <div className="flex items-center gap-[26px]">
          <div className="flex items-center gap-2">
            <span className="font-inter text-[12px] tracking-[1.2px] uppercase text-mint">EN</span>
            <div className="w-px h-[12px] bg-divider" />
            <span className="font-inter text-[12px] tracking-[1.2px] uppercase text-muted cursor-pointer hover:text-body-text transition-colors">ES</span>
          </div>

          <a
            href="#"
            className="bg-accent text-btn-text font-space font-bold text-[12px] tracking-[1.2px] uppercase px-6 py-[10px] hover:bg-heading transition-colors whitespace-nowrap"
          >
            COTIZAR
          </a>
        </div>

      </div>
    </header>
  )
}
