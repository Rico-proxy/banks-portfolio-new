import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '~/components/ui/button';
import type { GalleryItem } from '../shared/types';

type ArtworkDetailPageProps = {
  item: GalleryItem;
  archiveHref: string;
  archiveLabel: string;
};

export function ArtworkDetailPage({ item, archiveHref, archiveLabel }: ArtworkDetailPageProps) {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <Button
        asChild
        variant="ghost"
        className="mb-8 h-auto px-0 font-mono text-xs uppercase tracking-widest text-slate-400 hover:bg-transparent hover:text-ochre-gold">
        <Link to={archiveHref}>
          <ArrowLeft className="h-4 w-4" />
          Back to {archiveLabel}
        </Link>
      </Button>

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="art-frame h-[520px] overflow-hidden rounded-3xl lg:col-span-6">
          <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
        </div>

        <div className="space-y-8 lg:col-span-6">
          <div>
            <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-ochre-gold">
              [ {item.category} • {item.year} ]
            </span>
            <h1 className="font-serif text-4xl font-bold leading-tight text-sandstone sm:text-6xl">{item.title}</h1>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-slate-400">Dimensions: {item.size}</p>
          </div>

          <div className="art-frame rounded-2xl bg-studio-card p-6">
            <h2 className="mb-3 font-mono text-[10px] uppercase tracking-widest text-ochre-gold">Curatorial Note</h2>
            <p className="text-base font-light leading-relaxed text-slate-300">{item.description}</p>
          </div>

          <Button
            asChild
            className="h-auto rounded-none bg-ochre-gold px-7 py-4 font-mono text-xs font-bold uppercase tracking-wider text-black hover:bg-white">
            <Link to="/contact">
              Enquire About Acquisition
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
