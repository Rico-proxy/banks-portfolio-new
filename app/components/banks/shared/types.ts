export type PageId = 'home' | 'artworks' | 'murals' | 'sculptures' | 'kulukism' | 'about' | 'contact';

export type GalleryItem = {
  id: number;
  title: string;
  category: string;
  size: string;
  year: string;
  image: string;
  description: string;
};
