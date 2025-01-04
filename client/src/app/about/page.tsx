import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function AboutPage() {
   return (
      <div className="container mx-auto min-h-screen max-w-4xl px-4 py-12 md:px-8 md:py-16">
         <div className="space-y-12">
            <div className="flex flex-col items-center space-y-12">
               <Avatar className="h-40 w-40">
                  <AvatarImage src="dev-pfp.jpeg" alt="Harsh Thakur" />
                  <AvatarFallback>HT</AvatarFallback>
               </Avatar>
               <div className="text-center">
                  <h1 className="text-3xl font-bold">Harsh Thakur</h1>
                  <p className="text-lg text-muted-foreground">Fullstack Web Developer</p>
                  <Badge variant="secondary" className="mt-2">
                     Final Year Engineering Student
                  </Badge>
               </div>
               <div className="space-y-6 text-center">
                  <p className="text-lg">
                     From <span className="font-semibold">India</span>, based in{' '}
                     <span className="font-semibold">Mumbai</span>
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                     <Button variant="outline" className="w-full" asChild>
                        <a
                           href="https://github.com/devharshthakur"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center justify-center gap-2"
                        >
                           <FaGithub className="h-5 w-5" />
                           @devharshthakur
                        </a>
                     </Button>
                     <Button variant="outline" className="w-full" asChild>
                        <a
                           href="https://www.linkedin.com/in/harsh-thakur-bb6b18231"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center justify-center gap-2"
                        >
                           <FaLinkedin className="h-5 w-5" />
                           Harsh Thakur
                        </a>
                     </Button>
                     <Button variant="outline" className="w-full overflow-hidden sm:col-span-2 lg:col-span-1" asChild>
                        <a
                           href="mailto:workharshthakur2002@gmail.com"
                           className="flex items-center justify-center gap-2"
                        >
                           <Mail className="h-5 w-5 truncate" />
                           <span className="truncate">Send Email</span>
                        </a>
                     </Button>
                  </div>
               </div>
               <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                  <p className="leading-relaxed">
                     I am a full stack web developer based in India and an undergraduate student at{' '}
                     <Link href="https://vit.edu.in/" className="font-semibold hover:underline">
                        Vidyalankar Institute of Technology
                     </Link>
                     , pursuing BE in Computer Engineering.
                  </p>
                  <p className="leading-relaxed">
                     I&apos;ve always been fascinated by the intersection of technology and design. My interest in
                     understanding how frontend interacts with backend in web applications, how it internally works, and
                     how they are deployed led me to backend development in JavaScript (Node.js). I&apos;m particularly
                     interested in JavaScript/TypeScript and related technologies for web development.
                  </p>
                  <p className="leading-relaxed">
                     I develop applications in Next.js. During this time, I&apos;ve had the opportunity to work with a
                     variety of popular technologies and managed services on a wide range of projects. I&apos;ve learned
                     to connect databases, create APIs, and develop projects in monorepos using Turborepo.
                  </p>
                  <p className="leading-relaxed">
                     As a fresher, I&apos;m always eager to learn and grow in the field of web development.
                  </p>
               </div>
               <Button variant="outline" size="lg" className="mt-8" asChild>
                  <a href="/cv.pdf" download="harsh_thakur_cv.pdf" rel="noopener" className="flex items-center gap-2">
                     <FaDownload className="h-4 w-4" />
                     Download CV
                  </a>
               </Button>
            </div>
         </div>
      </div>
   );
}
