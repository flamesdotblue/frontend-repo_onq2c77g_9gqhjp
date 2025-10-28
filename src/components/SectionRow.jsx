import React from 'react';
import { Play, Heart } from 'lucide-react';

const sampleCovers = [
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513863321140-5da5c16cfcec?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=800&auto=format&fit=crop',
];

const ItemCard = ({ title, subtitle, cover }) => {
  return (
    <div className="group relative min-w-[180px] w-[180px]">
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800">
        <img src={cover} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="mt-2 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate font-medium">{title}</p>
          <p className="truncate text-sm text-neutral-500">{subtitle}</p>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/70 dark:hover:bg-neutral-700" aria-label="Like">
            <Heart className="h-4 w-4" />
          </button>
          <button className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-500" aria-label="Play">
            <Play className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const SectionRow = ({ title, subtitle, type = 'tracks' }) => {
  // For the UI showcase we generate a few mock items
  const items = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title:
      type === 'artists'
        ? `Artist ${i + 1}`
        : type === 'albums'
        ? `Album ${i + 1}`
        : `Track ${i + 1}`,
    subtitle:
      type === 'artists' ? 'Popular Artist' : type === 'albums' ? 'Various Artists' : 'Artist Name',
    cover: sampleCovers[i % sampleCovers.length],
  }));

  return (
    <section className="mb-10">
      <div className="flex items-end justify-between mb-3">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          {subtitle && <p className="text-sm text-neutral-500">{subtitle}</p>}
        </div>
        <button className="text-sm text-indigo-600 hover:text-indigo-500">See all</button>
      </div>
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {items.map((item) => (
          <ItemCard key={item.id} title={item.title} subtitle={item.subtitle} cover={item.cover} />
        ))}
      </div>
    </section>
  );
};

export default SectionRow;
