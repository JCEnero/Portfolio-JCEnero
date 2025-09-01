"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { icons } from "./SidebarIcons";

const navItems = [
  { name: "Works", path: "/works" },
  { name: "About", path: "/about" },
  { name: "Resume", path: "/resume" },
];

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 left-0 z-50 w-64 bg-[#181A20] shadow-2xl flex flex-col px-6 py-10 border-r border-blue-900/30"
        >
          {/* Profile Section */}
          <div className="mb-12">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden">
                <img src="/pfp.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-xl font-bold text-white mb-1">John Carl Enero</h2>
                <p className="text-sm text-blue-400 font-medium">Full Stack Developer</p>
              </motion.div>
            </motion.div>
          </div>
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={onClose}
                className={`group px-2 py-2 rounded-lg text-base font-medium flex items-center gap-3 transition-all duration-300
                  ${pathname === item.path ? "text-blue-400" : "text-gray-300 hover:text-blue-400"}
                `}
                style={{ background: 'none', boxShadow: 'none' }}
              >
                <span className="flex items-center justify-center w-7 h-7">
                  {icons[item.name as keyof typeof icons]}
                </span>
                <span className="truncate">{item.name}</span>
              </Link>
            ))}
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
