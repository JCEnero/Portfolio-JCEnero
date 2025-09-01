'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('./Sidebar'), { ssr: false });

export default function Navbar() {
    const pathname = usePathname();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            // Only show navbar when very close to top
            setVisible(currentScrollPos < 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Works', path: '/works' },
        { name: 'About', path: '/about' },
        { name: 'Resume', path: '/resume' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: visible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 w-full z-50 mt-0 transition-all duration-300"
        >
            <div className="container mx-auto px-6 py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className={`text-3xl font-extrabold tracking-tight transition-all duration-300`}>
                        <motion.div
                            whileHover={{ 
                                scale: [1, 1.1, 1.05],
                                rotate: [0, -3, 3, 0],
                                transition: {
                                    duration: 0.6,
                                    ease: "easeInOut",
                                    times: [0, 0.3, 0.6, 1],
                                }
                            }}
                            className="w-24 h-24"
                        >
                            <img 
                                src="/LOGO.png" 
                                alt="JCE Logo" 
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
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

                    {/* Sidebar Trigger for Mobile */}
                    <button
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                        className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none transition-all duration-300"
                        aria-label="Toggle sidebar"
                    >
                        <motion.div
                            whileTap={{ scale: 0.85 }}
                            className="w-8 h-8 flex flex-col justify-center items-center gap-1.5"
                        >
                            <div className={`w-6 h-0.5 bg-gray-300 transform transition-all duration-300 ${
                                isSidebarOpen ? 'rotate-45 translate-y-2' : ''
                            }`} />
                            <div className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                                isSidebarOpen ? 'opacity-0' : 'opacity-100'
                            }`} />
                            <div className={`w-6 h-0.5 bg-gray-300 transform transition-all duration-300 ${
                                isSidebarOpen ? '-rotate-45 -translate-y-2' : ''
                            }`} />
                        </motion.div>
                    </button>
                </div>
            </div>
            {/* Animated Sidebar for Mobile */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        </motion.nav>
    );
}