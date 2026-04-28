import { useState } from 'react';

export default function CompanyAssetsCTA() {
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <section className="company-assets-cta">
      {/* Background with red diagonal streams */}
      <div className="company-assets-cta-bg">
        {/* Skeleton */}
        {!bgLoaded && <div className="company-assets-cta-skeleton-bg" />}
        {/* Actual Background Image */}
        <img
          src="https://ext.same-assets.com/2862108679/3208161560.png"
          alt=""
          className={`company-assets-cta-bg-image ${bgLoaded ? 'image-loaded' : 'image-loading'}`}
          onLoad={() => setBgLoaded(true)}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="company-assets-cta-overlay" />

      {/* Content */}
      <div className="company-assets-cta-content">
        <h2 className="company-assets-cta-title">
          Looking for company assets?
        </h2>
        <p className="company-assets-cta-subtitle">
          Get more images and information about Netflix on our company site.
        </p>
        <a
          href="https://about.netflix.com/en/company-assets"
          target="_blank"
          rel="noopener noreferrer"
          className="company-assets-cta-button"
        >
          Go to About Netflix
        </a>
      </div>
    </section>
  );
}