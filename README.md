# Harvey Varela Portfolio

A personal portfolio for Harvey Varela, a WordPress and Canva Virtual Assistant based in Cebu, Philippines. It presents website projects, services, selected client work, and contact details in a responsive portfolio layout.

Stack: Vite 6, React 19, TypeScript, plain CSS custom properties, Three.js, GSAP, Lenis, React Router 7, Phosphor icons, Poppins.

## What it looks like

The design uses a fixed profile rail on desktop, a bento-style home screen, and an app-style layout on phones.

**Desktop** - the profile rail, the contour background and the bento home.

![Desktop: profile rail on the left, headline, tools marquee and a bento grid of project, about, credential, services and testimonial cards](docs/screenshots/desktop.png)

**Phone** - an app-style layout: a floating tab bar, a glance widget for your stats, app-icon tools and swipeable shelf cards. Light and dark.

<p>
  <img src="docs/screenshots/mobile-light.png" alt="Phone, light theme: profile header, one-line headline, stats widget, tools row and explore cards above a floating tab bar" width="300">
  &nbsp;&nbsp;
  <img src="docs/screenshots/mobile-dark.png" alt="Phone, dark theme: the same Home screen on a navy background" width="300">
</p>

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build to dist/
npm run lint       # ESLint with the TypeScript parser and the React hooks rules
```

## Portfolio content

Profile and page copy are maintained in the files below. Add missing contact details and any additional project materials before publishing.

| What | Where |
|---|---|
| Name, handle, photo, email, socials, Home headline, phone stats and their icons | `src/data/profile.ts` |
| Phone headline size (holds your headline on one line) | `--headline-em` in `src/styles/mobile-pass.css` - the comment there shows how to measure it |
| Your photo | `public/avatar1.jpg` (set `avatarSrc` in `src/data/profile.ts`) |
| Page headlines and copy | the top of each page component: `ProjectsGrid`, `ServicesGrid`, `ShowcaseGrid`, `TestimonialsGrid`, `AboutGrid`, `ContactGrid` in `src/components/` |
| Website project previews | `src/components/WorkflowSamples.tsx` and image files in `public/placeholders/` |
| Projects, apps, side builds | `src/data/projects.ts`, `src/data/ai-stack.ts` |
| FAQs | `src/data/faqs.ts` |
| Tools marquee | `src/components/ToolsMarquee.tsx` (logos in `public/icons/`) |
| Contact form | `src/lib/contact.ts` (add a real email in `src/data/profile.ts` or configure `VITE_CONTACT_ENDPOINT`) |
| SEO, share image, favicon | `index.html`, `public/favicon.svg` |
| Colors | `src/styles/tokens.css` |
| Privacy / Terms | `src/components/Privacy.tsx`, `src/components/ToS.tsx` |

## Notes

- The background shader measures the visitor's frame rate and steps down on slow machines (`src/lib/perf.ts`). Keep any large `backdrop-filter` blur off the layers above it, because blur over an animated canvas is the most expensive thing on the page.
- From 1100px down, the site switches to the phone layout. `src/styles/mobile-app.css` owns its components (`TabBar`, `QuickMenu`, `HomeMobile`); `src/styles/mobile-pass.css` holds the motion (the tab pill, the bar hiding on scroll, page arrival, tile depth) and the native-feel fixes. Everything respects `prefers-reduced-motion` and the site's own Reduce motion switch.
- Anything new you add above the fold on Home must join the intro hold-back list in `src/styles/boot.css`. Otherwise it shows through the intro animation.

## Credits

- Contour background technique inspired by the landonorris.com site by OFF+BRAND. The simplex noise is Ashima Arts / Ian McEwan (MIT).
- Icons: [Phosphor](https://phosphoricons.com) (MIT). Tool logos in `public/icons/` are trademarks of their owners and are included as examples only.
- Font: Poppins (SIL Open Font License).

## License

MIT for the code. See [LICENSE](LICENSE).
