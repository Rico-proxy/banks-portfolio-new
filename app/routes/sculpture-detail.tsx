import type { Route } from './+types/sculpture-detail';
import { ArtworkDetailPage } from '~/components/banks/artwork-detail/artwork-detail-page';
import { sculpturesData } from '~/components/banks/gallery/data/sculptures';

function findSculpture(id: string | undefined) {
  return sculpturesData.find((item) => String(item.id) === id);
}

export function meta({ params }: Route.MetaArgs) {
  const sculpture = findSculpture(params.artworkId);

  return [
    { title: sculpture ? `${sculpture.title} | BANKS STUDIO` : 'Sculpture | BANKS STUDIO' },
    { name: 'description', content: sculpture?.description ?? 'Sculpture details from Banks Studio.' },
  ];
}

export default function SculptureDetail({ params }: Route.ComponentProps) {
  const sculpture = findSculpture(params.artworkId);

  if (!sculpture) {
    throw new Response('Sculpture not found', { status: 404 });
  }

  return <ArtworkDetailPage item={sculpture} archiveHref="/sculptures" archiveLabel="Sculptures" />;
}
