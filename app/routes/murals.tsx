import type { Route } from './+types/murals';
import { GalleryRoutePage } from '~/components/banks/gallery/gallery-route-page';
import { muralsPageData } from '~/components/banks/gallery/data/murals';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Murals | BANKS STUDIO' },
    {
      name: 'description',
      content: 'Monumental wall murals and public art projects by Banks.',
    },
  ];
}

export default function Murals() {
  return <GalleryRoutePage {...muralsPageData} />;
}
