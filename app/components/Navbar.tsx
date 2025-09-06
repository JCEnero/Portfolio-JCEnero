'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Sidebar = dynamic(() => import('./Sidebar'), { ssr: false });

export default function Navbar() {
    const pathname = usePathname();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const navItems = [
        { name: 'Works', path: '/works' },
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-sm">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo - Invisible on homepage but maintains space */}
                    <Link href="/" className="text-3xl font-extrabold tracking-tight">
                        <div className={`w-12 h-12 md:w-16 md:h-16 ${pathname === '/' ? 'opacity-0' : 'opacity-100'}`}>
                            <Image 
                                src="/LOGO.png" 
                                alt="JCE Logo" 
                                width={64}
                                height={64}
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
                        className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
                        aria-label="Toggle sidebar"
                    >
                        <motion.div
                            whileTap={{ scale: 0.85 }}
                            className="w-8 h-8 flex flex-col justify-center items-center relative"
                        >
                            <motion.span
                                animate={isSidebarOpen 
                                    ? { rotate: 45, y: 7, width: 20 } 
                                    : { rotate: 0, y: -6, width: 24 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="block h-0.5 bg-current rounded-full absolute"
                                style={{ transformOrigin: "50% 50%" }}
                            />
                            <motion.span
                                animate={isSidebarOpen ? { opacity: 0 } : { opacity: 1 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="block w-6 h-0.5 bg-current rounded-full absolute"
                            />
                            <motion.span
                                animate={isSidebarOpen 
                                    ? { rotate: -45, y: 7, width: 20 } 
                                    : { rotate: 0, y: 6, width: 24 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="block h-0.5 bg-current rounded-full absolute"
                                style={{ transformOrigin: "50% 50%" }}
                            />
                        </motion.div>
                    </button>
                </div>
            </div>
            {/* Mobile Sidebar */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        </nav>
    );
}