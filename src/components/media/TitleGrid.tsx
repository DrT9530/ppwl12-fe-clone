import { useState } from 'react';

const categories = [
  { id: 'film', label: 'Film', icon: '🎬' },
  { id: 'series', label: 'Series', icon: '📺' },
  { id: 'documentary', label: 'Documentary', icon: '🎥' },
  { id: 'reality', label: 'Reality', icon: '📹' },
  { id: 'comedy', label: 'Stand-Up Comedy', icon: '🎤' },
  { id: 'game', label: 'Game', icon: '🎮' },
];

const titles = [
  { id: 1, title: 'Eat Pray Bark', date: 'April 1, 2026', image: 'https://ext.same-assets.com/2862108679/3604782754.jpeg' },
  { id: 2, title: 'Love on the Spectrum', date: 'April 1, 2026', image: 'https://ext.same-assets.com/2862108679/4247564008.jpeg' },
  { id: 3, title: 'Sins of Kujo', date: 'April 2, 2026', image: 'https://ext.same-assets.com/2862108679/359516272.jpeg' },
  { id: 4, title: 'Agent from Above', date: 'April 2, 2026', image: 'https://ext.same-assets.com/2862108679/3364769271.jpeg' },
  { id: 5, title: 'XO, Kitty', date: 'April 2, 2026', image: 'https://ext.same-assets.com/2862108679/764630941.jpeg' },
  { id: 6, title: 'The Ramparts of Ice', date: 'April 2, 2026', image: 'https://ext.same-assets.com/2862108679/243274807.jpeg' },
  { id: 7, title: 'Gangs of Galicia', date: 'April 3, 2026', image: 'https://ext.same-assets.com/2862108679/4021408768.jpeg' },
  { id: 8, title: 'Bloodhounds', date: 'April 3, 2026', image: 'https://ext.same-assets.com/2862108679/128998045.jpeg' },
  { id: 9, title: 'High Tides', date: 'April 3, 2026', image: 'https://ext.same-assets.com/2862108679/717241928.jpeg' },
  { id: 10, title: 'Untold: Chess Mates', date: 'April 7, 2026', image: 'https://ext.same-assets.com/2862108679/41252723.jpeg' },
  { id: 11, title: 'The Jackbox Party Essentials', date: 'April 7, 2026', image: 'https://ext.same-assets.com/2862108679/311155880.jpeg' },
  { id: 12, title: 'Trust Me: The False Prophet', date: 'April 8, 2026', image: 'https://ext.same-assets.com/2862108679/2703551249.jpeg' },
];

export default function TitleGrid() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="bg-[#181818] py-8 md:py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-white">
            I'm interested in covering titles releasing in
          </h2>
          <div className="relative">
            <select className="appearance-none bg-transparent border-b-2 border-white text-white text-lg font-bold px-2 py-1 pr-8 cursor-pointer focus:outline-none">
              <option value="april" className="bg-[#181818]">April</option>
              <option value="may" className="bg-[#181818]">May</option>
              <option value="june" className="bg-[#181818]">June</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
                activeCategory === category.id
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-white border-white/30 hover:border-white/60'
              }`}
            >
              <span>{category.icon}</span>
              <span className="text-sm font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#e50914] mb-8" />

        {/* Title Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {titles.map((title) => (
            <div key={title.id} className="group cursor-pointer">
              <div className="aspect-[2/3] rounded-lg overflow-hidden mb-2 transform group-hover:scale-105 transition-transform duration-300">
                <img
                  src={title.image}
                  alt={title.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white/60 text-sm">{title.date}</p>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-transparent border border-white/40 hover:bg-white/10 text-white font-medium px-6 py-3 rounded transition-colors">
            Show 20 more in April
          </button>
        </div>
      </div>
    </section>
  );
}
