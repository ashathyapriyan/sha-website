import ShadevCategoryPage from '@/components/ShadevCategoryPage';
import { digitalMarketing as articles } from '@/lib/shadevData';

export const metadata = { title: 'Digital Marketing — shadev.in' };

export default function Page() {
  return (
    <ShadevCategoryPage
      accent="#0c8599"
      label="📈 Digital Marketing"
      blurb="SEO, growth and content — strategies and news for modern marketers."
      heading="Latest Digital Marketing News"
      articles={articles}
    />
  );
}
