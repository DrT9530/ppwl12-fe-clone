export default function CompanyAssetsCTA() {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-12 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://ext.same-assets.com/2862108679/1197648506.png')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center md:text-right md:ml-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 italic">
          Looking for company assets?
        </h2>
        <p className="text-white/80 text-lg md:text-xl mb-8">
          Get more images and information about Netflix on our company site.
        </p>
        <button className="bg-white/10 backdrop-blur hover:bg-white/20 border border-white/30 text-white font-medium px-8 py-3 rounded transition-colors">
          Go to About Netflix
        </button>
      </div>
    </section>
  );
}
