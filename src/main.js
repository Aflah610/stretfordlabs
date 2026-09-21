import './style.css'
import heroImage from './assets/heropic-clean.webp'
import iconWebDesign from './assets/icon-web-design.webp'
import iconFrontend from './assets/icon-frontend.webp'
import iconLanding from './assets/icon-landing.webp'
import iconUiux from './assets/icon-uiux.webp'
import artMindlap from './assets/work-mindlap.webp'
import artStretford from './assets/work-stretford.webp'
import aboutArt from './assets/about-art.webp'
import contactArt from './assets/contact-art.webp'

const WHATSAPP_NUMBER = '919292016359'
const whatsapp = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
const INSTAGRAM_URL = 'https://www.instagram.com/stretford_labs/'
const LINKEDIN_URL = '' // not supplied yet: the item renders without a link until this is set
const EMAIL = 'stretfordlabs@gmail.com'

const icons = {
  instagram: `<svg viewBox="0 0 48 48" aria-hidden="true"><defs><radialGradient id="ig" cx="30%" cy="107%" r="150%"><stop offset="0" stop-color="#fdf497"/><stop offset=".05" stop-color="#fdf497"/><stop offset=".45" stop-color="#fd5949"/><stop offset=".6" stop-color="#d6249f"/><stop offset=".9" stop-color="#285aeb"/></radialGradient></defs><rect width="48" height="48" rx="12" fill="url(#ig)"/><rect x="11" y="11" width="26" height="26" rx="8" fill="none" stroke="#fff" stroke-width="3.4"/><circle cx="24" cy="24" r="6.4" fill="none" stroke="#fff" stroke-width="3.4"/><circle cx="31.6" cy="16.4" r="2" fill="#fff"/></svg>`,
  linkedin: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="8" fill="#0a66c2"/><rect x="10" y="19" width="6" height="19" fill="#fff"/><circle cx="13" cy="12.6" r="3.6" fill="#fff"/><path d="M21 19h5.7v2.7c.9-1.6 2.9-3.2 6-3.2 5.6 0 6.6 3.7 6.6 8.4V38h-6V28.2c0-2.4-.1-4.6-2.9-4.6-2.9 0-3.4 2.2-3.4 4.4V38h-6z" fill="#fff"/></svg>`,
  gmail: `<svg viewBox="0 0 48 36" aria-hidden="true"><path d="M3.3 36h7.6V17.5L0 9.4v23.3C0 34.5 1.5 36 3.3 36z" fill="#4285f4"/><path d="M37.1 36h7.6c1.8 0 3.3-1.5 3.3-3.3V9.4l-10.9 8.1z" fill="#34a853"/><path d="M37.1 3.4v14.1L48 9.4V5c0-4.1-4.7-6.4-7.9-4z" fill="#fbbc04"/><path d="M10.9 17.5V3.4L24 13.2l13.1-9.8v14.1L24 27.3z" fill="#ea4335"/><path d="M0 5v4.4l10.9 8.1V3.4L7.9 1C4.7-1.4 0 .9 0 5z" fill="#c5221f"/></svg>`,
}

const contactLinks = [
  { icon: 'instagram', label: 'Follow us', href: INSTAGRAM_URL },
  { icon: 'linkedin', label: 'Connect with us', href: LINKEDIN_URL },
  { icon: 'gmail', label: EMAIL, href: `mailto:${EMAIL}` },
]
const contactItems = contactLinks.map(({ icon, label, href }) => {
  const inner = `<span class="contact-icon contact-icon--${icon}">${icons[icon]}</span><span class="contact-label">${label}</span>`
  const external = href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : ''
  return `
            <li>${href ? `<a href="${href}"${external}>${inner}</a>` : `<span>${inner}</span>`}</li>`
}).join('')

const services = [
  {
    art: iconWebDesign,
    title: 'Web Design',
    copy: 'Clean, modern and intentional designs that make your brand stand out.',
  },
  {
    art: iconFrontend,
    title: 'Frontend Development',
    copy: 'Fast, responsive and pixel-perfect websites built with modern technologies.',
    featured: true,
  },
  {
    art: iconLanding,
    title: 'Landing Pages',
    copy: 'High-converting landing pages for products, campaigns and ideas.',
  },
  {
    art: iconUiux,
    title: 'UI/UX Consulting',
    copy: 'Strategic design solutions to improve user experience and business results.',
  },
]

const projects = [
  {
    art: artMindlap,
    name: 'Mindlap',
    blurb: 'Mental health platform with therapist booking system',
    tags: ['Website', 'Booking System', 'Healthcare'],
    href: 'https://mindlap.in',
    external: true,
  },
  {
    art: artStretford,
    name: 'Stretford Labs',
    blurb: 'Creative agency website for a modern digital studio',
    tags: ['Website', 'Creative Agency', 'Branding'],
    href: '#top',
    external: false,
  },
]

const projectCards = projects.map((p) => `
        <article class="work-card">
          <img class="work-art" src="${p.art}" alt="${p.name} website" loading="lazy" />
          <div class="work-body">
            <h3>${p.name}</h3>
            <p class="work-blurb">${p.blurb}</p>
            <ul class="work-tags">${p.tags.map((t) => `<li>${t}</li>`).join('')}</ul>
            <a class="work-go" href="${p.href}"${p.external ? ' target="_blank" rel="noopener noreferrer"' : ''} aria-label="Open ${p.name}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
            </a>
          </div>
        </article>`).join('')

const steps = [
  { title: 'Understand', lines: ['We listen, learn and', 'understand your goals,', 'challenges and ideas.'] },
  { title: 'Plan', lines: ['We create a clear', 'strategy and the right', 'solution for your business.'] },
  { title: 'Design &amp; Develop', lines: ['We design clean, modern', 'and high-performing', 'websites and applications.'] },
  { title: 'Test &amp; Launch', lines: ['We test everything', 'thoroughly and launch', 'with confidence.'] },
  { title: 'Grow Together', lines: ['We stay with you, optimize,', 'support your growth and', 'help you reach the next level.'] },
]

const stepItems = steps.map((s, i) => `
          <li class="step">
            <span class="step-num">${String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3>${s.title}</h3>
              <p>${s.lines.join('<br class="step-br" /> ')}</p>
            </div>
          </li>`).join('')

const cards = services.map((s) => `
        <article class="card${s.featured ? ' is-featured' : ''}">
          <img class="card-art" src="${s.art}" alt="" width="200" height="156" />
          <h3>${s.title}</h3>
          <p>${s.copy}</p>
        </article>`).join('')

document.querySelector('#app').innerHTML = `
  <div class="page-shell">
    <div class="hero-section">
      <header class="nav" aria-label="Primary navigation">
        <a class="brand" href="#top" aria-label="Stretford Labs home">
          <span class="brand-word">Stret<em>ford</em></span>
          <span class="brand-sub">LABS</span>
        </a>
        <nav class="nav-links">
          <a class="is-active" href="#top">Home</a>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a class="nav-cta" href="${whatsapp("Hi Stretford Labs, I'd like to start a project.")}" target="_blank" rel="noopener noreferrer">Start a project <span aria-hidden="true">&rarr;</span></a>
      </header>

      <main class="hero" id="top">
        <div class="hero-copy">
          <h1>Websites that<br /><em>Speak</em> for you</h1>
          <p class="intro">We design and develop modern websites for businesses, brands, and people who want to stand out online.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${whatsapp("Hi Stretford Labs, I'd like to start a project.")}" target="_blank" rel="noopener noreferrer">Start a project <span aria-hidden="true">&rarr;</span></a>
            <a class="btn btn-ghost" href="#work">See our work</a>
          </div>
          <div class="stats">
            <div class="stat"><strong>20<span>+</span></strong><small>Projects Delivered</small></div>
            <div class="stat"><strong>10<span>+</span></strong><small>Happy Clients</small></div>
            <div class="stat"><strong>&infin;</strong><small>Ideas in Pipeline</small></div>
          </div>
        </div>

        <img class="hero-visual" src="${heroImage}" alt="Laptop displaying a modern Aurea website on a studio desk" />
      </main>
    </div>

    <section class="services" id="services" aria-labelledby="services-title">
      <div class="services-inner">
        <header class="services-head">
          <div class="services-head-copy">
            <p class="eyebrow-xs">Our Services</p>
            <h2 id="services-title">Everything you need<br />to build <em>online</em></h2>
          </div>
          <p class="services-lead">We design and develop digital solutions that help businesses grow, look better, and perform stronger.</p>
          <a class="btn btn-outline" href="${whatsapp("Hi Stretford Labs, I'd like to get in touch.")}" target="_blank" rel="noopener noreferrer">Contact us <span aria-hidden="true">&rarr;</span></a>
        </header>

        <div class="cards">${cards}
        </div>
      </div>
    </section>

    <section class="work" id="work" aria-labelledby="work-title">
      <div class="work-inner">
        <header class="work-head">
          <div class="work-head-copy">
            <p class="eyebrow-xs">Our Work</p>
            <h2 id="work-title">Ideas into<br /><em>real</em> experiences</h2>
            <p class="work-sub">A collection of websites we&rsquo;ve designed and developed for brands, businesses, and bold ideas.</p>
          </div>
          <p class="work-lead">We turn ideas into modern, functional digital experiences that help businesses grow and stand out.</p>
          <a class="btn btn-outline work-all" href="#work">All projects <span aria-hidden="true">&rarr;</span></a>
        </header>

        <div class="work-grid">${projectCards}
        </div>
      </div>
    </section>

    <section class="about" id="about" aria-labelledby="about-title">
      <div class="about-stage">
        <img class="about-art" src="${aboutArt}" alt="Illustrated journey of a designer: an idea, planning, building, launching and growing a brand" loading="lazy" />
        <header class="about-head">
          <p class="about-eyebrow">Our Process</p>
          <h2 id="about-title">Ideas today<br />A bigger <em>tomorrow</em></h2>
          <p class="about-sub">We turn your <strong>ideas into modern</strong> digital solutions that create real business impact.</p>
        </header>
      </div>

      <div class="about-inner">
        <ol class="steps">${stepItems}
        </ol>
      </div>
    </section>

    <section class="contact" id="contact" aria-labelledby="contact-title">
      <div class="contact-stage">
        <img class="contact-art" src="${contactArt}" alt="Illustration of a designer sitting on a rooftop with a laptop, looking out over a city at sunset" loading="lazy" />
        <div class="contact-head">
          <p class="contact-eyebrow">Let&rsquo;s build together</p>
          <h2 id="contact-title">Ready to build<br /><em>what&rsquo;s next?</em></h2>
          <p class="contact-sub">Share your ideas. We&rsquo;ll handle the rest and<br class="contact-br" /> turn them into real results.</p>
          <div class="contact-actions">
            <a class="btn btn-primary contact-start" href="${whatsapp("Hi Stretford Labs, I'd like to start a project.")}" target="_blank" rel="noopener noreferrer">Start a project <span aria-hidden="true">&rarr;</span></a>
            <a class="btn contact-talk" href="${whatsapp("Hi Stretford Labs, let's talk.")}" target="_blank" rel="noopener noreferrer">Let&rsquo;s talk</a>
          </div>
          <ul class="contact-links">${contactItems}
          </ul>
        </div>
      </div>

      <footer class="site-foot">
        <a class="foot-brand" href="#top" aria-label="Stretford Labs, back to top">
          <span class="brand-word">Stret<em>ford</em></span>
          <span class="brand-sub">LABS</span>
        </a>
        <i class="foot-rule"></i>
        <i class="foot-dash"></i>
      </footer>
    </section>
  </div>
`

// On landscape desktops every section fills exactly one screen: each is laid out on a canvas at its
// comp's scale (width x height below) and zoomed to fit. The canvas grows along whichever axis the
// screen is roomier than the comp, so it always covers the full viewport.
const FIT_SECTIONS = [
  ['.hero-section', 1672, 941],
  ['.services', 1672, 941],
  ['.work', 1536, 935],
  ['.about', 1717, 806, { w: 1717, h: 715, below: 91 }],
  ['.contact', 1717, 916, { w: 1717, h: 806, below: 110 }],
]

function fitSections() {
  const root = document.documentElement
  const vw = root.clientWidth
  const vh = window.innerHeight
  const on = vw >= 1101 && vw / vh >= 1.25
  root.classList.toggle('fit', on)

  for (const [selector, w, h, art] of FIT_SECTIONS) {
    const el = document.querySelector(selector)
    if (!on) {
      el.style.cssText = ''
      continue
    }
    const zoom = Math.min(vw / w, vh / h)
    const cw = vw / zoom
    const ch = vh / zoom
    el.style.zoom = zoom
    el.style.setProperty('--cw', cw)
    el.style.setProperty('--ch', ch)
    if (art) {
      // the art spans the canvas width, except on ultra-wide screens where that would make it too tall to fit:
      // there it narrows (centered, edges faded) so the art plus whatever sits below it still fill one screen
      const artW = Math.min(cw, (ch - art.below) * art.w / art.h)
      el.style.setProperty('--art-w', artW)
      el.classList.toggle('is-narrow', artW < cw - 1)
    }
  }
}

fitSections()
window.addEventListener('resize', fitSections)

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'))
    if (!target) return
    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth' })
  })
})
