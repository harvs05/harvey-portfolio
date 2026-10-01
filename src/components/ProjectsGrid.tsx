import { useCallback, useEffect, useRef, useState, type ComponentType } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, CursorClick, X } from '@/components/slab'
import { FlowIcon, PlanIcon, GlobeIcon, SparkIcon, DeviceIcon } from './ProjectIcons'
import { AutomationsPanel } from './ProjectPanels'
import FunnelBarrel from './FunnelBarrel'
import { useFunnelModal } from './FunnelModal'
import { bookingFunnel, gymFunnel, websiteFunnel, type Funnel } from '@/data/funnels'
import { aiStack, type StackNode } from '@/data/ai-stack'
import { mobileApps, webApps } from '@/data/projects'

type DesignAsset = { src: string; label: string; group: string }
type Project = { id: string; title: string; desc: string; Icon: ComponentType<{ size?: number }>; logos?: string[]; kicker?: string; Preview: ComponentType; detail: string; gallery?: DesignAsset[]; span?: 2 }
const shots = [mobileApps[0]?.imageSrc, webApps[0]?.imageSrc, mobileApps[2]?.imageSrc, mobileApps[1]?.imageSrc].filter((src): src is string => Boolean(src))
const tools: string[] = []
const collectTools = (node: StackNode) => { if (node.stack) tools.push(...node.stack.split('•').map((item) => item.trim())); node.children?.forEach(collectTools) }
collectTools(aiStack)
for (const project of [...mobileApps, ...webApps]) tools.push(...project.stats.map(({ value }) => value))
const uniqueTools = [...new Set(tools)].filter((name) => name && name !== 'Harvey Varela')
const toolIcons: Record<string, string> = {
  WordPress: '/icons/wordpress.svg', Elementor: '/icons/elementor-icon.svg', Canva: '/icons/canva.svg',
  'Photoshop': '/icons/adobe-photoshop.svg', 'Adobe Photoshop': '/icons/adobe-photoshop.svg',
  CapCut: '/icons/capcut-icon.svg', Squarespace: '/icons/squarespace-icon.svg',
}
const GRAPHIC_DESIGNS: DesignAsset[] = [
  { src: '/graphics/social-design-mockup.png', label: 'Social media design mockup', group: 'Social media designs' },
  { src: '/graphics/instagram-carousel-preview.png', label: 'Zesty Mediterranean Instagram carousel', group: 'Social media designs' },
  { src: '/graphics/sugm-brand-guide-01.png', label: 'Sun Up Growth in Motion brand guide 1', group: 'Client brand guidelines' },
  { src: '/graphics/sugm-brand-guide-02.png', label: 'Sun Up Growth in Motion brand guide 2', group: 'Client brand guidelines' },
  { src: '/graphics/mbtd-brand-colors-fonts.jpg', label: 'MyBusinessToDo brand colors and fonts', group: 'Client brand guidelines' },
  { src: '/graphics/pacifica-mental-health-brand-colors-fonts.png', label: 'Pacifica Mental Health brand colors and fonts', group: 'Client brand guidelines' },
  { src: '/graphics/sundown-whisks-up-brand-guide.png', label: 'Sundown, Whisks Up brand guide', group: 'Client brand guidelines' },
  { src: '/graphics/stepping-stone-brand-colors-fonts.png', label: 'Stepping Stone brand colors and fonts', group: 'Client brand guidelines' },
  { src: '/graphics/golden-wrench-brand-colors-fonts.png', label: 'The Golden Wrench brand colors and fonts', group: 'Client brand guidelines' },
  ...[
    ['infographic-01.jpg', 'Infographic 1'], ['infographic-02.jpg', 'Infographic 2'],
    ['infographic-03.jpg', 'Infographic 3'], ['seo-dispatch-infographic.jpg', 'SEO Dispatch infographic'],
  ].map(([file, label]) => ({ src: `/graphics/${file}`, label, group: 'Infographics' })),
  ...[
    'microblog-carousel-01.jpg', 'microblog-carousel-02.jpg', 'microblog-carousel-03.jpg',
    'microblog-carousel-04.jpg', 'microblog-carousel-05.jpg', 'microblog-carousel-06.jpg',
  ].map((file, index) => ({ src: `/graphics/${file}`, label: `Microblog carousel slide ${index + 1}`, group: 'Microblog carousel' })),
  { src: '/graphics/chocopie-poster.jpg', label: 'Chocopie ice cream poster', group: 'Product and promotional designs' },
  { src: '/graphics/crunch-cookies-web-design.png', label: 'CrunchCookies web design', group: 'Product and promotional designs' },
  { src: '/graphics/banana-meat-poster.png', label: 'Banana meat poster', group: 'Product and promotional designs' },
  { src: '/graphics/iced-coffee-poster.jpg', label: 'Iced coffee poster', group: 'Product and promotional designs' },
  { src: '/graphics/pizza-poster.jpg', label: 'Pizza poster', group: 'Product and promotional designs' },
  { src: '/graphics/salad-poster.png', label: 'Salad poster', group: 'Product and promotional designs' },
  { src: '/graphics/wireless-speaker-poster.png', label: 'Wireless speaker poster', group: 'Product and promotional designs' },
  { src: '/graphics/msi-website-redesign.png', label: 'MSI website redesign concept', group: 'Product and promotional designs' },
  ...Array.from({ length: 8 }, (_, index) => ({
    src: `/graphics/youtube-thumbnail-draft-${String(index + 1).padStart(2, '0')}.jpg`,
    label: `YouTube thumbnail design ${index + 1}`,
    group: 'YouTube thumbnail designs',
  })),
]
const CONTENT_MARKETING_ASSETS: DesignAsset[] = [
  ...Array.from({ length: 4 }, (_, index) => ({
    src: `/graphics/igfb-carousel-week-${String(index + 1).padStart(2, '0')}.jpg`,
    label: `IG/FB carousel post — Week ${index + 1}`,
    group: 'IG/FB carousel posts',
  })),
]

