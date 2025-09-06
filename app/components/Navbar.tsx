'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('./Sidebar'), { ssr: false });

export default function Navbar() {
    const pathname = usePathname();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const navItems = [
        { name: 'Works', path: '/works' },
        { name: 'About', path: '/about' },
        { name: 'Resume', path: '/resume' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50">
            <div className="container mx-auto px-6 py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-3xl font-extrabold tracking-tight">
                        <div className="w-16 h-16 md:w-24 md:h-24">
                            <img 
                                src="/LOGO.png" 
                                alt="JCE Logo" 
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className="relative group"
                            >
                                <span
                                    className={`text-sm font-medium transition-colors duration-300 ${
                                        pathname === item.path
                                            ? 'text-blue-400'
                                            : 'text-gray-300 hover:text-white'
                                    }`}
                                >
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                        className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
                        aria-label="Toggle sidebar"
                    >
                        <div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5">
                            <div className={`w-6 h-0.5 bg-gray-300 transform transition-all duration-300 ${
                                isSidebarOpen ? 'rotate-45 translate-y-2' : ''
                            }`} />
                            <div className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                                isSidebarOpen ? 'opacity-0' : 'opacity-100'
                            }`} />
                            <div className={`w-6 h-0.5 bg-gray-300 transform transition-all duration-300 ${
                                isSidebarOpen ? '-rotate-45 -translate-y-2' : ''
                            }`} />
                        </div>
                    </button>
                </div>
            </div>
            {/* Mobile Sidebar */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        </nav>
    );
}