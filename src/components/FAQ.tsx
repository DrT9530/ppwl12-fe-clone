import { useState } from 'react';
const faqs = [
  {
    question: 'Apa itu Netflix?',
    answerTop: 'Netflix adalah layanan streaming yang menawarkan berbagai acara TV pemenang penghargaan, film, anime, dokumenter, dan banyak lagi di ribuan perangkat yang terhubung ke Internet.',
    answerBottom: 'Kamu bisa menonton sepuasnya, kapan pun kamu mau, tanpa satu iklan pun \u2013 semuanya dengan satu harga bulanan yang murah. Selalu ada tontonan baru dan acara TV serta film baru yang ditambahkan setiap minggu!',
  },
  {
    question: 'Berapa biaya berlangganan Netflix?',
    answer: 'Tonton Netflix di smartphone, tablet, Smart TV, laptop, atau perangkat streaming-mu, semuanya dengan satu harga bulanan tetap. Rentang harga paket mulai dari Rp54.000 hingga Rp186.000/month. Tanpa komitmen, batalkan kapan pun.',
  },
  {
    question: 'Di mana saya bisa menonton?',
    answer: 'Tonton di mana pun, kapan pun. Masuk ke akun Netflix-mu untuk menonton langsung di netflix.com dari komputer pribadi atau di perangkat yang terhubung ke Internet dan mendukung aplikasi Netflix, termasuk smart TV, smartphone, tablet, pemutar media streaming, dan konsol game.',
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
    <section className="w-full bg-black py-12 md:py-20">
      <div className="w-full mx-auto px-[24px] md:px-[48px] xl:px-[148px]">
        
        <h2 className="text-lg md:text-2xl font-bold text-left mb-6 text-white">
          Tanya Jawab Umum
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className="bg-[#2d2d2d] rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-8 py-7 text-left hover:bg-[#414141] transition-colors group"
                >
                  <span className={`text-white pr-4 transition-all duration-300 ${
                    isOpen ? 'text-xl md:text-3xl font-medium' : 'text-xl md:text-2xl font-normal'
                  }`}>
                    {faq.question}
                  </span>
                  <span className="text-white text-4xl md:text-5xl font-light flex-shrink-0 transition-transform duration-300">
                    {isOpen ? '×' : '+'}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-[#ffffff33] mx-8 mb-5" />
                  
                  <div className="px-8 pb-8">
                    {'answerTop' in faq ? (
                      <div className="text-white/90">
                        <p className="text-lg md:text-2xl font-normal leading-relaxed mb-6">
                          {(faq as any).answerTop}
                        </p>
                        <p className="text-lg md:text-2xl font-normal leading-relaxed">
                          {(faq as any).answerBottom}
                        </p>
                      </div>
                    ) : (
                      <p className="text-lg md:text-2xl font-normal text-white/90 leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}