import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import bannerPhoto from '@/assets/banner.png';

const Banner = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="relative bg-[#121316] border border-zinc-800/80 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden shadow-2xl">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6 max-w-2xl z-10">
          {/* Subtitle */}
          <h1 className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#a3e635]">
            WORKOUT LIBRARY
          </h1>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
            TRAIN WITH INTENT. <br /> LOG EVERY SET.
          </h2>

          {/* Description */}
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl font-normal">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Call to Action Button */}
          <div className="pt-2">
            <Link
              href="/Workouts"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#a3e635] hover:bg-[#8ece28] text-black font-black text-xs md:text-sm uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02] active:scale-95"
            >
              BROWSE WORKOUTS
            </Link>
          </div>
        </div>

        {/* Right Banner Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-80 flex justify-center md:justify-end items-center z-10">
          <Image
            src={bannerPhoto}
            alt="Workout Banner Photo"
            priority
            className="w-auto h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;