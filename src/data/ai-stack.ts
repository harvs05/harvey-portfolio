/**
 * Tools & capabilities shown in the Projects "systems" pop-up
 * and as chips on Home and in the Projects bento card.
 *
 * Customized for Harvey Varela's actual services,
 * tools, platforms, and digital support work.
 */

import {
  Sparkle,
  Article,
  FilmSlate,
  UsersThree,
  Database,
  MagnifyingGlass,
  ChatCircleDots,
  FlowArrow,
  PhoneCall,
  Browser,
  Broadcast,
  Timer,
} from '@/components/slab'

import type { Icon } from '@/components/slab'

import { profile } from '@/data/profile'

export type StackStatus = 'Live' | 'Internal' | 'Beta'

/**
 * A vendor/tool mark used by the systems grid.
 */
export type StackLogo = {
  src: string
  name: string
}

export type StackNode = {
  id: string
  name: string

  /** One plain sentence a non-technical client understands. */
  what: string

  /** Tools, platforms, or workflow used for the work. */
  stack?: string

  status?: StackStatus

  /** Icon displayed on the card. */
  Icon: Icon

  logos?: StackLogo[]

  children?: StackNode[]
}

/* =========================================================
   TOOL / PLATFORM LOGOS
   ========================================================= */

const WORDPRESS: StackLogo = {
  src: '/icons/wordpress.svg',
  name: 'WordPress',
}

const CANVA: StackLogo = {
  src: '/icons/canva.svg',
  name: 'Canva',
}

const PHOTOSHOP: StackLogo = {
  src: '/icons/adobe-photoshop.svg',
  name: 'Adobe Photoshop',
}

const CAPCUT: StackLogo = {
  src: '/icons/capcut-icon.svg',
  name: 'CapCut',
}

const ELEMENTOR: StackLogo = {
  src: '/icons/elementor-icon.svg',
  name: 'Elementor',
}

const SQUARESPACE: StackLogo = {
  src: '/icons/squarespace-icon.svg',
  name: 'Squarespace',
}

const GOOGLE_WORKSPACE: StackLogo = {
  src: '/icons/googleworkspace.svg',
  name: 'Google Workspace',
}

/* =========================================================
   GENERAL DESCRIPTIONS
   ========================================================= */

/* =========================================================
   MAIN TOOLS & CAPABILITIES
   ========================================================= */

