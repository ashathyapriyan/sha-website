import ShadevCategoryPage from '@/components/ShadevCategoryPage';
import { spaceNews as articles } from '@/lib/shadevData';

export const metadata = { title: 'Space News — shadev.in' };

export default function Page() {
  return (
    <ShadevCategoryPage
      accent="#3b5bdb"
      label="🚀 Space News"
      blurb="Rockets, missions and astronomy — the latest in space exploration and discovery."
      heading="Latest Space News"
      articles={articles}
    />
  );
}
