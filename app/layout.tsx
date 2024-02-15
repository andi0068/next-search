import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

import './globals.css';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          sans.className,
          'flex flex-col min-h-screen antialiased text-foreground bg-background',
        )}
      >
        {children}
      </body>
    </html>
  );
}
