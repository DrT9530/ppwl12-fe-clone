import { Link } from 'react-router-dom';

export default function MediaHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 py-4">
      <Link to="/media" className="flex items-center gap-2">
        <img
          src="https://ext.same-assets.com/2862108679/1501495945.svg"
          alt="Netflix"
          className="h-5 md:h-7 w-auto"
        />
        <span className="text-white text-sm md:text-base font-medium">Media Center</span>
      </Link>
      <div className="flex items-center gap-4">
        <button className="text-white hover:text-white/70 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="text-white hover:text-white/70 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
