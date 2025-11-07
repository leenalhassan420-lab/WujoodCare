import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center min-h-screen overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/wujood.jpg')",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        <div className="max-w-2xl">
          <h1 className="drop-shadow-lg mb-6 font-bold text-white text-5xl md:text-7xl">
            Virtual joy that heals
          </h1>

          <p className="drop-shadow-md mb-8 font-light text-white text-xl md:text-2xl">
            Your Presence, Our Care - Revolutionary VR medical training
            solutions
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
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <p className="font-bold text-[#f9f081] text-3xl">500+</p>
              <p className="text-white text-sm">Hospitals</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <p className="font-bold text-[#4eb2d0] text-3xl">10K+</p>
              <p className="text-white text-sm">Practitioners</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <p className="font-bold text-[#c060a5] text-3xl">99%</p>
              <p className="text-white text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
