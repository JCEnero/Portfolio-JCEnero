'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface Author {
    name: string;
    avatar: string;
    title: string;
}

interface BlogPost {
    id: number;
    author: Author;
    date: Date;
    content: string;
    tags: string[];
    type: string;
    pinned?: boolean;
    image?: string;
}

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

    const posts: BlogPost[] = [
        {
            id: 1,
            author: {
                name: "John Carl Enero",
                avatar: "/pfp.jpg",
                title: "Student & Aspiring Developer"
            },
            date: new Date('2025-12-5'),
            content: "A day I'll never forget. After months of sleepless nights, countless debugging sessions, and endless cups of coffee, today we finally presented our capstone project - Aquivus.\n\nWe stood before a panel of four distinguished faculty members, each armed with tough questions and critical evaluations. The tension was real — all those late-night coding sessions, all the features we implemented, all the testing and refinement — it all came down to this moment. My team and I took turns answering, demonstrating features, and walking through our code. Every question we anticipated. Every concern we addressed. We had prepared for this.\n\nAfter what felt like hours of interrogation and technical discussion, the panel deliberated. Then came the words we'd been waiting for - \"Congratulations, you passed.\"\n\nAll those sleepless nights? Worth it. All those debugging sessions at 3 AM? Worth it. All the stress, the pressure, the moments of doubt? Worth it.\n\nAquivus wasn't just a project — it was a journey. It taught me that great things don't come easy. They come from persistence, teamwork, and the willingness to push through when things get tough.\n\nTo my team - Thank you for staying up with me, for debugging together, and for never giving up. To everyone reading this - If you're working on something challenging right now, keep going. The sleepless nights will pay off. The hard work will be worth it.\n\nThis is just the beginning.",
            tags: ["Aquivus", "Capstone", "Final Defense", "Achievement", "Project"],
            type: "experience",
            image: "/blogs-img/AQUIVUSDEFENSE.jpg"
        },
        {
            id: 3,
            author: {
                name: "John Carl Enero",
                avatar: "/pfp.jpg",
                title: "Student & Aspiring Developer"
            },
            date: new Date('2025-12-1'),
            content: "\"THE BEST WAY TO PREDICT THE FUTURE IS TO CREATE IT.\" - PETER DRUCKER\n\nJust a reminder to myself and anyone reading this - stop waiting for the perfect moment. Stop waiting for everything to align. The future you want won't just happen. You have to build it, line by line, project by project, day by day.\n\nEvery feature you code, every bug you fix, every late night you spend learning something new - you're literally creating your future. Not predicting it. Not hoping for it. Creating it.\n\nSo keep building. Keep creating. The future is in your hands.",
            tags: ["Motivation", "Thoughts", "Development"],
            type: "tip"
        },
        {
            id: 2,
            author: {
                name: "John Carl Enero",
                avatar: "/pfp.jpg",
                title: "Student & Aspiring Developer"
            },
            date: new Date('2024-12-3'),
            content: "The day I carried an entire project on my shoulders. For months leading up to December 3rd, I had been burning the midnight oil on FindMe — but there was a twist. While my teammates focused on documentation, proposals, and presentations, I was alone in the trenches of code. Every feature, every function, every line — it all fell on me.\n\nDon't get me wrong, documentation is crucial. My team did their part brilliantly with research, user manuals, and technical papers. But when it came to the actual system, the implementation, the debugging at 4 AM when nothing worked — that was my battle to fight. Solo.\n\nThis project pushed me into completely new territory. For the first time, I dove into Blender to create 3D models for FindMe. Learning 3D modeling while simultaneously coding the entire system was intense. I spent hours naming every object in Blender meticulously because each one needed to be called and manipulated through code. Every mesh, every material, every component had to have a specific name so I could reference it programmatically and give it functions. It was like learning two languages at once — Blender's interface and how to integrate 3D assets into my codebase.\n\nThe pressure was immense. There were nights I questioned if I could pull it off. Nights when bugs seemed impossible to fix. Nights when I felt like the weight of the entire project was crushing me. Because it literally was.\n\nThen came the defense. Standing before the panel, my team presented our documentation while I demonstrated the live system. Every feature they described, I had built. Every technical question thrown at us, I answered. The panelists were impressed, but they didn't know the full story — that behind the polished interface and smooth functionality was one programmer who refused to give up.\n\nTo anyone out there coding solo on a team project - I see you. Keep pushing. You've got this.",
            tags: ["FindMe", "Solo Development", "Final Defense", "Achievement", "Project"],
            type: "experience",
            image: "/blogs-img/FINDMEDEFENSE.jpg"
        },
        {
            id: 0,
            author: {
                name: "John Carl Enero",
                avatar: "/pfp.jpg",
                title: "Student & Aspiring Developer"
            },
            date: new Date('2025-9-7'), // 9th grade, when it all started
            content: "How It All Started\n\nBack when I was in 9th grade at Lagro High School, I was just 14 years old with no idea where life would take me. In our TLE subject, we were asked to choose electives. For some reason, I was automatically placed in ICT (Information and Communications Technology) — and honestly, I didn't think much of it at first.\n\nLittle did I know, that moment would change my life.\n\nOur lessons started with the basics of HTML and CSS. At first, I was just doing the usual activities, experimenting with tags and styles. But then I decided to try something fun — I attempted to recreate Facebook's design using only HTML and CSS.\n\nLooking back, it was far from perfect (honestly, it looked pretty ugly compared to the real thing). But at that time, when my friends and classmates saw it, they were amazed and kept asking me how I did it. The truth is, I was just playing around — messing with CSS colors and simple HTML structures.\n\nThat little experiment made me realize something - I wasn't just doing schoolwork… I was building something from nothing.\n\nAnd that's where my passion for web development began. What started as a class assignment turned into the foundation of a journey I'm still on today.",
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
                                        {post.image && (
                                            <div 
                                                className="mb-4 rounded-xl overflow-hidden cursor-pointer"
                                                onClick={() => setSelectedImage(post.image!)}
                                            >
                                                <div className="relative h-64 w-full">
                                                    <Image
                                                        src={post.image}
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
                                {post.image && (
                                    <div 
                                        className="mb-4 rounded-xl overflow-hidden cursor-pointer"
                                        onClick={() => setSelectedImage(post.image!)}
                                    >
                                        <div className="relative h-64 w-full">
                                            <Image
                                                src={post.image}
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
                                    You&apos;ve reached the end! More stories and updates coming soon as I continue my development journey.
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
