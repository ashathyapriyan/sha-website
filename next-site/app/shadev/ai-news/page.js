import ShadevCategoryPage from '@/components/ShadevCategoryPage';
import { aiNews as articles } from '@/lib/shadevData';

export const metadata = { title: 'AI News — shadev.in' };

export default function Page() {
  return (
    <ShadevCategoryPage
      accent="#0f7a52"
      label="🤖 AI News"
      blurb="Machine learning, LLMs, generative AI and research breakthroughs — stay ahead of the curve."
      heading="Latest AI News"
      articles={articles}
    />
  );
}
