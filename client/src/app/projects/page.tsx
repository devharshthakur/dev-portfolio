'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FaGithub, FaLink, FaCalendarAlt, FaClock, FaTags } from 'react-icons/fa';
import projectsData from '@/data/projects.json';

// Update the Project interface to match our JSON structure
interface Project {
   title: string;
   description: string;
   longDescription: string;
   githubUrl: string;
   liveDemoUrl: string;
   date: string;
   duration: string;
   tags: string[];
   status?: string;
}

export default function ProjectsPage() {
   const handleLocalDemo = () => {
      alert('This project needs to be run locally. Please follow the instructions in the GitHub repository.');
   };

   return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12">
         <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
               <h1 className="text-4xl font-bold text-primary">My Projects</h1>
               <Button variant="outline" size="sm" asChild>
                  <Link href="/">Back to Home</Link>
               </Button>
            </div>
            <div className="mx-auto max-w-6xl">
               <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {projectsData.map((project, index) => (
                     <Card
                        key={index}
                        className="flex h-full flex-col border-2 transition-all hover:border-primary hover:shadow-md"
                     >
                        <CardHeader className="flex-grow space-y-2 bg-muted/50 p-6">
                           <div className="flex items-center justify-between">
                              <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                              {project.status === 'changing' && (
                                 <Badge variant="destructive" className="h-6 w-40">
                                    Changing Soon
                                 </Badge>
                              )}
                           </div>
                           <CardDescription className="text-sm">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4 p-6">
                           <p className="text-sm text-muted-foreground">{project.longDescription}</p>
                           <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <FaCalendarAlt className="text-primary" />
                              <span>{project.date}</span>
                           </div>
                           <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <FaClock className="text-primary" />
                              <span>{project.duration}</span>
                           </div>
                           <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag, index) => (
                                 <span
                                    key={index}
                                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                                 >
                                    {tag}
                                 </span>
                              ))}
                           </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-3 bg-muted/30 p-6">
                           <Button variant="outline" size="sm" className="w-full" asChild>
                              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                 <FaGithub className="mr-2 h-4 w-4" />
                                 <span className="flex-1">View on GitHub</span>
                              </Link>
                           </Button>
                           {project.liveDemoUrl === '#' ? (
                              <Button variant="default" size="sm" className="w-full" disabled>
                                 <FaLink className="mr-2 h-4 w-4" />
                                 <span className="flex-1">Coming Soon</span>
                              </Button>
                           ) : project.liveDemoUrl === 'local' ? (
                              <Button variant="default" size="sm" className="w-full" onClick={handleLocalDemo}>
                                 <FaLink className="mr-2 h-4 w-4" />
                                 <span className="flex-1">Run Locally</span>
                              </Button>
                           ) : (
                              <Button variant="default" size="sm" className="w-full" asChild>
                                 <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                                    <FaLink className="mr-2 h-4 w-4" />
                                    <span className="flex-1">View Live Demo</span>
                                 </Link>
                              </Button>
                           )}
                        </CardFooter>
                     </Card>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
