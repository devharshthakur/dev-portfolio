import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SunIcon } from '@/components/icons/icons';
import { ModeToggle } from '../util/ThemeToggle';

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 sm:px-6 md:px-8">
      <Link
        href="https://github.com/devharshthakur"
        className="text-sm font-medium hover:underline"
        prefetch={false}
      >
        @devharshthakur
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="/about"
          className="text-sm font-medium hover:underline"
          prefetch={false}
        >
          About Me
        </Link>
        <Button variant={"outline"}>
          <Link href={"/blogs"}>Blogs</Link>
        </Button>
        <ModeToggle className="h-5 w-5" />
      </div>
    </header>
  );
}
