import type { Route } from './+types/kulukism-detail';
import { ArtworkDetailPage } from '~/components/banks/artwork-detail/artwork-detail-page';
import { kulukismData } from '~/components/banks/kulukism/data/kulukism';

function findKulukismWork(id: string | undefined) {
  return kulukismData.find((item) => String(item.id) === id);
}

export function meta({ params }: Route.MetaArgs) {
  const artwork = findKulukismWork(params.artworkId);

  return [
    { title: artwork ? `${artwork.title} | BANKS STUDIO` : 'Kulukism Artwork | BANKS STUDIO' },
    { name: 'description', content: artwork?.description ?? 'Kulukism artwork details from Banks Studio.' },
  ];
}

export default function KulukismDetail({ params }: Route.ComponentProps) {
  const artwork = findKulukismWork(params.artworkId);

  if (!artwork) {
    throw new Response('Kulukism artwork not found', { status: 404 });
  }

  return <ArtworkDetailPage item={artwork} archiveHref="/kulukism" archiveLabel="Kulukism" />;
}
