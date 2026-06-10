import type { Metadata } from 'next';
import { getTools } from '@/lib/api';
import ToolCard from '@/components/ToolCard';
import CategoryHero from '@/components/CategoryHero';

export const metadata: Metadata = {
  title: 'Developer Tools',
  description: 'Free developer and design utilities.',
};

export default async function ToolsPage() {
  const tools = await getTools();

  return (
    <>
      <CategoryHero accent="#0c8599" label="🔧 Tools" description="Free developer and design utilities." />
      <section className="section">
        <div className="tools-grid">
          {tools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </section>
    </>
  );
}
