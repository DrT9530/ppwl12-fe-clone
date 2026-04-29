import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [error, setError] = useState('');

  const hasValue = email.length > 0;

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Masukkan email atau nomor telepon yang valid.');
      return;
    }
    // Frontend-only: just clear the error
    setError('');
  };

  return (
    <div className="login-page">
      {/* Background image overlay */}
      <div className="login-bg">
        <div
          className="login-bg-image"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/1252088806/3013181386.jpeg')`,
          }}
        />
        <div className="login-bg-overlay" />
      </div>

      {/* Header — Logo only */}
      <header className="login-header">
        <Link to="/" className="login-logo-link">
          <svg
            viewBox="0 0 111 30"
            className="login-logo"
            aria-label="Netflix"
            role="img"
            fill="#e50914"
          >
            <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" />
          </svg>
        </Link>
      </header>

      {/* Login Form */}
      <main className="login-main">
        <div className="login-form-container">
          <h1 className="login-title">Masuk</h1>
          <p className="login-subtitle">
            Atau,{' '}
            <Link to="/" className="login-subtitle-link">
              mulai dengan akun baru
            </Link>
            .
          </p>

          <form onSubmit={handleContinue} className="login-form">
            {/* Floating label input */}
            <div className={`login-input-group ${error ? 'login-input-error' : ''}`}>
              <input
                type="text"
                id="login-email"
                className={`login-input ${hasValue || isFocused ? 'login-input-filled' : ''}`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                autoComplete="email"
              />
              <label
                htmlFor="login-email"
                className={`login-label ${hasValue || isFocused ? 'login-label-float' : ''}`}
              >
                Email atau nomor telepon
              </label>
            </div>
            {error && <p className="login-error-text">{error}</p>}

            <button type="submit" className="login-submit-btn">
              Lanjutkan
            </button>
          </form>

          {/* Need Help section */}
          <div className="login-help-section">
            <button
              className="login-help-toggle"
              onClick={() => setHelpOpen(!helpOpen)}
              type="button"
            >
              <span className="login-help-toggle-text">Butuh bantuan?</span>
              <svg
                className={`login-help-arrow ${helpOpen ? 'login-help-arrow-open' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className={`login-help-content ${helpOpen ? 'login-help-content-open' : ''}`}>
              <a href="#" className="login-help-link">
                Lupa email atau nomor telepon?
              </a>
              <a href="#" className="login-help-link login-help-link-underline">
                Pelajari lebih lanjut tentang cara masuk
              </a>
            </div>
          </div>

          {/* reCAPTCHA notice */}
          <p className="login-recaptcha">
            Halaman ini dilindungi oleh reCAPTCHA Google untuk memastikan
            kamu bukan bot.{' '}
            <a href="#" className="login-recaptcha-link">
              Pelajari selengkapnya.
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="login-footer">
        <div className="login-footer-inner">
          <p className="login-footer-phone">
            Ada pertanyaan? Hubungi{' '}
            <a href="tel:007-803-321-8275" className="login-footer-phone-link">
              007-803-321-8275
            </a>
          </p>

          <div className="login-footer-links">
            <a href="#" className="login-footer-link">Tanya Jawab</a>
            <a href="#" className="login-footer-link">Pusat Bantuan</a>
            <a href="#" className="login-footer-link">Ketentuan Penggunaan</a>
            <a href="#" className="login-footer-link">Privasi</a>
            <a href="#" className="login-footer-link">Preferensi Cookie</a>
            <a href="#" className="login-footer-link">Informasi Perusahaan</a>
          </div>

          <div className="login-footer-lang">
            <svg
              className="login-footer-lang-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <select className="login-footer-select" defaultValue="en">
              <option value="en">English</option>
              <option value="id">Bahasa Indonesia</option>
            </select>
            <svg className="login-footer-select-arrow" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}
