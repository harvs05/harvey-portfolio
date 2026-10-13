type Request = {
  method?: string
  body?: unknown
}

type Response = {
  setHeader(name: string, value: string): void
  status(code: number): Response
  json(body: unknown): void
}

type Lead = {
  firstName: string
  lastName: string
  email: string
  message: string
  website: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_NAME = 80
const MAX_EMAIL = 254
const MAX_MESSAGE = 5000

function clean(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return ''
  return value
    .replace(/[\u0000-\u001F\u007F\u200B-\u200F\u202A-\u202E\u2060\uFEFF]/g, '')
    .trim()
    .slice(0, maxLength)
}

export default async function handler(req: Request, res: Response) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const body = req.body && typeof req.body === 'object'
    ? req.body as Record<string, unknown>
    : {}

  // Quietly accept bot submissions while discarding the content.
  if (typeof body.website === 'string' && body.website.trim()) {
    return res.status(200).json({ ok: true })
  }

  const lead: Lead = {
    firstName: clean(body.firstName, MAX_NAME),
    lastName: clean(body.lastName, MAX_NAME),
    email: clean(body.email, MAX_EMAIL),
    message: typeof body.message === 'string'
      ? body.message
          .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u200B-\u200F\u202A-\u202E\u2060\uFEFF]/g, '')
          .trim()
          .slice(0, MAX_MESSAGE)
      : '',
    website: '',
  }

  if (!lead.firstName || !lead.lastName || !lead.message || !EMAIL_RE.test(lead.email)) {
    return res.status(400).json({ error: 'Please check your name, email, and message, then try again.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const recipient = process.env.CONTACT_TO_EMAIL
  const sender = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !recipient || !sender) {
    return res.status(503).json({ error: 'The contact service is not configured yet. Please try again later.' })
  }

  try {
    const delivery = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: lead.email,
        subject: `Portfolio inquiry from ${lead.firstName} ${lead.lastName}`,
        text: [
          `Name: ${lead.firstName} ${lead.lastName}`,
          `Email: ${lead.email}`,
          '',
          lead.message,
        ].join('\n'),
      }),
    })

    if (!delivery.ok) {
      console.error('Resend contact delivery failed:', delivery.status)
      return res.status(502).json({ error: 'Your message could not be sent right now. Please try again later.' })
    }

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact delivery request failed:', error)
    return res.status(502).json({ error: 'Your message could not be sent right now. Please try again later.' })
  }
}
