import type { Route } from './+types/kulukism';
import { KulukismPage } from '~/components/banks/kulukism/kulukism-page';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Kulukism | BANKS STUDIO' },
    {
      name: 'description',
      content: 'The Kulukism movement and Holocaust Series by Banks.',
    },
  ];
}

export default function Kulukism() {
  return <KulukismPage />;
}
