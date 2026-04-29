import { useState } from 'react';

const categories = [
  { id: 'film', label: 'Film', icon: 'film' },
  { id: 'series', label: 'Series', icon: 'series' },
  { id: 'documentary', label: 'Documentary', icon: 'documentary' },
  { id: 'reality', label: 'Reality', icon: 'reality' },
  { id: 'comedy', label: 'Stand-Up Comedy', icon: 'comedy' },
  { id: 'game', label: 'Game', icon: 'game' },
];

// Data film yang sudah diperbanyak menjadi 24 agar bisa dites
const titles = [
  { id: 1, title: 'Eat Pray Bark', date: 'April 1, 2026', image: 'https://ext.same-assets.com/2862108679/2389586377.jpeg' },
  { id: 2, title: 'Love on the Spectrum', date: 'April 1, 2026', image: 'https://ext.same-assets.com/2862108679/4112420654.jpeg' },
  { id: 3, title: 'Sins of Kujo', date: 'April 2, 2026', image: 'https://ext.same-assets.com/2862108679/3095377968.jpeg' },
  { id: 4, title: 'Agent from Above', date: 'April 2, 2026', image: 'https://ext.same-assets.com/2862108679/220223268.jpeg' },
  { id: 5, title: 'XO, Kitty', date: 'April 2, 2026', image: 'https://ext.same-assets.com/2862108679/1118859933.jpeg' },
  { id: 6, title: 'The Ramparts of Ice', date: 'April 2, 2026', image: 'https://ext.same-assets.com/2862108679/2740967546.jpeg' },
  { id: 7, title: 'Gangs of Galicia', date: 'April 3, 2026', image: 'https://ext.same-assets.com/2862108679/1320095289.jpeg' },
  { id: 8, title: 'Bloodhounds', date: 'April 3, 2026', image: 'https://ext.same-assets.com/2862108679/3604505277.jpeg' },
  { id: 9, title: 'High Tides', date: 'April 3, 2026', image: 'https://ext.same-assets.com/2862108679/636133666.jpeg' },
  { id: 10, title: 'Untold: Chess Mates', date: 'April 7, 2026', image: 'https://ext.same-assets.com/2862108679/2753411342.jpeg' },
  { id: 11, title: 'The Jackbox Party Essentials', date: 'April 7, 2026', image: 'https://ext.same-assets.com/2862108679/1826246290.jpeg' },
  { id: 12, title: 'Trust Me: The False Prophet', date: 'April 8, 2026', image: 'https://ext.same-assets.com/2862108679/2492198034.webp' },
  { id: 13, title: 'Eat Pray Bark: Return', date: 'April 9, 2026', image: 'https://ext.same-assets.com/2862108679/2389586377.jpeg' },
  { id: 14, title: 'Love on the Spectrum: UK', date: 'April 10, 2026', image: 'https://ext.same-assets.com/2862108679/4112420654.jpeg' },
  { id: 15, title: 'Sins of Kujo 2', date: 'April 11, 2026', image: 'https://ext.same-assets.com/2862108679/3095377968.jpeg' },
  { id: 16, title: 'Agent from Below', date: 'April 12, 2026', image: 'https://ext.same-assets.com/2862108679/220223268.jpeg' },
  { id: 17, title: 'XO, Kitty: Seoul', date: 'April 13, 2026', image: 'https://ext.same-assets.com/2862108679/1118859933.jpeg' },
  { id: 18, title: 'The Ramparts of Fire', date: 'April 14, 2026', image: 'https://ext.same-assets.com/2862108679/2740967546.jpeg' },
  { id: 19, title: 'Gangs of Madrid', date: 'April 15, 2026', image: 'https://ext.same-assets.com/2862108679/1320095289.jpeg' },
  { id: 20, title: 'Bloodhounds: Bite', date: 'April 16, 2026', image: 'https://ext.same-assets.com/2862108679/3604505277.jpeg' },
  { id: 21, title: 'Low Tides', date: 'April 17, 2026', image: 'https://ext.same-assets.com/2862108679/636133666.jpeg' },
  { id: 22, title: 'Untold: Checkmate', date: 'April 18, 2026', image: 'https://ext.same-assets.com/2862108679/2753411342.jpeg' },
  { id: 23, title: 'The Jackbox Party Pack 9', date: 'April 19, 2026', image: 'https://ext.same-assets.com/2862108679/1826246290.jpeg' },
  { id: 24, title: 'Trust Me: The Truth', date: 'April 20, 2026', image: 'https://ext.same-assets.com/2862108679/2492198034.webp' },
];

