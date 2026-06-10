import type { Tool } from '@/lib/types';

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.url}
      className="tool-card"
      target={tool.url !== '#' ? '_blank' : undefined}
      rel="noopener noreferrer"
    >
      <span className="tool-icon">{tool.icon}</span>
      <span className="tool-name">{tool.name}</span>
      <p className="tool-desc">{tool.description}</p>
      <span className="tool-tag">{tool.tag}</span>
    </a>
  );
}
