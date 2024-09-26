import { GithubIcon } from '@/components/icons/icons';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { SiLinkedin } from "react-icons/si";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Component() {
  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <Avatar className="h-32 w-32">
        <AvatarImage src="dev-pfp.jpeg" alt="Profile Picture" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Harsh Thakur</h1>
        <p className="text-muted-foreground">Fullstack Web-Devoloper</p>
      </div>
      <div className="max-w-2xl text-center">
        <p className="text-lg">
          I am basicaly a full stack web devoloper based in india & an undergraduate student 
          in <Link href='https://vit.edu.in/' >&quot;<span className="font-bold underline">Vidyalanakar Institute of Technology</span>&quot;</Link> persuing BE in Computer Engineering.  
        </p>
        <p className="mt-4 text-lg">
          I&apos;ve always been fascinated by the intersection of technology and design,
          I got intrestd to know how frontend interacts with backend in web applications,
          How it internaly works & how they are deployed from where I got intreast in backend devolopment in javascript(NodeJs).
          I got mainly intreasted in javascript/typescript and technologies based on it as I was into web devolopment
        </p>
        <p className="mt-4 text-lg">
          I devolop applications in NextJs.
          During this time, I got the opportunity to work with a variety
          of famous technologies & managed services on a wide range of projects such learn to connect databases, 
          creating apis, creating projects in mono repos understanding it etc. 
        </p>
        <p className="mt-4 text-lg">
          I&apos;m a fresher & am always eager to learn and grow.
        </p>
      </div>
      <div className="text-center">
        <p className="text-lg">From: India</p>
        <p className="text-lg">Based in: Mumbai</p>
      </div>
      <div className="flex flex-col text-center">
        <div className="flex flex-wrap justify-center">
        <a className="flex items-center gap-2 mx-12" href="https://github.com/devharshthakur">
          <GithubIcon className="h-5 w-5" />
          <span className="font-bold">@devharshthakur</span>
        </a>
        <a className="flex items-center gap-2 mx-12" href="https://www.linkedin.com/in/harsh-thakur-bb6b18231">
          <SiLinkedin className="h-5 w-5" />
          <span className="font-bold underline">Harsh Thakur</span>
        </a>
        <a className="flex items-center gap-2 mx-12" href="https://www.linkedin.com/in/harsh-thakur-bb6b18231">
          <HiOutlineMailOpen className="h-5 w-5" />
          <span className="underline">workharshthakur2002@gmail.com</span>
        </a>
        </div>
        <Button variant="outline" className="mt-4">
          Download Resume(Comming Soon . . )
        </Button>
      </div>
    </div>
  );
}
