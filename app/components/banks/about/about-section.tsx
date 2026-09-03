import { artistBiography, artistStats } from './data/biography';

export function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="art-frame h-[520px] overflow-hidden rounded-2xl">
            <img
              src={artistBiography.image}
              className="h-full w-full object-cover grayscale contrast-125"
              alt={artistBiography.name}
            />
          </div>
        </div>
        <div className="space-y-6 lg:col-span-7">
          <span className="block font-mono text-xs uppercase tracking-widest text-ochre-gold">[ THE ARTIST ]</span>
          <h2 className="font-serif text-4xl font-bold text-sandstone sm:text-5xl">{artistBiography.name}</h2>
          <p className="text-base font-light leading-relaxed text-slate-300">{artistBiography.biography}</p>
          <p className="text-sm font-light leading-relaxed text-slate-400">{artistBiography.extendedBiography}</p>
          <div className="grid grid-cols-3 gap-6 border-t border-ochre-gold/20 pt-6 font-mono text-xs uppercase text-slate-400">
            {artistStats.map((stat) => (
              <div key={stat.label}>
                <div className="mb-1 text-2xl font-bold text-sandstone">{stat.value}</div>
                <div>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
