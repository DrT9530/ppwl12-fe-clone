import MediaHeader from '../components/media/MediaHeader';
import MediaHero from '../components/media/MediaHero';
import TitleGrid from '../components/media/TitleGrid';
import LatestNews from '../components/media/LatestNews';
import CompanyAssetsCTA from '../components/media/CompanyAssetsCTA.tsx';
import MediaFooter from '../components/media/MediaFooter';

export default function MediaCenter() {
  return (
    <div className="min-h-screen bg-black">
      <MediaHeader />
      <MediaHero />
      <TitleGrid />
      <LatestNews />
      <CompanyAssetsCTA />
      <MediaFooter />
    </div>
  );
}
