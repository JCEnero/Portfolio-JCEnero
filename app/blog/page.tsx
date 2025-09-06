'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function Blog() {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Helper function to format static dates
    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    const posts = [
        {
            id: 0,
            author: {
                name: "John Carl Enero",
                avatar: "/pfp.jpg",
                title: "Student & Aspiring Developer"
            },
            date: new Date('2025-9-7'), // 9th grade, when it all started
            content: "How It All Started\n\nBack when I was in 9th grade at Lagro High School, I was just 14 years old with no idea where life would take me. In our TLE subject, we were asked to choose electives. For some reason, I was automatically placed in ICT (Information and Communications Technology) — and honestly, I didn't think much of it at first.\n\nLittle did I know, that moment would change my life.\n\nOur lessons started with the basics of HTML and CSS. At first, I was just doing the usual activities, experimenting with tags and styles. But then I decided to try something fun — I attempted to recreate Facebook's design using only HTML and CSS.\n\nLooking back, it was far from perfect (honestly, it looked pretty ugly compared to the real thing). But at that time, when my friends and classmates saw it, they were amazed and kept asking me how I did it. The truth is, I was just playing around — messing with CSS colors and simple HTML structures.\n\nThat little experiment made me realize something:\nI wasn't just doing schoolwork… I was building something from nothing.\n\nAnd that's where my passion for web development began. What started as a class assignment turned into the foundation of a journey I'm still on today.",
            tags: ["HTML", "CSS", "First Steps", "School"],
            type: "story",
            pinned: true
        }
    ];

    const filters = [
        { id: 'all', label: 'All Posts', count: posts.length },
        { id: 'project', label: 'Projects', count: posts.filter(p => p.type === 'project').length },
        { id: 'story', label: 'Stories', count: posts.filter(p => p.type === 'story').length },
        { id: 'experience', label: 'Experiences', count: posts.filter(p => p.type === 'experience').length },
        { id: 'tip', label: 'Tips', count: posts.filter(p => p.type === 'tip').length },
        { id: 'learning', label: 'Learning', count: posts.filter(p => p.type === 'learning').length }
    ];

    const filteredPosts = selectedFilter === 'all' 
        ? posts 
        : posts.filter(post => post.type === selectedFilter);

    const pinnedPosts = posts.filter(post => post.pinned);

    return (
        <div className="min-h-screen bg-black relative">
            {/* Background Effects - Fixed positioning */}
            <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-950 to-slate-950" />
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,69,219,0.03),transparent_70%)]" />
            
            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-4xl max-h-[90vh] w-full h-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Full size image"
                                fill
                                className="object-contain rounded-lg"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <div className="relative z-10 pt-20">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 mt-10"
                    >
                        <h1 className="text-4xl lg:text-6xl font-light text-white mb-4 tracking-tight">
                            Stories
                        </h1>
                        <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-6"></div>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto">
                            My journey in code, creativity, and continuous learning
                        </p>
                    </motion.div>

                    {/* Pinned Posts */}
                    {pinnedPosts.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-8"
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 12V4a1 1 0 00-1-1H9a1 1 0 00-1 1v8H6l6 6 6-6h-2z"/>
                                </svg>
                                <span className="text-sm font-medium text-blue-400">Pinned</span>
                            </div>
                            {pinnedPosts.map((post) => (
                                <div key={`pinned-${post.id}`} className="mb-6">
                                    <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:bg-white/8 transition-all duration-300">
                                        {/* Post Header */}
                                        <div className="flex items-start space-x-4 mb-4">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={post.author.avatar}
                                                    alt={post.author.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center space-x-2">
                                                    <h3 className="font-medium text-white text-sm">{post.author.name}</h3>
                                                    <span className="text-gray-500 text-xs">•</span>
                                                    <span className="text-gray-400 text-xs">{formatDate(post.date)}</span>
                                                </div>
                                                <p className="text-gray-400 text-xs">{post.author.title}</p>
                                            </div>
                                        </div>

                                        {/* Post Content */}
                                        <div className="mb-4">
                                            <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                                                {post.content}
                                            </p>
                                        </div>

                                        {/* Post Image */}
                                        {(post as any).image && (
                                            <div 
                                                className="mb-4 rounded-xl overflow-hidden cursor-pointer"
                                                onClick={() => setSelectedImage((post as any).image)}
                                            >
                                                <div className="relative h-64 w-full">
                                                    <Image
                                                        src={(post as any).image}
                                                        alt="Post image"
                                                        fill
                                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* Filter Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-8"
                    >
                        <div className="flex flex-wrap gap-2 justify-center">
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => setSelectedFilter(filter.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        selectedFilter === filter.id
                                            ? 'bg-white/15 text-white border border-white/20'
                                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    {filter.label} ({filter.count})
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Posts Feed */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-6 mb-20"
                    >
                        {filteredPosts.filter(post => !post.pinned).map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all duration-300"
                            >
                                {/* Post Header */}
                                <div className="flex items-start space-x-4 mb-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src={post.author.avatar}
                                            alt={post.author.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center space-x-2">
                                            <h3 className="font-medium text-white text-sm">{post.author.name}</h3>
                                            <span className="text-gray-500 text-xs">•</span>
                                            <span className="text-gray-400 text-xs">{formatDate(post.date)}</span>
                                        </div>
                                        <p className="text-gray-400 text-xs">{post.author.title}</p>
                                    </div>
                                </div>

                                {/* Post Content */}
                                <div className="mb-4">
                                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                                        {post.content}
                                    </p>
                                </div>

                                {/* Post Image */}
                                {(post as any).image && (
                                    <div 
                                        className="mb-4 rounded-xl overflow-hidden cursor-pointer"
                                        onClick={() => setSelectedImage((post as any).image)}
                                    >
                                        <div className="relative h-64 w-full">
                                            <Image
                                                src={(post as any).image}
                                                alt="Post image"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Load More Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-center mb-20"
                    >
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                            <div className="flex flex-col items-center space-y-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-2">
                                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-light text-white mb-2">End of Stories</h3>
                                <p className="text-gray-400 text-center max-w-md">
                                    You've reached the end! More stories and updates coming soon as I continue my development journey.
                                </p>
                                <div className="flex items-center space-x-4 pt-4">
                                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                        <span>Stay tuned for updates</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
