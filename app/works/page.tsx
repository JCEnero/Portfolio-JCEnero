'use client';

import ProjectsSection from '../components/ProjectsSection';
import ScrollToTop from '../components/ScrollToTop';
import { motion } from 'framer-motion';

export default function Works() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-slate-950"
        >
            <ProjectsSection />
            <ScrollToTop />
        </motion.div>
    );
}