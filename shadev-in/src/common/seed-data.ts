import { News } from '../modules/news/news.entity';
import { Blog } from '../modules/blog/blog.entity';
import { Tutorial } from '../modules/tutorials/tutorial.entity';

const img = (q: string) =>
  `https://source.unsplash.com/640x360/?${encodeURIComponent(q)}`;

export const seedNews: Partial<News>[] = [
  // AI News
  {
    title: 'New Open-Source LLM Rivals Frontier Models on Reasoning',
    slug: 'open-source-llm-rivals-frontier-models',
    category: 'ai-news',
    imageUrl: img('artificial,intelligence'),
    content:
      'A newly released open-weight large language model has matched proprietary frontier systems on several reasoning and coding benchmarks. The model was trained on a curated multilingual corpus and uses a mixture-of-experts architecture to keep inference costs low. Researchers say the release lowers the barrier for startups that previously could not afford closed APIs. Early adopters report strong performance on long-context tasks and agentic workflows, while critics caution that benchmark scores do not always translate to real-world reliability.',
  },
  {
    title: 'AI Agents Move From Demos to Production Workflows',
    slug: 'ai-agents-move-to-production',
    category: 'ai-news',
    imageUrl: img('robot,automation'),
    content:
      'Companies are increasingly wiring autonomous AI agents into real business processes, from customer support triage to automated code review. Unlike last year\'s flashy demos, the new wave focuses on guardrails, evaluation harnesses and human-in-the-loop checkpoints. Vendors are shipping tooling for tracing every tool call an agent makes, which makes debugging and auditing far easier. Analysts expect agent orchestration to become a standard layer of the modern application stack.',
  },
  {
    title: 'Regulators Draft First Rules for Generative AI Transparency',
    slug: 'regulators-draft-genai-transparency-rules',
    category: 'ai-news',
    imageUrl: img('law,technology'),
    content:
      'Policymakers have published a draft framework requiring generative AI providers to disclose training data sources and label synthetic media. The proposal includes watermarking standards and incident-reporting obligations for high-risk deployments. Industry groups welcomed the clarity but warned that overly broad disclosure could expose trade secrets. The consultation period runs for ninety days before a final vote.',
  },

  // Space News
  {
    title: 'Reusable Rocket Completes Record Tenth Flight',
    slug: 'reusable-rocket-record-tenth-flight',
    category: 'space-news',
    imageUrl: img('rocket,launch'),
    content:
      'A first-stage booster has flown and landed for the tenth time, setting a new reusability record and pushing launch costs to historic lows. Engineers refurbished the booster in under three weeks, a turnaround that hints at aircraft-like operations becoming routine. The milestone strengthens the case for large constellations and crewed deep-space missions. The company says future boosters are designed for even higher flight counts.',
  },
  {
    title: 'New Telescope Captures Sharpest Image of Distant Galaxy',
    slug: 'telescope-sharpest-image-distant-galaxy',
    category: 'space-news',
    imageUrl: img('galaxy,space'),
    content:
      'Astronomers have released a stunning new image of a galaxy more than twelve billion light-years away, revealing structure that was previously invisible. The observation used a combination of space-based infrared optics and ground-based adaptive optics. Scientists hope the data will refine models of how the earliest galaxies formed stars. The image is already being called one of the most detailed views of the early universe.',
  },
  {
    title: 'Lunar Mission Targets South Pole Water Ice',
    slug: 'lunar-mission-south-pole-water-ice',
    category: 'space-news',
    imageUrl: img('moon,lunar'),
    content:
      'An upcoming robotic lander will drill into the Moon\'s south pole to sample suspected deposits of water ice. If confirmed, the ice could one day be converted into drinking water, breathable oxygen and rocket propellant. The mission carries a suite of spectrometers and a small rover to map ice distribution. Success would be a major step toward a sustainable lunar presence.',
  },

  // Technology
  {
    title: 'Next-Gen Chips Push On-Device AI to New Limits',
    slug: 'next-gen-chips-on-device-ai',
    category: 'technology',
    imageUrl: img('computer,chip'),
    content:
      'The latest mobile processors ship with dedicated neural engines capable of running multi-billion-parameter models entirely on-device. Running models locally improves privacy and slashes latency, enabling real-time translation and image generation without a network connection. Manufacturers are competing on tokens-per-watt rather than raw clock speed. Developers now have new APIs to offload inference to the hardware.',
  },
  {
    title: 'USB-C Becomes the Universal Standard Across Devices',
    slug: 'usb-c-universal-standard',
    category: 'technology',
    imageUrl: img('usb,gadget'),
    content:
      'Following new regulations, virtually every new phone, tablet and laptop now ships with a USB-C port for charging and data. The shift reduces electronic waste and simplifies life for consumers juggling multiple cables. Accessory makers are racing to support higher power delivery and faster data rates. Some niche devices still resist the change, but the industry direction is clear.',
  },
  {
    title: 'Quantum Computing Hits Error-Correction Milestone',
    slug: 'quantum-error-correction-milestone',
    category: 'technology',
    imageUrl: img('quantum,technology'),
    content:
      'Researchers have demonstrated a logical qubit that stays stable longer than its physical components, a key threshold for fault-tolerant quantum computing. The result relied on a surface-code scheme that detects and corrects errors in real time. While practical quantum advantage remains years away, the breakthrough validates a path toward scalable machines. Funding for quantum startups is expected to accelerate.',
  },

  // Web Development
  {
    title: 'Server Components Reshape How We Build Web Apps',
    slug: 'server-components-reshape-web-apps',
    category: 'web-development',
    imageUrl: img('code,programming'),
    content:
      'Server-first rendering patterns are changing the default architecture of modern web applications. By moving data fetching and rendering to the server, teams ship less JavaScript and improve time-to-interactive. The trade-off is a more complex mental model around what runs where. Frameworks are converging on conventions that make the boundary between server and client explicit.',
  },
  {
    title: 'CSS Gets Native Nesting and Container Queries',
    slug: 'css-native-nesting-container-queries',
    category: 'web-development',
    imageUrl: img('css,web'),
    content:
      'Browsers now ship native CSS nesting and container queries, reducing the need for preprocessors and JavaScript hacks. Container queries let components adapt to their parent\'s size rather than the viewport, unlocking truly reusable design systems. Developers are gradually refactoring legacy stylesheets to take advantage. The features are widely supported across evergreen browsers.',
  },
  {
    title: 'Edge Runtimes Bring APIs Closer to Users',
    slug: 'edge-runtimes-apis-closer-to-users',
    category: 'web-development',
    imageUrl: img('network,server'),
    content:
      'Deploying functions to edge locations around the world is becoming a mainstream way to cut latency for dynamic content. Edge runtimes trade full Node.js compatibility for fast cold starts and global distribution. Teams use them for authentication, personalization and lightweight APIs. The ecosystem of edge-compatible libraries continues to grow quickly.',
  },

  // Digital Marketing
  {
    title: 'AI Search Is Rewriting the SEO Playbook',
    slug: 'ai-search-rewriting-seo-playbook',
    category: 'digital-marketing',
    imageUrl: img('marketing,seo'),
    content:
      'As AI-generated answers appear directly in search results, marketers are rethinking how they earn visibility. The focus is shifting from ranking links to becoming a cited source within AI summaries. Structured data, authoritative content and brand mentions matter more than ever. Early experiments suggest concise, well-sourced pages perform best in this new landscape.',
  },
  {
    title: 'First-Party Data Becomes the Marketing Currency',
    slug: 'first-party-data-marketing-currency',
    category: 'digital-marketing',
    imageUrl: img('analytics,data'),
    content:
      'With third-party cookies fading, brands are investing heavily in first-party data collected directly from their audiences. Loyalty programs, newsletters and gated content are the new pipelines for understanding customers. Privacy-respecting analytics and clean data infrastructure are now competitive advantages. Marketers who own their data are less exposed to platform changes.',
  },
  {
    title: 'Short-Form Video Dominates Content Strategy',
    slug: 'short-form-video-dominates-content',
    category: 'digital-marketing',
    imageUrl: img('video,social'),
    content:
      'Short, vertical video continues to deliver the highest engagement across social platforms, reshaping content calendars. Brands are building in-house creator teams to keep up with the relentless publishing cadence. Authenticity and speed often beat high production value. The challenge is measuring downstream impact on revenue rather than vanity metrics.',
  },
];

