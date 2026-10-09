import './style.css'
import heroImage from './assets/heropic-clean.webp'
import artMindlap from './assets/work-mindlap.webp'
import artStretford from './assets/work-stretford.webp'
import aboutArt from './assets/about-art.webp'
import contactArt from './assets/contact-art.webp'
import logo from './assets/logo.webp'

const WHATSAPP_NUMBER = '919292016359'
const whatsapp = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
const INSTAGRAM_URL = 'https://www.instagram.com/stretford_labs/'
const INSTAGRAM_HANDLE = '@stretford_labs'
const WHATSAPP_DISPLAY = '+91 92920 16359'
const LINKEDIN_URL = 'https://www.linkedin.com/company/stretford-labs/'
const EMAIL = 'stretfordlabs@gmail.com'

const icons = {
  instagram: `<svg viewBox="0 0 48 48" aria-hidden="true"><defs><radialGradient id="ig" cx="30%" cy="107%" r="150%"><stop offset="0" stop-color="#fdf497"/><stop offset=".05" stop-color="#fdf497"/><stop offset=".45" stop-color="#fd5949"/><stop offset=".6" stop-color="#d6249f"/><stop offset=".9" stop-color="#285aeb"/></radialGradient></defs><rect width="48" height="48" rx="12" fill="url(#ig)"/><rect x="11" y="11" width="26" height="26" rx="8" fill="none" stroke="#fff" stroke-width="3.4"/><circle cx="24" cy="24" r="6.4" fill="none" stroke="#fff" stroke-width="3.4"/><circle cx="31.6" cy="16.4" r="2" fill="#fff"/></svg>`,
  whatsapp: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 4C13 4 4 12.9 4 23.9c0 3.5.9 6.9 2.7 9.9L4 44l10.5-2.7c2.9 1.6 6.1 2.4 9.5 2.4 11 0 20-8.9 20-19.9S35 4 24 4z" fill="#25d366"/><path d="M34.6 29.4c-.6-.3-3.4-1.7-3.9-1.9-.5-.2-.9-.3-1.3.3-.4.6-1.5 1.9-1.8 2.2-.3.4-.7.4-1.3.1-.6-.3-2.5-.9-4.7-2.9-1.7-1.5-2.9-3.4-3.2-4-.3-.6 0-.9.3-1.2.3-.3.6-.7.9-1.1.3-.4.4-.6.6-1 .2-.4.1-.8 0-1.1-.1-.3-1.3-3.1-1.8-4.3-.5-1.1-.9-1-1.3-1h-1.1c-.4 0-1 .1-1.5.7-.5.6-2 1.9-2 4.7s2 5.5 2.3 5.9c.3.4 4 6.1 9.7 8.5 1.4.6 2.4.9 3.2 1.2 1.4.4 2.6.4 3.6.2 1.1-.2 3.4-1.4 3.9-2.7.5-1.3.5-2.5.3-2.7-.1-.3-.5-.4-1.1-.7z" fill="#fff"/></svg>`,
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

// stroke icons drawn on a 24px grid (card badges, arrow and the small glyphs inside the card mock-ups)
const svg = (paths) => `<svg viewBox="0 0 24 24" aria-hidden="true">${paths}</svg>`
const glyph = {
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  code: '<path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"/>',
  network: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M12 12V8"/>',
  gear: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 21v-6h6v6"/>',
  lead: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>',
  contact: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M10 21v-4h4v4"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
  crm: '<circle cx="8" cy="12" r="5"/><circle cx="16" cy="12" r="5"/>',
  check: '<path d="m7 12.5 3.2 3.2L17 9"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  card: '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19M6.5 15h4"/><circle cx="17" cy="15" r="1.4"/>',
}

// small UI mock-ups at the foot of each service card
const crmVisual = `
            <div class="cv-crm">
              <div class="cv-side">
                <div class="cv-brand">${svg(glyph.crm)}CRM</div>
                <ul>
                  <li>${svg(glyph.home)}Home</li>
                  <li class="is-on">${svg(glyph.lead)}Leads</li>
                  <li>${svg(glyph.contact)}Contacts</li>
                  <li>${svg(glyph.building)}Accounts</li>
                </ul>
              </div>
              <div class="cv-main">
                <div class="cv-title">Leads</div>
                <div class="cv-tabs"><b>All Leads</b><span>New</span><span>Contacted</span></div>
                <div class="cv-row">${svg(glyph.user)}<span><b>James Carter</b><small>Bright Solutions</small></span><em class="tag-new">New</em></div>
                <div class="cv-row">${svg(glyph.user)}<span><b>Priya Nair</b><small>GreenTech</small></span><em class="tag-done">Contacted</em></div>
              </div>
            </div>`

const codeVisual = `
            <pre class="cv-code"><code><i>// Deluge Script</i>
<b>if</b> (lead.Source == <s>"Website"</s>) {
  lead.Status = <s>"New"</s>;
  lead.Owner = <s>"Sales Team"</s>;
  lead.update();
}</code></pre>`

const hubVisual = `
            <div class="cv-hub">
              <svg class="cv-links" viewBox="0 0 300 170" aria-hidden="true"><path d="M86 48 116 70M86 124l30-22M214 48l-30 22M214 124l-30-22" /></svg>
              <span class="cv-app cv-wa">${icons.whatsapp}</span>
              <span class="cv-app cv-web">${svg(glyph.globe)}</span>
              <span class="cv-app cv-pay">${svg(glyph.card)}</span>
              <span class="cv-app cv-chat"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9.5" y="2" width="3.4" height="9.5" rx="1.7" fill="#36c5f0"/><rect x="2" y="11.1" width="9.5" height="3.4" rx="1.7" fill="#2eb67d"/><rect x="11.1" y="12.5" width="3.4" height="9.5" rx="1.7" fill="#ecb22e"/><rect x="12.5" y="9.5" width="9.5" height="3.4" rx="1.7" fill="#e01e5a"/></svg></span>
              <span class="cv-zoho">
                <span class="cv-zoho-mark"><i style="--c:#e42527"></i><i style="--c:#089949"></i><i style="--c:#226db4"></i><i style="--c:#f9b21d"></i></span>
                <small>ZOHO</small>
              </span>
            </div>`

const oneVisual = `
            <div class="cv-one">
              <ul class="cv-apps">
                <li class="is-on">${svg(glyph.grid)}Zoho One</li>
                <li>${svg(glyph.chart)}Analytics</li>
                <li>${svg(glyph.pen)}Creator</li>
                <li>${svg(glyph.crm)}CRM</li>
              </ul>
              <ul class="cv-checks">
                <li>${svg(glyph.check)}Setup</li>
                <li>${svg(glyph.check)}Customization</li>
                <li>${svg(glyph.check)}Training</li>
                <li>${svg(glyph.check)}Ongoing support</li>
              </ul>
            </div>`

const services = [
  {
    kind: 'crm',
    icon: glyph.users,
    title: 'Zoho CRM Setup',
    copy: 'Modules, pipelines, layouts and automations tailored to how you actually sell.',
    visual: crmVisual,
  },
  {
    kind: 'apps',
    icon: glyph.code,
    title: 'Custom Zoho Apps',
    copy: 'Build custom modules, layouts and Deluge scripts for processes that don&rsquo;t fit off-the-shelf.',
    visual: codeVisual,
  },
  {
    kind: 'apis',
    icon: glyph.network,
    title: 'Integrations &amp; APIs',
    copy: 'Connect Zoho with your website, WhatsApp, payment gateways and the tools you already use.',
    visual: hubVisual,
  },
  {
    kind: 'one',
    icon: glyph.gear,
    title: 'Zoho One Consulting',
    copy: 'Implementation, customization, data migration and ongoing support to get the most out of Zoho One.',
    visual: oneVisual,
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
  { title: 'Discover', lines: ['We run workshops to map', 'your sales, operations,', 'data and pain points.'], deliverable: 'Process map' },
  { title: 'Design', lines: ['We plan which Zoho app', 'owns what and how data', 'flows between them.'], deliverable: 'Solution blueprint' },
  { title: 'Build &amp; Integrate', lines: ['We configure Zoho, write', 'Deluge and connect CRM,', 'Books, payments &amp; WhatsApp.'], deliverable: 'Working system' },
  { title: 'Test &amp; Go Live', lines: ['We test every failure', 'path, migrate your data', 'and train your team.'], deliverable: 'Go-live sign-off' },
  { title: 'Support &amp; Grow', lines: ['We monitor, fix and add', 'features as your', 'business grows.'], deliverable: 'Ongoing support' },
]

const stepItems = steps.map((s, i) => `
          <li class="step">
            <span class="step-num">${String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3>${s.title}</h3>
              <p>${s.lines.join('<br class="step-br" /> ')}</p>
              <span class="step-out"><span class="step-out-label">You get</span> ${s.deliverable}</span>
            </div>
          </li>`).join('')

const cards = services.map((s, i) => `
        <article class="card card--${s.kind}">
          <div class="card-top">
            <span class="card-num">${String(i + 1).padStart(2, '0')}</span>
            <a class="card-go" href="${whatsapp(`Hi Stretford Labs, I'd like to know more about ${s.title.replace('&amp;', '&')}.`)}" target="_blank" rel="noopener noreferrer" aria-label="Ask about ${s.title}">${svg(glyph.arrow)}</a>
          </div>
          <span class="card-icon">${svg(s.icon)}</span>
          <h3>${s.title}</h3>
          <p>${s.copy}</p>
          <div class="card-visual" aria-hidden="true">${s.visual}
          </div>
        </article>`).join('')

document.querySelector('#app').innerHTML = `
  <div class="page-shell">
    <div class="hero-section">
      <header class="nav" aria-label="Primary navigation">
        <a class="brand" href="#top" aria-label="Stretford Labs home">
          <img class="brand-logo" src="${logo}" alt="Stretford Labs" width="900" height="257" />
        </a>
        <nav class="nav-links">
          <a class="is-active" href="#top">Home</a>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a class="nav-cta" href="${whatsapp("Hi Stretford Labs, I'd like help with a Zoho project.")}" target="_blank" rel="noopener noreferrer">Start a project <span aria-hidden="true">&rarr;</span></a>
      </header>

      <main class="hero" id="top">
        <div class="hero-copy">
          <h1>Zoho that<br /><em>Works</em> for you</h1>
          <p class="intro">We customize, build and integrate Zoho apps for businesses that want CRM, workflows and data that just work.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${whatsapp("Hi Stretford Labs, I'd like help with a Zoho project.")}" target="_blank" rel="noopener noreferrer">Start a project <span aria-hidden="true">&rarr;</span></a>
            <a class="btn btn-ghost" href="#assessment">Free assessment</a>
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
            <h2 id="services-title">Everything you need<br />to run on <em>Zoho</em></h2>
          </div>
          <p class="services-lead">We set up, customize and extend Zoho so your teams sell faster, work smarter, and stay in sync.</p>
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
            <p class="work-sub">A collection of Zoho solutions and websites we&rsquo;ve built for brands, businesses, and bold ideas.</p>
          </div>
          <p class="work-lead">We turn business processes into connected Zoho systems and modern, functional digital experiences.</p>
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
          <p class="about-eyebrow">How we build</p>
          <h2 id="about-title">From first call<br />to <em>go-live</em></h2>
          <p class="about-sub">Five clear stages, a <strong>deliverable at each one</strong>, and every failure path tested before launch.</p>
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
          <p class="contact-sub">Share your workflow. We&rsquo;ll build it in Zoho and<br class="contact-br" /> turn it into real results.</p>
          <div class="contact-actions">
            <a class="btn btn-primary contact-start" href="${whatsapp("Hi Stretford Labs, I'd like help with a Zoho project.")}" target="_blank" rel="noopener noreferrer">Start a project <span aria-hidden="true">&rarr;</span></a>
            <a class="btn contact-talk" href="${whatsapp("Hi Stretford Labs, let's talk.")}" target="_blank" rel="noopener noreferrer">Let&rsquo;s talk</a>
          </div>
          <ul class="contact-links">${contactItems}
          </ul>
        </div>
      </div>

      <footer class="site-foot">
        <a class="foot-brand" href="#top" aria-label="Stretford Labs, back to top">
          <img class="brand-logo" src="${logo}" alt="Stretford Labs" width="900" height="257" />
        </a>
        <i class="foot-rule"></i>
        <i class="foot-dash"></i>
      </footer>
    </section>
  </div>

  <nav class="dock" aria-label="Quick contact">
    <a class="dock-item" href="${INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer">
      <span class="dock-icon">${icons.instagram.replaceAll('"ig"', '"ig-dock"').replace('url(#ig)', 'url(#ig-dock)')}</span>
      <span class="dock-text"><strong>Follow Us</strong><small>${INSTAGRAM_HANDLE}</small></span>
    </a>
    <a class="dock-item" href="${whatsapp("Hi Stretford Labs, I'd like to know more.")}" target="_blank" rel="noopener noreferrer">
      <span class="dock-icon">${icons.whatsapp}</span>
      <span class="dock-text"><strong>Chat With Us</strong><small>${WHATSAPP_DISPLAY}</small></span>
    </a>
  </nav>

  <dialog class="quiz" id="assessment" aria-labelledby="quiz-title">
    <div class="quiz-panel">
      <div class="quiz-top">
        <p class="quiz-eyebrow">Free self-assessment</p>
        <button class="quiz-close" type="button" aria-label="Close assessment">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
        </button>
      </div>
      <h2 class="quiz-title" id="quiz-title">How much could Zoho do for your business?</h2>
      <div class="quiz-progress" aria-hidden="true"><i></i></div>
      <div class="quiz-body" aria-live="polite"></div>
    </div>
  </dialog>
`

// Self-assessment: one question per screen, then a score, suggested services and a WhatsApp hand-off
// carrying every answer. Options with a number add to the opportunity score (higher = more to gain).
const quiz = [
  { key: 'Industry', q: 'What kind of business do you run?', options: ['Retail / E-commerce', 'Professional services', 'Healthcare / Clinic', 'Real estate', 'Manufacturing / Distribution', 'Education / Training', 'Something else'] },
  { key: 'Team size', q: 'How big is your team?', options: ['Just me', '2 – 10 people', '11 – 50 people', '50+ people'] },
  { key: 'Leads tracked in', q: 'Where do you keep track of leads and customers today?', options: [['Notebooks, WhatsApp or memory', 3], ['Excel or Google Sheets', 3], ['A CRM that doesn’t quite fit', 2], ['A CRM that works well', 0]] },
  { key: 'Zoho today', q: 'Are you using Zoho already?', options: [['Not yet', 2], ['Yes, a few Zoho apps', 1], ['Yes, but it isn’t set up well', 3], ['Yes, Zoho One across the team', 1]] },
  { key: 'Manual work', q: 'How much of your team’s day goes into repetitive manual work?', options: [['Most of it', 3], ['A good chunk', 2], ['Some', 1], ['Hardly any', 0]] },
  { key: 'Connected tools', q: 'Do your tools share data with each other?', options: [['No, we copy data between them by hand', 3], ['A few are connected', 2], ['Mostly, with some gaps', 1], ['Yes, everything stays in sync', 0]] },
  { key: 'Reporting', q: 'How quickly can you see your sales and operations numbers?', options: [['It takes days to put together', 3], ['A few hours of work', 2], ['We have dashboards, but they’re incomplete', 1], ['Live, any time we want', 0]] },
  { key: 'Main goal', q: 'What would help your business most right now?', options: ['Closing more sales', 'Automating daily operations', 'Clearer reports and dashboards', 'Moving everything to Zoho', 'A custom app for our process'] },
  { key: 'Timeline', q: 'When would you like to get started?', options: ['As soon as possible', 'Within 1 – 3 months', 'Just exploring for now'] },
].map((item) => ({ ...item, options: item.options.map((o) => (Array.isArray(o) ? { label: o[0], points: o[1] } : { label: o, points: 0 })) }))

const maxScore = quiz.reduce((sum, item) => sum + Math.max(...item.options.map((o) => o.points)), 0)

const tiers = [
  { min: 67, name: 'High-impact opportunity', copy: 'Your team is losing real hours to manual work and disconnected tools. A well-built Zoho setup could change how your business runs day to day.' },
  { min: 34, name: 'Ready to level up', copy: 'You have the basics in place, but there are clear gaps where Zoho automation and integrations would save time and help you win more deals.' },
  { min: 0, name: 'Well-oiled, room to fine-tune', copy: 'Your systems are in good shape. Targeted Zoho customizations and sharper reporting can still free up time and show you more.' },
]

const quizEl = document.querySelector('.quiz')
const quizBody = quizEl.querySelector('.quiz-body')
const quizBar = quizEl.querySelector('.quiz-progress i')
const quizTitle = quizEl.querySelector('.quiz-title')
let answers = []
let current = 0

const pick = (key) => {
  const i = quiz.findIndex((item) => item.key === key)
  return quiz[i].options[answers[i]]
}

function suggestions() {
  const found = []
  const add = (name, why) => { if (!found.some((f) => f.name === name)) found.push({ name, why }) }
  const goal = pick('Main goal').label
  if (goal === 'A custom app for our process') add('Zoho Creator Apps', 'A custom app built around exactly how your team works.')
  if (pick('Leads tracked in').points >= 2 || goal === 'Closing more sales') add('Zoho CRM Setup', 'Every lead and customer in one CRM shaped around how you sell.')
  if (pick('Zoho today').points === 3 || goal === 'Moving everything to Zoho') add('Zoho One Consulting', 'A clean setup or migration so Zoho fits your business from day one.')
  if (pick('Manual work').points >= 2 || goal === 'Automating daily operations') add('Workflow Automation', 'Deluge functions and workflows that take repetitive tasks off your team.')
  if (pick('Connected tools').points >= 2) add('Integrations &amp; APIs', 'Connect Zoho to payments, WhatsApp, your website and other tools.')
  if (pick('Reporting').points >= 2 || goal === 'Clearer reports and dashboards') add('Zoho Analytics Dashboards', 'Live numbers for sales and operations, without the spreadsheet work.')
  if (!found.length) add('Zoho One Consulting', 'An audit of your current setup to find the next quick wins.')
  return found.slice(0, 3)
}

function renderQuestion() {
  const item = quiz[current]
  quizTitle.hidden = current > 0
  quizBar.style.width = `${(current / quiz.length) * 100}%`
  quizBody.innerHTML = `
    <div class="quiz-step">
      <p class="quiz-count">Question ${current + 1} of ${quiz.length}</p>
      <h3 class="quiz-q" tabindex="-1">${item.q}</h3>
      <ul class="quiz-options">${item.options.map((o, i) => `
        <li><button type="button" class="quiz-option${answers[current] === i ? ' is-picked' : ''}" data-i="${i}">${o.label}</button></li>`).join('')}
      </ul>
      ${current > 0 ? '<button type="button" class="quiz-back"><span aria-hidden="true">&larr;</span> Back</button>' : ''}
    </div>`
  quizBody.querySelector('.quiz-q').focus({ preventScroll: true })
}

function renderResult() {
  const score = Math.round((answers.reduce((sum, a, i) => sum + quiz[i].options[a].points, 0) / maxScore) * 100)
  const tier = tiers.find((t) => score >= t.min)
  const recs = suggestions()
  quizTitle.hidden = true
  quizBar.style.width = '100%'
  quizBody.innerHTML = `
    <div class="quiz-step quiz-result">
      <p class="quiz-count">Your result</p>
      <div class="quiz-score">
        <strong tabindex="-1">${score}<small>/100</small></strong>
        <span>Zoho opportunity score</span>
      </div>
      <div class="quiz-meter" aria-hidden="true"><i style="width:${score}%"></i></div>
      <h3 class="quiz-tier">${tier.name}</h3>
      <p class="quiz-copy">${tier.copy}</p>
      <p class="quiz-label">Where we&rsquo;d start</p>
      <ul class="quiz-recs">${recs.map((r) => `
        <li><strong>${r.name}</strong><span>${r.why}</span></li>`).join('')}
      </ul>
      <form class="quiz-send">
        <div class="quiz-fields">
          <label>Your name<input name="name" autocomplete="name" placeholder="Optional" /></label>
          <label>Business name<input name="business" autocomplete="organization" placeholder="Optional" /></label>
        </div>
        <button class="btn btn-primary quiz-wa" type="submit"><span class="quiz-wa-icon">${icons.whatsapp}</span>Send my results on WhatsApp</button>
        <button type="button" class="quiz-back quiz-restart">Retake the assessment</button>
      </form>
    </div>`
  quizBody.querySelector('.quiz-score strong').focus({ preventScroll: true })

  quizBody.querySelector('.quiz-send').addEventListener('submit', (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    const name = form.get('name').trim()
    const business = form.get('business').trim()
    const lines = [
      'Hi Stretford Labs, I just took the Zoho self-assessment on your website.',
      '',
      ...(name ? [`Name: ${name}`] : []),
      ...(business ? [`Business: ${business}`] : []),
      ...quiz.map((item, i) => `${item.key}: ${item.options[answers[i]].label}`),
      '',
      `Score: ${score}/100 (${tier.name})`,
      `Suggested: ${recs.map((r) => r.name.replace('&amp;', '&')).join(', ')}`,
      '',
      'I’d like to talk about next steps.',
    ]
    window.open(whatsapp(lines.join('\n')), '_blank', 'noopener')
  })
}

quizBody.addEventListener('click', (event) => {
  const option = event.target.closest('.quiz-option')
  if (option) {
    if (quizBody.classList.contains('is-moving')) return
    answers[current] = Number(option.dataset.i)
    quizBody.querySelectorAll('.quiz-option').forEach((o) => o.classList.toggle('is-picked', o === option))
    quizBody.classList.add('is-moving')
    setTimeout(() => {
      quizBody.classList.remove('is-moving')
      current += 1
      if (current < quiz.length) renderQuestion()
      else renderResult()
    }, 180)
  } else if (event.target.closest('.quiz-restart')) {
    answers = []
    current = 0
    renderQuestion()
  } else if (event.target.closest('.quiz-back')) {
    current -= 1
    renderQuestion()
  }
})

function openQuiz() {
  if (quizEl.open) return
  if (current >= quiz.length) {
    answers = []
    current = 0
  }
  document.documentElement.classList.add('quiz-open')
  quizEl.showModal()
  renderQuestion()
}

quizEl.addEventListener('close', () => {
  document.documentElement.classList.remove('quiz-open')
  if (location.hash === '#assessment') history.replaceState(null, '', location.pathname + location.search)
})
quizEl.querySelector('.quiz-close').addEventListener('click', () => quizEl.close())
quizEl.addEventListener('click', (event) => {
  if (event.target === quizEl) quizEl.close()
})
const openFromHash = () => { if (location.hash === '#assessment') openQuiz() }
window.addEventListener('hashchange', openFromHash)
openFromHash()

// On landscape desktops every section fills exactly one screen: each is laid out on a canvas at its
// comp's scale (width x height below) and zoomed to fit. The canvas grows along whichever axis the
// screen is roomier than the comp, so it always covers the full viewport.
const FIT_SECTIONS = [
  ['.hero-section', 1672, 941],
  ['.services', 1672, 941],
  ['.work', 1536, 935],
  ['.about', 1717, 845, { w: 1717, h: 715, below: 130 }],
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
    if (target === quizEl) return openQuiz()
    target.scrollIntoView({ behavior: 'smooth' })
  })
})
