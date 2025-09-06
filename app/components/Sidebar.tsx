"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
import { icons } from "./SidebarIcons";

const navItems = [
  { name: "Works", path: "/works" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
];

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();

  // Lock body scroll when the sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  // Close if viewport switches to desktop
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      const matches = 'matches' in e ? e.matches : (e as MediaQueryList).matches;
      if (matches) onClose();
    };
    // Initial check
    handler(mq);
    // Subscribe to changes
    if (mq.addEventListener) {
      mq.addEventListener("change", handler as (e: MediaQueryListEvent) => void);
    } else {
      // @ts-ignore - Safari
      mq.addListener(handler);
    }
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", handler as (e: MediaQueryListEvent) => void);
      } else {
        // @ts-ignore - Safari
        mq.removeListener(handler);
      }
    };
  }, [onClose]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="sidebar-overlay"
          className="fixed inset-0 z-[9999] md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          aria-hidden
          onClick={onClose}
        >
          {/* Backdrop with enhanced blur */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

          {/* Modern Minimalist Panel */}
          <motion.aside
            role="dialog"
            aria-modal="true"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              mass: 0.8
            }}
            className="absolute inset-y-0 left-0 z-[10000] w-[280px] bg-white/[0.02] backdrop-blur-2xl border-r border-white/[0.08] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.05}
            dragMomentum={false}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) onClose();
            }}
          >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-black/[0.02] pointer-events-none" />
            
            {/* Ultra-minimal header */}
            <div className="relative px-6 py-8">
              <Link href="/" onClick={onClose} className="group flex items-center gap-4">
                <motion.div 
                  className="relative w-10 h-10 rounded-full overflow-hidden bg-white/[0.03] border border-white/[0.08]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Image 
                    src="/LOGO.png" 
                    alt="Logo" 
                    fill 
                    className="object-contain p-1" 
                    priority 
                  />
                </motion.div>
                <div className="leading-relaxed">
                  <h2 className="text-base font-medium text-white/90 group-hover:text-white transition-colors">
                    John Carl Enero
                  </h2>
                  <p className="text-xs text-white/50 font-light mt-0.5">
                    Full Stack Developer
                  </p>
                </div>
              </Link>
              
              {/* Modern close button */}
              <motion.button
                aria-label="Close menu"
                onClick={onClose}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-white/90 hover:bg-white/[0.06] transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </motion.button>
            </div>

            {/* Minimalist Navigation */}
            <motion.nav
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.15 },
                },
                closed: {},
              }}
              className="px-6 space-y-2"
            >
              {navItems.map((item, index) => {
                const active = pathname === item.path;
                return (
                  <motion.div
                    key={item.name}
                    variants={{ 
                      closed: { opacity: 0, x: -20 }, 
                      open: { opacity: 1, x: 0 } 
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      href={item.path}
                      onClick={onClose}
                      className="group relative block"
                    >
                      <motion.div
                        className={`relative flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                          active 
                            ? "bg-white/[0.06] border border-white/[0.12]" 
                            : "hover:bg-white/[0.03] border border-transparent hover:border-white/[0.06]"
                        }`}
                        whileHover={{ x: 2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Modern icon container */}
                        <div className={`w-5 h-5 flex items-center justify-center transition-colors duration-300 ${
                          active ? "text-white/90" : "text-white/50 group-hover:text-white/70"
                        }`}>
                          {icons[item.name as keyof typeof icons]}
                        </div>
                        
                        {/* Text */}
                        <span className={`text-sm font-light transition-colors duration-300 ${
                          active ? "text-white/90" : "text-white/60 group-hover:text-white/80"
                        }`}>
                          {item.name}
                        </span>

                        {/* Subtle active indicator */}
                        {active && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute right-3 w-1.5 h-1.5 rounded-full bg-white/60"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Ultra-minimal footer */}
            <div className="px-6 py-6 border-t border-white/[0.04]">
              <p className="text-[10px] font-light text-white/30 text-center tracking-wide">
                © {new Date().getFullYear()} JCE
              </p>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
