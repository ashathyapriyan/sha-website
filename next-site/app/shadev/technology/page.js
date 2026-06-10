import ShadevCategoryPage from '@/components/ShadevCategoryPage';
import { technology as articles } from '@/lib/shadevData';

export const metadata = { title: 'Technology — shadev.in' };

export default function Page() {
  return (
    <ShadevCategoryPage
      accent="#c07e1a"
      label="💻 Technology"
      blurb="Gadgets, hardware and software — the technology stories that matter."
      heading="Latest Technology News"
      articles={articles}
    />
  );
}
