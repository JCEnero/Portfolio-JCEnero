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
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 w-full bg-transparent z-50"
        >
            <div className="container mx-auto px-6 py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-3xl font-extrabold tracking-tight">
                        <motion.span
                            whileHover={{ scale: 1.08, rotate: 2 }}
                            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-600 drop-shadow-lg font-mono uppercase letter-spacing-widest"
                            style={{
                                letterSpacing: '0.15em',
                                textShadow: '0 2px 16px rgba(80,180,255,0.25)',
                                WebkitTextStroke: '1px #3b82f6',
                            }}
                        >
                            JCE
                        </motion.span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className="relative group"
                            >
                                <motion.span
                                    whileHover={{ y: -2 }}
                                    className={`text-sm font-medium transition-colors duration-300 ${
                                        pathname === item.path
                                            ? 'text-blue-400'
                                            : 'text-gray-300 hover:text-white'
                                    }`}
                                >
                                    {item.name}
                                </motion.span>
                                {pathname === item.path && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Sidebar Trigger for Mobile */}
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
                        aria-label="Open sidebar"
                    >
                        <motion.div
                            whileTap={{ scale: 0.85 }}
                            className="w-8 h-8 flex items-center justify-center"
                        >
                            <span className="block w-7 h-0.5 bg-current rounded-full mb-1"></span>
                            <span className="block w-7 h-0.5 bg-current rounded-full mb-1"></span>
                            <span className="block w-7 h-0.5 bg-current rounded-full"></span>
                        </motion.div>
                    </button>
                </div>
            </div>
            {/* Animated Sidebar for Mobile */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        </motion.nav>
    );
}