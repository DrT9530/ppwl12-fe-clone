const featuredShows = [
  {
    id: 1,
    title: 'Fury vs Makhmudov',
    image: 'https://ext.same-assets.com/2862108679/3978636187.jpeg',
  },
  {
    id: 2,
    title: 'Thrash',
    image: 'https://ext.same-assets.com/2862108679/1282238396.jpeg',
  },
  {
    id: 3,
    title: 'Beef',
    image: 'https://ext.same-assets.com/2862108679/3007252282.jpeg',
  },
  {
    id: 4,
    title: 'Cave Adventure',
    image: 'https://ext.same-assets.com/2862108679/2132490568.jpeg',
  },
];

export default function MediaHero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0808] to-[#4a1515]" />

      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 pt-24 md:pt-32 px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Discover stories and experiences to share with the United States.
          </h1>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for Netflix titles and news"
                className="w-full bg-white/10 backdrop-blur border border-white/20 text-white px-12 py-4 rounded-full placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Featured Shows Carousel */}
        <div className="flex justify-center gap-4 overflow-x-auto pb-8 px-4">
          {featuredShows.map((show) => (
            <div
              key={show.id}
              className="flex-shrink-0 w-48 md:w-56 h-64 md:h-80 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={show.image}
                alt={show.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
