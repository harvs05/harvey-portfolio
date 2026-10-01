import { aiStack, type StackNode } from '@/data/ai-stack'

/**
 * Tools & capabilities grid for the Projects page.
 *
 * The project names, descriptions, status, stack, and logos
 * all come directly from src/data/ai-stack.ts.
 *
 * This component only handles presentation.
 */

type Group = {
  title: string
  what: string
  systems: StackNode[]
}

/**
 * Flatten the portfolio tree into groups.
 *
 * Each top-level child becomes a category.
 * A category with children displays those children as cards.
 */
function groups(root: StackNode): Group[] {
  return (root.children ?? []).map((branch) => ({
    title: branch.name,
    what: branch.what,
    systems: branch.status
      ? [branch, ...(branch.children ?? [])]
      : branch.children ?? [],
  }))
}

/**
 * Individual capability / tool card.
 */
function Card({ n }: { n: StackNode }) {
  const tools = n.logos ?? []

  return (
    <li className="aig__card">
      {/* Tool / platform logos */}
      <div
        className="aig__marks"
        aria-label={
          tools.length > 0
            ? `Tools used: ${tools.map((t) => t.name).join(', ')}`
            : undefined
        }
      >
        {tools.map((tool) => (
          <span
            key={tool.name}
            className="aig__mark"
            title={tool.name}
          >
            <img
              src={tool.src}
              alt={tool.name}
              width={22}
              height={22}
              loading="lazy"
              decoding="async"
            />
          </span>
        ))}

        {n.status && (
          <span
            className="aig__status"
            data-status={n.status}
          >
            {n.status}
          </span>
        )}
      </div>

      {/* Card title */}
      <h4 className="aig__name">
        <n.Icon
          size={16}
          weight="duotone"
          aria-hidden="true"
        />

        {n.name}
      </h4>

      {/* Plain-English description */}
      <p className="aig__what">
        {n.what}
      </p>

      {/* Technology / workflow */}
      {n.stack && (
        <p className="aig__stack">
          {n.stack}
        </p>
      )}

      {/* Tool names */}
      {tools.length > 0 && (
        <ul
          className="aig__tools"
          role="list"
        >
          {tools.map((tool) => (
            <li key={tool.name}>
              {tool.name}
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

/**
 * Main Tools & Capabilities grid.
 */
export default function AIStackGrid() {
  return (
    <div className="aig">

      {/* Header */}
      <header className="aig__head">

        <div className="aig__head-text">

          <span className="aig__eyebrow">
            TOOLS & CAPABILITIES
          </span>

          <h3 className="aig__title">
            {aiStack.what}
          </h3>

        </div>

        {/* Main tools used throughout the portfolio */}
        <div
          className="aig__harness"
          aria-label="Core tools"
        >

          <span className="aig__harness-label">
            Core tools
          </span>

          {[
            {
              name: 'WordPress',
              src: '/icons/wordpress.svg',
            },
            {
              name: 'Canva',
              src: '/icons/canva.svg',
            },
            {
              name: 'Photoshop',
              src: '/icons/adobe-photoshop.svg',
            },
            {
              name: 'CapCut',
              src: '/icons/capcut-icon.svg',
            },
            {
              name: 'Elementor',
              src: '/icons/elementor.svg',
            },
            {
              name: 'Squarespace',
              src: '/icons/squarespace.svg',
            },
          ].map((tool) => (
            <span
              key={tool.name}
              className="aig__harness-item"
              title={tool.name}
            >
              <img
                src={tool.src}
                alt=""
                width={20}
                height={20}
                loading="lazy"
                decoding="async"
              />

              {tool.name}
            </span>
          ))}

        </div>
      </header>

      {/* Capability groups */}
      {groups(aiStack).map((group) => (
        <section
          key={group.title}
          className="aig__group"
          aria-label={group.title}
        >

          <div className="aig__group-head">

            <h3 className="aig__group-title">
              {group.title}
            </h3>

            <p className="aig__group-what">
              {group.what}
            </p>

          </div>

          <ul
            className="aig__cards"
            role="list"
          >
            {group.systems.map((node) => (
              <Card
                key={node.id}
                n={node}
              />
            ))}
          </ul>

        </section>
      ))}
    </div>
  )
}