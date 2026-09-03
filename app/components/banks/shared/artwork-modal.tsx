import { Link } from 'react-router';
import { X } from 'lucide-react';
import { Button } from '~/components/ui/button';
import type { GalleryItem } from './types';

type ArtworkModalProps = {
  artwork: GalleryItem | null;
  onClose: () => void;
};

export function ArtworkModal({ artwork, onClose }: ArtworkModalProps) {
  if (!artwork) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/90 p-4 backdrop-blur-md sm:p-6">
      <div className="art-frame relative my-8 w-full max-w-4xl rounded-3xl bg-studio-card p-6 sm:p-10">
        <Button
          type="button"
          variant="unstyled"
          size="unstyled"
          aria-label="Close artwork details"
          onClick={onClose}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-ochre-gold/30 bg-studio-bg text-sandstone transition hover:bg-ochre-gold hover:text-black">
          <X className="h-4 w-4" />
        </Button>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="art-frame h-[400px] overflow-hidden rounded-2xl sm:h-[480px] lg:col-span-6">
            <img src={artwork.image} alt={artwork.title} className="h-full w-full object-cover" />
          </div>
          <div className="space-y-6 pt-4 lg:col-span-6 lg:pt-0">
            <div>
              <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-ochre-gold">
                [ {artwork.category} • {artwork.year} ]
              </span>
              <h2 className="mb-2 font-serif text-3xl font-bold text-sandstone sm:text-4xl">{artwork.title}</h2>
              <p className="font-mono text-xs text-slate-400">Dimensions: {artwork.size}</p>
            </div>
            <div className="rounded-xl border border-ochre-gold/20 bg-studio-bg p-4">
              <h4 className="mb-1 font-mono text-[10px] uppercase tracking-widest text-ochre-gold">Curatorial Note</h4>
              <p className="text-sm font-light leading-relaxed text-slate-300">{artwork.description}</p>
            </div>
            <Button
              asChild
              className="w-full rounded-none bg-ochre-gold py-4 font-mono text-xs font-bold uppercase tracking-wider text-black hover:bg-white">
              <Link to="/contact" onClick={onClose}>
                Enquire About Acquisition
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
