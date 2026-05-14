import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import NavBar from '../sections/NavBar'
import Footer from '../sections/Footer'
import {
  IMG_TECH_CORE, IMG_FLEET_KINETICS, IMG_NOMAD_GEAR, IMG_VOID_RETAIL,
  ICON_ARROW_LG, ICON_ARROW_SM, ICON_ARROW_CTA,
} from '../assets/images'

interface ProjectItem {
  id: string
  title: string
  category: string
  materials: string[]
}

// filter index for each project (0=ALL,1=SIGNAGE,2=VEHICLES,3=MERCHANDISE) — locale-independent
const PROJECT_FILTER_INDEX = [1, 2, 3, 1]

export default function Projects() {
  const { t } = useTranslation()
  const projects = t('projectsPage.projects', { returnObjects: true }) as ProjectItem[]
  const filters = t('projectsPage.filters', { returnObjects: true }) as string[]
  const [activeFilter, setActiveFilter] = useState(0)

  return (
    <div className="flex flex-col min-h-screen bg-primary-bg">
      <NavBar activeLink="projects" />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="pt-[68px] px-8 pb-0 max-w-[1280px] mx-auto w-full">
        <div className="relative pt-20 pb-14">
          {/* Log label — top right */}
          <span className="absolute top-20 right-0 font-inter text-[10px] tracking-[2px] uppercase text-muted">
            {t('projectsPage.log_label')}
          </span>

          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="font-inter font-bold text-[10px] tracking-[4px] uppercase text-accent">
              {t('projectsPage.badge')}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-space font-black text-[96px] leading-none tracking-[-4.8px] uppercase mb-8">
            <span className="block text-heading">{t('projectsPage.heading_1')}</span>
            <span className="block text-accent font-bold">{t('projectsPage.heading_2')}</span>
          </h1>

          {/* Body with left accent border */}
          <p className="border-l-2 border-accent pl-6 font-manrope text-[16px] leading-[26px] text-body-text max-w-[480px]">
            {t('projectsPage.body')}
          </p>
        </div>
      </section>

      {/* ── Filter bar ─────────────────────────────────────── */}
      <div className="px-8 max-w-[1280px] mx-auto w-full border-b border-nav-border">
        <div className="flex items-center gap-8">
          {filters.map((label, i) => (
            <button
              key={label}
              onClick={() => setActiveFilter(i)}
              className={`font-inter font-bold text-[11px] tracking-[2px] uppercase pb-4 transition-colors ${
                i === activeFilter
                  ? 'border-b-2 border-accent text-accent'
                  : 'text-nav-inactive hover:text-body-text'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Project grid ───────────────────────────────────── */}
      <section className="px-8 pt-16 pb-24 max-w-[1280px] mx-auto w-full">
        <>
            {/* Row 1 — asymmetric: 8 + 4 cols */}
            <div className="grid grid-cols-12 gap-6 mb-6">
              {/* Left card — col 1–8 */}
              {projects[0] && (
                <ProjectCard
                  project={projects[0]}
                  img={IMG_TECH_CORE}
                  colClass="col-span-8"
                  height={600}
                  arrowIcon={ICON_ARROW_LG}
                  visible={activeFilter === 0 || activeFilter === PROJECT_FILTER_INDEX[0]}
                />
              )}
              {/* Right card — col 9–12, offset down */}
              {projects[1] && (
                <ProjectCard
                  project={projects[1]}
                  img={IMG_FLEET_KINETICS}
                  colClass="col-span-4 pt-48"
                  height={600}
                  arrowIcon={ICON_ARROW_SM}
                  visible={activeFilter === 0 || activeFilter === PROJECT_FILTER_INDEX[1]}
                />
              )}
            </div>

            {/* Row 2 — asymmetric: 5 + 7 cols */}
            <div className="grid grid-cols-12 gap-6">
              {/* Left card — col 1–5 */}
              {projects[2] && (
                <ProjectCard
                  project={projects[2]}
                  img={IMG_NOMAD_GEAR}
                  colClass="col-span-5"
                  height={450}
                  arrowIcon={ICON_ARROW_SM}
                  visible={activeFilter === 0 || activeFilter === PROJECT_FILTER_INDEX[2]}
                />
              )}
              {/* Right card — col 6–12 */}
              {projects[3] && (
                <ProjectCard
                  project={projects[3]}
                  img={IMG_VOID_RETAIL}
                  colClass="col-span-7"
                  height={450}
                  arrowIcon={ICON_ARROW_LG}
                  visible={activeFilter === 0 || activeFilter === PROJECT_FILTER_INDEX[3]}
                />
              )}
            </div>
          </>
      </section>

      {/* ── Bottom CTA ─────────────────────────────────────── */}
      <section className="bg-secondary-bg px-8 py-24">
        <div className="max-w-[1280px] mx-auto w-full flex flex-col items-start gap-8">
          <h2 className="font-space font-black text-[64px] leading-none tracking-[-3.2px] uppercase">
            <span className="block text-heading">{t('projectsPage.cta_heading_1')}</span>
            <span className="block text-accent font-bold">{t('projectsPage.cta_heading_2')}</span>
          </h2>

          <p className="font-manrope text-[16px] leading-[26px] text-body-text max-w-[480px]">
            {t('projectsPage.cta_body')}
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-accent text-btn-text font-space font-bold text-[14px] tracking-[1.4px] uppercase px-10 py-5 hover:bg-heading transition-colors"
          >
            {t('projectsPage.cta_primary')}
            <img src={ICON_ARROW_CTA} alt="" className="w-3 h-3" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

interface ProjectCardProps {
  project: ProjectItem
  img: string
  colClass: string
  height: number
  arrowIcon: string
  visible: boolean
}

function ProjectCard({ project, img, colClass, height, arrowIcon, visible }: ProjectCardProps) {
  if (!visible) return <div className={colClass} />

  return (
    <article className={`${colClass} flex flex-col group cursor-pointer`}>
      {/* Image container */}
      <div
        className="relative overflow-hidden bg-card-bg mb-5"
        style={{ height: `${height}px` }}
      >
        <img
          src={img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-[1.03]"
          style={{ filter: 'saturate(0)' }}
        />
        {/* ID badge — top left */}
        <div className="absolute top-4 left-4 backdrop-blur-[4px] bg-primary-bg/80 px-3 py-1">
          <span className="font-inter font-bold text-[10px] tracking-[1.5px] uppercase text-accent">
            {project.id}
          </span>
        </div>
        {/* Arrow — top right, visible on hover */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <img src={arrowIcon} alt="" className="w-4 h-4" />
        </div>
      </div>

      {/* Card footer */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-3">
          <h3 className="font-space font-bold text-[20px] leading-[26px] tracking-[-1px] uppercase text-heading">
            {project.title}
          </h3>
          {/* Material pills */}
          <div className="flex flex-wrap gap-2">
            {project.materials.map((m) => (
              <span
                key={m}
                className="font-inter text-[10px] tracking-[0.8px] uppercase px-3 py-1"
                style={{ background: '#282b25', color: '#c5c8bd' }}
              >
                {m}
              </span>
            ))}
          </div>
        </div>
        <img src={arrowIcon} alt="" className="w-5 h-5 mt-1 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity duration-200" />
      </div>
    </article>
  )
}
