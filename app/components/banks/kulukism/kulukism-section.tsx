import { GalleryCard } from '../shared/gallery-card';
import { kulukismArchive, kulukismData, kulukismIntro } from './data/kulukism';

export function KulukismSection() {
  return (
    <section className="mx-auto max-w-7xl space-y-16 px-6">
      <div className="art-frame relative overflow-hidden rounded-3xl bg-studio-card p-8 sm:p-16">
        <div className="relative z-10 max-w-4xl space-y-6">
          <span className="block font-mono text-xs uppercase tracking-widest text-ochre-gold">{kulukismIntro.kicker}</span>
          <h2 className="font-serif text-4xl font-bold text-sandstone sm:text-6xl">{kulukismIntro.title}</h2>
          <p className="text-base font-light leading-relaxed text-slate-300 sm:text-lg">{kulukismIntro.copy}</p>
          <div className="rounded-xl border border-ochre-gold/30 bg-studio-bg p-6">
            <h4 className="mb-2 font-serif text-lg text-ochre-gold">{kulukismIntro.featuredTitle}</h4>
            <p className="font-mono text-xs leading-relaxed text-slate-300">{kulukismIntro.featuredCopy}</p>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="mb-1 block font-mono text-xs uppercase tracking-widest text-ochre-gold">
              {kulukismArchive.kicker}
            </span>
            <h3 className="font-serif text-3xl text-sandstone">{kulukismArchive.title}</h3>
          </div>
          <span className="font-mono text-xs text-slate-400">{kulukismArchive.note}</span>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {kulukismData.map((item) => (
            <GalleryCard key={item.id} item={item} href={`/kulukism/${item.id}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
