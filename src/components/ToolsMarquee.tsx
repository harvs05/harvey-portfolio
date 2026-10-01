import { useMemo } from 'react'

/**
 * ToolsMarquee
 *
 * Horizontally scrolling strip of the tools and platforms
 * Harvey uses for website development, graphic design,
 * content creation, and digital support.
 *
 * The visual track is duplicated so the CSS animation can
 * create a seamless loop.
 */

type Tool = {
  name: string
  iconPath: string

  /**
   * When provided, the SVG is rendered as a CSS mask
   * and tinted with the specified brand color.
   *
   * Omit this for multi-color brand marks.
   */
  color?: string
}

/**
 * Tools Harvey actually uses in his portfolio work.
 *
 * Icons are stored in:
 * public/icons/
 */
export const tools: Tool[] = [
  {
    name: 'WordPress',
    iconPath: '/icons/wordpress.svg',
  },

  {
    name: 'Canva',
    iconPath: '/icons/canva.svg',
  },

  {
    name: 'Adobe Photoshop',
    iconPath: '/icons/adobe-photoshop.svg',
  },

  {
    name: 'CapCut',
    iconPath: '/icons/capcut-icon.svg',
  },

  {
    name: 'Elementor',
    iconPath: '/icons/elementor-icon.svg',
  },

  {
    name: 'Squarespace',
    iconPath: '/icons/squarespace-icon.svg',
  },

  {
    name: 'Google Workspace',
    iconPath: '/icons/googleworkspace.svg',
  },

   {
    name: 'Codex',
    iconPath: '/icons/codex.svg',
  },

   {
    name: 'ChatGPT',
    iconPath: '/icons/openai.svg',
  },

]

export default function ToolsMarquee() {
  /**
   * Duplicate the list so the -50% CSS translation
   * lands exactly on the beginning of the second copy.
   */
  const doubled = useMemo(
    () => [...tools, ...tools],
    [],
  )

  return (
    <section
      className="tools-marquee"
      aria-label="Tools I work with"
      data-reveal
    >

      {/* =====================================================
          ANIMATED TOOL STRIP
          ===================================================== */}

      <div
        className="tools-marquee__track"
        aria-hidden="true"
      >
        {doubled.map((tool, index) => {
          /**
           * SVG brand marks with a color use CSS masks.
           *
           * Google Workspace is kept as a normal image because
           * its logo contains multiple colors.
           */
          const useMask =
            tool.iconPath.endsWith('.svg') &&
            !!tool.color

          return (
            <div
              key={`${tool.name}-${index}`}
              className="tools-marquee__item"
            >

              <span className="tools-marquee__tile">

                {useMask ? (
                  <span
                    className="tools-marquee__icon"
                    style={
                      {
                        ['--icon-url' as string]:
                          `url('${tool.iconPath}')`,

                        ['--brand-color' as string]:
                          tool.color ??
                          'var(--navy)',
                      }
                    }
                  />
                ) : (
                  <img
                    className="tools-marquee__img"
                    src={tool.iconPath}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    width={20}
                    height={20}
                  />
                )}

              </span>

              <span className="tools-marquee__label">
                {tool.name}
              </span>

            </div>
          )
        })}
      </div>

      {/* =====================================================
          ACCESSIBLE TOOL LIST
          ===================================================== */}

      <ul className="sr-only">
        {tools.map((tool) => (
          <li key={tool.name}>
            {tool.name}
          </li>
        ))}
      </ul>

    </section>
  )
}