export const seedBlog: Partial<Blog>[] = [
  {
    title: 'Why I Built shadev.in with NestJS',
    slug: 'why-i-built-shadev-with-nestjs',
    author: 'Sha',
    category: 'engineering',
    imageUrl: img('developer,laptop'),
    content:
      'I wanted a single place to publish news, tutorials and the tools I build, without juggling a separate frontend framework. NestJS gave me a clean, modular structure with first-class TypeScript support and a familiar decorator-based API. Server-rendered Handlebars keeps pages fast and SEO-friendly, while TypeORM with SQLite means zero external dependencies for local development. In this post I walk through the architecture decisions, the trade-offs of server rendering, and how the seed-on-boot pattern keeps the project easy to clone and run.',
  },
  {
    title: 'The Underrated Power of Boring Technology',
    slug: 'underrated-power-of-boring-technology',
    author: 'Sha',
    category: 'opinion',
    imageUrl: img('engineering,team'),
    content:
      'Every team is tempted by the newest framework, but shipping reliable software usually rewards boring, well-understood tools. Boring technology has predictable failure modes, deep documentation and a large hiring pool. That predictability frees up your innovation budget for the parts of the product that actually differentiate you. This essay makes the case for choosing proven tools by default and spending your novelty tokens carefully.',
  },
  {
    title: 'How I Stay Productive as a Solo Developer',
    slug: 'how-i-stay-productive-solo-developer',
    author: 'Sha',
    category: 'productivity',
    imageUrl: img('workspace,desk'),
    content:
      'Working alone means you are the engineer, designer, marketer and support team all at once. The key is ruthless prioritization and building systems that reduce decision fatigue. I batch similar work, automate anything I do more than twice, and keep a tiny backlog so I always know the single most important thing to do next. Here are the habits and tools that keep me shipping without burning out.',
  },
];

