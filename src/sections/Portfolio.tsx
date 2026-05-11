import { IMG_AXIS_TOWER, IMG_LUMINA_FLEET, ICON_LINK } from '../assets/images'

interface ArtifactProps {
  image: string
  title: string
  category: string
  year: string
  imageHeight: string
}

function Artifact({ image, title, category, year, imageHeight }: ArtifactProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-primary-bg overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full object-cover ${imageHeight}`}
          style={{ filter: 'saturate(0)' }}
        />
      </div>
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <h4 className="font-space font-bold text-[24px] leading-[32px] tracking-[-0.6px] uppercase text-heading whitespace-nowrap">
            {title}
          </h4>
          <span className="font-inter text-[12px] tracking-[1.2px] uppercase text-muted whitespace-nowrap">
            {category} / {year}
          </span>
        </div>
        <img src={ICON_LINK} alt="View project" className="w-[15px] h-[15px] mt-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section className="bg-secondary-bg py-32 overflow-hidden">
      <div className="flex flex-col gap-24 px-6 mx-auto w-[1024px]">

        {/* Heading */}
        <div className="flex flex-col gap-8">
          <h2 className="font-space font-black text-[96px] leading-none tracking-[-4.8px] uppercase">
            <span className="block text-heading">SELECTED</span>
            <span className="block text-accent font-bold">ARTIFACTS</span>
          </h2>
          <p className="font-manrope text-[16px] leading-[26px] text-body-text max-w-[576px]">
            A visual inventory of calibrated results across corporate and artistic landscapes.
          </p>
        </div>

        {/* Asymmetric grid: 8/12 + 4/12 offset */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <Artifact
              image={IMG_AXIS_TOWER}
              title="AXIS TOWER SIGNAGE"
              category="INDUSTRIAL FABRICATION"
              year="2023"
              imageHeight="h-[362px]"
            />
          </div>
          <div className="col-span-4 pt-48">
            <Artifact
              image={IMG_LUMINA_FLEET}
              title="LUMINA FLEET WRAP"
              category="VEHICLE BRANDING"
              year="2024"
              imageHeight="h-[387px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
