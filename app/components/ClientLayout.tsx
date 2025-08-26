'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="min-h-screen bg-black text-white">
      {!isHomePage && <Navbar />}
      <main>
        {children}
      </main>
    </div>
  );
}