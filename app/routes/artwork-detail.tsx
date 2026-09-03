import type { Route } from './+types/artwork-detail';
import { ArtworkDetailPage } from '~/components/banks/artwork-detail/artwork-detail-page';
import { artworksData } from '~/components/banks/gallery/data/artworks';

function findArtwork(id: string | undefined) {
  return artworksData.find((item) => String(item.id) === id);
}

export function meta({ params }: Route.MetaArgs) {
  const artwork = findArtwork(params.artworkId);

  return [
    { title: artwork ? `${artwork.title} | BANKS STUDIO` : 'Artwork | BANKS STUDIO' },
    { name: 'description', content: artwork?.description ?? 'Artwork details from Banks Studio.' },
  ];
}

export default function ArtworkDetail({ params }: Route.ComponentProps) {
  const artwork = findArtwork(params.artworkId);

  if (!artwork) {
    throw new Response('Artwork not found', { status: 404 });
  }

  return <ArtworkDetailPage item={artwork} archiveHref="/artworks" archiveLabel="Artworks" />;
}
