import React from 'react';
import { Home, Library, ListMusic, Globe, User, Settings } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active }) => (
  <button
    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
      active
        ? 'bg-indigo-600 text-white'
        : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
    }`}
  >
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </button>
);

const Sidebar = () => {
  return (
    <aside className="hidden md:flex md:w-64 lg:w-72 shrink-0 border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <div className="p-4 w-full h-full flex flex-col gap-2">
        <div className="mb-2">
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500" />
            <span>UniSin</span>
          </div>
        </div>
        <NavItem icon={Home} label="Home" active />
        <NavItem icon={Globe} label="Browse" />
        <NavItem icon={Library} label="Library" />
        <NavItem icon={ListMusic} label="Playlists" />
        <div className="mt-auto pt-4 border-t border-neutral-200 dark:border-neutral-800">
          <NavItem icon={User} label="Creator" />
          <NavItem icon={Settings} label="Admin" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
