const img = (seed) => `https://picsum.photos/seed/${seed}/640/360`;

export const aiNews = [
  { title: 'New Open-Source LLM Rivals Frontier Models on Reasoning', excerpt: 'A newly released open-weight large language model has matched proprietary frontier systems on several reasoning and coding benchmarks. The model was trained on a curated multilingual corpus and uses a mixture-of-experts architecture to keep inference costs low.', image: img('artificialintelligen'), badge: 'AI News', meta: 'June 2026' },
  { title: 'AI Agents Move From Demos to Production Workflows', excerpt: "Companies are increasingly wiring autonomous AI agents into real business processes, from customer support triage to automated code review. Unlike last year's flashy demos, the new wave focuses on guardrails, evaluation harnesses and human-in-the-loop checkpoints.", image: img('robotautomation'), badge: 'AI News', meta: 'June 2026' },
  { title: 'Regulators Draft First Rules for Generative AI Transparency', excerpt: 'Policymakers have published a draft framework requiring generative AI providers to disclose training data sources and label synthetic media. The proposal includes watermarking standards and incident-reporting obligations for high-risk deployments.', image: img('lawtechnology'), badge: 'AI News', meta: 'June 2026' },
];

export const spaceNews = [
  { title: 'Reusable Rocket Completes Record Tenth Flight', excerpt: 'A first-stage booster has flown and landed for the tenth time, setting a new reusability record and pushing launch costs to historic lows.', image: img('rocketlaunch'), badge: 'Space', meta: 'June 2026' },
  { title: 'New Telescope Captures Sharpest Image of Distant Galaxy', excerpt: 'Astronomers have released a stunning new image of a galaxy more than twelve billion light-years away, revealing structure previously invisible.', image: img('galaxyspace'), badge: 'Space', meta: 'June 2026' },
  { title: 'Lunar Mission Targets South Pole Water Ice', excerpt: "An upcoming robotic lander will drill into the Moon's south pole to sample suspected deposits of water ice that could support future crewed missions.", image: img('moonlunar'), badge: 'Space', meta: 'June 2026' },
];

export const technology = [
  { title: 'Next-Gen Chips Push On-Device AI to New Limits', excerpt: 'The latest mobile processors ship with dedicated neural engines capable of running multi-billion-parameter models entirely on-device.', image: img('computerchip'), badge: 'Technology', meta: 'June 2026' },
  { title: 'USB-C Becomes the Universal Standard Across Devices', excerpt: 'Following new regulations, virtually every new phone, tablet and laptop now ships with a USB-C port for charging and data.', image: img('usbgadget'), badge: 'Technology', meta: 'June 2026' },
  { title: 'Quantum Computing Hits Error-Correction Milestone', excerpt: 'Researchers have demonstrated a logical qubit that stays stable longer than its physical components, a key threshold for fault-tolerant quantum computing.', image: img('quantumtechnology'), badge: 'Technology', meta: 'June 2026' },
];

export const webDevelopment = [
  { title: 'Server Components Reshape How We Build Web Apps', excerpt: 'Server-first rendering patterns are changing the default architecture of modern web applications, shipping less JavaScript and improving time-to-interactive.', image: img('codeprogramming'), badge: 'Web Dev', meta: 'June 2026' },
  { title: 'CSS Gets Native Nesting and Container Queries', excerpt: 'Browsers now ship native CSS nesting and container queries, reducing the need for preprocessors and unlocking truly reusable design systems.', image: img('cssweb'), badge: 'Web Dev', meta: 'June 2026' },
  { title: 'Edge Runtimes Bring APIs Closer to Users', excerpt: 'Deploying functions to edge locations around the world is becoming a mainstream way to cut latency for dynamic content.', image: img('networkserver'), badge: 'Web Dev', meta: 'June 2026' },
];

export const digitalMarketing = [
  { title: 'AI Search Is Rewriting the SEO Playbook', excerpt: 'As AI-generated answers appear directly in search results, marketers are rethinking how they earn visibility. The focus is shifting from ranking links to becoming a cited source.', image: img('marketingseo'), badge: 'Marketing', meta: 'June 2026' },
  { title: 'First-Party Data Becomes the Marketing Currency', excerpt: 'With third-party cookies fading, brands are investing heavily in first-party data collected directly from their audiences via loyalty programs and newsletters.', image: img('analyticsdata'), badge: 'Marketing', meta: 'June 2026' },
  { title: 'Short-Form Video Dominates Content Strategy', excerpt: 'Short, vertical video continues to deliver the highest engagement across social platforms, reshaping content calendars and brand strategies.', image: img('videosocial'), badge: 'Marketing', meta: 'June 2026' },
];

export const tutorials = [
  { title: 'Build a REST API with NestJS and TypeORM', excerpt: 'Scaffold a NestJS project, connect it to SQLite with TypeORM, and expose a fully working CRUD REST API with validation and error handling.', image: img('apibackend'), badge: 'Beginner', meta: 'June 2026' },
  { title: 'Server-Side Rendering with Handlebars in NestJS', excerpt: 'Configure NestJS to render HTML on the server using Handlebars. Set up layouts, reusable partials, custom helpers and static asset serving.', image: img('htmltemplate'), badge: 'Intermediate', meta: 'June 2026' },
  { title: 'Deploy a Node.js App with Zero Downtime', excerpt: 'Shipping updates without dropping requests requires a deliberate deployment strategy. Learn process managers, health checks and rolling restarts.', image: img('serverdeploy'), badge: 'Advanced', meta: 'June 2026' },
];

