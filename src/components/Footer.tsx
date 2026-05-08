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
            <select className="appearance-none bg-transparent border border-white/30 text-white/70 text-sm pl-10 pr-10 py-2 rounded cursor-pointer hover:bg-white/10 transition-colors">
              <option value="id" className="bg-black text-white">Bahasa Indonesia</option>
              <option value="en" className="bg-black text-white">English</option>
            </select>

            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.77 5.33l-.27.67L9.34 8.94l-.57 1.44L7.33 14h1.78l1.73-1.97h3.58l1.74 1.97H16l-3.43-8.67zm-.15 4.6-.24.63h2.51l-1.26-3.35zm-1.1-5.09l.1-.19h-3.2V2h-1.5v2.65H.55V6h3.77A11 11 0 0 1 0 10.43c.33.28.81.8 1.05 1.16 1.5-.91 2.85-2.36 3.88-4.02v5.1h1.49V7.52q.6.95 1.33 1.81l.57-1.43a12 12 0 0 1-1.34-1.9h2.09z" fill="currentColor"></path>
              </svg>
            </div>

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