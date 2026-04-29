import { useState } from 'react';
const faqs = [
  {
    question: 'What is Netflix?',
    answerTop: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    answerBottom: "You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    question: 'How much does Netflix cost?',
    answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from IDR 54.000 to IDR 186.000/month. No commitments, cancel anytime.',
  },
  {
    question: 'Where can I watch?',
    answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
  },
  {
    question: 'How do I cancel?',
    answer: 'Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees — start or stop your account anytime.',
  },
  {
    question: 'What can I watch on Netflix?',
    answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
  },
  {
    question: 'Is Netflix good for kids?',
    answer: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don\'t want kids to see.',
  },
];
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        <h2 className="text-lg md:text-2xl font-bold text-left mb-6 text-white">
        Frequently Asked Questions
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