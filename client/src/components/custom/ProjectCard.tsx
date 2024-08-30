import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { GithubIcon, LinkIcon } from '@/components/icons/icons';

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  liveDemoUrl: string;
}

export function ProjectCard({
  title,
  description,
  githubUrl,
  liveDemoUrl,
}: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <GithubIcon className="h-5 w-5" />
            <Link
              href={githubUrl}
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              View on GitHub
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <LinkIcon className="h-5 w-5" />
            <Link
              href={liveDemoUrl}
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Live Demo
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
