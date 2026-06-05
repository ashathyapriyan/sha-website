import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

const CATEGORIES = [
  { label: 'AI News', icon: '🤖', path: '/ai-news', accent: '#0f7a52', blurb: 'Machine learning, LLMs & AI research.' },
  { label: 'Space News', icon: '🚀', path: '/space-news', accent: '#3b5bdb', blurb: 'Rockets, missions & astronomy.' },
  { label: 'Technology', icon: '💻', path: '/technology', accent: '#c07e1a', blurb: 'Gadgets, hardware & software.' },
  { label: 'Web Development', icon: '🌐', path: '/web-development', accent: '#9b2c8a', blurb: 'Frameworks, tooling & the web.' },
  { label: 'Digital Marketing', icon: '📈', path: '/digital-marketing', accent: '#0c8599', blurb: 'SEO, growth & content.' },
  { label: 'Tutorials', icon: '📚', path: '/tutorials', accent: '#c07e1a', blurb: 'Step-by-step build guides.' },
  { label: 'Tools', icon: '🔧', path: '/tools', accent: '#0c8599', blurb: 'Free developer & design utilities.' },
  { label: 'Portfolio', icon: '👤', path: '/portfolio', accent: '#9b2c8a', blurb: 'Projects & work by Sha.' },
  { label: 'Blog', icon: '✍️', path: '/blog', accent: '#0f7a52', blurb: 'Essays, notes & deep dives.' },
  { label: 'Contact', icon: '📬', path: '/contact', accent: '#111111', blurb: 'Get in touch.' },
];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async home() {
    const data = await this.appService.getHomeData();
    return {
      title: 'Tech News, Tutorials & Tools',
      description:
        'shadev.in — the latest in AI, space, technology, web development and digital marketing, plus tutorials and free tools.',
      home: true,
      categories: CATEGORIES,
      ...data,
    };
  }

  @Get('api/posts')
  async apiPosts() {
    return this.appService.getApiPosts();
  }
}