const WEBSITE_IMAGES: Funnel[] = [...mobileApps, ...webApps].flatMap((project) => project.imageSrc ? [{
  file: `${project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.image`,
  label: project.name,
  tag: 'Website' as const,
  desc: project.tagline,
  imageSrc: project.imageSrc,
  url: project.url,
}] : [])
const DESIGN_IMAGES: Funnel[] = [...GRAPHIC_DESIGNS, ...CONTENT_MARKETING_ASSETS].map((asset, index) => ({
  file: `portfolio-design-${index + 1}.image`,
  label: asset.label,
  tag: asset.group === 'Infographics' ? 'Infographic' : asset.group === 'Social media designs' || asset.group === 'Microblog carousel' || asset.group === 'YouTube thumbnail designs' || asset.group === 'IG/FB carousel posts' ? 'Social Content' : asset.group === 'Client brand guidelines' ? 'Brand Guidelines' : 'Product Design',
  desc: asset.group,
  imageSrc: asset.src,
}))
const ALL_PAGES: Funnel[] = [...gymFunnel, ...bookingFunnel, ...websiteFunnel, ...WEBSITE_IMAGES, ...DESIGN_IMAGES]

function WebsitePreview() { return <div className="bento__media bento__reel" aria-hidden="true"><div className="bento__reel-track">{[...shots, ...shots].map((src, i) => <span key={`${src}-${i}`} className="bento__shot"><img src={src} alt="" loading="lazy" decoding="async" /></span>)}</div></div> }
function DocumentPreview() { return <div className="bento__media bento__doc" aria-hidden="true"><span className="bento__doc-eyebrow">Project documents</span><span className="bento__doc-title">Website content &amp; support</span><span className="bento__doc-flow"><i>Plan</i><i>Update</i><i>Review</i><i className="is-on">Deliver</i></span><span className="bento__doc-line" /><span className="bento__doc-line bento__doc-line--short" /></div> }
function PagesPreview() { const previews = [mobileApps[0]?.imageSrc, GRAPHIC_DESIGNS[1]?.src, GRAPHIC_DESIGNS[GRAPHIC_DESIGNS.length - 1]?.src].filter((src): src is string => Boolean(src)); return <div className="bento__media bento__fan" aria-hidden="true">{previews.map((src, i) => <span key={src} className="bento__photo bento__photo--page" style={{ ['--i' as string]: i }}><img src={src} alt="" loading="lazy" decoding="async" /></span>)}</div> }
function SystemsPreview() { return <div className="bento__media bento__chips" aria-hidden="true">{['Website build & updates', 'SEO & performance', 'Content & creative support'].map((name) => <span key={name} className="bento__chip">{name}</span>)}</div> }
function ToolsPreview() { return <div className="bento__media bento__reel bento__reel--row" aria-label={`Tools: ${uniqueTools.join(', ')}`}><div className="bento__reel-track">{[...uniqueTools, ...uniqueTools].map((name, i) => <span key={`${name}-${i}`} className="bento__shot bento__shot--app"><span className="bento__tool-chip">{toolIcons[name] && <img src={toolIcons[name]} alt="" />}{name}</span></span>)}</div></div> }
function PagesPanel() {
  const { openFull, modal } = useFunnelModal()
  return <div className="ppanel ppanel--barrel"><FunnelBarrel funnels={ALL_PAGES} onOpen={openFull} />{modal}</div>
}
const PROJECTS: Project[] = [
  { id: 'websites', title: 'Website Projects', desc: 'Website design, content updates, integrations, and ongoing support across WordPress and Squarespace.', Icon: FlowIcon, logos: ['/icons/wordpress.svg', '/icons/elementor-icon.svg'], Preview: WebsitePreview, detail: 'Selected client websites and the platforms, tools, and hosting used for each project.', span: 2 },
  { id: 'plan', title: 'Sample Document', desc: 'Planning notes, content materials, and project support documents prepared for client work.', Icon: PlanIcon, Preview: DocumentPreview, detail: 'Examples of project documents and working materials that support website updates, content preparation, and digital marketing tasks.' },
  { id: 'featured1', title: 'Website Support', desc: 'Page updates, responsive improvements, forms, and website integrations.', Icon: GlobeIcon, kicker: 'Website projects', Preview: () => null, detail: 'Website support across WordPress and Squarespace, including page edits, responsive layouts, forms, booking tools, and integrations.' },
  { id: 'featured2', title: 'Graphic Design', desc: 'Infographics, YouTube thumbnails, social content, product posters, and web design concepts.', Icon: SparkIcon, kicker: 'Creative work', Preview: () => null, detail: 'A selection of graphic and promotional design work, including YouTube thumbnail designs. More designs can be added to this gallery later.', gallery: GRAPHIC_DESIGNS },
  { id: 'featured3', title: 'Content & Marketing', desc: 'Weekly IG/FB carousel posts, social scheduling, and performance reporting.', Icon: SparkIcon, kicker: 'Digital support', Preview: () => null, detail: 'Content samples include weekly Instagram and Facebook carousel posts. More marketing support can be added as you share it.', gallery: CONTENT_MARKETING_ASSETS },
  { id: 'pages', title: 'Pages and sites', desc: 'A rotating preview of landing pages, funnels, website samples, and selected designs.', Icon: GlobeIcon, Preview: PagesPreview, detail: 'Explore the rotating collection of landing pages, funnels, website samples, live client website previews, and graphic design images.' },
  { id: 'systems', title: 'How I Support Clients', desc: 'A practical workflow for website, design, content, and digital support.', Icon: SparkIcon, logos: ['/icons/wordpress.svg', '/icons/canva.svg'], Preview: SystemsPreview, detail: 'Website build and updates use WordPress or Squarespace with tools such as Elementor, Astra, Spectra, and client hosting. SEO and performance work includes Yoast SEO, keyword research, Google Analytics 4, and Google Search Console. Content and creative support includes Canva, Photoshop, and CapCut for graphics, social carousels, thumbnails, and video edits.' },
  { id: 'tools', title: 'Apps and tools', desc: 'The platforms and applications used across my website and digital support work.', Icon: DeviceIcon, logos: ['/icons/wordpress.svg', '/icons/canva.svg', '/icons/capcut-icon.svg'], Preview: ToolsPreview, detail: `Tools from my AI stack and digital workflow: ${uniqueTools.join(', ')}.` , span: 2 },
]

