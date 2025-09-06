'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function About() {
    const ref = useRef(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [activeTab, setActiveTab] = useState('experience');

    // Add scroll synchronization
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (scrollRef.current) {
                // Prevent default scrolling on the page
                e.preventDefault();
                
                // Apply scroll to the right side container
                scrollRef.current.scrollTop += e.deltaY;
            }
        };

        // Add wheel event listener to the entire document
        document.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            document.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const workExperience = [
        {
            title: 'Graphic Design Intern',
            company: 'Centrive Technologies Inc.',
            period: '2023 (4 Months)',
            description: 'Created graphic and layout designs that enhanced user experience, bridging visual design with frontend development workflows.',
            logo: '/centrive.jpg',
            link: 'https://centrivetech.com',
            type: 'work',
            icon: '💼'
        },
    ];

    const education = [
        {
            degree: 'Bachelor of Science in Information Technology',
            school: 'Quezon City University',
            period: '2023 - 2027',
            description: 'Currently pursuing coursework in software engineering, web development, and system design with a strong interest in full-stack development and emerging technologies.',
            logo: '/qcu.png',
            link: 'https://qcu.edu.ph',
            type: 'education',
            icon: '🎓'
        },
        {
            degree: 'Information and Communications Technology',
            school: 'Lagro High School',
            period: '2019 - 2023',
            description: 'Completed senior high school education with focus on Information and Communications Technology. Developed foundational skills in programming, mathematics, and analytical thinking that sparked my interest in development.',
            logo: '/lhs.png',
            link: 'https://lagrohighschool.com',
            type: 'education',
            icon: '📚'
        },
    ];

    const competitions = [
        {
            title: 'TON Hackers League Hackathon Manila Bootcamp',
            organizer: 'Openverse PH',
            period: '2024',
            description: 'Participated in a collaborative hackathon where we explored and built projects using Telegram Mini Apps, Xircus, and other TON ecosystem tools. Gained hands-on experience in rapid prototyping, teamwork, and integrating blockchain-powered solutions into real-world applications.',
            logo: '/ton.jpg',
            cardImage: '/certificate.jpg',
            link: 'https://lu.ma/0nn4y9gb',
            type: 'competition',
            icon: '🏆'
        },
    ];

    const skillCategories = {
        'Frontend Development': [
            { name: 'JavaScript', icon: '/icons/javascript.svg', color: 'from-yellow-400 to-yellow-600' },
            { name: 'React.js', icon: '/icons/react.svg', color: 'from-cyan-400 to-blue-500' },
            { name: 'Next.js', icon: '/icons/Next.js.svg', color: 'from-gray-400 to-gray-600' },
            { name: 'HTML5', icon: '/icons/html5.svg', color: 'from-orange-400 to-red-500' },
            { name: 'CSS3', icon: '/icons/css3.svg', color: 'from-blue-400 to-blue-600' },
            { name: 'Tailwind', icon: '/icons/tailwind.svg', color: 'from-teal-400 to-cyan-500' }
        ],
        'Backend Development': [
            { name: 'Node.js', icon: '/icons/nodejs.svg', color: 'from-green-400 to-green-600' },
            { name: 'Express.js', icon: '/icons/express.svg', color: 'from-gray-500 to-gray-700' },
            { name: 'Python', icon: '/icons/python.svg', color: 'from-blue-400 to-yellow-400' },
            { name: 'Java', icon: '/icons/java.svg', color: 'from-red-500 to-orange-600' },
            { name: 'PHP', icon: '/icons/php.svg', color: 'from-indigo-400 to-purple-500' },
            { name: '.NET Core', icon: '/icons/NET core.svg', color: 'from-purple-500 to-blue-600' }
        ],
        'Database & Cloud': [
            { name: 'MongoDB', icon: '/icons/mongodb.svg', color: 'from-green-500 to-green-700' },
            { name: 'SQL', icon: '/icons/sql.svg', color: 'from-blue-500 to-indigo-600' },
            { name: 'Firebase', icon: '/icons/firebase.svg', color: 'from-yellow-400 to-orange-500' },
            { name: 'Azure', icon: '/icons/azure.svg', color: 'from-blue-400 to-blue-600' },
            { name: 'AWS', icon: '/icons/aws.svg', color: 'from-orange-400 to-yellow-500' }
        ],
        'Tools & Technologies': [
            { name: 'Docker', icon: '/icons/docker.svg', color: 'from-blue-400 to-blue-600' },
            { name: 'Git', icon: '/icons/git.svg', color: 'from-red-500 to-orange-600' },
            { name: 'Three.js', icon: '/icons/Three.js.svg', color: 'from-gray-400 to-gray-600' },
            { name: 'TensorFlow', icon: '/icons/TensorFlow.svg', color: 'from-orange-400 to-yellow-500' },
            { name: 'Blender', icon: '/icons/Blender.svg', color: 'from-blue-500 to-orange-500' }
        ]
    };

    interface ExperienceCardProps {
        item: {
            type: string;
            logo: string;
            link: string;
            title?: string;
            company?: string;
            period?: string;
            description?: string;
            degree?: string;
            school?: string;
            organizer?: string;
            cardImage?: string;
            icon?: string;
        };
        index: number;
    }

    const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, index }) => (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative overflow-hidden"
        >
            <div 
                className="relative bg-gradient-to-br from-slate-900/95 via-gray-950/90 to-black/95 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/20 hover:border-blue-500/30 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/5"
                onClick={() => window.open(item.link, '_blank')}
            >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-3 group-hover:opacity-8 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl"></div>
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-xl flex items-center justify-center text-2xl border border-slate-700/30">
                            {item.icon}
                        </div>
                        {/* Logo */}
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-800/80 border border-slate-700/40">
                            <Image
                                src={item.logo}
                                alt="Logo"
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    const parent = target.parentElement;
                                    if (parent) {
                                        const name = (item.type === 'work' ? item.company : item.type === 'education' ? item.school : item.organizer) ?? '';
                                        const initials = name.split(' ').map((w: string) => w[0]).join('').slice(0, 2) || '?';
                                        parent.innerHTML = `<div class="w-full h-full bg-slate-700/80 flex items-center justify-center text-slate-300 font-bold text-sm">${initials}</div>`;
                                    }
                                }}
                            />
                        </div>
                    </div>
                    
                    {/* External link */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 bg-zinc-800/50 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {item.type === 'work' ? item.title : item.type === 'education' ? item.degree : item.title}
                    </h3>
                    
                    <p className="text-zinc-300 font-medium">
                        {item.type === 'work' ? item.company : item.type === 'education' ? item.school : item.organizer}
                    </p>

                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-zinc-400">{item.period}</span>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed">
                        {item.description}
                    </p>

                    {/* Competition image */}
                    {item.type === 'competition' && item.cardImage && (
                        <div className="mt-6 rounded-xl overflow-hidden">
                            <Image
                                src={item.cardImage}
                                alt={`${item.title} certificate`}
                                width={800}
                                height={600}
                                className="w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] object-contain bg-zinc-900/30"
                            />
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );

    return (
        <div ref={ref} className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-slate-950 px-6 lg:px-12 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,69,219,0.08),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.06),transparent_80%)]" />
            
            <style jsx global>{`
                .right-edge-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                
                .right-edge-scrollbar::-webkit-scrollbar-track {
                    background: rgba(39, 39, 42, 0.3);
                    border-radius: 4px;
                }
                
                .right-edge-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                    border-radius: 4px;
                    border: 1px solid rgba(59, 130, 246, 0.2);
                }
                
                .right-edge-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(135deg, #60a5fa, #a78bfa);
                }
                
                .right-edge-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: #3b82f6 rgba(39, 39, 42, 0.3);
                }
                
                /* Position scrollbar at the very right edge */
                .scrollbar-container {
                    position: relative;
                }
                
                .scrollbar-container::-webkit-scrollbar {
                    position: absolute;
                    right: 0;
                }
            `}</style>
            
            <div className="flex h-screen">
                {/* Left Column - Fixed Profile */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="hidden lg:flex lg:w-2/5 xl:w-1/3 fixed left-6 lg:left-12 top-0 h-full z-10"
                >
                    <div className="flex flex-col justify-center items-center w-full px-8">
                        {/* Profile Content */}
                        <div className="text-center">
                            {/* Profile Image */}
                            <div className="relative w-48 h-48 mx-auto mb-6">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-md opacity-60"></div>
                                <div className="relative w-full h-full bg-zinc-800 rounded-full overflow-hidden border-4 border-zinc-700">
                                    <Image
                                        src="/pfp.jpg"
                                        alt="John Carl Enero"
                                        fill
                                        className="object-cover"
                                        priority
                                        onError={(e) => {
                                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%2327272a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='60' fill='%23a1a1aa'%3EJC%3C/text%3E%3C/svg%3E";
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Name & Title */}
                            <div className="mb-6">
                                <h1 className="text-2xl font-bold text-white mb-2">John Carl Enero</h1>
                                <p className="text-zinc-400 mb-3">Full Stack Developer</p>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm text-zinc-500">Available for work</span>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="text-center">
                                    <div className="text-xl font-bold text-blue-400">5+</div>
                                    <div className="text-xs text-zinc-500">Years Learning</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold text-purple-400">15+</div>
                                    <div className="text-xs text-zinc-500">Technologies</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold text-pink-400">20+</div>
                                    <div className="text-xs text-zinc-500">Projects</div>
                                </div>
                            </div>

                            {/* Bio */}
                            <div>
                                <p className="text-sm text-zinc-300 leading-relaxed max-w-xs mx-auto">
                                    Passionate developer who started coding in 9th grade. I love creating scalable applications and solving complex problems with creative solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column - Scrollable Content */}
                <div className="w-full lg:ml-[calc(40%-1.5rem)] xl:ml-[calc(33.333333%-3rem)] lg:w-3/5 xl:w-2/3 relative">
                    <div 
                        ref={scrollRef}
                        className="h-full overflow-y-auto right-edge-scrollbar" 
                        style={{
                            marginRight: 'calc(-1 * (100vw - 100%))',
                            paddingRight: 'calc(100vw - 100%)',
                            width: 'calc(100% + (100vw - 100%))'
                        }}
                    >
                        <div className="pt-32 pb-12 px-6 lg:px-8" style={{
                            marginRight: '3rem',
                            paddingRight: '0'
                        }}>
                            {/* Mobile Profile - Only visible on mobile */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8 }}
                                className="lg:hidden mb-12"
                            >
                                <div className="text-center">
                                    {/* Profile Image */}
                                    <div className="relative w-48 h-48 mx-auto mb-6">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-md opacity-60"></div>
                                        <div className="relative w-full h-full bg-zinc-800 rounded-full overflow-hidden border-4 border-zinc-700">
                                            <Image
                                                src="/pfp.jpg"
                                                alt="John Carl Enero"
                                                fill
                                                className="object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%2327272a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='60' fill='%23a1a1aa'%3EJC%3C/text%3E%3C/svg%3E";
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Name & Title */}
                                    <div className="mb-6">
                                        <h1 className="text-2xl font-bold text-white mb-2">John Carl Enero</h1>
                                        <p className="text-zinc-400 mb-3">Full Stack Developer</p>
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <span className="text-sm text-zinc-500">Available for work</span>
                                        </div>
                                    </div>

                                    {/* Quick Stats */}
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div className="text-center">
                                            <div className="text-xl font-bold text-blue-400">5+</div>
                                            <div className="text-xs text-zinc-500">Years Learning</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xl font-bold text-purple-400">15+</div>
                                            <div className="text-xs text-zinc-500">Technologies</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xl font-bold text-pink-400">15+</div>
                                            <div className="text-xs text-zinc-500">Projects</div>
                                        </div>
                                    </div>

                                    {/* Bio */}
                                    <div>
                                        <p className="text-sm text-zinc-300 leading-relaxed">
                                            Passionate developer who started coding in 9th grade. I love creating scalable applications and solving complex problems with creative solutions.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Main Title */}
                            <div className="mb-12">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6 }}
                                    className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-wider mb-4"
                                >
                                    About
                                </motion.h2>
                                <div className="w-12 h-px bg-white/30 mb-6"></div>
                                
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-lg text-zinc-300 leading-relaxed max-w-2xl"
                                >
                                    I was introduced to programming back in 9th grade, and ever since then I&apos;ve been passionate about creating things through code. Over the years, I&apos;ve explored different technologies, built projects, and continuously sharpened my skills as both a learner and a developer.
                                </motion.p>
                            </div>

                            {/* Skills Section - Modern Tech Grid */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="mb-16"
                            >
                                <div className="mb-12">
                                    <h3 className="text-3xl font-light text-white mb-4">Skills & Technologies</h3>
                                    <div className="w-20 h-px bg-gradient-to-r from-blue-400 to-purple-400 mb-4"></div>
                                    <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                                        Technologies I use to bring ideas to life, from concept to deployment.
                                    </p>
                                </div>
                                
                                {/* Tech Stack Grid */}
                                <div className="space-y-12">
                                    {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
                                        <motion.div
                                            key={category}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ duration: 0.6, delay: 0.7 + categoryIndex * 0.2 }}
                                            className="group"
                                        >
                                            {/* Category Header */}
                                            <div className="mb-8">
                                                <h4 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                                                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                                                    {category}
                                                </h4>
                                                <div className="h-px bg-gradient-to-r from-slate-700 via-slate-600 to-transparent"></div>
                                            </div>
                                            
                                            {/* Skills Grid */}
                                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                                                {skills.map((skill, skillIndex) => (
                                                    <motion.div
                                                        key={skill.name}
                                                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                                        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                                        transition={{ 
                                                            duration: 0.5, 
                                                            delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.08,
                                                            type: "spring",
                                                            stiffness: 100
                                                        }}
                                                        className="group/skill relative"
                                                    >
                                                        <div className="bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-4 transition-all duration-500 hover:border-slate-600/50 hover:shadow-xl hover:shadow-blue-500/5 hover:scale-105 cursor-pointer relative overflow-hidden">
                                                            {/* Background Gradient */}
                                                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover/skill:opacity-10 transition-all duration-500 rounded-2xl`}></div>
                                                            
                                                            {/* Icon Container */}
                                                            <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                                                                <div className="w-12 h-12 flex items-center justify-center relative">
                                                                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-20 rounded-xl group-hover/skill:opacity-30 transition-all duration-300`}></div>
                                                                    <Image
                                                                        src={skill.icon}
                                                                        alt={skill.name}
                                                                        width={32}
                                                                        height={32}
                                                                        className="relative z-10 object-contain filter brightness-90 group-hover/skill:brightness-110 transition-all duration-300"
                                                                        onError={(e) => {
                                                                            const target = e.target as HTMLImageElement;
                                                                            const parent = target.parentElement;
                                                                            if (parent) {
                                                                                const initials = skill.name.split(/[\s.-]+/).map((w: string) => w[0]).join('').slice(0, 2) || '?';
                                                                                parent.innerHTML = `<div class="w-8 h-8 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center text-white font-bold text-sm relative z-10">${initials}</div>`;
                                                                            }
                                                                        }}
                                                                    />
                                                                </div>
                                                                
                                                                {/* Skill Name */}
                                                                <div>
                                                                    <span className="text-sm font-medium text-slate-200 group-hover/skill:text-white transition-colors duration-300 leading-tight">
                                                                        {skill.name}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Animated Border */}
                                                            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover/skill:opacity-100 transition-all duration-500 bg-gradient-to-r ${skill.color} p-[1px]`}>
                                                                <div className="w-full h-full bg-slate-900/95 rounded-2xl"></div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Additional Tech Info */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 1.2 }}
                                    className="mt-12 p-6 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/30"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-slate-700/30">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-2">Always Learning</h4>
                                            <p className="text-slate-300 text-sm leading-relaxed">
                                                I&apos;m constantly exploring new technologies and frameworks to stay current with industry trends. 
                                                Currently diving deeper into cloud architecture, AI/ML integration, and advanced web performance optimization.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Tab Navigation */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="mb-8"
                            >
                                <div className="flex flex-wrap gap-2 bg-zinc-900/50 p-2 rounded-xl border border-zinc-800/50">
                                    {[
                                        { key: 'experience', label: 'Experience', icon: '💼' },
                                        { key: 'education', label: 'Education', icon: '🎓' },
                                        { key: 'competitions', label: 'Competitions', icon: '🏆' }
                                    ].map((tab) => (
                                        <button
                                            key={tab.key}
                                            onClick={() => setActiveTab(tab.key)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-transparent ${
                                                activeTab === tab.key
                                                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 shadow-lg shadow-blue-500/10'
                                                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 hover:border-zinc-700/30'
                                            }`}
                                        >
                                            <span>{tab.icon}</span>
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Tab Content */}
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                {activeTab === 'experience' && (
                                    <div className="grid gap-6">
                                        {workExperience.map((item, index) => (
                                            <ExperienceCard key={index} item={item} index={index} />
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'education' && (
                                    <div className="grid gap-6">
                                        {education.map((item, index) => (
                                            <ExperienceCard key={index} item={item} index={index} />
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'competitions' && (
                                    <div className="grid gap-6">
                                        {competitions.map((item, index) => (
                                            <ExperienceCard key={index} item={item} index={index} />
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}   