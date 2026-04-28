import Header from '../components/Header';
import Hero from '../components/Hero';
import PriceBanner from '../components/PriceBanner';
import TrendingNow from '../components/TrendingNow';
import MoreReasons from '../components/MoreReasons';
import FAQ from '../components/FAQ';
import EmailCTA from '../components/EmailCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <PriceBanner />
      <TrendingNow />
      <MoreReasons />
      <FAQ />
      <EmailCTA />
      <Footer />
    </div>
  );
}
