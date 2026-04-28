const footerLinks = [
  'FAQ',
  'Help Center',
  'Account',
  'Media Center',
  'Netflix House',
  'Investor Relations',
  'Jobs',
  'Netflix Shop',
  'Redeem Gift Cards',
  'Buy Gift Cards',
  'Ways to Watch',
  'Terms of Use',
  'Privacy',
  'Cookie Preferences',
  'Corporate Information',
  'Contact Us',
  'Speed Test',
  'Legal Notices',
  'Only on Netflix',
  'Do Not Sell or Share My Personal Information',
  'Ad Choices',
];

export default function Footer() {
  return (
    <footer className="bg-black py-8 md:py-12 px-4 md:px-12 border-t border-[#333]">
      <div className="max-w-6xl mx-auto">
        <p className="text-white/70 mb-6">
          Questions? Call{' '}
          <a href="tel:1-866-952-4456" className="hover:underline">
            1-866-952-4456
          </a>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {footerLinks.map((link) => (
            <button
              key={link}
              type="button"
              className="text-white/60 text-sm hover:underline text-left"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <div className="relative inline-block">
            <select className="appearance-none bg-transparent border border-white/30 text-white/70 text-sm px-4 py-2 pr-10 rounded cursor-pointer hover:bg-white/10 transition-colors">
              <option value="en" className="bg-black text-white">English</option>
              <option value="id" className="bg-black text-white">Indonesia</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-3 h-3 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <p className="text-white/50 text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </div>
    </footer>
  );
}
