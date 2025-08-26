'use client';

import ProjectsSection from '../components/ProjectsSection';
import { motion } from 'framer-motion';

export default function Works() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <ProjectsSection />
        </motion.div>
    );
}