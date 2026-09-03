import type { GalleryItem } from '~/components/banks/shared/types';

export const muralsData: GalleryItem[] = [
  {
    id: 101,
    title: 'Monolith of Spirit',
    category: 'Exterior Mural',
    size: '12m x 8m Wall',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop',
    description:
      'Commissioned public wall project in central Lagos, transforming urban concrete into a tapestry of cultural pride.',
  },
  {
    id: 102,
    title: 'Heritage Atrium',
    category: 'Architectural Wall',
    size: '8m x 5m Atrium',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
    description:
      'Lobby mural installation integrating metallic leaf accents that interact with natural daylight throughout the day.',
  },
  {
    id: 103,
    title: 'Chronicles of Steel',
    category: 'Facade Project',
    size: '15m x 6m',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop',
    description:
      'Large-scale corporate mural highlighting industrial advancement and traditional labor ethics.',
  },
  {
    id: 104,
    title: 'The Unified Square',
    category: 'Civic Mural',
    size: '20m x 10m',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
    description:
      'National plaza landmark mural celebrating communal unity and peace across ethnic divides.',
  },
];

export const muralsPageData = {
  kicker: '[ ARCHIVE: PUBLIC ART ]',
  title: 'Monumental Wall Murals',
  subtitle: 'Architectural & Exterior Wall Projects',
  items: muralsData,
};