function Marks({ project }: { project: Project }) { return project.logos?.length ? <span className="bento__logos" aria-hidden="true">{project.logos.map((src) => <span key={src} className="bento__logo"><img src={src} alt="" width={22} height={22} /></span>)}</span> : <span className="bento__icon"><project.Icon size={22} /></span> }
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => { const previousOverflow = document.body.style.overflow; const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape' && !document.querySelector('.funnels__modal, .wfs__modal')) onClose() }; document.addEventListener('keydown', onKey); document.body.style.overflow = 'hidden'; requestAnimationFrame(() => closeRef.current?.focus()); return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = previousOverflow } }, [onClose])
  return createPortal(<div className="pmodal" role="dialog" aria-modal="true" aria-label={project.title} onClick={(event) => event.target === event.currentTarget && onClose()}><button ref={closeRef} type="button" className="pmodal__close" onClick={onClose} aria-label="Close"><X size={18} weight="bold" /></button><div className="pmodal__stage">{project.id === 'websites' ? <AutomationsPanel /> : project.id === 'pages' ? <PagesPanel /> : <div className="ppanel ppanel--window"><div className="ppanel__bar"><span className="ppanel__dots"><i /><i /><i /></span><span className="ppanel__url"><span className="ppanel__url-host">{project.title}</span></span></div><div className="ppanel__scroll" style={{ padding: 'clamp(24px, 5vw, 64px)' }}><span className="pgrid__eyebrow">Portfolio</span><h2>{project.title}</h2><p>{project.detail}</p>{project.id === 'tools' && <ul className="pgrid__tool-list">{uniqueTools.map((tool) => <li key={tool}>{tool}</li>)}</ul>}{project.gallery && <div className="pgrid__design-gallery">{[...new Set(project.gallery.map(({ group }) => group))].map((group) => <section key={group}><h3>{group}</h3><div className="pgrid__design-grid">{project.gallery?.filter((asset) => asset.group === group).map((asset) => <figure key={asset.src}><img src={asset.src} alt={asset.label} loading="lazy" decoding="async" /><figcaption>{asset.label}</figcaption></figure>)}</div></section>)}</div>}</div></div>}</div></div>, document.body)
}

