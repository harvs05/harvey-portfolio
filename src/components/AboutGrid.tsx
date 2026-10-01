import type { CSSProperties } from 'react'
import { MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

const CAPABILITIES = [
  { index: '01', title: 'WordPress website support', marks: ['/icons/wordpress.svg', '/icons/elementor-icon.svg'] },
  { index: '02', title: 'Website design and updates', marks: ['/icons/wordpress.svg', '/icons/squarespace-icon.svg'] },
  { index: '03', title: 'Canva graphics and content', marks: ['/icons/canva.svg', '/icons/adobe-photoshop.svg'] },
  { index: '04', title: 'Digital content support', marks: ['/icons/googleworkspace.svg', '/icons/canva.svg'] },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">Hi, I’m {profile.firstName}.</h1>
        <p className="pgrid__lede">I’m a WordPress Developer and Digital Designer providing virtual support from Cebu, Philippines.</p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I help keep your website and digital content in shape.
            <span> Practical support for the work behind your online presence.</span>
          </p>
          <p className="agrid__note">
            My work includes WordPress website support, responsive page updates, Canva graphics, and digital content support for businesses.
          </p>

          <ul className="agrid__caps" role="list" aria-label="Areas of support">
            {CAPABILITIES.map((cap) => (
              <li key={cap.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {cap.marks.map((src, i) => <span key={src} className="agrid__mark" style={{ '--i': cap.marks.length - i } as CSSProperties}><img src={src} alt="" loading="lazy" decoding="async" /></span>)}
                </span>
                <span className="agrid__cap-title">{cap.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">{cap.index}</span>
              </li>
            ))}
          </ul>

          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark"><MapPin size={16} weight="fill" aria-hidden="true" /></span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">Philippine Time · UTC+8</span>
              </span>
            </span>
            <span className="agrid__cell agrid__cell--wide">
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.role}</span>
                <span className="agrid__cell-meta">WordPress · Canva · Digital Support</span>
              </span>
            </span>
          </div>
        </div>

        <div className="agrid__portrait">
          <img src={profile.avatarSrc} alt={profile.name} loading="eager" decoding="async" width={400} height={600} />
        </div>
      </div>
    </section>
  )
}
