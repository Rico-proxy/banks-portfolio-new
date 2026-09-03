import { Link } from 'react-router';
import type { GalleryItem } from './types';

type GalleryCardProps = {
  item: GalleryItem;
  href: string;
};

export function GalleryCard({ item, href }: GalleryCardProps) {
  return (
    <Link
      to={href}
      className="art-frame group w-full cursor-pointer rounded-2xl bg-studio-card p-4 text-left">
      <div className="mb-4 h-80 overflow-hidden rounded-xl">
        <img src={item.image} alt={item.title} loading="lazy" className="gallery-img h-full w-full object-cover" />
      </div>
      <span className="font-mono text-[10px] uppercase tracking-widest text-ochre-gold">
        {item.category} • {item.year}
      </span>
      <h3 className="mt-1 font-serif text-xl text-sandstone transition-colors group-hover:text-ochre-gold">{item.title}</h3>
      <p className="mt-1 font-mono text-xs text-slate-400">{item.size}</p>
    </Link>
  );
}
