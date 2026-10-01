export type QA = { q: string; a: string }

/**
 * The questions people ask before they email. One list, used by the FAQ
 * accordion on the Contact view (and the legacy long-scroll FAQ section).
 * Five questions, two or three sentences each: the accordion sits in a
 * fixed panel and more than that pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What do you do?',
    a: 'I provide WordPress website support, responsive page updates, Canva graphics, and digital content support for businesses.',
  },
  {
    q: 'How fast can you start?',
    a: 'Timing depends on the project scope and my availability. Share what you need and your preferred timeline so we can discuss fit.',
  },
  {
    q: 'How much do you charge?',
    a: 'Pricing depends on the scope and deliverables. Get in touch with a project outline to discuss a quote.',
  },
  {
    q: 'Where are you based?',
    a: 'I am based in Cebu, Philippines (Philippine Time, UTC+8). Please include your timezone when you get in touch to discuss scheduling.',
  },
  {
    q: 'What happens after I write?',
    a: 'I will review your message and follow up to discuss the project scope and next steps.',
  },
]
