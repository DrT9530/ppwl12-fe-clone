import { useState } from 'react';

export default function EmailCTA() {
  const [email, setEmail] = useState('');

  return (
    <section className="bg-black py-8 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-base md:text-lg text-white/80 mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
          <div className="relative w-full md:w-auto md:flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full bg-black/60 border border-white/30 text-white px-4 py-4 rounded placeholder-white/50 focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <button className="w-full md:w-auto bg-[#e50914] hover:bg-[#f40612] text-white text-lg md:text-xl font-semibold px-8 py-4 rounded flex items-center justify-center gap-2 transition-colors">
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
