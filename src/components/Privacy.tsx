import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/**
 * Basic privacy information based on the current form implementation.
 */
export default function Privacy() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Privacy Policy">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Privacy Policy</h1>
        <p className="legal-page__updated">Last updated: October 1, 2026</p>

        <div className="legal-page__body">
          <h2>Who this covers</h2>
          <p>This portfolio is operated by {profile.name}. This notice describes the contact form on this website.</p>

          <h2>What is collected</h2>
          <p>The contact form asks for your name, email address, and a message about your project. When submitted, the information is sent through the website's Vercel function and Resend email delivery service to {profile.email}. The portfolio does not keep submissions in a database.</p>

          <h2>How it is used</h2>
          <p>Your information is used to respond to your inquiry. It is processed by Vercel and Resend to deliver the message, and is handled by the email providers involved.</p>

          <h2>How long it is kept</h2>
          <p>The portfolio does not store contact form submissions in a database. The email is retained or deleted according to the recipient's email account settings and the service providers' policies.</p>

          <h2>Contact</h2>
          <p>
            Questions about this notice: <a href={`mailto:${profile.email}`}>{profile.email}</a> or <a href={profile.socials[0]?.href} target="_blank" rel="noopener noreferrer">GitHub profile</a>.
          </p>
        </div>
      </div>
    </main>
  )
}
