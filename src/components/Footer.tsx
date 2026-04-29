import React from 'react';

const footerLinks = [
  { title: 'FAQ', href: '#' },
  { title: 'Help Center', href: '#' },
  { title: 'Account', href: '#' },
  { title: 'Media Center', href: '#' },
  { title: 'Investor Relations', href: '#' },
  { title: 'Jobs', href: '#' },
  
  // Kolom 2
  { title: 'Redeem Gift Cards', href: '#' },
  { title: 'Buy Gift Cards', href: '#' },
  { title: 'Ways to Watch', href: '#' },
  { title: 'Terms of Use', href: '#' },
  { title: 'Privacy', href: '#' },
  { title: 'Cookie Preferences', href: '#' },

  // Kolom 3
  { title: 'Corporate Information', href: '#' },
  { title: 'Contact Us', href: '#' },
  { title: 'Speed Test', href: '#' },
  { title: 'Legal Notices', href: '#' },
  { title: 'Only on Netflix', href: '#' },
];

const languageOptions = [
  { label: 'Bahasa Indonesia', value: 'id' },
  { label: 'English', value: 'en' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black py-12 md:py-16">
      <div className="max-w-5xl px-6 md:px-12 lg:px-20">
  
        <p className="text-white/60 text-base md:text-lg mb-8">
          Questions? Call <a href="tel:0078033218275" className="underline hover:text-white/80">007-803-321-8275</a>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 mb-10">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white/60 hover:text-white text-sm underline underline-offset-2 transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="relative w-fit inline-block mb-6">
          <div className="relative bg-[#232323] border border-white/40 rounded overflow-hidden flex items-center h-12 px-4">
        
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-white flex items-center">
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>

            <select 
              className="appearance-none bg-transparent text-white text-base pl-10 pr-8 py-2 focus:outline-none cursor-pointer font-medium"
              defaultValue="en"
            >
              {languageOptions.map((lang) => (
                <option key={lang.value} value={lang.value} className="bg-[#232323] text-white">
                  {lang.label}
                </option>
              ))}
            </select>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                stroke="none"
              >
                <path d="M12 15L4 7h16l-8 8z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <p className="text-white/50 text-sm mb-6">
          Netflix Indonesia
        </p>

        <p className="text-white/40 text-xs md:text-sm leading-relaxed">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </div>
    </footer>
  );
}