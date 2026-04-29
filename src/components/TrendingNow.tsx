import { useRef, useState, useCallback, useEffect } from 'react';

const trendingShows = [
  {
    id: 1,
    title: 'Pangku',
    image: '/images/trendingnow1.webp',
  },
  {
    id: 2,
    title: 'Mertua Ngeri Kali',
    image: '/images/trendingnow2.webp',
  },
  {
    id: 3,
    title: 'Pesugihan Sate Gagak',
    image: '/images/trendingnow3.webp',
  },
  {
    id: 4,
    title: 'If Wishes Could Kill',
    image: '/images/trendingnow4.webp',
  },
  {
    id: 5,
    title: 'Luka Makan Cinta',
    image: '/images/trendingnow5.webp',
  },
  {
    id: 6,
    title: 'Thrash',
    image: '/images/trendingnow6.webp',
  },
  {
    id: 7,
    title: 'One Piece',
    image: '/images/trendingnow7.webp',
  },
  {
    id: 8,
    title: 'Phantom Lawyer',
    image: '/images/trendingnow8.webp',
  },
  {
    id: 9,
    title: 'Bloodhounds',
    image: '/images/trendingnow9.webp',
  },
  {
    id: 10,
    title: 'Jumbo',
    image: '/images/trendingnow10.webp',
  },
];

export default function TrendingNow() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [hoveredArrow, setHoveredArrow] = useState<'left' | 'right' | null>(null);

  // Check scroll position to show/hide arrows
  const updateArrowVisibility = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft: sl, scrollWidth, clientWidth } = container;
    setShowLeftArrow(sl > 10);
    setShowRightArrow(sl < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    updateArrowVisibility();
    container.addEventListener('scroll', updateArrowVisibility);
    window.addEventListener('resize', updateArrowVisibility);

    return () => {
      container.removeEventListener('scroll', updateArrowVisibility);
      window.removeEventListener('resize', updateArrowVisibility);
    };
  }, [updateArrowVisibility]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
    container.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const container = scrollContainerRef.current;
    if (!container) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const container = scrollContainerRef.current;
    if (container) {
      container.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      const container = scrollContainerRef.current;
      if (container) {
        container.style.cursor = 'grab';
      }
    }
  };

  // Arrow navigation
  const scrollByAmount = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="trending-section">
      <div className="trending-container">
        <h2 className="trending-title">Sedang Tren</h2>

        <div className="trending-carousel-wrapper">
          {/* Left Arrow */}
          <button
            type="button"
            className={`trending-arrow trending-arrow-left ${showLeftArrow ? 'trending-arrow-visible' : ''}`}
            onClick={() => scrollByAmount('left')}
            onMouseEnter={() => setHoveredArrow('left')}
            onMouseLeave={() => setHoveredArrow(null)}
            aria-label="Scroll left"
            disabled={!showLeftArrow}
          >
            <svg
              className={`w-8 h-8 transition-transform duration-200 ${hoveredArrow === 'left' ? 'scale-125' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Scrollable Carousel Track */}
          <div
            ref={scrollContainerRef}
            className="trending-scroll-container"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div className="trending-scroll-track">
              {trendingShows.map((show, index) => (
                <div key={show.id} className="trending-card-scroll">
                  <div className="trending-card-inner">
                    {/* Rank Number */}
                    <span className="trending-rank">{index + 1}</span>

                    {/* Poster */}
                    <div className="trending-poster">
                      <img
                        src={show.image}
                        alt={show.title}
                        className="trending-poster-img"
                        loading="lazy"
                        draggable={false}
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
            type="button"
            className={`trending-arrow trending-arrow-right ${showRightArrow ? 'trending-arrow-visible' : ''}`}
            onClick={() => scrollByAmount('right')}
            onMouseEnter={() => setHoveredArrow('right')}
            onMouseLeave={() => setHoveredArrow(null)}
            aria-label="Scroll right"
            disabled={!showRightArrow}
          >
            <svg
              className={`w-8 h-8 transition-transform duration-200 ${hoveredArrow === 'right' ? 'scale-125' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