export const blogPosts = [
  { title: 'Why I Built shadev.in with NestJS', excerpt: 'NestJS gave me a clean, modular structure with first-class TypeScript support. Server-rendered Handlebars keeps pages fast and SEO-friendly, while TypeORM with SQLite means zero external dependencies.', image: img('developerlaptop'), badge: 'Engineering', meta: 'June 2026' },
  { title: 'The Underrated Power of Boring Technology', excerpt: 'Every team is tempted by the newest framework, but shipping reliable software usually rewards boring, well-understood tools with predictable failure modes and deep documentation.', image: img('engineeringteam'), badge: 'Opinion', meta: 'June 2026' },
  { title: 'How I Stay Productive as a Solo Developer', excerpt: 'Working alone means you are the engineer, designer, marketer and support team all at once. The key is ruthless prioritization and building systems that reduce decision fatigue.', image: img('workspacedesk'), badge: 'Productivity', meta: 'June 2026' },
];

export const tools = [
  { icon: '🧩', name: 'JSON Formatter', desc: 'Beautify, validate and minify JSON right in your browser.', tag: 'Developer', href: '#' },
  { icon: '🔐', name: 'Base64 Encoder', desc: 'Encode and decode text and files to and from Base64.', tag: 'Developer', href: '#' },
  { icon: '🎨', name: 'Color Picker', desc: 'Pick colors, generate palettes and convert HEX / RGB / HSL.', tag: 'Design', href: '#' },
  { icon: '📝', name: 'Markdown Preview', desc: 'Write Markdown and preview the rendered HTML instantly.', tag: 'Writing', href: '#' },
  { icon: '🔍', name: 'Regex Tester', desc: 'Test and debug regular expressions with live matches.', tag: 'Developer', href: '#' },
  { icon: '🆔', name: 'UUID Generator', desc: 'Generate v4 UUIDs in bulk with one click.', tag: 'Developer', href: '#' },
  { icon: '📈', name: 'SEO Analyzer', desc: 'Check meta tags, headings and keyword density of any page.', tag: 'Marketing', href: '/seo-analyzer' },
  { icon: '🖼️', name: 'Image Compressor', desc: 'Compress PNG and JPEG images without losing quality.', tag: 'Design', href: '#' },
  { icon: '🔢', name: 'Word Counter', desc: 'Count words, characters and reading time for any text.', tag: 'Writing', href: '#' },
];

export const projects = [
  { emoji: '🌐', title: 'shadev.in', excerpt: 'A full-stack tech news, tutorials and tools platform built with NestJS, TypeORM and server-rendered Handlebars.', tech: ['NestJS', 'TypeScript', 'TypeORM', 'SQLite'] },
  { emoji: '🔧', title: 'DevTools Suite', excerpt: 'A collection of fast, privacy-first browser utilities for developers — JSON, regex, Base64 and more.', tech: ['TypeScript', 'Vite', 'Web APIs'] },
  { emoji: '🤖', title: 'AI Digest', excerpt: 'An automated newsletter that summarises the latest AI research papers using LLMs.', tech: ['Node.js', 'OpenAI', 'Postgres'] },
  { emoji: '🛰️', title: 'OrbitWatch', excerpt: 'A real-time dashboard tracking satellite launches and orbital debris.', tech: ['React', 'D3.js', 'WebSockets'] },
];

export const skills = [
  { name: 'TypeScript / Node.js', pct: 95 },
  { name: 'NestJS / Express', pct: 90 },
  { name: 'Frontend (HTML/CSS/JS)', pct: 88 },
  { name: 'Databases (SQL/NoSQL)', pct: 85 },
  { name: 'DevOps & Cloud', pct: 78 },
];

export const categories = [
  { href: '/shadev/ai-news', icon: '🤖', name: 'AI News', blurb: 'Models, agents, regulation and research', accent: '#0f7a52' },
  { href: '/shadev/space-news', icon: '🚀', name: 'Space News', blurb: 'Launches, discoveries and exploration', accent: '#3b4a8f' },
  { href: '/shadev/technology', icon: '💻', name: 'Technology', blurb: 'Hardware, chips and computing trends', accent: '#7c3aed' },
  { href: '/shadev/web-development', icon: '🌐', name: 'Web Dev', blurb: 'Frameworks, standards and best practices', accent: '#0e7490' },
  { href: '/shadev/digital-marketing', icon: '📈', name: 'Marketing', blurb: 'SEO, content and growth strategies', accent: '#c07e1a' },
  { href: '/shadev/tutorials', icon: '📚', name: 'Tutorials', blurb: 'Step-by-step guides for developers', accent: '#0f7a52' },
  { href: '/shadev/tools', icon: '🔧', name: 'Tools', blurb: 'Free utilities built by Sha', accent: '#dc2626' },
  { href: '/shadev/portfolio', icon: '👤', name: 'Portfolio', blurb: 'Projects, skills and background', accent: '#0f7a52' },
  { href: '/shadev/blog', icon: '✍️', name: 'Blog', blurb: 'Opinions and long-form writing', accent: '#111111' },
  { href: '/shadev/contact', icon: '📬', name: 'Contact', blurb: 'Get in touch with Sha', accent: '#0f7a52' },
];
