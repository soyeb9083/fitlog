import { Dumbbell } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div className='container mx-auto'>
             <footer className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 border-t border-zinc-800/80 pt-6 mt-12 gap-4">
                    <div className="flex items-center gap-2 font-black tracking-widest text-white uppercase text-sm">
                        <Dumbbell className="w-4 h-4 text-4xl text-[#a3e635]" />
                        FitLog
                    </div>
                    <p className='text-1xl mb-5'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </footer>
            
        </div>
    );
};

export default Footer;