export const seedTutorials: Partial<Tutorial>[] = [
  {
    title: 'Build a REST API with NestJS and TypeORM',
    slug: 'build-rest-api-nestjs-typeorm',
    level: 'Beginner',
    category: 'backend',
    imageUrl: img('api,backend'),
    content:
      'In this tutorial you will scaffold a NestJS project, connect it to a SQLite database with TypeORM, and expose a fully working CRUD REST API. We start by generating a module, controller and service, then define an entity and wire up a repository. Along the way you will learn how dependency injection works in Nest, how to validate request bodies with DTOs, and how to handle errors cleanly with exception filters. By the end you will have a deployable API you can extend with authentication and pagination.',
  },
  {
    title: 'Server-Side Rendering with Handlebars in NestJS',
    slug: 'ssr-handlebars-nestjs',
    level: 'Intermediate',
    category: 'fullstack',
    imageUrl: img('html,template'),
    content:
      'Single-page apps are not always the answer. In this guide we configure NestJS to render HTML on the server using the Handlebars template engine. You will set up a master layout, reusable partials for the navbar and footer, and pass data from controllers into views with the @Render decorator. We also cover registering custom helpers for formatting dates and truncating text, and serving static CSS and JavaScript. The result is a fast, SEO-friendly multi-page site with no client framework required.',
  },
  {
    title: 'Deploy a Node.js App with Zero Downtime',
    slug: 'deploy-nodejs-zero-downtime',
    level: 'Advanced',
    category: 'devops',
    imageUrl: img('server,deploy'),
    content:
      'Shipping updates without dropping requests requires a deliberate deployment strategy. This tutorial covers process managers, health checks, graceful shutdown handling and rolling restarts. You will learn how to drain in-flight connections before swapping versions and how to use a reverse proxy to route traffic. We also discuss blue-green and canary patterns so you can choose the right approach for your scale. Each step includes the exact commands and configuration you need.',
  },
];
