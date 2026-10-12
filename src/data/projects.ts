export type AppStat = {
  value: string
  label: string
}

export type AppProject = {
  name: string
  tagline: string
  description: string
  url?: string
  imageSrc?: string
  imagePosition?: string
  accentColor: string
  stats: AppStat[]
  badge: string
}

/** @deprecated use AppProject */
export type MobileApp = AppProject

/** Portfolio work included in the project files and supplied thumbnails. */
export const mobileApps: MobileApp[] = [
  {
    name: 'The Golden Wrench Mobile',
    tagline: 'Full WordPress website revamp',
    url: 'https://goldenwrenchmobile.com/',
    description:
      'I revamped the TGW website for a mobile mechanic and roadside assistance business. My work covered the homepage structure, navigation, service sections, calls to action, responsive layout, and booking integration. I used WordPress and Elementor, and the site is hosted on Bluehost.',
    imageSrc: '/placeholders/golden-wrench.jpg',
    imagePosition: '50% 50%',
    accentColor: '#C9972B',
    stats: [
      { value: 'WordPress', label: 'Platform' },
      { value: 'Elementor', label: 'Builder' },
      { value: 'Bluehost', label: 'Hosting' },
    ],
    badge: 'Website Design',
  },
  {
    name: 'Sundown, Whisks Up',
    tagline: 'WordPress website revamp & marketing support',
    url: 'https://sdwhisksup.com/',
    description:
      'I revamped the Sundown, Whisks Up website and updated its homepage layout, responsive design, content sections, forms, and integrations. I used WordPress with Elementor, Spectra, and Yoast SEO, with ConvertKit support. The site is hosted on Bluehost.',
    imageSrc: '/placeholders/SDWHISKUPTHUMBNAIL.png',
    imagePosition: '50% 30%',
    accentColor: '#7C3AED',
    stats: [
      { value: 'WordPress', label: 'Platform' },
      { value: 'Elementor', label: 'Builder' },
      { value: 'Spectra', label: 'Blocks' },
      { value: 'Yoast SEO', label: 'SEO' },
      { value: 'ConvertKit', label: 'Email' },
      { value: 'Bluehost', label: 'Hosting' },
    ],
    badge: 'Website Revamp',
  },
  {
    name: 'Sun Up Growth in Motion',
    tagline: 'Full website revamp and SEO keyword optimization',
    url: 'https://sunupgrowthinmotion.com/',
    description:
      'I revamped the full SUGM website using WordPress and the Astra theme. I added researched SEO keywords throughout the site to make its content more search-focused. I also worked with Yoast SEO and Calendly. The site is hosted on Bluehost.',
    imageSrc: '/placeholders/SUGMTHUMBNAIL.png',
    imagePosition: '50% 30%',
    accentColor: '#F0A322',
    stats: [
      { value: 'WordPress', label: 'Platform' },
      { value: 'Astra Theme', label: 'Theme' },
      { value: 'Yoast SEO', label: 'SEO' },
      { value: 'Calendly', label: 'Scheduling' },
      { value: 'Bluehost', label: 'Hosting' },
    ],
    badge: 'Website & Content',
  },
]

export const webApps: AppProject[] = [
  {
    name: 'Pacifica Mental Health',
    tagline: 'Squarespace website revamp & analytics support',
    url: 'https://pacificamentalhealth.com/',
    description:
      'I revamped the Pacifica Mental Health website in Squarespace and supported its content and performance tracking with Google Analytics 4 and Google Search Console. The site is hosted on GoDaddy.',
    imageSrc: '/placeholders/pmh.png',
    imagePosition: '50% 50%',
    accentColor: '#0EA5E9',
    stats: [
      { value: 'Squarespace', label: 'Platform' },
      { value: 'GA4', label: 'Analytics' },
      { value: 'GSC', label: 'Search Data' },
      { value: 'GoDaddy', label: 'Hosting' },
    ],
    badge: 'Website Support',
  },
]
