'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Sidebar = dynamic(() => import('./Sidebar'), { ssr: false });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white w-full">
      {!isHomePage && <Navbar />}
      {isHomePage && (
        <>
          <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
      )}
      <main className="w-full overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}