import type { Route } from './+types/artworks';
import { GalleryRoutePage } from '~/components/banks/gallery/gallery-route-page';
import { artworksPageData } from '~/components/banks/gallery/data/artworks';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Artworks | BANKS STUDIO' },
    {
      name: 'description',
      content: 'Paintings, mixed media, and portrait works by Banks.',
    },
  ];
}

export default function Artworks() {
  return <GalleryRoutePage {...artworksPageData} />;
}
