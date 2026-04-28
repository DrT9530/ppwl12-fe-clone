const featuredShows = [
  {
    id: 1,
    title: 'Fury vs Makhmudov',
    image: 'https://ext.same-assets.com/2862108679/434726783.jpeg',
  },
  {
    id: 2,
    title: 'Thrash',
    image: 'https://ext.same-assets.com/2862108679/2956235007.jpeg',
  },
  {
    id: 3,
    title: 'Beef',
    image: 'https://ext.same-assets.com/2862108679/3738070820.jpeg',
  },
  {
    id: 4,
    title: 'Cave Adventure',
    image: 'https://ext.same-assets.com/2862108679/247344348.jpeg',
  },
];

export default function MediaHero() {
  return (
    <section className="media-hero-section">
      {/* Gradient Background */}
      <div className="media-hero-bg" />

      {/* Content */}
      <div className="media-hero-content">
        {/* Center Content */}
        <div className="media-hero-center">
          <h1 className="media-hero-title">
            Discover stories and
            <br />
            experiences to share with
            <br />
            the United States.
          </h1>

          {/* Search Bar */}
          <div className="media-hero-search-wrapper">
            <div className="media-hero-search">
              <svg
                className="media-hero-search-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for Netflix titles and news"
                className="media-hero-search-input"
              />
            </div>
          </div>
        </div>

        {/* Featured Shows Carousel */}
        <div className="media-hero-carousel-wrapper">
          {/* Left Fade */}
          <div className="media-hero-fade-left" />

          {/* Carousel */}
          <div className="media-hero-carousel">
            {featuredShows.map((show) => (
              <div
                key={show.id}
                className="media-hero-card"
              >
                <img
                  src={show.image}
                  alt={show.title}
                  className="media-hero-card-img"
                />
              </div>
            ))}
          </div>

          {/* Right Fade */}
          <div className="media-hero-fade-right" />
        </div>
      </div>
    </section>
  );
}
