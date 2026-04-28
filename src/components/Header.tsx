import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-container ${scrolled ? 'header-scrolled' : ''}`}>
      <Link to="/" className="flex items-center">
        <img
          src="https://ext.same-assets.com/1252088806/1287887044.svg"
          alt="Netflix"
          className="header-logo"
        />
      </Link>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="header-lang-select">
          <svg className="header-lang-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <select className="header-select" defaultValue="en">
            <option value="en" className="bg-black text-white">English</option>
            <option value="id" className="bg-black text-white">Bahasa Indonesia</option>
          </select>
          <svg className="header-select-arrow" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        <Link
          to="/login"
          className="header-signin-btn"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}
