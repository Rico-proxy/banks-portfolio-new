import type { GalleryItem } from '../shared/types';
import { GalleryPage } from './gallery-page';

type GalleryRoutePageProps = {
  kicker: string;
  title: string;
  subtitle: string;
  items: GalleryItem[];
  basePath: string;
};

export function GalleryRoutePage(props: GalleryRoutePageProps) {
  return <GalleryPage {...props} />;
}
