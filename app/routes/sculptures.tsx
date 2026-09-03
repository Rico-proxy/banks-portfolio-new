import type { Route } from './+types/sculptures';
import { GalleryRoutePage } from '~/components/banks/gallery/gallery-route-page';
import { sculpturesPageData } from '~/components/banks/gallery/data/sculptures';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Sculptures | BANKS STUDIO' },
    {
      name: 'description',
      content: 'Bronze, metal, and monumental sculptural works by Banks.',
    },
  ];
}

export default function Sculptures() {
  return <GalleryRoutePage {...sculpturesPageData} />;
}
