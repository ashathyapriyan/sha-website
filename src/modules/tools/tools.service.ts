import { Injectable } from '@nestjs/common';

export interface Tool {
  name: string;
  description: string;
  icon: string;
  url: string;
  tag: string;
}

@Injectable()
export class ToolsService {
  private readonly tools: Tool[] = [
    {
      name: 'JSON Formatter',
      description: 'Beautify, validate and minify JSON right in your browser.',
      icon: '🧩',
      url: '#',
      tag: 'Developer',
    },
    {
      name: 'Base64 Encoder',
      description: 'Encode and decode text and files to and from Base64.',
      icon: '🔐',
      url: '#',
      tag: 'Developer',
    },
    {
      name: 'Color Picker',
      description: 'Pick colors, generate palettes and convert HEX / RGB / HSL.',
      icon: '🎨',
      url: '#',
      tag: 'Design',
    },
    {
      name: 'Markdown Preview',
      description: 'Write Markdown and preview the rendered HTML instantly.',
      icon: '📝',
      url: '#',
      tag: 'Writing',
    },
    {
      name: 'Regex Tester',
      description: 'Test and debug regular expressions with live matches.',
      icon: '🔍',
      url: '#',
      tag: 'Developer',
    },
    {
      name: 'UUID Generator',
      description: 'Generate v4 UUIDs in bulk with one click.',
      icon: '🆔',
      url: '#',
      tag: 'Developer',
    },
    {
      name: 'SEO Analyzer',
      description: 'Check meta tags, headings and keyword density of any page.',
      icon: '📈',
      url: '#',
      tag: 'Marketing',
    },
    {
      name: 'Image Compressor',
      description: 'Compress PNG and JPEG images without losing quality.',
      icon: '🖼️',
      url: '#',
      tag: 'Design',
    },
    {
      name: 'Word Counter',
      description: 'Count words, characters and reading time for any text.',
      icon: '🔢',
      url: '#',
      tag: 'Writing',
    },
  ];

  findAll(): Tool[] {
    return this.tools;
  }
}
