import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaGithub, FaLink } from 'react-icons/fa';

interface ProjectCardProps {
   title: string;
   description: string;
   githubUrl: string;
   liveDemoUrl: string;
}

export function ProjectCard({ title, description, githubUrl, liveDemoUrl }: ProjectCardProps) {
   return (
      <Card className="flex h-full flex-col border-2 transition-all hover:border-primary hover:shadow-md sm:max-w-sm md:max-w-md lg:max-w-lg">
         <CardHeader className="flex-grow space-y-2 bg-muted/50 p-4">
            <CardTitle className="text-base font-semibold sm:text-lg">{title}</CardTitle>
            <CardDescription className="text-xs sm:text-sm">{description}</CardDescription>
         </CardHeader>
         <CardFooter className="flex flex-col gap-2 bg-muted/30 p-3 sm:flex-row sm:gap-3 sm:p-4">
            <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm" asChild>
               <Link href={githubUrl} prefetch={false}>
                  <FaGithub className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                  <span className="flex-1">GitHub</span>
               </Link>
            </Button>
            <Button
               variant="default"
               size="sm"
               className="w-full text-xs sm:text-sm"
               asChild={liveDemoUrl !== '#'}
               disabled={liveDemoUrl === '#'}
            >
               {liveDemoUrl === '#' ? (
                  <div className="flex items-center">
                     <FaLink className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                     <span className="flex-1">Coming Soon</span>
                  </div>
               ) : (
                  <Link href={liveDemoUrl} prefetch={false}>
                     <FaLink className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                     <span className="flex-1">Live Demo</span>
                  </Link>
               )}
            </Button>
         </CardFooter>
      </Card>
   );
}
