'use client';
import { Header } from '@/components/custom/Header';
import { ProfileSection } from '@/components/custom/ProfileSection';
import { ProjectsSection } from '@/components/custom/ProjectSection';
import ContactForm from '@/components/custom/ContactFrom';

export default function MainComponent() {
   return (
      <div className="flex min-h-screen flex-col bg-background text-foreground">
         <Header />
         <main className="flex-1 px-4 py-8 sm:px-6 md:px-8 lg:py-12">
            <div className="mx-auto grid max-w-3xl gap-12">
               <ProfileSection />
               <ProjectsSection />
               <ContactForm />
            </div>
         </main>
      </div>
   );
}
