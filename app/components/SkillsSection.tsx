'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
	{ name: 'JavaScript', icon: '/icons/javascript.svg' },
	{ name: 'Python', icon: '/icons/python.svg' },
	{ name: 'Java', icon: '/icons/java.svg' },
	{ name: 'React.js', icon: '/icons/react.svg' },
	{ name: 'Node.js', icon: '/icons/nodejs.svg' },
	{ name: 'Express.js', icon: '/icons/express.svg' },
	{ name: 'Firebase', icon: '/icons/firebase.svg' },
	{ name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
	{ name: 'MongoDB', icon: '/icons/mongodb.svg' },
	{ name: 'PHP', icon: '/icons/php.svg' },
	{ name: 'Git', icon: '/icons/git.svg' },
	{ name: 'Docker', icon: '/icons/docker.svg' },
	{ name: 'HTML5', icon: '/icons/html5.svg' },
	{ name: 'CSS3', icon: '/icons/css3.svg' },
	{ name: 'SQL', icon: '/icons/sql.svg' },
];

export default function SkillsSection() {
	return (
		<section className="py-16 md:py-24 bg-gradient-to-b from-black to-purple-900/20">
			<div className="max-w-7xl mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl mb-12 text-center tracking-tight text-white"
				>
					
				</motion.h2>

				   <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
					{skills.map((skill, index) => (
						   <motion.div
							   key={skill.name}
							   initial={{ opacity: 0, scale: 0.8 }}
							   whileInView={{ opacity: 1, scale: 1 }}
							   viewport={{ once: true }}
							   transition={{ duration: 0.4, delay: index * 0.08 }}
							   whileHover={{ scale: 1.08 }}
							   className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/10 transition-all"
						   >
							   <div className="flex flex-col items-center w-full">
								   <Image
									   src={skill.icon}
									   alt={skill.name}
									   width={48}
									   height={48}
									   className="mb-1 md:mb-2"
								   />
								   <p className="text-xs md:text-sm font-medium text-gray-200 text-center w-full truncate mt-1">
									   {skill.name}
								   </p>
							   </div>
						   </motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
