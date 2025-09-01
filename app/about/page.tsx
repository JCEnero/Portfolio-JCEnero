'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const workExperience = [
        {
            title: 'Graphic Design Intern',
            company: 'Centrive Technologies Inc.',
            period: '2023 - 2024',
            description: 'Created graphic and layout designs that enhanced user experience, bridging visual design with frontend development workflows.',
            logo: '/centrive.jpg',
            link: 'https://centrivetech.com',
            type: 'work'
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
            type: 'education'
        },
        {
            degree: 'Information and Communications Technology',
            school: 'Lagro High School',
            period: '2019 - 2023',
            description: 'Completed senior high school education with focus on Information and Communications Technology. Developed foundational skills in programming, mathematics, and analytical thinking that sparked my interest in development.',
            logo: '/lhs.png',
            link: 'https://lagrohighschool.com',
            type: 'education'
        },
    ];

    // New: competitions section data (same design as Education). Add your items here.
    const competitions = [
        {
            title: 'TON Hackers League Hackathon Manila Bootcamp',
            organizer: 'Openverse PH',
            period: '2024',
            description: 'Participated in a collaborative hackathon where we explored and built projects using Telegram Mini Apps, Xircus, and other TON ecosystem tools. Gained hands-on experience in rapid prototyping, teamwork, and integrating blockchain-powered solutions into real-world applications.',
            logo: '/ton.jpg',
            cardImage: '/certificate.jpg',
            link: 'https://lu.ma/0nn4y9gb',
            type: 'competition'
        },
    ];

    const skills = [
        'JavaScript', 'Python', 'Java', 'React.js', 'Node.js',
        'Express.js', 'MongoDB', 'OracleDB', 'Tailwind', 'Docker',
        'Git', 'HTML5', 'CSS3', 'SQL', 'Firebase'
    ];

    interface TimelineCardProps {
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
        };
        index: number;
        isLast: boolean;
    }   

    const TimelineCard: React.FC<TimelineCardProps> = ({ item, index, isLast }) => (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative group cursor-pointer"
            onClick={() => window.open(item.link, '_blank')}
        >
            <div className="flex flex-col sm:flex-row items-start sm:space-x-6 space-y-4 sm:space-y-0">
                {/* Timeline Line and Logo */}
                <div className="relative flex flex-col items-center">
                    {/* Logo Circle */}
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gray-900/90 backdrop-blur-sm border-4 rounded-full overflow-hidden flex items-center justify-center ${
                        item.type === 'work'
                            ? 'border-blue-400'
                            : item.type === 'education'
                                ? 'border-purple-400'
                                : 'border-emerald-400' // competition color
                    }`}>
                        <div className="w-12 h-12 relative rounded-full overflow-hidden">
                            <Image
                                src={item.logo}
                                alt={
                                    item.type === 'work'
                                        ? item.company ?? 'Work Logo'
                                        : item.type === 'education'
                                            ? item.school ?? 'Education Logo'
                                            : item.organizer ?? 'Competition Logo'
                                }
                                fill
                                sizes="(max-width: 768px) 48px, 96px"
                                className="object-cover"
                                onError={(e) => {
                                    // Fallback to initials if image fails to load
                                    const target = e.target as HTMLImageElement;
                                    const parent = target.parentElement;
                                    if (parent) {
                                        const name = (item.type === 'work'
                                            ? item.company
                                            : item.type === 'education'
                                                ? item.school
                                                : item.organizer) ?? '';
                                        const initials = name
                                            .split(' ')
                                            .map((w: string) => w[0])
                                            .join('')
                                            .slice(0, 2) || '?';
                                        const bgClass =
                                            item.type === 'work'
                                                ? 'bg-gradient-to-br from-blue-400 to-blue-600'
                                                : item.type === 'education'
                                                    ? 'bg-gradient-to-br from-purple-400 to-purple-600'
                                                    : 'bg-gradient-to-br from-emerald-400 to-emerald-600'; // competition color
                                        parent.innerHTML = `
                                            <div class="w-full h-full ${bgClass} flex items-center justify-center text-white font-bold text-sm">
                                                ${initials}
                                            </div>
                                        `;
                                    }
                                }}
                            />
                        </div>
                    </div>

 <div className="relative flex items-start">
  {/* Timeline content */}
  <div className="flex flex-col items-center">

    
    {/* Timeline Line */}
    {!isLast && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-56 bg-gradient-to-b from-gray-500 to-gray-600 z-0"></div>
    )}
  </div>

  <div className="ml-4">
    {/* Other content like text */}
  </div>
</div>

                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:bg-white/10">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                    item.type === 'work' 
                                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                        : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                }`}>
                                    {item.type === 'work' ? 'Work' : item.type === 'education' ? 'Education' : 'Competition'}
                                </span>
                            </div>

                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                                {item.type === 'work' ? item.title : item.type === 'education' ? item.degree : item.title}
                            </h3>

                            <p className={`font-medium mb-1 text-sm sm:text-base ${item.type === 'work' ? 'text-blue-400' : 'text-purple-400'}`}>
                                {item.type === 'work' ? item.company : item.type === 'education' ? item.school : item.organizer}
                            </p>

                            <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">{item.period}</p>
                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.description}</p>

                            {/* NEW: big image inside competition cards */}
                            {item.type === 'competition' && item.cardImage && (
                                <div className="mt-4 -mx-2 sm:ml-6 sm:-mr-6">
                                    <div className="relative w-full h-48 sm:h-80 md:h-96 lg:h-[28rem] overflow-hidden border border-white/10">
                                        <Image
                                            src={item.cardImage}
                                            alt={`${item.title} image`}
                                            fill
                                            className="object-cover object-center"
                                            sizes="(max-width: 768px) 100vw, 900px"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Hover Link Icon - Hidden by default, only show on hover */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                            className="ml-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div ref={ref} className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black">

            {/* Hero Section */}
            <section className="pt-48 pb-20">
                <div className="container mx-auto px-6 mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="w-80 h-80 mx-auto relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl rotate-6"></div>
                                <div className="absolute inset-2 bg-gray-800 rounded-2xl overflow-hidden">
                                    <Image
                                        src="/pfp.jpg"
                                        alt="John Carl Enero"
                                        fill
                                        sizes="(max-width: 768px) 320px, 400px"
                                        className="object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='100' fill='%23fff'%3EJC%3C/text%3E%3C/svg%3E";
                                        }}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* About Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                                    About Me
                                </span>
                            </h1>
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                I was introduced to programming back in 9th grade, and ever since then I&apos;ve been passionate about creating things through code. 
                                Over the years, I&apos;ve explored different technologies, built projects, and continuously sharpened my skills as both a learner 
                                and a developer.
                            </p>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                I enjoy solving problems, building scalable applications, and learning how technology can make life easier. 
                                My journey in software development has helped me grow not only technically but also in how I approach challenges with creativity and logic.
                            </p>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                                        className="px-3 py-1 bg-white/10 backdrop-blur-sm text-blue-400 text-sm rounded-full border border-blue-400/20"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline Sections */}
            <section className="py-20 bg-gradient-to-b from-transparent via-blue-900/5 to-purple-900/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        
                        {/* Work Experience Section - title in white */}
                        <div className="mb-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8 }}
                                className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 text-white"
                            >
                                Work Experience
                            </motion.h2>

                            <div className="space-y-8">
                                {workExperience.map((item, index) => (
                                    <TimelineCard 
                                        key={index} 
                                        item={item} 
                                        index={index} 
                                        isLast={index === workExperience.length - 1}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Education Section - title in white */}
                        <div className="mb-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-3xl md:text-4xl  text-center mb-12 text-white"
                            >
                                Education
                            </motion.h2>

                            <div className="space-y-8">
                                {education.map((item, index) => (
                                    <TimelineCard 
                                        key={index} 
                                        item={item} 
                                        index={index} 
                                        isLast={index === education.length - 1}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Competition Section - same design as Education (purple styling) */}
                        {competitions.length > 0 && (
                            <div className="mb-16">
                                <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-3xl md:text-4xl text-center mb-12 text-white"
                                >
                                    Competition
                                </motion.h2>

                                <div className="space-y-8">
                                    {competitions.map((item, index) => (
                                        <TimelineCard
                                            key={index}
                                            item={item}
                                            index={index}
                                            isLast={index === competitions.length - 1}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>
        </div>
    );
}