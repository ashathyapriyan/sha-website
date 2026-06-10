import ShadevCategoryPage from '@/components/ShadevCategoryPage';
import { blogPosts as articles } from '@/lib/shadevData';

export const metadata = { title: 'Blog — shadev.in' };

export default function Page() {
  return (
    <ShadevCategoryPage
      accent="#0f7a52"
      label="✍️ Blog"
      blurb="Essays, notes and deep dives — engineering, productivity and technology through Sha's lens."
      heading="All Posts"
      articles={articles}
    />
  );
}
