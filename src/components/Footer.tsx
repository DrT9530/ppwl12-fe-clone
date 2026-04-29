import React from 'react';

const footerLinks = [
  'Tanya Jawab',
  'Pusat Bantuan',
  'Akun',
  'Pusat Media',
  'Hubungan Investor',
  'Lowongan Kerja',
  'Tukar Kartu Hadiah',
  'Beli Kartu Hadiah',
  'Cara Menonton',
  'Ketentuan Penggunaan',
  'Privasi',
  'Preferensi Cookie',
  'Informasi Perusahaan',
  'Hubungi Kami',
  'Uji Kecepatan',
  'Informasi Legal',
  'Hanya di Netflix',
];

export default function Footer() {
  return (
    <footer className="w-full bg-black py-8 md:py-12 px-[24px] md:px-[48px] xl:px-[148px] border-t border-[#333]">
      <div className="w-full mx-auto">
        <p className="text-white/70 mb-6">
          Ada pertanyaan? Hubungi{' '}
          <a href="tel:007-803-321-8275" className="hover:underline">
            007-803-321-8275
          </a>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 mb-10">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-white/60 hover:text-white text-sm underline underline-offset-2 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="mb-6">
          <div className="relative inline-block">
            <select className="appearance-none bg-transparent border border-white/30 text-white/70 text-sm px-4 py-2 pr-10 rounded cursor-pointer hover:bg-white/10 transition-colors">
              <option value="id" className="bg-black text-white">Bahasa Indonesia</option>
              <option value="en" className="bg-black text-white">English</option>
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

        <p className="text-white/40 text-sm mb-2">Netflix Indonesia</p>

        <p className="text-white/50 text-sm">
          Halaman ini dilindungi oleh reCAPTCHA Google untuk memastikan kamu bukan bot.
        </p>
      </div>
    </footer>
  );
}