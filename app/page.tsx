'use client';

import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-slate-950">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,69,219,0.08),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.06),transparent_80%)]" />
            <div className="relative z-10">
                <HeroSection />
                <ContactSection />
            </div>
        </div>
    );
}
