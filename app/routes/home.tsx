import type { Route } from './+types/home';
import { HomePage } from '~/components/banks/home/home-page';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'BANKS STUDIO // Visuals, Murals & Monuments' },
    {
      name: 'description',
      content:
        'Portfolio website for Banks, featuring paintings, murals, sculptures, Kulukism works, biography, and studio enquiries.',
    },
  ];
}

export default function Home() {
  return <HomePage />;
}
