import { useState } from 'react';
import type { GalleryItem } from '../shared/types';
import { ArtworkModal } from '../shared/artwork-modal';
import { KulukismSection } from './kulukism-section';

export function KulukismPage() {
  const [selectedArtwork, setSelectedArtwork] = useState<GalleryItem | null>(null);

  return (
    <>
      <KulukismSection onSelect={setSelectedArtwork} />
      <ArtworkModal artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />
    </>
  );
}