export default function ProjectsGrid() {
  const [open, setOpen] = useState<Project | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)
  const close = useCallback(() => { setOpen(null); requestAnimationFrame(() => triggerRef.current?.focus()) }, [])
  const card = (project: Project) => project.kicker ? <button key={project.id} data-id={project.id} type="button" className="bento__card bento__card--btn bento__card--build" onClick={(event) => { triggerRef.current = event.currentTarget; setOpen(project) }} aria-haspopup="dialog"><span className="bento__build-plate"><project.Icon size={20} /></span><span className="bento__build-text"><span className="bento__kicker">{project.kicker}</span><span className="bento__build-title">{project.title}</span><span className="bento__build-desc">{project.desc}</span></span><span className="bento__build-arrow"><ArrowUpRight size={13} weight="bold" /></span></button> : <button key={project.id} data-id={project.id} type="button" className={`bento__card bento__card--btn${project.span ? ' bento__card--wide' : ''}`} onClick={(event) => { triggerRef.current = event.currentTarget; setOpen(project) }} aria-haspopup="dialog"><span className="bento__head"><Marks project={project} /><span className="bento__title">{project.title}</span><span className="bento__desc">{project.desc}</span><ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" /></span><project.Preview /></button>
  return <section className="pgrid" aria-labelledby="projects-title"><header className="pgrid__head"><span className="pgrid__eyebrow">Projects</span><h1 className="pgrid__title" id="projects-title">Selected website and digital support work.</h1><p className="pgrid__lede">Explore website projects, design and content support, project materials, and the tools I use. Open a card for more detail.</p></header><div className="home__glass pgrid__glass"><span className="pgrid__hint" aria-hidden="true"><CursorClick size={14} weight="duotone" />Click a card to open it</span><div className="bento bento--projects">{PROJECTS.slice(0, 2).map(card)}<div className="bento__stack">{PROJECTS.slice(2, 5).map(card)}</div>{PROJECTS.slice(5).map(card)}</div></div>{open && <ProjectModal project={open} onClose={close} />}</section>
}
