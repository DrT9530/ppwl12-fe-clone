import { useState, useRef, useEffect, useCallback } from 'react';

const trendingShows = [
  {
    id: 1,
    title: 'Supacell',
    image: 'https://ext.same-assets.com/2862108679/3726117661.jpeg',
  },
  {
    id: 2,
    title: 'One Piece',
    image: 'https://ext.same-assets.com/2862108679/2606243437.jpeg',
  },
  {
    id: 3,
    title: 'Thrash',
    image: 'https://ext.same-assets.com/2862108679/1282238396.jpeg',
  },
  {
    id: 4,
    title: 'Apex',
    image: 'https://ext.same-assets.com/2862108679/3007252282.jpeg',
  },
  {
    id: 5,
    title: 'Beauty in Black',
    image: 'https://ext.same-assets.com/2862108679/2132490568.jpeg',
  },
  {
    id: 6,
    title: 'Bloodhounds',
    image: 'https://ext.same-assets.com/2862108679/128998045.jpeg',
  },
  {
    id: 7,
    title: 'Stranger Things',
    image: 'https://ext.same-assets.com/2862108679/3726117661.jpeg',
  },
  {
    id: 8,
    title: 'Squid Game',
    image: 'https://ext.same-assets.com/2862108679/2606243437.jpeg',
  },
  {
    id: 9,
    title: 'The Witcher',
    image: 'https://ext.same-assets.com/2862108679/1282238396.jpeg',
  },
  {
    id: 10,
    title: 'Wednesday',
    image: 'https://ext.same-assets.com/2862108679/3007252282.jpeg',
  },
];

export default function TrendingNow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(6);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [hoveredArrow, setHoveredArrow] = useState<'left' | 'right' | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Calculate items per view based on viewport width
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 500) setItemsPerView(2);
      else if (width < 768) setItemsPerView(3);
      else if (width < 1024) setItemsPerView(4);
      else if (width < 1280) setItemsPerView(5);
      else setItemsPerView(6);
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, trendingShows.length - itemsPerView);

  useEffect(() => {
    setShowLeftArrow(currentIndex > 0);
    setShowRightArrow(currentIndex < maxIndex);
  }, [currentIndex, maxIndex]);

  const slideCarousel = useCallback((direction: 'left' | 'right') => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const step = Math.max(1, Math.floor(itemsPerView / 2));

    if (direction === 'right') {
      setCurrentIndex(prev => Math.min(prev + step, maxIndex));
    } else {
      setCurrentIndex(prev => Math.max(prev - step, 0));
    }

    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, itemsPerView, maxIndex]);

  // Calculate the translate offset
  const getTranslateX = () => {
    const itemWidthPercent = 100 / itemsPerView;
    return -(currentIndex * itemWidthPercent);
  };

  return (
    <section className="trending-section">
      <div className="trending-container">
        <h2 className="trending-title">Trending Now</h2>

        <div className="trending-carousel-wrapper">
          {/* Left Arrow */}
          <button
            className={`trending-arrow trending-arrow-left ${showLeftArrow ? 'trending-arrow-visible' : ''}`}
            onClick={() => slideCarousel('left')}
            onMouseEnter={() => setHoveredArrow('left')}
            onMouseLeave={() => setHoveredArrow(null)}
            aria-label="Scroll left"
            disabled={!showLeftArrow}
          >
            <svg
              className={`w-8 h-8 transition-transform duration-200 ${hoveredArrow === 'left' ? 'scale-125' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel Track */}
          <div className="trending-carousel-track" ref={carouselRef}>
            <div
              className="trending-carousel-slider"
              style={{
                transform: `translateX(${getTranslateX()}%)`,
              }}
            >
              {trendingShows.map((show, index) => (
                <div
                  key={show.id}
                  className="trending-card"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="trending-card-inner">
                    {/* Rank Number */}
                    <span className="trending-rank">
                      {index + 1}
                    </span>

                    {/* Poster */}
                    <div className="trending-poster">
                      <img
                        src={show.image}
                        alt={show.title}
                        className="trending-poster-img"
                        loading="lazy"
                      />
                      <div className="trending-poster-overlay" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className={`trending-arrow trending-arrow-right ${showRightArrow ? 'trending-arrow-visible' : ''}`}
            onClick={() => slideCarousel('right')}
            onMouseEnter={() => setHoveredArrow('right')}
            onMouseLeave={() => setHoveredArrow(null)}
            aria-label="Scroll right"
            disabled={!showRightArrow}
          >
            <svg
              className={`w-8 h-8 transition-transform duration-200 ${hoveredArrow === 'right' ? 'scale-125' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
