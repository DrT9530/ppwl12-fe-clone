import { useState } from 'react';

const faqs = [
  {
    question: 'Apa itu Netflix?',
    answer: 'Netflix adalah layanan streaming yang menawarkan berbagai acara TV pemenang penghargaan, film, anime, dokumenter, dan banyak lagi di ribuan perangkat yang terhubung ke Internet.\n\nKamu bisa menonton sepuasnya, kapan pun kamu mau, tanpa satu iklan pun \u2013 semuanya dengan satu harga bulanan yang murah. Selalu ada tontonan baru dan acara TV serta film baru yang ditambahkan setiap minggu!',
  },
  {
    question: 'Berapa biaya berlangganan Netflix?',
    answer: 'Tonton Netflix di smartphone, tablet, Smart TV, laptop, atau perangkat streaming-mu, semuanya dengan satu harga bulanan tetap. Rentang harga paket mulai dari Rp54.000 hingga Rp186.000/bulan.',
  },
  {
    question: 'Di mana saya bisa menonton?',
    answer: 'Tonton di mana pun, kapan pun. Masuk ke akun Netflix-mu untuk menonton langsung di netflix.com dari komputer pribadi atau di perangkat yang terhubung ke Internet dan mendukung aplikasi Netflix, termasuk smart TV, smartphone, tablet, pemutar media streaming, dan konsol game.\n\nKamu juga bisa men-download acara favoritmu dengan aplikasi iOS atau Android. Gunakan download untuk menonton saat kamu di perjalanan dan tidak punya koneksi Internet. Bawa Netflix ke mana saja.',
  },
  {
    question: 'Bagaimana cara membatalkannya?',
    answer: 'Netflix fleksibel. Kamu dapat dengan mudah membatalkan akunmu secara online dengan dua kali klik. Tanpa biaya pembatalan \u2013 mulai atau hentikan akunmu kapan pun.',
  },
  {
    question: 'Apa yang bisa ditonton di Netflix?',
    answer: 'Netflix memiliki pustaka lengkap yang berisi film panjang, film dokumenter, serial TV, anime, Netflix original pemenang penghargaan, dan lebih banyak lagi. Tonton sepuasnya, kapan pun kamu mau.',
  },
  {
    question: 'Apakah Netflix sesuai bagi anak-anak?',
    answer: 'Pengalaman Netflix Anak disertakan dalam keanggotaan agar kamu punya kontrol orang tua saat anak-anak menikmati acara TV dan film untuk keluarga di rumah.\n\nProfil anak dilengkapi kontrol orang tua yang dilindungi PIN sehingga kamu bisa membatasi rating usia konten yang bisa ditonton anak dan memblokir judul tertentu yang tidak boleh ditonton anak-anak.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-8 md:py-12 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Tanya Jawab Umum</h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="bg-[#2d2d2d]">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-[#3d3d3d] transition-colors"
              >
                <span className="text-base md:text-lg font-medium text-white pr-4">{faq.question}</span>
                <span className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <div className="p-4 md:p-6 pt-0 border-t border-black">
                  <p className="text-white/80 text-sm md:text-base leading-relaxed whitespace-pre-line">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
