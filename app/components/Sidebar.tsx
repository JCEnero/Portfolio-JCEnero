"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
          className="fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-[#181A20] to-[#23272F] shadow-2xl flex flex-col px-6 py-10"
        >
          <button
            onClick={onClose}
            className="self-end mb-8 text-gray-400 hover:text-white text-2xl focus:outline-none"
            aria-label="Close sidebar"
          >
            &times;
          </button>
          <nav className="flex flex-col gap-4 mt-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={onClose}
                className={`px-4 py-3 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center gap-3 ${
                  pathname === item.path
                    ? "bg-blue-600/90 text-white shadow-lg"
                    : "text-gray-300 hover:bg-blue-600/40 hover:text-white"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-blue-400/80" style={{ opacity: pathname === item.path ? 1 : 0 }}></span>
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
