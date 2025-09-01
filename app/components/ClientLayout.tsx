'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import dynamic from 'next/dynamic';
import { useState } from 'react';

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
    <div className="min-h-screen bg-black text-white">
      {!isHomePage && <Navbar />}
      {isHomePage && (
        <>
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed top-6 left-6 z-50 p-2 rounded-full bg-white/10 hover:bg-blue-600/60 text-gray-200 shadow-lg md:hidden"
            aria-label="Open sidebar"
          >
            <span className="block w-7 h-0.5 bg-current rounded-full mb-1"></span>
            <span className="block w-7 h-0.5 bg-current rounded-full mb-1"></span>
            <span className="block w-7 h-0.5 bg-current rounded-full"></span>
          </button>
          <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
      )}
      <main>
        {children}
      </main>
    </div>
  );
}