export const aiStack: StackNode = {
  id: 'root',

  Icon: Sparkle,

  name: profile.name,

  what:
    'WordPress website support, Canva graphic design, content creation, and digital support for businesses and organizations.',

  stack:
    'WordPress • Canva • Photoshop • CapCut • Elementor • Squarespace',

  children: [
    /* =====================================================
       WORDPRESS & WEBSITE SUPPORT
       ===================================================== */

    {
      id: 'category-one',

      Icon: Browser,

      name: 'Website Development & Support',

      what:
        'Building, updating, improving, and maintaining business websites across WordPress and Squarespace.',

      children: [
        {
          id: 'project-a',

          Icon: Browser,

          logos: [WORDPRESS, ELEMENTOR],

          name: 'WordPress Website Support',

          what:
            'Updating WordPress pages, layouts, content, buttons, navigation, responsive sections, and website elements.',

          stack:
            'WordPress • Elementor • Astra • Spectra',

          status: 'Live',
        },

        {
          id: 'project-b',

          Icon: FlowArrow,

          logos: [WORDPRESS, ELEMENTOR],

          name: 'Website Design & Revamps',

          what:
            'Improving existing websites so their structure, visual presentation, user experience, and content are clearer and more consistent.',

          stack:
            'WordPress • Elementor • Astra • Spectra • CSS',

          status: 'Live',
        },

        {
          id: 'project-c',

          Icon: Browser,

          logos: [SQUARESPACE],

          name: 'Squarespace Website Support',

          what:
            'Updating Squarespace pages, services, content sections, calls to action, and other website elements.',

          stack:
            'Squarespace • Website Editing • Content Updates',

          status: 'Live',
        },

        {
          id: 'project-d',

          Icon: PhoneCall,

          logos: [WORDPRESS],

          name: 'Forms & Integrations',

          what:
            'Connecting forms, booking tools, email platforms, payment tools, and other website integrations.',

          stack:
            'WordPress • Forms • ConvertKit • MailerLite • Integrations',

          status: 'Live',
        },
      ],
    },

    /* =====================================================
       GRAPHIC DESIGN & CONTENT
       ===================================================== */

    {
      id: 'category-two',

      Icon: Sparkle,

      name: 'Graphic Design & Content',

      what:
        'Creating branded visual content for social media, marketing, business materials, and digital campaigns.',

      children: [
        {
          id: 'project-e',

          Icon: FilmSlate,

          logos: [CANVA, PHOTOSHOP],

          name: 'Social Media Graphics',

          what:
            'Creating branded graphics and visual content for social media platforms and marketing campaigns.',

          stack:
            'Canva • Photoshop • Brand Guidelines • Social Media',

          status: 'Live',
        },

        {
          id: 'project-f',

          Icon: Article,

          logos: [CANVA, PHOTOSHOP],

          name: 'Carousel Design',

          what:
            'Designing clear, engaging carousel graphics that organize information into easy-to-follow visual slides.',

          stack:
            'Canva • Photoshop • Social Media Content',

          status: 'Live',
        },

        {
          id: 'project-g',

          Icon: UsersThree,

          logos: [CANVA, PHOTOSHOP],

          name: 'Brand Materials',

          what:
            'Creating branded materials such as business cards, brand guidelines, promotional graphics, and marketing assets.',

          stack:
            'Canva • Photoshop • Brand Assets',

          status: 'Live',
        },

        {
          id: 'project-h',

          Icon: FilmSlate,

          logos: [CAPCUT],

          name: 'Short-Form Video Editing',

          what:
            'Editing short-form social media videos, reels, clips, and promotional content for digital platforms.',

          stack:
            'CapCut • Short-Form Video • Social Media',

          status: 'Live',
        },
      ],
    },

    /* =====================================================
       DIGITAL & MARKETING SUPPORT
       ===================================================== */

    {
      id: 'category-three',

      Icon: Database,

      name: 'Digital & Marketing Support',

      what:
        'Supporting content workflows, reporting, analytics, scheduling, and day-to-day digital operations.',

      children: [
        {
          id: 'project-i',

          Icon: Broadcast,

          logos: [GOOGLE_WORKSPACE],

          name: 'Analytics & Reporting',

          what:
            'Preparing website performance reports using Google Analytics and Google Search Console data.',

          stack:
            'GA4 • Google Search Console • Performance Snapshots',

          status: 'Live',
        },

        {
          id: 'project-j',

          Icon: Timer,

          logos: [CANVA],

          name: 'Social Media Scheduling',

          what:
            'Preparing and scheduling approved social media content for consistent publishing.',

          stack:
            'Publer • Canva • Social Media Content',

          status: 'Live',
        },

        {
          id: 'project-k',

          Icon: ChatCircleDots,

          logos: [GOOGLE_WORKSPACE],

          name: 'Content Support',

          what:
            'Organizing, updating, and preparing website and marketing content based on client requirements.',

          stack:
            'Google Workspace • WordPress • Content Documents',

          status: 'Live',

          children: [
            {
              id: 'project-l',

              Icon: Article,

              logos: [WORDPRESS],

              name: 'Website Content Updates',

              what:
                'Updating website copy, headings, calls to action, service information, and supporting page content.',

              stack:
                'WordPress • Google Docs • Content Updates',

              status: 'Live',
            },
          ],
        },
      ],
    },

    /* =====================================================
       TOOLS & WORKFLOW
       ===================================================== */

    {
      id: 'category-four',

      Icon: MagnifyingGlass,

      name: 'Tools & Workflow',

      what:
        'A practical toolkit used to manage website, design, content, and digital marketing tasks.',

      children: [
        {
          id: 'project-m',

          Icon: Browser,

          logos: [WORDPRESS, ELEMENTOR],

          name: 'Website Tools',

          what:
            'Working with website builders and content management platforms to maintain and improve client websites.',

          stack:
            'WordPress • Elementor • Astra • Spectra • Squarespace',

          status: 'Live',
        },

        {
          id: 'project-n',

          Icon: Sparkle,

          logos: [CANVA, PHOTOSHOP, CAPCUT],

          name: 'Creative Tools',

          what:
            'Using visual design and video editing tools to create professional marketing and social media content.',

          stack:
            'Canva • Photoshop • CapCut',

          status: 'Live',
        },

        {
          id: 'project-o',

          Icon: Database,

          logos: [GOOGLE_WORKSPACE],

          name: 'Business & Productivity Tools',

          what:
            'Using digital productivity and collaboration tools to organize client work and support marketing operations.',

          stack:
            'Google Workspace • Google Drive • Reporting Tools',

          status: 'Live',
        },
      ],
    },
  ],
}
