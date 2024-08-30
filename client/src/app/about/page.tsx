import { GithubIcon } from '@/components/icons/icons';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <Avatar className="h-32 w-32">
        <AvatarImage src="/placeholder-user.jpg" alt="Profile Picture" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Aarav Sharma</h1>
        <p className="text-muted-foreground">AI Management</p>
      </div>
      <div className="max-w-2xl text-center">
        <p className="text-lg">
          As an industrial designer, I'm passionate about creating innovative
          product designs that are both functional and aesthetically pleasing.
          My goal is to enhance the user experience by thoughtfully considering
          every aspect of a product's design, from its form and materials to its
          interaction and usability.
        </p>
        <p className="mt-4 text-lg">
          Born and raised in India, I've always been fascinated by the
          intersection of technology and design. After completing my studies, I
          decided to pursue my dream of working in the tech industry and moved
          to New York City, where I've been based for the past 5 years. During
          this time, I've had the opportunity to work with a variety of clients,
          from startups to established corporations, on a wide range of
          projects.
        </p>
        <p className="mt-4 text-lg">
          When I'm not designing, you can find me exploring the city's vibrant
          art scene, hiking in the nearby mountains, or tinkering with the
          latest gadgets and technologies. I'm always eager to learn and grow,
          and I'm excited to continue pushing the boundaries of what's possible
          in the world of industrial design.
        </p>
      </div>
      <div className="text-center">
        <p className="text-lg">From: India</p>
        <p className="text-lg">Based in: New York, USA</p>
      </div>
      <div className="text-center">
        <a className="flex items-center gap-2" href="#">
          <GithubIcon className="h-5 w-5" />
          @username
        </a>
        <Button variant="outline" className="mt-4">
          Download Resume
        </Button>
      </div>
    </div>
  );
}
