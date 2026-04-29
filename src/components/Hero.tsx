import { useState } from 'react';
import EmailCTA from './EmailCTA';

export default function Hero() {
  const [email, setEmail] = useState('');

  return (
    <section className="relative min-h-[700px] md:min-h-[750px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/bghome.jpg')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20 md:pt-24">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Film dan serial TV tanpa batas, dan lebih banyak lagi
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-2">
          Harga mulai dari Rp54.000. Batalkan kapan pun.
        </p>
        <p className="text-base md:text-lg text-white/80 mb-6">
          Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.
        </p>

        {/* Email Form */}
        <div className="flex flex-col md:flex-row gap-3 justify-center items-center max-w-2xl mx-auto">
          <div className="relative w-full md:w-auto md:flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Alamat email"
              className="w-full bg-black/60 border border-white/30 text-white px-4 py-4 rounded placeholder-white/50 focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <button className="w-full md:w-auto bg-[#e50914] hover:bg-[#f40612] text-white text-lg md:text-xl font-semibold px-8 py-4 rounded flex items-center justify-center gap-2 transition-colors">
            Mulai
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Curved SVG divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-20 translate-y-[1px]">
        <svg 
          viewBox="0 0 1000 100" 
          preserveAspectRatio="none" 
          className="w-full h-8 sm:h-12 lg:h-16"
        >
          <defs>
            <filter id="hero-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <radialGradient id="blue-shadow" cx="50%" cy="0%" r="100%" fx="50%" fy="0%">
              <stop offset="0%" stopColor="rgba(25, 25, 50, 1)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 1)" />
            </radialGradient>
          </defs>
          <path 
            d="M0,100 Q500,0 1000,100 L1000,120 L0,120 Z" 
            fill="url(#blue-shadow)" 
          />
          <path 
            d="M0,100 Q500,0 1000,100" 
            fill="none" 
            stroke="rgba(229, 9, 20, 0.8)" 
            strokeWidth="3"
            filter="url(#hero-glow)"
          />
        </svg>
      </div>
    </section>
  );
}