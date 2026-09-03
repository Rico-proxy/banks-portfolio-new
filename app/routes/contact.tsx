import type { Route } from './+types/contact';
import { ContactPage } from '~/components/banks/contact/contact-page';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Contact | BANKS STUDIO' },
    { name: 'description', content: 'Contact Banks Studio for commissions, acquisitions, murals, and exhibitions.' },
  ];
}

export default function Contact() {
  return <ContactPage />;
}
