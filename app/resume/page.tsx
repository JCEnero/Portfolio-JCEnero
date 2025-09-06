'use client';


import { useState } from 'react';
import { motion } from 'framer-motion';


export default function Resume() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-slate-950">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,69,219,0.08),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.06),transparent_80%)]" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                {/* Header */}
                <section className="pt-48 pb-20 text-center">
                    <div className="container mx-auto px-6">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl font-light text-white tracking-wider mb-4"
                        >
                            Resume
                        </motion.h1>
                        <div className="w-12 h-px bg-white/30 mx-auto mb-8"></div>
                        
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-gray-300 mb-8"
                        >
                            Passionate developer focused on building impactful and scalable software solutions
                        </motion.p>

                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex justify-center space-x-4"
                        >
                            <button
                                type="button"
                                onClick={() => setShowModal(true)}
                                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                            >
                                Download Resume
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowModal(true)}
                                className="px-8 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-300"
                            >
                                View Resume
                            </button>
                        </motion.div>
                        {showModal && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
                                <div className="bg-[#181A20] border border-gray-700 rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center relative animate-fadeIn">
                                    <svg className="mx-auto mb-4 text-blue-500" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="#23272F" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01" stroke="#60a5fa" />
                                    </svg>
                                    <h2 className="text-2xl font-bold mb-2 text-white tracking-wide">Resume Unavailable</h2>
                                    <p className="text-gray-400 mb-6">Thank you for your interest. My resume is not available at this time.</p>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </section>


            </motion.div>
        </div>
    );
}
