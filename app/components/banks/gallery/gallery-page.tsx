import type { GalleryItem } from '../shared/types';
import { GalleryCard } from '../shared/gallery-card';

type GalleryPageProps = {
  kicker: string;
  title: string;
  subtitle: string;
  items: GalleryItem[];
  basePath: string;
};

export function GalleryPage({ kicker, title, subtitle, items, basePath }: GalleryPageProps) {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="mb-12">
        <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-ochre-gold">{kicker}</span>
        <h2 className="font-serif text-4xl font-bold text-sandstone sm:text-6xl">{title}</h2>
        <p className="mt-3 font-mono text-xs uppercase tracking-widest text-slate-400">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <GalleryCard key={item.id} item={item} href={`${basePath}/${item.id}`} />
        ))}
      </div>
    </section>
  );
}
