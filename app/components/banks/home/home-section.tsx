import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '~/components/ui/button';
import { artistSummary, artistStats } from './data/artist-summary';
import { featureLinks } from './data/featured-links';
import { heroContent } from './data/hero';

export function HomeSection() {
  return (
    <section className="space-y-24 mx-auto px-6 max-w-7xl">
      <div className="flex flex-col justify-between py-12 min-h-[70vh]">
        <div className="space-y-6 max-w-4xl">
          <span className="block font-mono text-ochre-gold text-xs uppercase tracking-widest">{heroContent.kicker}</span>
          <h1 className="font-serif font-bold text-sandstone text-5xl sm:text-7xl lg:text-8xl leading-[1.08] tracking-normal">
            {heroContent.title}
          </h1>
        </div>

        <div className="items-end gap-12 grid grid-cols-1 lg:grid-cols-12 pt-16 border-ochre-gold/20 border-t">
          <div className="lg:col-span-7">
            <p className="font-light text-slate-300 text-base sm:text-lg leading-relaxed">{heroContent.copy}</p>
          </div>
          <div className="flex max-sm:flex-col justify-start lg:justify-end gap-4 lg:col-span-5 font-mono text-xs uppercase">
            <Button
              asChild
              className="bg-ochre-gold hover:bg-white shadow-lg shadow-ochre-gold/10 px-8 py-4 rounded-none h-auto font-bold text-black tracking-wider">
              <Link to="/artworks">Browse Galleries</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent hover:bg-transparent px-8 py-4 border-sandstone/30 hover:border-ochre-gold rounded-none h-auto text-sandstone hover:text-ochre-gold tracking-wider">
              <Link to="/contact">Commission Work</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-3 py-12 border-ochre-gold/20 border-t">
        {featureLinks.map((item) => (
          <Link
            key={item.page}
            to={item.href}
            className="group bg-studio-card p-6 rounded-2xl text-left cursor-pointer art-frame">
            <div className="mb-4 rounded-xl h-64 overflow-hidden">
              <img src={item.image} alt={item.alt} className="w-full h-full object-cover gallery-img" />
            </div>
            <h3 className="font-serif text-sandstone group-hover:text-ochre-gold text-xl transition-colors">
              {item.title} <span aria-hidden="true">→</span>
            </h3>
            <p className="mt-1 font-mono text-slate-400 text-xs">{item.subtitle}</p>
          </Link>
        ))}
      </div>

      <section className="relative bg-studio-card p-8 sm:p-14 rounded-3xl overflow-hidden art-frame">
        <div className="z-10 relative items-center gap-10 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-4 rounded-2xl h-80 overflow-hidden art-frame">
            <img
              src={artistSummary.image}
              className="grayscale w-full h-full object-cover contrast-125"
              alt={artistSummary.name}
            />
          </div>
          <div className="space-y-6 lg:col-span-8">
            <span className="block font-mono text-ochre-gold text-xs uppercase tracking-widest">[ MEET THE MASTER ARTIST ]</span>
            <h2 className="font-serif font-bold text-sandstone text-3xl sm:text-4xl">{artistSummary.name}</h2>
            <p className="font-light text-slate-300 text-sm sm:text-base leading-relaxed">{artistSummary.biography}</p>
            <div className="gap-4 sm:gap-6 grid grid-cols-3 pt-2 border-ochre-gold/20 border-t font-mono text-slate-400 text-xs uppercase">
              {artistStats.map((stat) => (
                <div key={stat.label}>
                  <div className="mb-1 font-bold text-sandstone text-2xl">{stat.value}</div>
                  <div>{stat.label}</div>
                </div>
              ))}
            </div>
            <Button
              asChild
              className="bg-ochre-gold hover:bg-white shadow-lg shadow-ochre-gold/10 px-7 py-3.5 rounded-none h-auto font-mono font-bold text-black text-xs uppercase tracking-wider">
              <Link to="/about">
                Read Full Biography
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
}
