import { ILIBRARY } from '@/Type/Ilibrary';
import Image from 'next/image'; // lucide-react এর বদলে next/image হবে
import React from 'react';
import { Dumbbell } from 'lucide-react';
import PlanButton from '@/components/LibraryDetails/PlanButton';
import SaveButton from '@/components/LibraryDetails/SaveButton';

interface LibraryDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const FitlibaryPromise = async (): Promise<ILIBRARY[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
};

const LibraryDetailsPage = async ({ params }: LibraryDetailsPageProps) => {
    const { id } = await params;
    const LibraryData = await FitlibaryPromise();

    // 'libary' এর বদলে 'exercise' নাম রাখা হয়েছে
    const exercise = LibraryData.find((li: ILIBRARY) => String(li.id) === String(id));

    // ডাটা না পাওয়া গেলে ক্র্যাশ থেকে বাঁচার জন্য
    if (!exercise) {
        return (
            <div className="min-h-screen bg-[#0c0d0e] text-white flex items-center justify-center">
                <h1 className="text-2xl font-bold">Exercise Not Found</h1>
            </div>
        );
    }

    return (
        <div className='continer mx-auto'>
            <div className="min-h-screen bg-[#0c0d0e] text-white flex flex-col justify-between p-6 md:p-12">
                {/* Main Container */}
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                    {/* Left Column: Image */}
                    <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800">
                        <Image
                            src={exercise.image}
                            alt={exercise.name}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* Right Column: Details */}
                    <div className="flex flex-col gap-6">
                        {/* Header & Badges */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wide leading-tight">
                                {exercise.name}
                            </h1>
                            <p className="text-zinc-400 text-sm md:text-base mt-2 leading-relaxed">
                                {exercise.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {exercise.muscleGroups.map((group) => (
                                    <span
                                        key={group}
                                        className="bg-[#a3e635] text-black font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider"
                                    >
                                        {group}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Key-Value Specs Card */}
                        <div className="bg-[#131418] rounded-2xl p-5 border border-zinc-800/80 divide-y divide-zinc-800/60 text-sm">
                            <div className="flex justify-between py-2.5">
                                <span className="text-zinc-500 uppercase tracking-wider text-xs font-semibold">Equipment</span>
                                <span className="font-medium text-zinc-200">{exercise.equipment}</span>
                            </div>
                            <div className="flex justify-between py-2.5">
                                <span className="text-zinc-500 uppercase tracking-wider text-xs font-semibold">Difficulty</span>
                                <span className="font-medium text-zinc-200">{exercise.difficulty}</span>
                            </div>
                            <div className="flex justify-between py-2.5">
                                <span className="text-zinc-500 uppercase tracking-wider text-xs font-semibold">Sets</span>
                                <span className="font-medium text-zinc-200">{exercise.sets}</span>
                            </div>
                            <div className="flex justify-between py-2.5">
                                <span className="text-zinc-500 uppercase tracking-wider text-xs font-semibold">Reps</span>
                                <span className="font-medium text-zinc-200">{exercise.reps}</span>
                            </div>
                            <div className="flex justify-between py-2.5">
                                <span className="text-zinc-500 uppercase tracking-wider text-xs font-semibold">Duration</span>
                                <span className="font-medium text-zinc-200">{exercise.duration} min</span>
                            </div>
                            <div className="flex justify-between py-2.5">
                                <span className="text-zinc-500 uppercase tracking-wider text-xs font-semibold">Calories</span>
                                <span className="font-medium text-zinc-200">{exercise.caloriesBurned} kcal</span>
                            </div>
                            <div className="flex justify-between py-2.5">
                                <span className="text-zinc-500 uppercase tracking-wider text-xs font-semibold">Rating</span>
                                <span className="font-medium text-zinc-200">{exercise.rating}</span>
                            </div>
                        </div>

                        {/* Instructions */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                                Instructions
                            </h3>
                            <ol className="space-y-2.5 text-zinc-300 text-sm list-decimal list-inside marker:text-zinc-500">
                                {exercise.instructions.map((step, idx) => (
                                    <li key={idx} className="leading-relaxed">
                                        <span className="text-zinc-300 ml-1">{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 pt-2">
                            <PlanButton library={exercise} />
                            <SaveButton library={exercise}/>
                           
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 border-t border-zinc-800/80 pt-6 mt-12 gap-4">
                    <div className="flex items-center gap-2 font-black tracking-widest text-white uppercase text-sm">
                        <Dumbbell className="w-4 h-4 text-[#a3e635]" />
                        FitLog
                    </div>
                    <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </footer>
            </div>
        </div>

    );
};

export default LibraryDetailsPage;