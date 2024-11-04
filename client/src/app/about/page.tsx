import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function AboutPage() {
   return (
      <div className="container mx-auto min-h-screen max-w-4xl px-4 py-12 md:px-8 md:py-16">
         <div className="space-y-8">
            <div className="flex flex-col items-center space-y-8">
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
               <div className="space-y-4 text-center">
                  <p className="text-lg">
                     From <span className="font-semibold">India</span>, based in{' '}
                     <span className="font-semibold">Mumbai</span>
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                     <a
                        className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/80"
                        href="https://github.com/devharshthakur"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <FaGithub className="h-5 w-5" />
                        @devharshthakur
                     </a>
                      
                     <a
                        className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/80"
                        href="https://www.linkedin.com/in/harsh-thakur-bb6b18231"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <FaLinkedin className="h-5 w-5" />
                        Harsh Thakur
                     </a>
                     <a
                        className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/80"
                        href="mailto:workharshthakur2002@gmail.com"
                     >
                        <FaEnvelope className="h-5 w-5" />
                        workharshthakur2002@gmail.com
                     </a>
                  </div>
               </div>
               <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>
                     I am a full stack web developer based in India and an undergraduate student at{' '}
                     <Link href="https://vit.edu.in/" className="font-semibold hover:underline">
                        Vidyalankar Institute of Technology
                     </Link>
                     , pursuing BE in Computer Engineering.
                  </p>
                  <p>
                     I&apos;ve always been fascinated by the intersection of technology and design. My interest in
                     understanding how frontend interacts with backend in web applications, how it internally works, and
                     how they are deployed led me to backend development in JavaScript (Node.js). I&apos;m particularly
                     interested in JavaScript/TypeScript and related technologies for web development.
                  </p>
                  <p>
                     I develop applications in Next.js. During this time, I&apos;ve had the opportunity to work with a
                     variety of popular technologies and managed services on a wide range of projects. I&apos;ve learned
                     to connect databases, create APIs, and develop projects in monorepos using Turborepo.
                  </p>
                  <p>As a fresher, I&apos;m always eager to learn and grow in the field of web development.</p>
               </div>
               <Button variant="outline" className="mt-8" disabled>
                  Download Resume (Coming Soon...)
               </Button>
            </div>
         </div>
      </div>
   );
}
