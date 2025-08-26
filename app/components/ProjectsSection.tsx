
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ProjectsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const projects = [
        {
            title: 'AI-Integrated IoT Solution for Sustainable Farming',
            description: 'Created an AI-powered IoT irrigation system with smart sensors and predictive algorithms, optimizing water usage by 37%, boosting crop yield efficiency by 22%, and reducing manual labor needs by 40%.',
            tech: ['React', 'Firebase', 'Python', 'C++', 'Arduino', 'HTML', 'CSS'],
            github: 'https://github.com/JCEnero',
            demo: 'https://irriqcu.web.app/',
            image: '/projects/Irriqcu-project.png',
            status: 'Live'
        },
        {
            title: 'Interactive 3D Campus Navigation Guide (Kiosk-Based)',
            description: 'Created a kiosk-based 3D web app with VB.NET and Three.js, guiding visitors across 8 campus buildings, improving navigation speed by 2x, and cutting manual assistance needs by 40%.',
            tech: ['Three.js', 'Node.js', 'VB.NET', 'Blender'],
            github: 'https://github.com/JCEnero',
            demo: 'https://your-campus-navigation-demo.com',
            image: '/projects/findme-project.png',
            status: 'Completed'
        },
        {
            title: 'Real-time Disaster Relief Mapping System',
            description: 'A web app that locates nearby shelters, food, and medical aid during emergencies, cutting search time by 65% and boosting relief efficiency by 40%.',
            tech: ['Vue.js', 'Python', 'Flask', 'Chart.js'],
            github: 'https://github.com/JCEnero',
            demo: 'https://your-weather-demo.com',
            image: '/projects/development.png',
            status: 'Development'
        },
        {
            title: 'AI-Powered Automated Budget & Expense Planner',
            description: 'An AI-powered web-based financial management system that automates expense tracking and budgeting, helping users cut costs by 25%, boost savings by 20%, and reduce manual budgeting by 40% through predictive insights and smart recommendations.',
            tech: ['React', 'Python', 'TensorFlow', 'FastAPI'],
            github: 'https://github.com/JCEnero',
            demo: 'https://your-ai-demo.com',
            image: '/projects/development.png',
            status: 'Development'
        },
    ];

    return (
     <section ref={ref} className="pt-40 pb-32 relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black"
>
            <div className="container mx-auto px-6">
                {/* Title Section with more spacing */}
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold mb-12"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                            Selected Works
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Showcasing innovative solutions and technical excellence
                    </motion.p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 60 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                            whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="group bg-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 bg-gradient-to-br from-blue-900/20 to-purple-900/20 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
                                
                                {/* Status Badge */}
                                <div className="absolute top-4 right-4 z-20">
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-lg ring-2 ring-black/30 backdrop-blur-sm
                                        ${
                                            project.status === 'Live'
                                                ? 'bg-green-600 text-white border border-green-400'
                                                : project.status === 'Development'
                                                ? 'bg-yellow-500 text-black border border-yellow-300'
                                                : project.status === 'Completed'
                                                ? 'bg-purple-700 text-white border border-purple-400'
                                                : 'bg-blue-600 text-white border border-blue-400'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>

                                {/* Project image */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="absolute inset-0 w-full h-full object-cover object-top z-0"
                                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                                    sizes="(max-width: 768px) 100vw, 900px"
                                />
                            </div>

                            <div className="p-6">
                                {/* Project Title */}
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-gray-800/50 text-blue-400 text-xs rounded-md border border-blue-400/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex space-x-4">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        <span className="text-sm">Code</span>
                                    </motion.a>

                                    <motion.a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                        </svg>
                                        <span className="text-sm">Demo</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
}
