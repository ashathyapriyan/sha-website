import Link from 'next/link';

interface Props {
  icon: string;
  label: string;
  blurb: string;
  path: string;
  accent: string;
}

export default function CategoryCard({ icon, label, blurb, path, accent }: Props) {
  return (
    <Link
      href={path}
      className="category-card"
      style={{ '--cat-accent': accent } as React.CSSProperties}
    >
      <span className="category-icon">{icon}</span>
      <span className="category-name">{label}</span>
      <span className="category-blurb">{blurb}</span>
    </Link>
  );
}
