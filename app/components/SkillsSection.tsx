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
	{ name: 'AWS', icon: '/icons/aws.svg' },
	{ name: 'Azure', icon: '/icons/azure.svg' },
];

// Duplicate the skills array to create seamless infinite scroll
const duplicatedSkills = [...skills, ...skills];

export default function SkillsSection() {
	return (
		<section className="py-20 md:py-32 overflow-hidden relative">
			<div className="max-w-full">
				{/* Carousel Container */}
				<div className="relative">
					{/* Ultra-smooth fade overlay on left */}
					<div className="absolute left-0 top-0 bottom-0 w-40 md:w-64 lg:w-80 xl:w-96 fade-left z-10"></div>
					
					{/* Ultra-smooth fade overlay on right */}
					<div className="absolute right-0 top-0 bottom-0 w-40 md:w-64 lg:w-80 xl:w-96 fade-right z-10"></div>

					{/* Scrolling container */}
					<div className="flex">
						<motion.div
							className="flex items-center gap-6 md:gap-8 lg:gap-10"
							animate={{
								x: ['0%', '-50%'],
							}}
							transition={{
								duration: 40,
								repeat: Infinity,
								ease: 'linear',
							}}
							style={{ width: 'max-content' }}
						>
							{duplicatedSkills.map((skill, index) => (
								<motion.div
									key={`${skill.name}-${index}`}
									className="flex-shrink-0"
								>
									<div className="relative flex flex-col items-center">
										{/* Floating skill icon */}
										<motion.div
											className="relative p-6 rounded-3xl backdrop-blur-sm bg-gradient-to-br from-white/3 to-white/1 border border-white/5 shadow-2xl"
											animate={{
												y: [0, -10, 0],
												rotateY: [0, 3, 0],
											}}
											transition={{
												duration: 4 + (index % 3),
												repeat: Infinity,
												ease: 'easeInOut',
												delay: index * 0.15,
											}}
										>
											<Image
												src={skill.icon}
												alt={skill.name}
												width={64}
												height={64}
												className="relative z-10 drop-shadow-lg"
											/>
										</motion.div>

										{/* Skill name with fade animation */}
										<motion.p
											className="mt-6 text-sm font-light text-gray-400 text-center tracking-wide"
											animate={{
												opacity: [0.4, 0.8, 0.4],
											}}
											transition={{
												duration: 3.5,
												repeat: Infinity,
												ease: 'easeInOut',
												delay: index * 0.2,
											}}
										>
											{skill.name}
										</motion.p>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>

				{/* Ambient floating particles */}
				<div className="absolute inset-0 pointer-events-none overflow-hidden">
					{[...Array(6)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
							style={{
								left: `${15 + i * 15}%`,
								top: `${25 + (i % 3) * 25}%`,
							}}
							animate={{
								opacity: [0, 0.8, 0],
								scale: [0, 2, 0],
								y: [0, -30, 0],
							}}
							transition={{
								duration: 5 + i,
								repeat: Infinity,
								delay: i * 0.8,
								ease: 'easeInOut',
							}}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
