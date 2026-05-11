import {
  IMG_LARGE_FORMAT, IMG_SIGNAGE, IMG_VEHICLE,
  IMG_POP, IMG_VOLUMETRIC, IMG_CNC,
  ICON_LARGE_FORMAT, ICON_SIGNAGE, ICON_VEHICLE_ICON,
  ICON_POP, ICON_VOLUMETRIC, ICON_CNC,
} from '../assets/images'

interface ServiceCard {
  title: string
  description: string
  image: string
  icon: string
}

const services: ServiceCard[] = [
  {
    title: 'LARGE FORMAT',
    description: 'High-resolution prints for architectural scale deployments.',
    image: IMG_LARGE_FORMAT,
    icon: ICON_LARGE_FORMAT,
  },
  {
    title: 'SIGNAGE',
    description: 'Wayfinding systems and architectural branding elements.',
    image: IMG_SIGNAGE,
    icon: ICON_SIGNAGE,
  },
  {
    title: 'VEHICLE BRANDING',
    description: 'Precision fleet wraps for corporate mobile marketing.',
    image: IMG_VEHICLE,
    icon: ICON_VEHICLE_ICON,
  },
  {
    title: 'POP DISPLAYS',
    description: 'Custom retail environments and promotional fixtures.',
    image: IMG_POP,
    icon: ICON_POP,
  },
  {
    title: 'VOLUMETRIC LETTERS',
    description: '3D fabricated signage with internal LED illumination.',
    image: IMG_VOLUMETRIC,
    icon: ICON_VOLUMETRIC,
  },
  {
    title: 'CNC & LASER CUTTING',
    description: 'High-precision subtractive manufacturing for custom parts.',
    image: IMG_CNC,
    icon: ICON_CNC,
  },
]

export default function Capabilities() {
  return (
    <section className="bg-primary-bg py-32">
      <div className="flex flex-col gap-16 px-6 mx-auto w-[1024px]">

        {/* Header */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-4 max-w-[672px]">
            <h2 className="font-space font-bold text-[48px] leading-none tracking-[-2.4px] uppercase text-heading">
              CORE PRODUCTION CAPABILITIES
            </h2>
            <p className="font-manrope text-[16px] leading-[26px] text-body-text">
              Our atelier is equipped with state-of-the-art machinery capable of
              handling diverse materials from raw steel to architectural vinyl.
            </p>
          </div>
          <span className="font-inter text-[12px] tracking-[1.2px] uppercase text-muted whitespace-nowrap">
            [ SERVICES / 06 ]
          </span>
        </div>

        {/* 3×2 Bento Grid */}
        <div className="grid grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="relative h-[400px] overflow-hidden bg-card-bg group"
            >
              {/* Background image — desaturated */}
              <div className="absolute inset-0 opacity-50">
                <img
                  src={svc.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: 'saturate(0)' }}
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent" />

              {/* Card content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-2">
                <img src={svc.icon} alt="" className="h-5 w-auto object-contain object-left" />
                <h3 className="font-space font-bold text-[24px] leading-[32px] tracking-[-0.6px] uppercase text-heading mt-2">
                  {svc.title}
                </h3>
                <p className="font-manrope text-[14px] leading-[20px] text-body-text opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {svc.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
