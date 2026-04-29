import { useState } from 'react';

export default function EmailCTA({ 
  title = "Ready to watch? Enter your email to create or restart your membership.",
  variant = "default" 
}: { 
  title?: string;
  variant?: "default" | "hero";
}) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle submission logic here
      console.log('Email submitted:', email);
    }
  };

  return (
    <section className={`w-full ${variant === 'hero' ? 'bg-black py-6 md:py-8' : 'bg-black py-8 md:py-2'}`}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        
        <h2 className="text-base md:text-lg font-normal mb-4 md:mb-6 text-white">
          {title}
        </h2>
        
<form 
  onSubmit={handleSubmit}
  className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-2xl mx-auto items-center"
>
  <div className="relative flex-1 w-full sm:min-w-[400px]">
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Alamat email"
      className="w-full bg-black/60 border border-white/30 text-white px-4 md:px-5 py-3 md:py-3.5 placeholder-white/50 focus:outline-none focus:border-white/60 transition-colors text-sm md:text-base h-12 md:h-14 rounded-md"
      style={{ borderRadius: '4px' }}
      required
    />
  </div>
          <button
            type="submit"
            className="w-full md:w-auto bg-[#e50914] hover:bg-[#f40612] text-white text-xl md:text-2xl font-semibold px-8 flex items-center justify-center gap-2 transition-colors h-12 md:h-14 rounded-md"
            style={{ borderRadius: '4px' }}
          >
            Get Started
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}