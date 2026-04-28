import { useState } from 'react';

const newsItems = [
  { 
    id: 1,
    category: 'Japan, Global',
    title: "'Soul Mate' Main Trailer Shows a Decade Guided by Fate",
    image: 'https://ext.same-assets.com/2862108679/2323253274.webp',
    link: 'https://about.netflix.com/en/news/soulmate-main-trailer',
  },
  {
    id: 2,
    category: 'Argentina, Global',
    title: 'Netflix announces El sobrino, the new film by Damián Szifron starring Leonardo Sbaraglia',
    image: 'https://ext.same-assets.com/2862108679/1774679822.jpeg',
    link: 'https://about.netflix.com/en/news/netflix-anuncia-el-sobrino-la-nueva-pelicula-de-damian-szifron',
  },
  {
    id: 3,
    category: 'United States',
    title: "'Running Point' Season 2 Shoots and Scores With All-Star Brand Partners",
    image: 'https://ext.same-assets.com/2862108679/2088744013.jpeg',
    link: 'https://about.netflix.com/en/news/running-point-season-2-shoots-and-scores-with-all-star-brand-partners',
  },
];

interface NewsCardProps {
  item: typeof newsItems[0];
}

function NewsCard({ item }: NewsCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="latest-news-card"
    >
      {/* Background Image with Skeleton */}
      <div className="latest-news-card-image">
        {/* Skeleton */}
        <div
          className={`image-skeleton ${imageLoaded ? 'image-skeleton-hidden' : ''}`}
        />
        {/* Actual Image */}
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className={imageLoaded ? 'image-loaded' : 'image-loading'}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="latest-news-card-overlay" />

      {/* Content */}
      <div className="latest-news-card-content">
        <span className="latest-news-card-category">{item.category}</span>
        <h3 className="latest-news-card-title">{item.title}</h3>
        <span className="latest-news-card-button">Read more</span>
      </div>
    </a>
  );
}

function NewsCardSkeleton() {
  return (
    <div className="latest-news-card-skeleton">
      <div className="latest-news-card-skeleton-image" />
      <div className="latest-news-card-skeleton-content">
        <div className="latest-news-card-skeleton-category" />
        <div className="latest-news-card-skeleton-title">
          <div className="latest-news-card-skeleton-title-line" />
          <div className="latest-news-card-skeleton-title-line" />
          <div className="latest-news-card-skeleton-title-line" />
        </div>
        <div className="latest-news-card-skeleton-button" />
      </div>
    </div>
  );
}

interface LatestNewsProps {
  isLoading?: boolean;
}

export default function LatestNews({ isLoading = false }: LatestNewsProps) {
  return (
    <section className="latest-news-section">
      <div className="latest-news-container">
        <h2 className="latest-news-title">Latest news</h2>

        <div className="latest-news-grid">
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <NewsCardSkeleton key={index} />
              ))
            : newsItems.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
        </div>

        {/* Read More News Button */}
        <div className="latest-news-cta">
          <a
            href="https://about.netflix.com/en/newsroom"
            target="_blank"
            rel="noopener noreferrer"
            className="latest-news-cta-button"
          >
            Read more news in the Newsroom
          </a>
        </div>
      </div>
    </section>
  );
}

export { NewsCardSkeleton };
