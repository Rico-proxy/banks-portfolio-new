import type { Route } from './+types/mural-detail';
import { ArtworkDetailPage } from '~/components/banks/artwork-detail/artwork-detail-page';
import { muralsData } from '~/components/banks/gallery/data/murals';

function findMural(id: string | undefined) {
  return muralsData.find((item) => String(item.id) === id);
}

export function meta({ params }: Route.MetaArgs) {
  const mural = findMural(params.artworkId);

  return [
    { title: mural ? `${mural.title} | BANKS STUDIO` : 'Mural | BANKS STUDIO' },
    { name: 'description', content: mural?.description ?? 'Mural details from Banks Studio.' },
  ];
}

export default function MuralDetail({ params }: Route.ComponentProps) {
  const mural = findMural(params.artworkId);

  if (!mural) {
    throw new Response('Mural not found', { status: 404 });
  }

  return <ArtworkDetailPage item={mural} archiveHref="/murals" archiveLabel="Murals" />;
}
