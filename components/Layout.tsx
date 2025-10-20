'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}