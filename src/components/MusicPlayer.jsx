import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Shuffle, Repeat, Heart } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 grid grid-cols-3 items-center gap-4">
        {/* Left: Track info */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-14 w-14 overflow-hidden rounded-md bg-neutral-200 dark:bg-neutral-800">
            <img
              src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=400&auto=format&fit=crop"
              alt="Current track"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate font-medium">Midnight Drive</p>
            <p className="truncate text-sm text-neutral-500">Neon Collective</p>
          </div>
          <button className="ml-1 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Like">
            <Heart className="h-4 w-4" />
          </button>
        </div>

        {/* Middle: Controls */}
        <div className="flex items-center justify-center gap-2">
          <button className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Shuffle">
            <Shuffle className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Previous">
            <SkipBack className="h-5 w-5" />
          </button>
          <button
            className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-500"
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          <button className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Next">
            <SkipForward className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Repeat">
            <Repeat className="h-5 w-5" />
          </button>
        </div>

        {/* Right: Volume */}
        <div className="hidden sm:flex items-center justify-end gap-3">
          <Volume2 className="h-5 w-5" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-32 accent-indigo-600"
          />
          <span className="w-8 text-right text-sm text-neutral-500">{volume}%</span>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
