"use client";

import PlanLIbraryCard from '@/components/shared/PlanLIbraryCard';
import { LibraryContext } from '@/context/LibraryContext';
import { ILIBRARY } from '@/Type/Ilibrary';
import Link from 'next/link'; // next/link থেকে ইমপোর্ট করা হয়েছে
import React, { useContext, useState } from 'react';

const MyplanPage = () => {
    const { PlanData = [], SaveData = [] } = useContext(LibraryContext);

    const [activeTab, setActiveTab] = useState<'plan' | 'save'>('plan');
    const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");

    // সর্টিং ফাংশন
    const sortBooks = (library: ILIBRARY[]) => {
        const sortedLibrary = [...library];

        if (sortBy === "duration") {
            sortedLibrary.sort((a, b) => b.duration - a.duration);
        } else if (sortBy === "calories") {
            sortedLibrary.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        } else if (sortBy === "rating") {
            sortedLibrary.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        }

        return sortedLibrary;
    };

    // বর্তমান অ্যাক্টিভ ট্যাবের ডাটা ও সর্টিং প্রয়োগ
    const sortedPlanData = sortBooks(PlanData);
    const sortedSaveData = sortBooks(SaveData);

    // হেডার স্ট্যাটের জন্য বর্তমান ডাটা
    const currentData = activeTab === 'plan' ? sortedPlanData : sortedSaveData;
    const totalExercises = currentData.length;
    const totalMinutes = currentData.reduce(
        (acc: number, item: ILIBRARY) => acc + (Number(item.duration) || 0), 0
    );
    const totalCalories = currentData.reduce(
        (acc: number, item: ILIBRARY) => acc + (Number(item.caloriesBurned) || 0), 0
    );

    return (
        <div className='container mx-auto p-4 md:p-8 text-white min-h-screen space-y-8'>
            {/* Header */}
            <div>
                <h1 className='text-3xl font-black uppercase tracking-wide'>MY PLAN</h1>
                <p className='text-zinc-400 text-sm mt-1'>
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Dynamic Summary Stats Bar */}
            <div className='flex justify-between items-center bg-[#121316] p-6 rounded-3xl border border-zinc-800/80 shadow-lg'>
                <div>
                    <p className='text-xs uppercase font-semibold text-zinc-400 tracking-wider'>Exercises</p>
                    <span className='text-4xl md:text-5xl font-black text-[#a3e635]'>{totalExercises}</span>
                </div>
                <div>
                    <p className='text-xs uppercase font-semibold text-zinc-400 tracking-wider'>Minutes</p>
                    <span className='text-4xl md:text-5xl font-black text-white'>{totalMinutes}</span>
                </div>
                <div>
                    <p className='text-xs uppercase font-semibold text-zinc-400 tracking-wider'>Calories</p>
                    <span className='text-4xl md:text-5xl font-black text-white'>{totalCalories}</span>
                </div>
            </div>

            {/* Filter & Sort Controls */}
            <div className="flex justify-between items-center mt-6">
                <p className="text-zinc-400 text-sm font-semibold">Filter Workouts:</p>
                <select
                    value={sortBy}
                    onChange={(e) =>
                        setSortBy(e.target.value as "duration" | "calories" | "rating")
                    }
                    className="select select-sm select-bordered border-zinc-700 bg-[#121316] text-white focus:border-[#a3e635]"
                >
                    <option value="duration">Sort by Duration</option>
                    <option value="calories">Sort by Calories</option>
                    <option value="rating">Sort by Rating</option>
                </select>
            </div>

            {/* Tabs */}
            <div className="tabs tabs-lift">
                {/* Tab 1: Plan Data */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab font-bold text-sm uppercase"
                    aria-label={`My Plan Data (${PlanData.length})`}
                    checked={activeTab === 'plan'}
                    onChange={() => setActiveTab('plan')}
                />
                <div className="tab-content bg-[#121316] border-zinc-800 rounded-b-2xl p-6 space-y-4">
                    {sortedPlanData.length > 0 ? (
                        sortedPlanData.map((liabrary: ILIBRARY) => (
                            <PlanLIbraryCard key={liabrary.id} liabrary={liabrary} type="plan" />
                        ))
                    ) : (
                        <div className="p-12 md:p-16 rounded-2xl border border-zinc-800/80 bg-[#0c0d0e] text-center flex flex-col items-center justify-center gap-4">
                            <h1 className="text-xl md:text-2xl font-black uppercase text-white tracking-wide">
                                NOTHING HERE YET
                            </h1>
                            <p className="text-zinc-400 text-sm max-w-md">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <Link
                                href="/Workouts"
                                className="mt-2 inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-[#a3e635] hover:bg-[#8ece28] text-black font-black text-sm uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95"
                            >
                                GO TO WORKOUTS
                            </Link>
                        </div>
                    )}
                </div>

                {/* Tab 2: Save Data */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab font-bold text-sm uppercase"
                    aria-label={`Save Data (${SaveData.length})`}
                    checked={activeTab === 'save'}
                    onChange={() => setActiveTab('save')}
                />
                <div className="tab-content bg-[#121316] border-zinc-800 rounded-b-2xl p-6 space-y-4">
                    {sortedSaveData.length > 0 ? (
                        sortedSaveData.map((liabrary: ILIBRARY) => (
                            <PlanLIbraryCard key={liabrary.id} liabrary={liabrary} type="save" />
                        ))
                    ) : (
                        <div className="p-12 md:p-16 rounded-2xl border border-zinc-800/80 bg-[#0c0d0e] text-center flex flex-col items-center justify-center gap-4">
                            <h1 className="text-xl md:text-2xl font-black uppercase text-white tracking-wide">
                                NOTHING HERE YET
                            </h1>
                            <p className="text-zinc-400 text-sm max-w-md">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <Link
                                href="/Workouts"
                                className="mt-2 inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-[#a3e635] hover:bg-[#8ece28] text-black font-black text-sm uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95"
                            >
                                GO TO WORKOUTS
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyplanPage;