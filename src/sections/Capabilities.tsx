import { useTranslation } from 'react-i18next'
import {
  IMG_LARGE_FORMAT, IMG_SIGNAGE, IMG_VEHICLE,
  IMG_POP, IMG_VOLUMETRIC, IMG_CNC,
  ICON_LARGE_FORMAT, ICON_SIGNAGE, ICON_VEHICLE_ICON,
  ICON_POP, ICON_VOLUMETRIC, ICON_CNC,
} from '../assets/images'

interface ServiceCopy {
  title: string
  description: string
}

const SERVICE_ASSETS = [
  { image: IMG_LARGE_FORMAT, icon: ICON_LARGE_FORMAT },
  { image: IMG_SIGNAGE,      icon: ICON_SIGNAGE      },
  { image: IMG_VEHICLE,      icon: ICON_VEHICLE_ICON },
  { image: IMG_POP,          icon: ICON_POP          },
  { image: IMG_VOLUMETRIC,   icon: ICON_VOLUMETRIC   },
  { image: IMG_CNC,          icon: ICON_CNC          },
]

export default function Capabilities() {
  const { t } = useTranslation()
  const services = t('capabilities.services', { returnObjects: true }) as ServiceCopy[]

  return (
    <section className="bg-primary-bg py-32">
      <div className="flex flex-col gap-16 px-6 mx-auto w-[1024px]">

        {/* Header */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-4 max-w-[672px]">
            <h2 className="font-space font-bold text-[48px] leading-none tracking-[-2.4px] uppercase text-heading">
              {t('capabilities.heading')}
            </h2>
            <p className="font-manrope text-[16px] leading-[26px] text-body-text">
              {t('capabilities.body')}
            </p>
          </div>
          <span className="font-inter text-[12px] tracking-[1.2px] uppercase text-muted whitespace-nowrap">
            {t('capabilities.section_label')}
          </span>
        </div>

        {/* 3×2 Bento Grid */}
        <div className="grid grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="relative h-[400px] overflow-hidden bg-card-bg group"
            >
              {/* Background image — desaturated */}
              <div className="absolute inset-0 opacity-50">
                <img
                  src={SERVICE_ASSETS[i].image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: 'saturate(0)' }}
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent" />

              {/* Card content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-2">
                <img src={SERVICE_ASSETS[i].icon} alt="" className="h-5 w-auto object-contain object-left" />
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
