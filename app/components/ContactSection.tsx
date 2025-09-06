'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function ContactSection() {
	const router = useRouter();
	const [showContactOptions, setShowContactOptions] = useState(false);
	const [copyStatus, setCopyStatus] = useState('');
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setShowContactOptions(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleCopyEmail = async () => {
		try {
			await navigator.clipboard.writeText('johncarlenero.dev@gmail.com');
			setCopyStatus('Email copied!');
			setTimeout(() => setCopyStatus(''), 2000);
		} catch (err) {
			setCopyStatus('Failed to copy');
			setTimeout(() => setCopyStatus(''), 2000);
		}
	};

	const contactOptions = [
		{
			name: 'Email',
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
					<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
					<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
				</svg>
			),
			action: () => window.open('mailto:johncarlenero.dev@gmail.com', '_blank'),
			description: 'Send an email'
		},
		{
			name: 'Copy Email',
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
					<path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
					<path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
				</svg>
			),
			action: handleCopyEmail,
			description: 'Copy to clipboard'
		},
		{
			name: 'WhatsApp',
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
				</svg>
			),
			action: () => window.open('https://wa.me/639380764716', '_blank'),
			description: 'Message on WhatsApp'
		},
		{
			name: 'LinkedIn',
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
				</svg>
			),
			action: () => window.open('https://www.linkedin.com/in/jcenero', '_blank'),
			description: 'Connect on LinkedIn'
		}
	];

	return (
		<footer className="relative mt-24 border-t border-gray-800/50">
			{/* Background with gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,69,219,0.05),transparent_60%)]" />
			
			{/* Content */}
			<div className="relative z-10">
				{/* Main Footer Content */}
				<div className="px-4 py-16 md:py-20">
					<div className="max-w-6xl mx-auto">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							
							{/* Left Side - Contact Info */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="text-left"
							>
								<h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
									Let's Create Something Amazing
								</h2>
								<p className="text-gray-400 mb-6 text-sm md:text-base leading-relaxed">
									Ready to turn your ideas into reality? I'm here to help bring your vision to life.
								</p>
								
								{/* Contact Details */}
								<div className="space-y-3 mb-8">
									<div className="flex items-center gap-3 text-gray-300 text-sm">
										<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
											<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
											</svg>
										</div>
										<span>Quezon City, PH</span>
									</div>
									<div className="flex items-center gap-3 text-gray-300 text-sm">
										<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
											<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
												<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
												<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
											</svg>
										</div>
										<span>johncarlenero.dev@gmail.com</span>
									</div>
								</div>
							</motion.div>

							{/* Right Side - Action Buttons */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="lg:text-right"
							>
								<div className="flex flex-col gap-4">
									{/* Modern Contact Button with Dropdown */}
									<div className="relative" ref={dropdownRef}>
										<button
											onClick={() => setShowContactOptions(!showContactOptions)}
											className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 w-full"
										>
											<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
												<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
												<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
											</svg>
											<span className="font-medium">Get in Touch</span>
											<svg 
												className={`w-4 h-4 transition-transform duration-200 ${showContactOptions ? 'rotate-180' : ''}`} 
												fill="currentColor" 
												viewBox="0 0 20 20"
											>
												<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
											</svg>
										</button>

										{/* Contact Options Dropdown */}
										<motion.div
											initial={{ opacity: 0, y: -10, scale: 0.95 }}
											animate={{ 
												opacity: showContactOptions ? 1 : 0, 
												y: showContactOptions ? 0 : -10, 
												scale: showContactOptions ? 1 : 0.95 
											}}
											transition={{ duration: 0.2 }}
											className={`absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-xl z-50 ${showContactOptions ? 'pointer-events-auto' : 'pointer-events-none'}`}
										>
											<div className="p-2">
												{contactOptions.map((option, index) => (
													<button
														key={option.name}
														onClick={() => {
															option.action();
															setShowContactOptions(false);
														}}
														className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-700/50 transition-colors text-left group"
													>
														<div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-colors">
															{option.icon}
														</div>
														<div>
															<div className="text-white font-medium text-sm">{option.name}</div>
															<div className="text-gray-400 text-xs">{option.description}</div>
														</div>
													</button>
												))}
											</div>
										</motion.div>
									</div>

									{/* Copy Status Notification */}
									{copyStatus && (
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -10 }}
											className="text-center text-sm text-green-400 bg-green-400/10 px-4 py-2 rounded-lg border border-green-400/20"
										>
											{copyStatus}
										</motion.div>
									)}

									<button
										type="button"
										onClick={() => router.push('/resume')}
										className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-[1.02]"
									>
										<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
											<path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
											<path d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8z" />
											<path d="M8 7a1 1 0 100 2h4a1 1 0 100-2H8z" />	
										</svg>
										<span className="font-medium">View Resume</span>
									</button>
								</div>
								
								{/* Social Links */}
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.4 }}
									className="flex items-center justify-center lg:justify-end gap-4 mt-8"
								>
									<a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group">
										<svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
											<path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
										</svg>
									</a>
									<a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group">
										<svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
											<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
										</svg>
									</a>
									<a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group">
										<svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
										</svg>
									</a>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="border-t border-gray-800/50 px-4 py-6"
				>
					<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
						<div className="flex items-center gap-2">
							<span>&copy; 2025 John Carl Enero.</span>
							<span className="hidden md:inline">All rights reserved.</span>
						</div>
						<div className="flex items-center gap-6">
							<button
								onClick={() => router.push('/about')}
								className="hover:text-gray-300 transition-colors"
							>
								About
							</button>
							<button
								onClick={() => router.push('/works')}
								className="hover:text-gray-300 transition-colors"
							>
								Works
							</button>
							<button
								onClick={() => router.push('/resume')}
								className="hover:text-gray-300 transition-colors"
							>
								Resume
							</button>
						</div>
					</div>
				</motion.div>
			</div>
		</footer>
	);
}