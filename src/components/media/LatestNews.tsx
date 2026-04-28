const newsItems = [
  {
    id: 1,
    category: 'Japan, Global',
    title: "'Soul Mate' Main Trailer Shows a Decade Guided by Fate",
    image: 'https://ext.same-assets.com/2862108679/261912628.webp',
  },
  {
    id: 2,
    category: 'Argentina, Global',
    title: 'Netflix announces El sobrino, the new film by Damian Szifron starring Leonardo Sbaraglia',
    image: 'https://ext.same-assets.com/2862108679/3468464906.jpeg',
  },
  {
    id: 3,
    category: 'United States',
    title: "'Running Point' Season 2 Shoots and Scores With All-Star Brand Partners",
    image: 'https://ext.same-assets.com/2862108679/2751877705.jpeg',
  },
];

export default function LatestNews() {
  return (
    <section className="bg-[#1a1a1a] py-8 md:py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Latest news</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="group relative rounded-lg overflow-hidden cursor-pointer h-[400px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/60 text-sm mb-2">{item.category}</p>
                <h3 className="text-white text-lg md:text-xl font-bold mb-4 leading-tight">
                  {item.title}
                </h3>
                <button className="bg-white/10 backdrop-blur hover:bg-white/20 text-white text-sm font-medium px-4 py-2 rounded transition-colors">
                  Read more
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Read More News Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-transparent border border-white/40 hover:bg-white/10 text-white font-medium px-6 py-3 rounded transition-colors">
            Read more news in the Newsroom
          </button>
        </div>
      </div>
    </section>
  );
}