function CategoryIcon({ type }: { type: string }) {
  // ... (Sengaja dipersingkat di contoh ini, biarkan fungsi icon Anda tetap utuh atau copy saja dari aslinya)
  switch (type) {
    case 'film': return <svg className="title-grid-cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" strokeWidth="2"/><line x1="7" y1="2" x2="7" y2="22" strokeWidth="2"/><line x1="17" y1="2" x2="17" y2="22" strokeWidth="2"/><line x1="2" y1="12" x2="22" y2="12" strokeWidth="2"/><line x1="2" y1="7" x2="7" y2="7" strokeWidth="2"/><line x1="2" y1="17" x2="7" y2="17" strokeWidth="2"/><line x1="17" y1="17" x2="22" y2="17" strokeWidth="2"/><line x1="17" y1="7" x2="22" y2="7" strokeWidth="2"/></svg>;
    case 'series': return <svg className="title-grid-cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="2"/><line x1="8" y1="21" x2="16" y2="21" strokeWidth="2"/><line x1="12" y1="17" x2="12" y2="21" strokeWidth="2"/></svg>;
    case 'documentary': return <svg className="title-grid-cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M23 7l-7 5 7 5V7z" strokeWidth="2"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2" strokeWidth="2"/></svg>;
    case 'reality': return <svg className="title-grid-cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeWidth="2"/></svg>;
    case 'comedy': return <svg className="title-grid-cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" strokeWidth="2"/><path d="M19 10v2a7 7 0 0 1-14 0v-2" strokeWidth="2"/><line x1="12" y1="19" x2="12" y2="23" strokeWidth="2"/><line x1="8" y1="23" x2="16" y2="23" strokeWidth="2"/></svg>;
    case 'game': return <svg className="title-grid-cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="6" y1="12" x2="10" y2="12" strokeWidth="2"/><line x1="8" y1="10" x2="8" y2="14" strokeWidth="2"/><circle cx="15" cy="13" r="1" fill="currentColor"/><circle cx="18" cy="11" r="1" fill="currentColor"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1.392 0 1.943-.5 2.5-1.5l1.414-2.121A2 2 0 0 1 10.586 15h2.828a2 2 0 0 1 1.672.879L16.5 18c.557 1 1.108 1.5 2.5 1.5a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" strokeWidth="2"/></svg>;
    default: return null;
  }
}

export default function TitleGrid() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // INI DIA KODE BARUNYA:
  const [visibleCount, setVisibleCount] = useState(20);

  return (
    <section className="title-grid-section">
      <div className="title-grid-container">
        {/* Section Header */}
        <div className="title-grid-header">
          <span className="title-grid-header-text">
            I'm interested in covering titles releasing in
          </span>
          <div className="title-grid-select-wrapper">
            <select className="title-grid-select">
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
            </select>
            <svg className="title-grid-select-arrow" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Category Filters */}
        <div className="title-grid-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
              className={`title-grid-filter-btn ${
                activeCategory === category.id ? 'title-grid-filter-active' : ''
              }`}
            >
              <CategoryIcon type={category.icon} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Red Divider */}
        <div className="title-grid-divider" />

        {/* Title Grid */}
        <div className="title-grid">
          {/* PERHATIKAN DI SINI KITA PAKAI .slice(0, visibleCount) */}
          {titles.slice(0, visibleCount).map((title) => (
            <div key={title.id} className="title-grid-card">
              <div className="title-grid-card-img-wrapper">
                <img
                  src={title.image}
                  alt={title.title}
                  className="title-grid-card-img"
                />
              </div>
              <p className="title-grid-card-date">{title.date}</p>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="title-grid-more-wrapper">
          {/* TOMBOL INI AKAN MENAMBAH LIMITNYA SAAT DIKLIK */}
          <button 
            className="title-grid-more-btn"
            onClick={() => setVisibleCount((prev) => prev + 20)}
          >
            Show 20 more in April
          </button>
        </div>
      </div>
    </section>
  );
}