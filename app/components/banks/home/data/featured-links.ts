import type { PageId } from '~/components/banks/shared/types';

export type FeatureLink = {
  page: PageId;
  href: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
};

export const featureLinks: FeatureLink[] = [
  {
    page: 'artworks',
    href: '/artworks',
    title: 'Canvases & Paintings',
    subtitle: 'Curated Masterpieces',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
    alt: 'Colorful contemporary canvas artwork',
  },
  {
    page: 'kulukism',
    href: '/kulukism',
    title: 'The Kulukism Movement',
    subtitle: 'Holocaust & Monochrome Series',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop',
    alt: 'Abstract color field artwork',
  },
  {
    page: 'sculptures',
    href: '/sculptures',
    title: 'Bronze Sculptures',
    subtitle: 'Institutional Monuments',
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=800&auto=format&fit=crop',
    alt: 'Bronze-toned sculptural form',
  },
];
