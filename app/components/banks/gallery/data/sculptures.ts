import type { GalleryItem } from '~/components/banks/shared/types';

export const sculpturesData: GalleryItem[] = [
  {
    id: 201,
    title: 'The Bronze Ancestor',
    category: 'Cast Bronze',
    size: 'life-size Monument',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=800&auto=format&fit=crop',
    description:
      'Traditional lost-wax bronze casting celebrating regal iconography and historical continuity.',
  },
  {
    id: 202,
    title: 'Sentinel of Valor',
    category: 'Welded Steel',
    size: '280 cm Height',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
    description: 'Recycled industrial steel welded into an imposing guardian figure representing resilience.',
  },
  {
    id: 203,
    title: 'The Sovereign Form',
    category: 'Abstract Metal',
    size: '210 cm Height',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
    description:
      'Polished brass and oxidized iron sculpture commissioned for corporate headquarters plaza.',
  },
];

export const sculpturesPageData = {
  kicker: '[ ARCHIVE: 3D FORMS ]',
  title: 'Bronze & Metal Masterworks',
  subtitle: 'Cast Bronze & Welded Steel Monuments',
  items: sculpturesData,
};
