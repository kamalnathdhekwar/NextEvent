"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import ThemeChanger from '../ThemeChanger/ThemeChanger.js';
import logo from '../../../public/images/TaskLogo.png';


export default function Nav() {
    const [isNavOpen, setNavOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className='w-full font-semibold sticky z-50 top-0 bg-white dark:bg-slate-900   dark:shadow-slate-400 shadow-md px-2 md:px-4'>
            <nav className="w-full px-1 xl:px-8 lg:px-4 md:h-[70px] md:py-1 py-3 flex justify-between items-center">
                {/* logo */}
                <div className="">
                    <Link href="/" className='flex justify-center items-center gap-2'>
                        <Image
                            src={logo}
                            className=" lg:w-12   md:w-9 w-7"
                            alt="Logo"
                       
                        /> 
                       <h1 className="lg:text-[33px] md:text-2xl text-xl font-bold md:font-extrabold  text-slate-900 dark:text-slate-300">NextEvent</h1>
                    </Link>
                </div>

                <ul className="flex md:w-fit w-0 md:text-[17px] lg:text-xl text-[0px] lg:space-x-6">
                    <li>
                        <Link href="/" className={`block py-2 pr-4 pl-3 duration-200 ${pathname === "/" ? "text-blue-900 underline" : "text-black"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200 text-slate-800`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/eventform" className={`block py-2 pr-4 pl-3 duration-200 ${pathname === "/about" ? "text-blue-900 underline" : "text-black"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200 text-slate-800`}>
                        EventForm
                        </Link>
                    </li>
                    <li>
                        <Link href="/eventlist" className={`block py-2 pr-4 pl-3 duration-200 ${pathname === "/faqs" ? "text-blue-900 underline" : "text-black"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200 text-slate-800`}>
                        EventList
                        </Link>
                    </li>

                </ul>

                <div className="flex gap-2 justify-center items-center">
                    <ThemeChanger />
                    <button
                        onClick={() => setNavOpen(!isNavOpen)}
                        className={`md:hidden text-3xl z-20 ${isNavOpen ? "text-white" : "text-black dark:text-slate-300"}`}
                    >
                        {isNavOpen ? <CgClose /> : <GiHamburgerMenu />}
                    </button>
                </div>
            </nav>

            <ul className={`fixed flex flex-col pl-10 h-screen top-0 right-[-40px] w-80 space-y-6  bg-slate-800 text-indigo-900 pt-48 md:hidden z-10 transition-transform duration-300 ${isNavOpen ? "translate-x-0" : "translate-x-full"}`}>
                <li>
                    <Link href="/" className={`block py-2 pr-4 pl-3 text-xl hover:scale-110 duration-300 hover:text-indigo-600 ${pathname === "/" ? "text-slate-100 text-3xl" : "text-blue-900 font-semibold dark:text-slate-300"} dark:text-slate-200`}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/eventform" className={`block py-2 pr-4 pl-3 text-xl hover:scale-110 duration-300 hover:text-indigo-600 ${pathname === "/about" ? "text-slate-100 text-3xl" : "text-blue-900 font-semibold dark:text-slate-300"} dark:text-slate-200`}>
                    EventForm
                    </Link>
                </li>
                <li>
                    <Link href="/eventlist" className={`block py-2 pr-4 pl-3 text-xl hover:scale-110 duration-300 hover:text-indigo-600 ${pathname === "/faqs" ? "text-slate-100 text-3xl" : "text-blue-900 font-semibold dark:text-slate-300"} dark:text-slate-200`}>
                                EventList
                    </Link>
                </li>
            </ul>
        </header>
    );
}
