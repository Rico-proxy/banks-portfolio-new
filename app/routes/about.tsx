import type { Route } from './+types/about';
import { AboutPage } from '~/components/banks/about/about-page';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'About Banks | BANKS STUDIO' },
    {
      name: 'description',
      content: 'Biography and studio background for Banks and UAL Studios.',
    },
  ];
}

export default function About() {
  return <AboutPage />;
}
