import { useState } from 'react'
import { mobileApps, webApps } from '@/data/projects'

const PROJECTS = [...mobileApps, ...webApps]

export default function TestimonialsGrid() {
  const [active, setActive] = useState(0)
  const project = PROJECTS[active]

  return (
    <section className="pgrid tgrid" aria-labelledby="testimonials-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Client Work</span>
        <h1 className="pgrid__title" id="testimonials-title">A client recommendation.</h1>
        <p className="pgrid__lede">Feedback from Leila Hannon, Founder of Sun Up Growth in Motion.</p>
      </header>

      <div className="home__glass tgrid__glass">
        <div className="tgrid__reel">
          <div className="tgrid__stage">
            <div className="tgrid__cover" role="img" aria-label={project.name}>
              <img className="tgrid__cover-img" src={project.imageSrc} alt={`${project.name} website preview`} decoding="async" />
              <span className="tgrid__cover-shade" aria-hidden="true" />
              <span className="tgrid__cover-meta">
                <span className="tgrid__cover-kicker">Website project · {String(active + 1).padStart(2, '0')}</span>
                <span className="tgrid__cover-sub">{project.tagline}</span>
              </span>
            </div>
          </div>

          <div className="tgrid__picker" role="group" aria-label="Choose a project preview">
            {PROJECTS.map((item, i) => <button key={item.name} type="button" className={`tgrid__pick${i === active ? ' is-active' : ''}`} onClick={() => setActive(i)} aria-pressed={i === active}>
              <span className="tgrid__pick-thumb" aria-hidden="true"><img src={item.imageSrc} alt="" loading="lazy" decoding="async" /></span>
              <span className="tgrid__pick-copy"><span className="tgrid__pick-kicker">{item.name}</span><span className="tgrid__pick-meta">{item.badge}</span></span>
            </button>)}
          </div>
        </div>

        <article className="tgrid__ledger" aria-label="Client testimonial">
          <div className="tgrid__ledger-head">
            <h2 className="tgrid__ledger-title">Client testimonial</h2>
            <p className="tgrid__ledger-sub">A recommendation from a client I’ve supported for the past year.</p>
          </div>
          <figure className="tgrid__quote">
            <span className="tgrid__quote-mark" aria-hidden="true">“</span>
            <blockquote>
              I’ve had the pleasure of working with Harvey for the past year, and he has become a valuable and trusted member of my team. He has supported us across a variety of projects, including website updates, SEO and keyword research, graphic design, video editing, and other digital marketing work. One of Harvey’s biggest strengths is his versatility. He is always willing to learn, takes feedback well, and approaches revisions with a positive attitude. He communicates professionally, is dependable, and has continued to grow throughout our time working together. I’ve been able to trust Harvey with an increasing variety of both internal and client projects. He is hardworking, kind, professional, and a pleasure to work with. I’m grateful to have him on my team and would happily recommend him to anyone looking for reliable digital marketing support.
            </blockquote>
            <figcaption><strong>Leila Hannon</strong><span>Founder, SUGM</span></figcaption>
          </figure>
        </article>
      </div>
    </section>
  )
}
