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
    tagline: 'WordPress website design and development',
    url: 'https://goldenwrenchmobile.com/',
    description:
      'A WordPress website project for a mobile mechanic and roadside assistance business, hosted on Bluehost. Work included homepage structure, UI updates, navigation, calls to action, service sections, booking integration, and supporting brand materials.',
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
    tagline: 'WordPress homepage revamp',
    url: 'https://sdwhisksup.com/',
    description:
      'A WordPress website improvement project hosted on Bluehost. Work focused on the homepage layout, responsive design, content sections, forms, and integrations using Elementor, Spectra, and Yoast SEO, with ConvertKit support.',
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
    tagline: 'Branding and digital content support',
    url: 'https://sunupgrowthinmotion.com/',
    description:
      'A WordPress website and marketing support project hosted on Bluehost, using the Astra theme and Yoast SEO, with Calendly for scheduling. Work also included Canva brand guidelines, social media graphics, and website updates.',
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
    tagline: 'Website content and performance support',
    url: 'https://pacificamentalhealth.com/',
    description:
      'A Squarespace website support project hosted on GoDaddy, involving website content support, GA4 analytics, and Google Search Console reporting.',
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
