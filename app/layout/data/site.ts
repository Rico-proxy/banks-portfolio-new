import type { PageId } from '~/components/banks/shared/types';

export const siteInfo = {
  name: 'BANKS STUDIO',
  copyright: 'BANKS STUDIO & UAL STUDIOS © 2026. ALL RIGHTS RESERVED.',
  credit: 'Built by Rico',
};

export const navItems: { page: PageId; label: string; href: string }[] = [
  { page: 'home', label: 'Home', href: '/' },
  { page: 'artworks', label: 'Artworks (Canvases)', href: '/artworks' },
  { page: 'murals', label: 'Murals', href: '/murals' },
  { page: 'sculptures', label: 'Sculptures', href: '/sculptures' },
  { page: 'kulukism', label: 'Kulukism', href: '/kulukism' },
  { page: 'about', label: 'About', href: '/about' },
  { page: 'contact', label: 'Contact', href: '/contact' },
];

export const footerLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Artavita', href: '#' },
  { label: 'Email', href: 'mailto:studio@banks.example' },
];
