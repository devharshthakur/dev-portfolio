'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import skillsData from '@/data/skills.json';
import { iconMap } from '@/components/icons/iconMap';

export function ProfileSection() {
   return (
      <section className="grid gap-6">
         <div className="flex items-center gap-6">
            <Image
               src="/dev-pfp.jpeg"
               width={128}
               height={128}
               alt="Profile Picture"
               className="rounded-full"
               style={{ aspectRatio: '128/128', objectFit: 'cover' }}
            />
            <div className="grid gap-2">
               <h1 className="text-3xl font-bold">Harsh Thakur</h1>
               <p className="text-muted-foreground">Full Stack Web Developer</p>
            </div>
         </div>
         <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 md:grid-cols-5">
            {skillsData.map((skill, index) => {
               const IconComponent = iconMap[skill.icon];
               return (
                  <motion.div
                     key={index}
                     className="flex flex-col items-center gap-2 rounded-md border border-border p-2"
                     whileHover={{ scale: 1.05, boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)' }}
                     transition={{ type: 'spring', stiffness: 300 }}
                  >
                     <IconComponent className="h-8 w-8 text-primary" />
                     <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
               );
            })}
         </div>
      </section>
   );
}
