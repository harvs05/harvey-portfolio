/**
 * YOUR IDENTITY
 *
 * This file contains your core profile information:
 * name, handle, photo, socials, email, location,
 * stats, and Home headline.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/**
 * A proof fact shown on the Home page.
 */
export type Stat = {
  value: string
  label: string
  Icon: Icon
}

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: {
    line1: string
    line2: string
  }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Harvey Varela',

  firstName: 'Harvey',

  handle: '@harveyvarela',

  role: 'WordPress Developer & Digital Designer',

  avatarSrc: '/newprofile.png',

  verifiedLabel: 'Professional Virtual Assistant',

  email: 'harveyv291@gmail.com',

  location: 'Cebu, Philippines',

  stats: [
    {
      value: 'WordPress',
      label: 'Website Support',
      Icon: Briefcase,
    },
    {
      value: 'Canva',
      label: 'Graphic Design',
      Icon: SealCheck,
    },
    {
      value: 'PHT',
      label: 'UTC+8',
      Icon: Clock,
    },
  ],

  displayName: {
    line1: 'WordPress Developer',
    line2: '& Digital Designer.',
  },

  hero: {
    body: 'I build and support WordPress websites, create engaging digital designs, and provide dependable virtual assistance for growing businesses.',
    portraitSrc: '/newprofile.png',
    portraitAlt: 'Harvey Varela - WordPress Developer and Digital Designer',
  },

  socials: [
    {
      label: 'GitHub profile',
      href: 'https://github.com/harvs05',
      iconPath: '/icons/ai/github.svg',
    },
    {
      label: 'Facebook profile',
      href: 'https://www.facebook.com/hackerteam50/',
      iconPath: '/icons/facebook.svg',
    },
    {
      label: 'LinkedIn profile',
      href: 'https://www.linkedin.com/in/harvey-varela',
      iconPath: '/icons/linkedin.svg',
    },
  ],
}
