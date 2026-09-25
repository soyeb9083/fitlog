import { ILIBRARY } from '@/Type/Ilibrary';
import React from 'react';
import LIbraryCard from '../shared/LIbraryCard';

const FitlibaryPromise = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await res.json();
  return data;
};

const Library = async () => {
  const libararyData = await FitlibaryPromise();

  return (
    <div className="container mx-auto px-4 py-8 text-white space-y-6">
      {/* Header Section */}
      <div className="space-y-1">
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide">
          LIBRARY
        </h2>
        <p className="text-zinc-400 text-sm font-medium">
          Pick a lift to add to todays workout plan.
        </p>
      </div>

      {/* Responsive Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {libararyData.map((library: ILIBRARY) => (
          <LIbraryCard key={library.id || library.name} library={library} />
        ))}
      </div>
    </div>
  );
};

export default Library;