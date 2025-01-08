import { Space_Mono } from 'next/font/google';
import { JetBrains_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/util/theme-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const fontHeading = Space_Mono({
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-heading',
   weight: '400',
});

const fontBody = JetBrains_Mono({
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-body',
   weight: '400',
});

interface LayoutProps {
   children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
   return (
      <html lang="en">
         <body className={cn('antialiased', fontHeading.variable, fontBody.variable)}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
               {children}
               <SpeedInsights />
            </ThemeProvider>
         </body>
      </html>
   );
}
