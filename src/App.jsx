import React from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import SectionRow from './components/SectionRow.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      {/* Top nav */}
      <Header />

      {/* Main layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6 pt-6 pb-28">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <main className="min-w-0">
          {/* Hero banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white p-6 sm:p-8 mb-8">
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm/6 opacity-90">Welcome back</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Discover your next favorite track</h1>
                <p className="mt-2 max-w-prose text-sm/6 opacity-90">Trending hits, rising artists, and curated playlists—everything tailored for you.</p>
              </div>
              <div className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white text-neutral-900 hover:bg-white/90 font-medium shadow-sm">
                  Start listening
                </button>
              </div>
            </div>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/40 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-fuchsia-300/40 blur-3xl" />
            </div>
          </div>

          {/* Discovery sections */}
          <SectionRow title="Trending Songs" subtitle="Listen to what everyone is playing" type="tracks" />
          <SectionRow title="Popular Artists" subtitle="Follow your favorite creators" type="artists" />
          <SectionRow title="New Albums" subtitle="Fresh releases this week" type="albums" />
          <SectionRow title="Top Playlists" subtitle="Curated collections for every mood" type="tracks" />
        </main>
      </div>

      {/* Bottom player */}
      <MusicPlayer />
    </div>
  );
}

export default App;
