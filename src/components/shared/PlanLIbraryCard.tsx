'use client';

import { LibraryContext } from '@/context/LibraryContext';
import { ILIBRARY } from '@/Type/Ilibrary';
import { Check, Clock, Flame, Star, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

// type যোগ করা হয়েছে ('plan' নাকি 'save')
interface PlanLIbraryCardProps {
  liabrary: ILIBRARY;
  type: 'plan' | 'save'; 
}

const PlanLIbraryCard = ({ liabrary, type }: PlanLIbraryCardProps) => {
  const { PlanData = [], setPlanData, SaveData = [], setSaveData } = useContext(LibraryContext);

  // রিমুভ করার হ্যান্ডলার ফাংশন
  const handleRemoveLibrary = (targetItem: ILIBRARY) => {
    // যদি টাইপ 'plan' হয়, তবে শুধুমাত্র PlanData থেকেই রিমুভ হবে
    if (type === 'plan') {
      const updatedPlan = PlanData.filter((item) => item.id !== targetItem.id);
      setPlanData(updatedPlan);
      toast.info(`Removed "${targetItem.name}" from your plan`);
    } 
    // যদি টাইপ 'save' হয়, তবে শুধুমাত্র SaveData থেকেই রিমুভ হবে
    else if (type === 'save') {
      const updatedSave = SaveData.filter((item) => item.id !== targetItem.id);
      setSaveData(updatedSave);
      toast.info(`Removed "${targetItem.name}" from saved list`);
    }
  };

  return (
    <div>
      <div className="w-full bg-[#121316] border border-zinc-800/80 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-200 hover:border-zinc-700">

        {/* Left Section: Image + Info */}
        <div className="flex items-center gap-4 w-full sm:w-auto">
          {/* Exercise Image */}
          <div className="relative w-28 h-20 sm:w-32 sm:h-20 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
            <Image
              src={liabrary.image}
              alt={liabrary.name}
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>

          {/* Text Details */}
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-black uppercase text-white tracking-wide leading-tight">
              {liabrary.name}
            </h3>
            <p className="text-xs font-medium text-zinc-400">
              {liabrary.equipment}
            </p>

            {/* Stats Badges */}
            <div className="flex items-center gap-3 text-xs text-zinc-400 mt-1 font-medium">
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#a3e635]" />
                <span>{liabrary.duration} min</span>
              </div>

              <div className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-[#a3e635] fill-[#a3e635]" />
                <span>{liabrary.caloriesBurned} kcal</span>
              </div>

              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-[#a3e635] fill-[#a3e635]" />
                <span>{liabrary.rating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Action Buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          {/* View Details Link */}
          <Link
            href={`/library/${liabrary.id}`}
            className="px-4 py-2.5 rounded-full border border-zinc-700 hover:border-zinc-500 text-xs font-bold text-zinc-200 hover:text-white transition-all text-center"
          >
            View Details
          </Link>

          {/* Mark as Done Button */}
          <button className="px-4 py-2.5 rounded-full bg-[#a3e635] hover:bg-[#8ece28] text-black text-xs font-extrabold flex items-center gap-1.5 transition-colors cursor-pointer">
            <Check className="w-4 h-4 " />
            Mark as Done
          </button>

          {/* Close/Remove Button */}
          <button
            onClick={() => handleRemoveLibrary(liabrary)}
            className="p-1.5 text-zinc-500 hover:text-red-400 transition-colors ml-1 cursor-pointer"
            title="Remove item"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default PlanLIbraryCard;