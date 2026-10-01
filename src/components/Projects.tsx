import { Key, Browser, type Icon } from '@/components/slab'

import { mobileApps, type AppProject } from '@/data/projects'

import AIStack from '@/components/AIStack'

import Flagship from '@/components/Flagship'

/**
 * Browser / digital tools section.
 * These can be replaced later with actual screenshots
 * of your work.
 */
type Extension = {
  name: string
  desc: string
  imageSrc: string
  imageAlt: string
  Icon: Icon
}

const EXTENSIONS: Extension[] = [
  {
    name: 'WordPress Website Support',
    desc: 'Website updates, responsive layout improvements, forms, integrations, styling, and technical troubleshooting.',
    imageSrc: '/placeholders/extension-1.jpg',
    imageAlt: 'WordPress website support project',
    Icon: Browser,
  },
  {
    name: 'Canva Graphic Design',
    desc: 'Branded social media graphics, carousel designs, promotional visuals, and marketing assets created in Canva.',
    imageSrc: '/placeholders/extension-2.jpg',
    imageAlt: 'Canva graphic design project',
    Icon: Key,
  },
]

/* ── Extension card ───────────────────────────────────────────── */

function ExtensionCard({ ext }: { ext: Extension }) {
  const ExtIcon = ext.Icon

  return (
    <li className="ext-card">
      <figure className="ext-card__window">
        <div className="ext-card__chrome" aria-hidden="true">
          <span className="ext-card__dots">
            <span className="ext-card__dot" />
            <span className="ext-card__dot" />
            <span className="ext-card__dot" />
          </span>

          <span className="ext-card__urlbar">
            <ExtIcon size={12} weight="bold" />
            portfolio
          </span>
        </div>

        <div className="ext-card__stage">
          <img
            className="ext-card__img"
            src={ext.imageSrc}
            alt={ext.imageAlt}
            loading="lazy"
            decoding="async"
          />
        </div>
      </figure>

      <div className="ext-card__body">
        <span className="ext-card__badge">
          <ExtIcon size={14} weight="bold" aria-hidden="true" />
          Service
        </span>

        <h4 className="ext-card__name">
          {ext.name}
        </h4>

        <p className="ext-card__desc">
          {ext.desc}
        </p>
      </div>
    </li>
  )
}

/* ── Project card ───────────────────────────────────────────── */

function AppCard({ app }: { app: AppProject }) {
  return (
    <li
      className="app-card"
      style={{ ['--app-color' as string]: app.accentColor }}
    >
      <div className="app-card__img-wrap">
        {app.imageSrc ? (
          <img
            className="app-card__img"
            src={app.imageSrc}
            alt={`${app.name} screenshot`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            className="app-card__img-placeholder"
            aria-hidden="true"
          >
            <span className="app-card__img-initials">
              {app.name
                .split(' ')
                .map((w) => w[0])
                .join('')
                .slice(0, 2)}
            </span>
          </div>
        )}

        <span className="app-card__badge">
          {app.badge}
        </span>

        <span
          className="app-card__img-fade"
          aria-hidden="true"
        />
      </div>

      <div className="app-card__body">
        <h3 className="app-card__name">
          {app.name}
        </h3>

        <p className="app-card__tagline">
          {app.tagline}
        </p>

        <p className="app-card__desc">
          {app.description}
        </p>

        <ul
          className="app-card__stats"
          role="list"
        >
          {app.stats.map((stat) => (
            <li
              key={stat.label}
              className="app-card__stat"
            >
              <span className="app-card__stat-value">
                {stat.value}
              </span>

              <span className="app-card__stat-label">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

/* ── WordPress & Digital Support section ─────────────────────── */

export function AIStackSection() {
  return (
    <section
      className="projects projects--ai"
      id="projects"
      aria-labelledby="projects-heading"
      data-reveal
    >
      <header className="projects__header">
        <span className="projects__eyebrow">
          SELECTED WORK
        </span>

        <h2
          className="projects__headline"
          id="projects-heading"
        >
          Websites, designs, and digital support.
        </h2>

        <p className="projects__subhead">
          A selection of WordPress, Canva, branding, and
          digital support work completed for businesses and
          organizations.
        </p>
      </header>

      <div
        className="projects__panel"
        id="projects-panel"
      >
        <AIStack />
      </div>
    </section>
  )
}

/* ── Projects & Services section ─────────────────────────────── */

export function AppsSection() {
  return (
    <section
      className="projects projects--apps"
      aria-label="Selected projects and services"
      data-reveal
    >
      <div className="projects__panel">

        <span className="projects__ext-eyebrow">
          SELECTED PROJECTS
        </span>

        <ul
          className="projects__apps"
          role="list"
        >
          {mobileApps.map((app) => (
            <AppCard
              key={app.name}
              app={app}
            />
          ))}
        </ul>

        <div className="projects__ext">

          <span className="projects__ext-eyebrow">
            WHAT I DO
          </span>

          <ul
            className="ext-grid"
            role="list"
          >
            {EXTENSIONS.map((ext) => (
              <ExtensionCard
                key={ext.name}
                ext={ext}
              />
            ))}
          </ul>

        </div>
      </div>
    </section>
  )
}

export default function Projects() {
  return (
    <>
      <AIStackSection />

      <AppsSection />

      <Flagship />
    </>
  )
}