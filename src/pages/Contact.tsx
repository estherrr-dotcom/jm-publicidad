import { type FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import NavBar from '../sections/NavBar'
import Footer from '../sections/Footer'
import { supabase } from '../lib/supabase'
import {
  IMG_CONTACT_WORKSHOP, IMG_CONTACT_MAP,
  ICON_SUBMIT_ARROW, ICON_LOCATION, ICON_CLOCK, ICON_CORNER_DECO,
} from '../assets/images'

// shared field label style
const labelClass = 'font-inter text-[10px] tracking-[1px] uppercase text-accent'
// bottom-border input (inside dark card panels)
const inputClass =
  'w-full bg-[#282b25] border-b border-nav-border/30 px-4 py-3 text-heading font-manrope text-[16px] leading-[24px] outline-none placeholder:text-muted focus:border-accent transition-colors'
// transparent input (inside the already-dark right panel)
const inputThinClass =
  'w-full bg-transparent border-b border-nav-border/30 px-0 py-3 text-heading font-manrope text-[16px] leading-[24px] outline-none placeholder:text-muted focus:border-accent transition-colors'

export default function Contact() {
  const { t } = useTranslation()
  const serviceOptions = t('contactPage.quote_service_options', { returnObjects: true }) as string[]
  const budgetOptions  = t('contactPage.quote_budget_options',  { returnObjects: true }) as string[]

  const [quote, setQuote] = useState({ service: '', budget: '', description: '', timeline: '' })
  const [inquiry, setInquiry] = useState({ name: '', email: '', message: '' })
  const [quoteStatus,   setQuoteStatus]   = useState<'idle'|'success'|'error'>('idle')
  const [inquiryStatus, setInquiryStatus] = useState<'idle'|'success'|'error'>('idle')
  const [quoteLoading,   setQuoteLoading]   = useState(false)
  const [inquiryLoading, setInquiryLoading] = useState(false)

  async function handleQuoteSubmit(e: FormEvent) {
    e.preventDefault()
    setQuoteLoading(true)
    const { error } = await supabase.from('enquiries').insert({
      type: 'quote',
      service_type: quote.service,
      budget: quote.budget,
      description: quote.description,
      timeline: quote.timeline,
    })
    setQuoteLoading(false)
    if (error) {
      setQuoteStatus('error')
    } else {
      setQuoteStatus('success')
      setQuote({ service: '', budget: '', description: '', timeline: '' })
    }
  }

  async function handleInquirySubmit(e: FormEvent) {
    e.preventDefault()
    setInquiryLoading(true)
    const { error } = await supabase.from('enquiries').insert({
      type: 'inquiry',
      name: inquiry.name,
      email: inquiry.email,
      message: inquiry.message,
    })
    setInquiryLoading(false)
    if (error) {
      setInquiryStatus('error')
    } else {
      setInquiryStatus('success')
      setInquiry({ name: '', email: '', message: '' })
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-primary-bg">
      <NavBar activeLink="contact" />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="pt-[68px] px-8 max-w-[1280px] mx-auto w-full">
        <div className="relative pt-24 pb-16 border-b border-nav-border/10 flex items-end justify-between">

          {/* Left — badge + headline + body */}
          <div className="flex flex-col gap-6 max-w-[672px]">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-accent" />
              <span className="font-inter text-[12px] tracking-[3.6px] uppercase text-accent">
                {t('contactPage.badge')}
              </span>
            </div>
            <h1 className="font-space font-black text-[96px] leading-none tracking-[-4.8px] uppercase">
              <span className="block text-heading">{t('contactPage.heading_1')}</span>
              <span className="block text-accent font-bold">{t('contactPage.heading_2')}</span>
            </h1>
            <p className="font-manrope text-[18px] leading-[29px] text-body-text max-w-[576px]">
              {t('contactPage.body')}
            </p>
          </div>

          {/* Right — studio status */}
          <div className="flex flex-col items-end gap-2 pb-4 shrink-0">
            <span className="font-inter text-[12px] tracking-[1.2px] uppercase text-muted text-right">
              {t('contactPage.status_label')}
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981] shrink-0" />
              <span className="font-space font-bold text-[18px] tracking-[-0.9px] uppercase text-mint">
                {t('contactPage.status_text')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dual-column form section ───────────────────────────── */}
      <section className="px-8 pt-16 pb-24 max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-12 gap-16">

          {/* ── Left column: Quote form (7 cols) ── */}
          <div className="col-span-7 flex flex-col gap-12">

            {/* Quote form panel */}
            <div className="relative bg-secondary-bg pt-10 pb-14 px-10 flex flex-col gap-2">
              {/* Corner decoration */}
              <img
                src={ICON_CORNER_DECO}
                alt=""
                className="absolute top-0 right-0 w-[84px] h-[84px]"
              />

              <h2 className="font-space font-bold text-[30px] leading-[36px] tracking-[-1.5px] uppercase text-heading">
                {t('contactPage.quote_title')}
              </h2>
              <div className="border-b border-divider pb-6 mb-0">
                <span className="font-inter text-[14px] tracking-[0.35px] uppercase text-muted">
                  {t('contactPage.quote_subtitle')}
                </span>
              </div>

              {quoteStatus === 'success' ? (
                <div className="pt-8">
                  <p className="font-manrope text-[16px] text-mint">{t('contactPage.quote_success')}</p>
                  <button
                    onClick={() => setQuoteStatus('idle')}
                    className="mt-6 font-inter text-[11px] tracking-[1.2px] uppercase text-muted hover:text-body-text transition-colors"
                  >
                    {t('contactPage.quote_submit')} →
                  </button>
                </div>
              ) : quoteStatus === 'error' ? (
                <div className="pt-8">
                  <p className="font-manrope text-[16px] text-[#f87171]">{t('contactPage.form_error')}</p>
                  <button
                    onClick={() => setQuoteStatus('idle')}
                    className="mt-6 font-inter text-[11px] tracking-[1.2px] uppercase text-muted hover:text-body-text transition-colors"
                  >
                    {t('contactPage.form_retry')} →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="flex flex-col gap-8 pt-8">

                  {/* Row: Service + Budget */}
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className={labelClass}>{t('contactPage.quote_service_label')}</label>
                      <div className="relative">
                        <select
                          value={quote.service}
                          onChange={(e) => setQuote({ ...quote, service: e.target.value })}
                          className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                          required
                        >
                          <option value="" disabled className="bg-[#282b25]">—</option>
                          {serviceOptions.map((o) => (
                            <option key={o} value={o} className="bg-[#282b25]">{o}</option>
                          ))}
                        </select>
                        {/* Chevron */}
                        <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" fill="none" viewBox="0 0 16 16">
                          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className={labelClass}>{t('contactPage.quote_budget_label')}</label>
                      <div className="relative">
                        <select
                          value={quote.budget}
                          onChange={(e) => setQuote({ ...quote, budget: e.target.value })}
                          className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                          required
                        >
                          <option value="" disabled className="bg-[#282b25]">—</option>
                          {budgetOptions.map((o) => (
                            <option key={o} value={o} className="bg-[#282b25]">{o}</option>
                          ))}
                        </select>
                        <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" fill="none" viewBox="0 0 16 16">
                          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Project description */}
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>{t('contactPage.quote_description_label')}</label>
                    <textarea
                      value={quote.description}
                      onChange={(e) => setQuote({ ...quote, description: e.target.value })}
                      placeholder={t('contactPage.quote_description_placeholder')}
                      rows={5}
                      className={`${inputClass} resize-none`}
                      required
                    />
                  </div>

                  {/* Expected timeline */}
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>{t('contactPage.quote_timeline_label')}</label>
                    <input
                      type="text"
                      value={quote.timeline}
                      onChange={(e) => setQuote({ ...quote, timeline: e.target.value })}
                      placeholder={t('contactPage.quote_timeline_placeholder')}
                      className={inputClass}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={quoteLoading}
                    className="flex items-center justify-between bg-accent text-btn-text font-space font-bold text-[18px] tracking-[-0.9px] uppercase px-8 py-5 hover:bg-heading hover:text-heading/80 transition-colors disabled:opacity-50"
                  >
                    <span>{quoteLoading ? '…' : t('contactPage.quote_submit')}</span>
                    <img src={ICON_SUBMIT_ARROW} alt="" className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Industrial visual */}
            <div className="relative h-[320px] overflow-hidden bg-card-bg flex items-end">
              <img
                src={IMG_CONTACT_WORKSHOP}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                style={{ filter: 'saturate(0)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-bg to-transparent" />
              <div className="relative z-10 px-8 pb-8 flex flex-col gap-1">
                <span className="font-inter text-[10px] tracking-[1px] uppercase text-muted">
                  {t('contactPage.asset_id')}
                </span>
                <span className="font-space font-bold text-[14px] tracking-[-0.7px] uppercase text-logo-white">
                  {t('contactPage.asset_label')}
                </span>
              </div>
            </div>
          </div>

          {/* ── Right column: Inquiry form + info (5 cols) ── */}
          <div className="col-span-5 flex flex-col gap-12">

            {/* Inquiry form panel */}
            <div className="bg-[#282b25] pt-10 pb-14 px-10 flex flex-col gap-2">
              <h2 className="font-space font-bold text-[24px] leading-[32px] tracking-[-1.2px] uppercase text-heading">
                {t('contactPage.inquiry_title')}
              </h2>
              <p className="font-inter text-[12px] tracking-[0.3px] uppercase text-muted mb-2">
                {t('contactPage.inquiry_subtitle')}
              </p>

              {inquiryStatus === 'success' ? (
                <div className="pt-6">
                  <p className="font-manrope text-[16px] text-mint">{t('contactPage.inquiry_success')}</p>
                  <button
                    onClick={() => setInquiryStatus('idle')}
                    className="mt-6 font-inter text-[11px] tracking-[1.2px] uppercase text-muted hover:text-body-text transition-colors"
                  >
                    {t('contactPage.inquiry_submit')} →
                  </button>
                </div>
              ) : inquiryStatus === 'error' ? (
                <div className="pt-6">
                  <p className="font-manrope text-[16px] text-[#f87171]">{t('contactPage.form_error')}</p>
                  <button
                    onClick={() => setInquiryStatus('idle')}
                    className="mt-6 font-inter text-[11px] tracking-[1.2px] uppercase text-muted hover:text-body-text transition-colors"
                  >
                    {t('contactPage.form_retry')} →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="flex flex-col gap-8 pt-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-inter text-[10px] tracking-[1px] uppercase text-body-text">
                      {t('contactPage.inquiry_name_label')}
                    </label>
                    <input
                      type="text"
                      value={inquiry.name}
                      onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                      className={inputThinClass}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-inter text-[10px] tracking-[1px] uppercase text-body-text">
                      {t('contactPage.inquiry_email_label')}
                    </label>
                    <input
                      type="email"
                      value={inquiry.email}
                      onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                      className={inputThinClass}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-inter text-[10px] tracking-[1px] uppercase text-body-text">
                      {t('contactPage.inquiry_message_label')}
                    </label>
                    <textarea
                      value={inquiry.message}
                      onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                      rows={4}
                      className={`${inputThinClass} resize-none`}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={inquiryLoading}
                    className="border border-nav-border/30 text-heading font-space font-bold text-[14px] tracking-[-0.7px] uppercase px-4 py-[17px] hover:border-body-text transition-colors disabled:opacity-50"
                  >
                    {inquiryLoading ? '…' : t('contactPage.inquiry_submit')}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-10 pt-4">

              {/* HQ Location */}
              <div className="flex gap-6 items-start">
                <img src={ICON_LOCATION} alt="" className="w-4 h-6 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-3">
                  <span className="font-space font-bold text-[14px] tracking-[1.4px] uppercase text-heading">
                    {t('contactPage.location_title')}
                  </span>
                  <div className="font-manrope text-[16px] leading-[26px] text-body-text">
                    <p>{t('contactPage.location_line_1')}</p>
                    <p>{t('contactPage.location_line_2')}</p>
                    <p>{t('contactPage.location_line_3')}</p>
                  </div>
                </div>
              </div>

              {/* Studio Hours */}
              <div className="flex gap-6 items-start">
                <img src={ICON_CLOCK} alt="" className="w-5 h-6 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-3">
                  <span className="font-space font-bold text-[14px] tracking-[1.4px] uppercase text-heading">
                    {t('contactPage.hours_title')}
                  </span>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between w-64">
                      <span className="font-inter text-[14px] uppercase text-muted">
                        {t('contactPage.hours_weekdays')}
                      </span>
                      <span className="font-space font-medium text-[14px] text-heading">
                        {t('contactPage.hours_weekdays_time')}
                      </span>
                    </div>
                    <div className="flex items-center justify-between w-64">
                      <span className="font-inter text-[14px] uppercase text-muted">
                        {t('contactPage.hours_weekend')}
                      </span>
                      <span className="font-space text-[14px] text-muted">
                        {t('contactPage.hours_weekend_time')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map thumbnail */}
              <div
                className="border border-nav-border/20 p-[5px] opacity-70"
                style={{ mixBlendMode: 'normal' }}
              >
                <div className="h-48 overflow-hidden relative bg-[#33362f]">
                  <img
                    src={IMG_CONTACT_MAP}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: 'saturate(0)' }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
