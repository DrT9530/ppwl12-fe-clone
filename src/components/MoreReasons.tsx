const reasonsData = [
  {
    id: 1,
    title: 'Enjoy on your TV',
    description:
      'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    icon: (
      <svg
        className="reasons-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="4"
          width="20"
          height="13"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 21h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 17v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect
          x="5"
          y="7"
          width="14"
          height="7"
          rx="1"
          fill="url(#tv-gradient)"
        />
        <defs>
          <linearGradient
            id="tv-gradient"
            x1="5"
            y1="7"
            x2="19"
            y2="14"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#b829dd" />
            <stop offset="1" stopColor="#5a189a" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Download your shows to watch offline',
    description: 'Save your favorites easily and always have something to watch.',
    icon: (
      <svg
        className="reasons-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="url(#download-gradient)"
          strokeWidth="2"
        />
        <path
          d="M12 7v7"
          stroke="url(#download-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 12l4 4 4-4"
          stroke="url(#download-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="download-gradient"
            x1="2"
            y1="2"
            x2="22"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ff1493" />
            <stop offset="1" stopColor="#d63384" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Watch everywhere',
    description:
      'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
    icon: (
      <svg
        className="reasons-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Laptop */}
        <rect
          x="1"
          y="6"
          width="14"
          height="9"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M0 15h16l1 2H-1l1-2z"
          fill="currentColor"
          fillOpacity="0.3"
        />
        {/* Phone */}
        <rect
          x="16"
          y="8"
          width="7"
          height="12"
          rx="1.5"
          stroke="url(#devices-gradient)"
          strokeWidth="1.2"
        />
        <circle cx="19.5" cy="17.5" r="0.8" fill="url(#devices-gradient)" />
        <defs>
          <linearGradient
            id="devices-gradient"
            x1="16"
            y1="8"
            x2="23"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e50914" />
            <stop offset="1" stopColor="#b20710" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Create profiles for kids',
    description:
      'Send kids on adventures with their favorite characters in a space made just for them — free with your membership.',
    icon: (
      <svg
        className="reasons-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="url(#kids-gradient)"
          stroke="none"
        />
        {/* Eyes */}
        <circle cx="8.5" cy="10" r="1.5" fill="black" />
        <circle cx="15.5" cy="10" r="1.5" fill="black" />
        {/* Smile */}
        <path
          d="M8 15c1.5 2 6.5 2 8 0"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="kids-gradient"
            x1="2"
            y1="2"
            x2="22"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ff6b9d" />
            <stop offset="1" stopColor="#f472b6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function MoreReasons() {
  return (
    <section className="reasons-section">
      <div className="reasons-container">
        <h2 className="reasons-title">More Reasons to Join</h2>

        <div className="reasons-grid">
          {reasonsData.map((reason) => (
            <div key={reason.id} className="reasons-card">
              <div className="reasons-card-content">
                <h3 className="reasons-card-title">{reason.title}</h3>
                <p className="reasons-card-description">{reason.description}</p>
              </div>
              <div className="reasons-card-icon">{reason.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
