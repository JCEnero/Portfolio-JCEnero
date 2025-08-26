'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

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

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-gray-300 hover:text-white"
                    >
                        <motion.div
                            animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
                            className="w-6 h-6 relative"
                        >
                            <motion.span
                                animate={isOpen ? { rotate: 90, y: 0 } : { rotate: 0, y: -8 }}
                                className="absolute block h-0.5 w-6 bg-current transform transition"
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="absolute block h-0.5 w-6 bg-current transform"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -90, y: 0 } : { rotate: 0, y: 8 }}
                                className="absolute block h-0.5 w-6 bg-current transform transition"
                            />
                        </motion.div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="pt-4 pb-2 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`block py-2 px-4 rounded-lg transition-colors duration-300 ${
                                    pathname === item.path
                                        ? 'bg-blue-900/30 text-blue-400'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
}