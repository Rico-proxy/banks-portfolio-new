import { useState } from 'react';
import { ArtworkModal } from '../shared/artwork-modal';
import type { GalleryItem } from '../shared/types';
import { GalleryPage } from './gallery-page';

type GalleryRoutePageProps = {
  kicker: string;
  title: string;
  subtitle: string;
  items: GalleryItem[];
};

export function GalleryRoutePage(props: GalleryRoutePageProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<GalleryItem | null>(null);

  return (
    <>
      <GalleryPage {...props} onSelect={setSelectedArtwork} />
      <ArtworkModal artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />
    </>
  );
}
