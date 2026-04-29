import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Media Center', path: '/page-2' },
    { name: 'Login', path: '/login' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar-container" data-scrolled={scrolled}>
      <div className="navbar-inner">
        {/* Desktop Menu */}
        <div className="navbar-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`navbar-link ${location.pathname === link.path ? 'navbar-link-active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Burger Button (Mobile) */}
        <div className="navbar-mobile-toggle">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="navbar-burger"
            aria-label="Toggle navigation"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`navbar-mobile-menu ${isOpen ? 'navbar-mobile-open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={closeMenu}
            className={`navbar-mobile-link ${location.pathname === link.path ? 'navbar-mobile-link-active' : ''}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;