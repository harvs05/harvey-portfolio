import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/**
 * General project information. Specific engagement terms should be agreed
 * in writing before any work begins.
 */
export default function ToS() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Terms of Service">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Terms of Service</h1>
        <p className="legal-page__updated">Last updated: October 1, 2026</p>

        <div className="legal-page__body">
          <h2>Using this site</h2>
          <p>This website presents information about Harvey Varela and selected website and digital support work. Project previews are included for portfolio purposes.</p>

          <h2>Work and payment</h2>
          <p>Scope, deliverables, schedule, and fees for any project should be discussed and confirmed in writing before work begins. This website does not set those details for a specific engagement.</p>

          <h2>Ownership</h2>
          <p>Ownership and permitted use of client materials and completed work should be agreed as part of the written project terms.</p>

          <h2>Liability</h2>
          <p>These general notes are not a project agreement. Any project-specific terms should be confirmed directly before work starts.</p>

          <h2>Contact</h2>
          <p>
            Questions about these notes: <a href={profile.socials[0]?.href} target="_blank" rel="noopener noreferrer">GitHub profile</a>.
          </p>
        </div>
      </div>
    </main>
  )
}
