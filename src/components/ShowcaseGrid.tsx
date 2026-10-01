import WorkflowSamples from '@/components/WorkflowSamples'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function ShowcaseGrid() {
  useScrollReveal()

  return (
    <section className="pgrid ktools" aria-labelledby="showcase-title">
      <header className="pgrid__head ktools__head">
        <div className="ktools__head-copy">
          <span className="pgrid__eyebrow">Website Gallery</span>
          <h1 className="pgrid__title" id="showcase-title">Website work, shown on screen.</h1>
          <p className="pgrid__lede">A closer look at selected website projects and their desktop and mobile layouts.</p>
        </div>
      </header>
      <div className="home__glass ktools__glass"><WorkflowSamples /></div>
    </section>
  )
}
