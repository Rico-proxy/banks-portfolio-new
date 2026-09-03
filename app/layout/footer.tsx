import { Heart } from 'lucide-react';
import { footerLinks, siteInfo } from '~/layout/data/site';

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 border-t border-ochre-gold/20 px-6 py-16 font-mono text-xs text-slate-500 sm:flex-row">
      <div className="text-center sm:text-left">{siteInfo.copyright}</div>
      <div className="flex flex-col items-center gap-3 sm:items-end">
        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-sandstone">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1.5 font-semibold text-sandstone">
          {siteInfo.credit}
          <Heart className="h-4 w-4 fill-ochre-gold text-ochre-gold motion-safe:animate-pulse" />
        </div>
      </div>
    </footer>
  );
}
