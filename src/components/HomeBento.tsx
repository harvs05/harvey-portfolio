import type React from 'react'

import { Link } from 'react-router-dom'

import {
  ArrowUpRight,
  FolderOpen,
  User,
  Wrench,
  Stack,
  SealCheck,
  MapPin,
} from '@/components/slab'

import { mobileApps, webApps } from '@/data/projects'
import { aiStack, type StackNode } from '@/data/ai-stack'

/**
 * Home's showcase.
 *
 * Each card links to a detailed section of the portfolio.
 * Content reflects Harvey's profile, services, tools, and selected client work.
 */

/* =========================================================
   PROJECT THUMBNAILS
   ========================================================= */

const PROJECT_ORDER = [mobileApps[0], webApps[0], mobileApps[2], mobileApps[1]]
const PROJECT_SHOTS = PROJECT_ORDER
  .filter((project) => project.imageSrc)
  .slice(0, 4)

/* =========================================================
   SERVICES
   ========================================================= */

const WORKFLOW_STEPS = [
  { title: 'Brief', note: 'Goals & priorities' },
  { title: 'Plan', note: 'Tasks & timing' },
  { title: 'Support', note: 'Web, SEO, design & content' },
  { title: 'Review', note: 'Refine & deliver' },
] as const

/* =========================================================
   CLIENT PROJECTS
   =========================================================

   Project labels shown on the Home preview; no testimonial quotes are used.
*/
const CLIENTS = PROJECT_ORDER.map((project) => ({
  name: project.name,
  role: project.badge,
  work: project.tagline,
}))

/* =========================================================
   ABOUT PHOTOS
   ========================================================= */

const PHOTOS = PROJECT_ORDER.map((project) => project.imageSrc).filter((src): src is string => Boolean(src)).slice(0, 3)

/* =========================================================
   TOOLS & CAPABILITIES
   ========================================================= */

/**
 * Flatten the capability tree into individual capabilities
 * for the scrolling chips on the Home page.
 */
const leaves = (node: StackNode): StackNode[] =>
  node.children?.length
    ? node.children.flatMap(leaves)
    : [node]

const TOOL_CAPABILITIES = leaves(aiStack)

/* =========================================================
   CARD HEADER
   ========================================================= */

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon
            size={20}
            weight="fill"
            aria-hidden="true"
          />
        </span>

        <h3 className="bento__title">
          {title}
        </h3>
      </span>

      <p className="bento__desc">
        {desc}
      </p>

      <ArrowUpRight
        size={15}
        weight="bold"
        aria-hidden="true"
        className="bento__arrow"
      />
    </header>
  )
}

/* =========================================================
   HOME BENTO
   ========================================================= */

export default function HomeBento() {
  const half = Math.ceil(
    TOOL_CAPABILITIES.length / 2,
  )

  const toolRows = [
    TOOL_CAPABILITIES.slice(0, half),
    TOOL_CAPABILITIES.slice(half),
  ]

  return (
    <nav
      className="bento"
      aria-label="Explore Harvey Varela's portfolio"
    >

      {/* =====================================================
          PROJECTS
          ===================================================== */}

      <Link
        to="/projects"
        className="bento__card bento__card--projects"
      >
        <CardHead
          Icon={FolderOpen}
          title="Projects"
          desc="Selected website, design, and digital support work."
        />

        <div
          className="bento__media bento__reel"
          aria-hidden="true"
        >
          <div className="bento__reel-track">
            {[
              ...PROJECT_SHOTS,
              ...PROJECT_SHOTS,
            ].map((project, index) => (
              <span
                key={`${project.name}-${index}`}
                className="bento__shot"
              >
                <img
                  src={project.imageSrc}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* =====================================================
          ABOUT
          ===================================================== */}

      <Link
        to="/about"
        className="bento__card bento__card--about"
      >
        <CardHead
          Icon={User}
          title="About"
          desc="A WordPress, design, and digital support VA based in Cebu, Philippines."
        />

        <div
          className="bento__media bento__fan"
          aria-hidden="true"
        >
          {PHOTOS.map((src, index) => (
            <span
              key={`${src}-${index}`}
              className="bento__photo"
              style={{
                ['--i' as string]: index,
              }}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </span>
          ))}
        </div>
      </Link>

      {/* =====================================================
          TOOLS & CAPABILITIES
          ===================================================== */}

      <Link
        to="/projects"
        className="bento__card bento__card--ai"
      >
        <CardHead
          Icon={Wrench}
          title="Tools & Capabilities"
          desc="The platforms and skills I use to support websites, design, and digital content."
        />

        <div
          className="bento__media bento__chips"
          aria-hidden="true"
        >
          {toolRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="bento__chip-row"
              data-dir={
                rowIndex === 0
                  ? 'left'
                  : 'right'
              }
            >
              <div className="bento__chip-track">
                {[
                  ...row,
                  ...row,
                ].map((node, index) => (
                  <span
                    key={`${node.id}-${index}`}
                    className="bento__chip"
                    data-status={node.status}
                  >
                    <node.Icon
                      size={15}
                      weight="duotone"
                    />

                    {node.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Link>

      {/* =====================================================
          CREDENTIALS
          ===================================================== */}

      <Link
        to="/about"
        className="bento__card bento__card--creds"
      >
        <CardHead
          Icon={MapPin}
          title="Location"
          desc="Based in Cebu, Philippines · Philippine Time (UTC+8)."
        />

        <div
          className="bento__media bento__badge"
          aria-hidden="true"
        >
          <span className="bento__badge-ring">
            <MapPin size={36} weight="fill" aria-hidden="true" />
          </span>

          <span className="bento__badge-tag">
            <SealCheck
              size={14}
              weight="fill"
            />

            Cebu · UTC+8
          </span>
        </div>
      </Link>

      {/* =====================================================
          SERVICES
          ===================================================== */}

      <Link
        to="/services"
        className="bento__card bento__card--services"
      >
        <CardHead
          Icon={Stack}
          title="How I Work"
          desc="A clear process for website and digital support."
        />

        <ol className="bento__media bento__process" aria-label="My client-support process">
          {WORKFLOW_STEPS.map(({ title, note }, index) => (
            <li key={title} className="bento__process-step" style={{ '--i': index } as React.CSSProperties}>
              <span className="bento__process-node" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <span className="bento__process-copy">
                <strong>{title}</strong>
                <span>{note}</span>
              </span>
            </li>
          ))}
        </ol>
      </Link>

      {/* =====================================================
          TESTIMONIALS
          ===================================================== */}

      <Link
        to="/testimonials"
        className="bento__card bento__card--quotes"
      >
        <CardHead
          Icon={FolderOpen}
          title="Client Work"
          desc="Selected website and digital support projects."
        />

        <div
          className="bento__media bento__reviews"
          aria-hidden="true"
        >
          <div className="bento__reviews-track">
            {[
              ...CLIENTS,
              ...CLIENTS,
            ].map((client, index) => (
              <span
                key={`${client.name}-${index}`}
                className="bento__review"
              >
                <span className="bento__review-top">
                    <FolderOpen size={14} weight="fill" />

                  <b>
                    {client.name}
                  </b>
                </span>

                <span className="bento__review-role">
                  {client.role}
                </span>

                <span className="bento__review-work">
                  {client.work}
                </span>
              </span>
            ))}
          </div>
        </div>
      </Link>

    </nav>
  )
}
