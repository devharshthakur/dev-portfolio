'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

interface ModeToggleProps {
   className: string;
}

export function ModeToggle({ className }: ModeToggleProps) {
   const { theme, setTheme } = useTheme();

   const toggleTheme = () => {
      if (theme === 'light') {
         setTheme('dark');
      } else {
         setTheme('light');
      }
   };

   return (
      <Button variant="outline" size="icon" onClick={toggleTheme} className={className}>
         {theme === 'light' ? (
            <SunIcon className="h-[1.2rem] w-[1.2rem]" />
         ) : (
            <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
         )}
         <span className="sr-only">Toggle theme</span>
      </Button>
   );
}
