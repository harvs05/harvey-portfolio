import type { CSSProperties } from 'react'
import { Article, ChatCircleDots, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'

type Stage = { index: string; label: string; body: string; Icon: Icon; chips: string[] }
type Service = { index: string; title: string; description: string; chip: string; logos: string[]; bullets: string[] }

const STAGES: Stage[] = [
  { index: '01', label: 'Discuss', body: 'Share your goals, current setup, and the support you need.', Icon: ChatCircleDots, chips: ['Goals', 'Website', 'Content'] },
  { index: '02', label: 'Plan', body: 'Agree on the scope, priorities, and deliverables before work begins.', Icon: Article, chips: ['Scope', 'Priorities', 'Deliverables'] },
  { index: '03', label: 'Work together', body: 'Complete the agreed tasks and review the finished work.', Icon: CheckCircle, chips: ['Updates', 'Review', 'Handoff'] },
]

const SERVICES: Service[] = [
  {
    index: '01', title: 'WordPress Website Support',
    description: 'Website page updates, layout improvements, and responsive design support.',
    chip: 'WordPress', logos: ['/icons/wordpress.svg', '/icons/elementor-icon.svg'],
    bullets: ['Page and content updates', 'Responsive layout improvements', 'Elementor support'],
  },
  {
    index: '02', title: 'Website Design & Revamps',
    description: 'Clearer page structures and refreshed website layouts for your business.',
    chip: 'Website Design', logos: ['/icons/wordpress.svg', '/icons/elementor-icon.svg'],
    bullets: ['Homepage and service pages', 'Calls to action and navigation', 'Desktop and mobile layouts'],
  },
  {
    index: '03', title: 'Canva Graphic Design',
    description: 'Branded visuals and marketing graphics prepared in Canva.',
    chip: 'Canva', logos: ['/icons/canva.svg', '/icons/adobe-photoshop.svg'],
    bullets: ['Social media graphics', 'Carousel and promotional visuals', 'Brand-consistent designs'],
  },
  {
    index: '04', title: 'Content & Digital Support',
    description: 'Practical content, website, and marketing support for day-to-day digital work.',
    chip: 'Digital Support', logos: ['/icons/canva.svg', '/icons/googleworkspace.svg'],
    bullets: ['Content updates and organization', 'Marketing integrations', 'Website performance reporting'],
  },
]

function Marks({ logos }: { logos: string[] }) {
  return <span className="bento__logos" aria-hidden="true">{logos.map((src) => <span key={src} className="bento__logo"><img src={src} alt="" width={22} height={22} decoding="async" /></span>)}</span>
}

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">Website, design, and digital support.</h1>
        <p className="pgrid__lede">WordPress website support and Canva design for businesses that need help keeping their digital work moving.</p>
      </header>

      <div className="home__glass sgrid__glass">
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">Working together</span>
            <h2 className="sgrid__method-title" id="method-title">A clear start.<br /><span>Work with a shared plan.</span></h2>
            <p className="sgrid__method-sub">We begin with your priorities, agree on the tasks, then review the work together.</p>
          </div>
          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                <span className="sgrid__stage-icon" aria-hidden="true"><StageIcon size={22} weight="duotone" /></span>
                <h3 className="sgrid__stage-label">{s.label}.</h3>
                <p className="sgrid__stage-body">{s.body}</p>
                <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} topics`}>{s.chips.map((c) => <li key={c} className="sgrid__stage-chip">{c}</li>)}</ul>
              </li>
            })}
          </ol>
        </div>

        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">Ways I can help.</h2>
            <p className="sgrid__offers-sub">Support can be scoped around the work you need done.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => <li key={s.title} className="bento__card sgrid__service">
              <span className="bento__head">
                <span className="sgrid__service-top"><Marks logos={s.logos} /><span className="sgrid__service-index" aria-hidden="true">{s.index} / {String(SERVICES.length).padStart(2, '0')}</span></span>
                <span className="bento__title">{s.title}</span>
                <span className="bento__desc">{s.description}</span>
              </span>
              <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
              <ul className="sgrid__bullets" role="list">{s.bullets.map((b) => <li key={b} className="sgrid__bullet"><CheckCircle size={15} weight="duotone" aria-hidden="true" /><span>{b}</span></li>)}</ul>
            </li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
