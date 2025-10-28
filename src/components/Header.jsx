import React from 'react';
import { Search, User, Menu, Settings, LogIn } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Open Menu">
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500" />
            <span className="hidden sm:inline">UniSin</span>
          </div>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search tracks, artists, albums, playlists"
              className="w-full pl-10 pr-3 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/70 dark:hover:bg-neutral-700">
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">Settings</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500">
            <LogIn className="h-4 w-4" />
            <span className="hidden sm:inline">Sign in</span>
          </button>
          <button className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/70 dark:hover:bg-neutral-700" aria-label="Profile">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
