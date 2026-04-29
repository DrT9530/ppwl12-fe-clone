import { Link } from 'react-router-dom';

export default function MediaHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 py-4">
      <Link to="/media" className="flex items-center gap-3">
        <img
          src="https://ext.same-assets.com/2862108679/1501495945.svg"
          alt="Netflix"
          className="h-5 md:h-7 w-auto"
        />
        <span className="text-white text-sm md:text-lg font-bold">Media Center</span>
      </Link>
      
      <div className="flex items-center gap-6">
        <button className="text-white hover:text-gray-300 transition-colors">
          <svg className="w-5 h-5 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <div className="hidden lg:flex items-center gap-6 text-[15px] font-bold text-white">
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors">
            English
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
          </div>

          <div className="flex items-center gap-1.5 cursor-pointer hover:text-gray-300 transition-colors">
            <span className="text-[12px]">ID</span>
            Indonesia
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
          </div>

          <a href="#" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
            Newsroom
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>

          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors">
            Resources
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
          </div>

          <button className="px-5 py-2 border border-white hover:bg-white hover:text-black transition-colors rounded-sm">
            Apply
          </button>
        </div>

        <Link 
          to="/login" 
          className="bg-[#e50914] text-white px-5 py-2 rounded-sm hover:bg-[#f40612] transition-colors text-[15px] font-bold"
        >
          Press Log In
        </Link>
      </div>
    </header>
  );
}
