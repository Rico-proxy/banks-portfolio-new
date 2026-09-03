import type { GalleryItem } from '~/components/banks/shared/types';

export const artworksData: GalleryItem[] = [
  {
    id: 1,
    title: 'Echoes of Heritage I',
    category: 'Mixed Media',
    size: '180 x 150 cm',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
    description:
      'A rich interplay of mineral pigments, acrylic textures, and metallic leaf representing the continuity of ancestral memory.',
  },
  {
    id: 2,
    title: 'Chroma Symphony No. 4',
    category: 'Contemporary',
    size: '150 x 120 cm',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop',
    description: 'Vibrant rhythmic abstraction exploring musical cadence translated onto canvas.',
  },
  {
    id: 3,
    title: 'Queen of the Soil',
    category: 'Portraiture',
    size: '140 x 110 cm',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    description:
      'An oil on linen masterwork celebrating agrarian royalty and the resilience of indigenous matriarchs.',
  },
  {
    id: 4,
    title: 'Fragments of Time',
    category: 'Textured Canvas',
    size: '200 x 140 cm',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop',
    description: 'Heavy impasto building physical topography on heavy-duty Belgian linen.',
  },
  {
    id: 5,
    title: 'Rhythmic Horizon',
    category: 'Expressionist',
    size: '200 x 160 cm',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop',
    description: 'Dynamic color blocking capturing the shifting atmospheric light of the savannah.',
  },
  {
    id: 6,
    title: 'Ancestral Resonance',
    category: 'Mixed Media',
    size: '160 x 130 cm',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
    description:
      'Layered organic materials fused with bronze powder to create an oxidized patina effect.',
  },
];

export const artworksPageData = {
  kicker: '[ ARCHIVE: FINE ART ]',
  title: 'Paintings, Mixed Media & Portraits',
  subtitle: 'Click any artwork to inspect details and acquisition notes',
  items: artworksData,
};
