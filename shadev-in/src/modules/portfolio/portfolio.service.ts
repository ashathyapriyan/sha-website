import { Injectable } from '@nestjs/common';

export interface Project {
  name: string;
  description: string;
  tech: string[];
  url: string;
  emoji: string;
}

export interface Skill {
  name: string;
  level: number;
}

@Injectable()
export class PortfolioService {
  private readonly projects: Project[] = [
    {
      name: 'shadev.in',
      description:
        'A full-stack tech news, tutorials and tools platform built with NestJS, TypeORM and server-rendered Handlebars.',
      tech: ['NestJS', 'TypeScript', 'TypeORM', 'SQLite'],
      url: '#',
      emoji: '🌐',
    },
    {
      name: 'DevTools Suite',
      description:
        'A collection of fast, privacy-first browser utilities for developers — JSON, regex, Base64 and more.',
      tech: ['TypeScript', 'Vite', 'Web APIs'],
      url: '#',
      emoji: '🔧',
    },
    {
      name: 'AI Digest',
      description:
        'An automated newsletter that summarises the latest AI research papers using LLMs.',
      tech: ['Node.js', 'OpenAI', 'Postgres'],
      url: '#',
      emoji: '🤖',
    },
    {
      name: 'OrbitWatch',
      description:
        'A real-time dashboard tracking satellite launches and orbital debris.',
      tech: ['React', 'D3.js', 'WebSockets'],
      url: '#',
      emoji: '🛰️',
    },
  ];

  private readonly skills: Skill[] = [
    { name: 'TypeScript / Node.js', level: 95 },
    { name: 'NestJS / Express', level: 90 },
    { name: 'Frontend (HTML/CSS/JS)', level: 88 },
    { name: 'Databases (SQL/NoSQL)', level: 85 },
    { name: 'DevOps & Cloud', level: 78 },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getSkills(): Skill[] {
    return this.skills;
  }
}
