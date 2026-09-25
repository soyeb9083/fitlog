import Banner from '@/components/homepage/Banner';
import LibraryCard from '@/components/shared/LIbraryCard';
import { ILIBRARY } from '@/Type/Ilibrary';
import React from 'react';

const FitlibaryPromise = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await res.json();
  return data;
};

const WorkoutsPage = async () => {
  const libararyData = await FitlibaryPromise();

  return (
    <>
      {/* Banner Component */}
      <Banner />

      {/* Main Content Container */}
      <div className='container mx-auto px-4 py-8 text-white space-y-8'>
        {/* Header Section */}
        <div className='space-y-2'>
          <h1 className='font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide'>
            THE LIBRARY
          </h1>
          <p className='text-zinc-400 text-base sm:text-xl md:text-2xl font-medium'>
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Responsive Grid Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
          {libararyData.map((library: ILIBRARY) => (
            <LibraryCard key={library.id || library.name} library={library} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkoutsPage;