import ShadevCategoryPage from '@/components/ShadevCategoryPage';
import { webDevelopment as articles } from '@/lib/shadevData';

export const metadata = { title: 'Web Development — shadev.in' };

export default function Page() {
  return (
    <ShadevCategoryPage
      accent="#9b2c8a"
      label="🌐 Web Development"
      blurb="Frameworks, tooling and the web — everything for the modern web developer."
      heading="Latest Web Development News"
      articles={articles}
    />
  );
}
