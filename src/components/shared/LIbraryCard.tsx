import { ILIBRARY } from '@/Type/Ilibrary';
import Image from 'next/image';
import React from 'react';
import { Clock, Flame, Star } from 'lucide-react';
import Link from 'next/link';

interface LibraryCardProps {
  library: ILIBRARY;
}

const LibraryCard = ({ library }: LibraryCardProps) => {
  return (
    <Link 
      href={`/Workouts/${library.id}`} 
      className="block w-full max-w-sm rounded-3xl bg-[#121316] text-white overflow-hidden shadow-xl border border-zinc-800/80 transition-transform duration-200 hover:scale-[1.02]"
    >
      {/* Image Container */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={library.image}
          alt={library.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Body */}
      <div className="p-5 flex flex-col gap-3">
        {/* Muscle Groups Badges */}
        <div className="flex flex-wrap gap-2">
          {library.muscleGroups.map((group) => (
            <span
              key={group}
              className="bg-[#a3e635] text-black font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-xl font-black tracking-wide uppercase text-white leading-snug">
            {library.name}
          </h3>
          <p className="text-sm text-zinc-400 font-medium mt-1">
            {library.equipment}
          </p>
        </div>

        {/* Divider */}
        <div className="w-full bg-zinc-800/80 my-1" />

        {/* Card Footer / Stats */}
        <div className="flex items-center justify-between text-sm text-zinc-400 font-medium">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-zinc-400" />
            <span>{library.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-zinc-400 fill-zinc-400" />
            <span>{library.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-zinc-400" />
            <span>{library.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LibraryCard;