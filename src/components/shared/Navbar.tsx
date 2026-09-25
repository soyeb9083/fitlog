"use client";

import Link from 'next/link';
import React, { useContext, useState } from 'react';
import logo from "@/assets/logo.png";
import Image from 'next/image';
import { LibraryContext } from '@/context/LibraryContext';
import { Bookmark, Dumbbell } from 'lucide-react';

const Navbar = () => {
    const { PlanData = [], SaveData = [] } = useContext(LibraryContext);
    const [activeTab, setActiveTab] = useState('/Workouts');

    return (
        <div className='bg-[#0c0d0e] border-b border-zinc-800/80 sticky top-0 z-50'>
            <div className='container mx-auto px-4'>
                <div className="navbar text-white min-h-16">
                    {/* Navbar Start: Logo & Mobile Menu */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-2">
                                <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-[#121316] border border-zinc-800 rounded-2xl z-50 mt-3 w-52 p-2 shadow-xl"
                            >
                                <li><Link href="/Workouts" className="py-2.5 font-medium">Workouts</Link></li>
                                <li><Link href="/Myplan" className="py-2.5 font-medium">My Plan</Link></li>
                            </ul>
                        </div>

                        {/* Logo */}
                        <div  className='flex items-center gap-2.5 text-white hover:opacity-90 transition-opacity'>
                            <Image src={logo} alt="FitLog Logo" width={32} height={32} className="object-contain" />
                            <span className='font-black text-2xl tracking-wider uppercase'>FITLOG</span>
                        </div>
                        
                    </div>

                    {/* Navbar Center: Desktop Links */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-2 font-semibold text-sm">
                            <li>
                                <Link
                                    href="/Workouts"
                                    onClick={() => setActiveTab('/Workouts')}
                                    className={`hover:text-[#a3e635] transition-colors ${activeTab === '/Workouts' ? 'text-[#a3e635]' : ''
                                        }`}
                                >
                                    Workouts
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/Myplan"
                                    onClick={() => setActiveTab('/Myplan')}
                                    className={`hover:text-[#a3e635] transition-colors ${activeTab === '/Myplan' ? 'text-[#a3e635]' : ''
                                        }`}
                                >
                                    My Plan
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Navbar End: Stats/Counter Badges */}
                    <div className="navbar-end">
                        <div className='flex items-center gap-3'>
                            {/* Plan Counter */}
                            <Link
                                href="/Myplan"
                                className='flex items-center gap-2 bg-[#121316] hover:bg-zinc-800 border border-zinc-800/80 px-3.5 py-2 rounded-xl text-xs font-bold transition-all'
                            >
                                <Dumbbell className='w-4 h-4 text-[#a3e635]' />
                                <span className='hidden sm:inline'>Plan</span>
                                <span className='bg-[#a3e635] text-black px-2 py-0.5 rounded-full text-[11px] font-extrabold'>
                                    {PlanData.length}
                                </span>
                            </Link>

                            {/* Saved Counter */}
                            <Link
                                href="/Myplan"
                                className='flex items-center gap-2 bg-[#121316] hover:bg-zinc-800 border border-zinc-800/80 px-3.5 py-2 rounded-xl text-xs font-bold transition-all'
                            >
                                <Bookmark className='w-4 h-4 text-zinc-400' />
                                <span className='hidden sm:inline'>Saved</span>
                                <span className='bg-zinc-800 text-zinc-200 border border-zinc-700 px-2 py-0.5 rounded-full text-[11px] font-extrabold'>
                                    {SaveData.length}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;