
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
            Indonesia.
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
      </div>
    </section>
  );
}
