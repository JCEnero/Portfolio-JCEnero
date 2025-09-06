'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-black text-white w-full">
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {children}
      </main>
      <ScrollToTop />
    </div>
  );
}