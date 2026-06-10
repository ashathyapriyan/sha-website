import ShadevCategoryPage from '@/components/ShadevCategoryPage';
import { tutorials as articles } from '@/lib/shadevData';

export const metadata = { title: 'Tutorials — shadev.in' };

export default function Page() {
  return (
    <ShadevCategoryPage
      accent="#c07e1a"
      label="📚 Tutorials"
      blurb="Step-by-step build guides — from beginner REST APIs to advanced deployment strategies."
      heading="All Tutorials"
      articles={articles}
    />
  );
}
