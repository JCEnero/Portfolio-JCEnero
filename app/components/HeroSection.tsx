'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('./Sidebar'), { ssr: false });

export default function HeroSection() {
    const [displayedText, setDisplayedText] = useState('');
    const [currentFont, setCurrentFont] = useState(0);
    const fullText = 'Think. Code. Deploy.';
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const fontClasses = [
        'font-mono',     // Default
        'font-serif',    // Font 1
        'font-sans',     // Font 2
        'font-bold',     // Font 3
    ];

    useEffect(() => {
        let currentIndex = 0;
        let isDeleting = false;
        let pauseCount = 0;
        let fontCycleCount = 0;

        const typeEffect = () => {
            if (!isDeleting && currentIndex <= fullText.length) {
                // Typing
                setDisplayedText(fullText.slice(0, currentIndex));
                currentIndex++;
                setTimeout(typeEffect, 100);
            } else if (!isDeleting && currentIndex > fullText.length) {
                // Pause at the end for 4 seconds
                if (pauseCount < 40) { // 4 second pause (40 * 100ms)
                    pauseCount++;
                    setTimeout(typeEffect, 100);
                } else {
                    // Start deleting
                    isDeleting = true;
                    pauseCount = 0;
                    setTimeout(typeEffect, 50);
                }
            } else if (isDeleting && currentIndex > 0) {
                // Deleting
                currentIndex--;
                setDisplayedText(fullText.slice(0, currentIndex));
                setTimeout(typeEffect, 50);
            } else if (isDeleting && currentIndex === 0) {
                // Pause before restarting
                if (pauseCount < 10) { // 1 second pause (10 * 100ms)
                    pauseCount++;
                    setTimeout(typeEffect, 100);
                } else {
                    // Change font and restart typing
                    fontCycleCount++;
                    if (fontCycleCount >= 4) {
                        fontCycleCount = 0; // Reset to default font
                    }
                    setCurrentFont(fontCycleCount);
                    
                    isDeleting = false;
                    pauseCount = 0;
                    setTimeout(typeEffect, 100);
                }
            }
        };

        typeEffect();
    }, []);

    const navItems = [
        { name: 'Works', path: '/works' },
        { name: 'About', path: '/about' },
        { name: 'Resume', path: '/resume' },
    ];

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/JCEnero', icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
        )},
        { name: 'LinkedIn', url: 'https://linkedin.com/in/jcenero', icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        )},
        { name: 'Facebook', url: 'https://web.facebook.com/johncarlenero7', icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
        )},
        { name: 'MonkeyType', url: 'https://monkeytype.com/profile/JCEnero', icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
                <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="6.5" cy="8.5" r="0.5" fill="currentColor"/>
                <circle cx="8.5" cy="8.5" r="0.5" fill="currentColor"/>
                <circle cx="10.5" cy="8.5" r="0.5" fill="currentColor"/>
                <circle cx="6" cy="12" r="0.5" fill="currentColor"/>
                <circle cx="8" cy="12" r="0.5" fill="currentColor"/>
                <circle cx="10" cy="12" r="0.5" fill="currentColor"/>
                <circle cx="12" cy="12" r="0.5" fill="currentColor"/>
                <circle cx="14" cy="12" r="0.5" fill="currentColor"/>
                <circle cx="16" cy="12" r="0.5" fill="currentColor"/>
                <circle cx="18" cy="12" r="0.5" fill="currentColor"/>
                <rect x="5" y="15" width="8" height="1" fill="currentColor"/>
            </svg>
        )},
        { name: 'LeetCode', url: 'https://leetcode.com/JCEnero', icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
            </svg>
        )},
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Transparent Navbar */}
            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-0 w-full bg-transparent z-50"
            >
                <div className="container mx-auto px-6 py-6 mt-8">
                    <div className="flex items-center justify-end">
                        {/* Desktop Navigation - Top Right */}
                        <div className="hidden md:flex space-x-8">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                >
                                    <Link
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
                                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-colors duration-300"
                        >
                            <motion.div
                                whileTap={{ scale: 0.85 }}
                                className="w-8 h-8 flex flex-col justify-center items-center relative"
                            >
                                <motion.span
                                    animate={isOpen 
                                        ? { rotate: 45, y: 7, width: 20 } 
                                        : { rotate: 0, y: -6, width: 24 }}
                                    className="block h-0.5 bg-current rounded-full absolute transition-all duration-300"
                                    style={{ transformOrigin: "50% 50%" }}
                                />
                                <motion.span
                                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                    className="block w-6 h-0.5 bg-current rounded-full absolute transition-all duration-300"
                                />
                                <motion.span
                                    animate={isOpen 
                                        ? { rotate: -45, y: 7, width: 20 } 
                                        : { rotate: 0, y: 6, width: 24 }}
                                    className="block h-0.5 bg-current rounded-full absolute transition-all duration-300"
                                    style={{ transformOrigin: "50% 50%" }}
                                />
                            </motion.div>
                        </button>
                    </div>

                    {/* Sidebar for Mobile */}
                    <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
                </div>
            </motion.nav>

            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,69,219,0.08),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.06),transparent_80%)]" />
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.3),rgba(0,0,0,0.8))]" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className={`text-lg md:text-xl text-gray-400 mb-4 h-6 transition-all duration-300 ${fontClasses[currentFont]}`}
                >
                    {displayedText}
                    <span className="animate-pulse">|</span>
                </motion.div>
                
                <motion.h1
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-extrabold md:font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                >
                    John Carl Enero
                </motion.h1>
                
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base md:text-lg text-gray-300 mb-6 px-4"
                >
                    Full Stack Developer & DevOps Enthusiast
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex justify-center gap-4 mb-8"
                >
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                            className="p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-full text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600"
                            aria-label={link.name}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="animate-bounce">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </motion.div>
        </motion.section>
    );
}
