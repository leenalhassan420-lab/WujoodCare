export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center min-h-screen overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedMetadata={(e) => e.currentTarget.play()} 
        poster="wujood.jpg"   // relative path for GitHub Pages
      >
        <source 
          src="VideoWujood.mp4"   // relative path for GitHub Pages
          type="video/mp4" 
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        <div className="max-w-2xl">
          <h1 className="drop-shadow-lg mb-6 font-bold text-white text-5xl md:text-7xl">
            Virtual joy that heals
          </h1>

          <p className="drop-shadow-md mb-8 font-light text-white text-xl md:text-2xl">
            Where calm, play, and presence support children through treatment
          </p>

          <div className="flex sm:flex-row flex-col gap-4">
            <button className="bg-[#f9f081] hover:shadow-2xl px-8 py-4 rounded-full font-bold text-[#563293] hover:scale-105 transition transform">
              Explore Now
            </button>
            <button className="bg-white/80 hover:bg-white px-8 py-4 rounded-full font-bold text-[#563293] transition">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="gap-4 grid grid-cols-3 mt-12 max-w-md">
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg text-center flex flex-col items-center justify-center gap-2 min-h-[150px]">
              <p className="font-bold text-[#f9f081] text-3xl">3</p>
              <p className="text-white text-xl">Oncology centers</p>
            </div>

            <div className="bg-white/10 backdrop-blur p-4 rounded-lg text-center flex flex-col items-center justify-center gap-2 min-h-[150px]">
              <p className="font-bold text-[#4eb2d0] text-2xl">Co-Developed</p>
              <p className="text-white text-lg">With Survivors</p>
            </div>

            <div className="bg-white/10 backdrop-blur p-4 rounded-lg text-center flex flex-col items-center justify-center gap-2 min-h-[150px]">
              <p className="font-bold text-[#c060a5] text-3xl">Pilot Phase</p>
              <p className="text-white text-sm">Launching in 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
