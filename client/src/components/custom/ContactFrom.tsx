'use client';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
} from '../ui/alert-dialog';

export function ContactForm() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
   });

   const [isSubmitting, setIsSubmitting] = useState(false);
   const [responseMessage, setResponseMessage] = useState('');
   const [showDialog, setShowDialog] = useState(false);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setResponseMessage('');
      setShowDialog(false);

      try {
         const response = await fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });

         if (response.ok) {
            setResponseMessage('Form submitted successfully!');
            setFormData({
               name: '',
               email: '',
               message: '',
            });
         } else {
            setResponseMessage('Failed to submit the form.');
         }
      } catch (error) {
         console.error('Error submitting form:', error);
         setResponseMessage('An error occured. Please try again');
      } finally {
         setIsSubmitting(false);
         setShowDialog(true);
      }
   };

   return (
      <section className="grid gap-6">
         <h2 className="text-2xl font-bold">Contact Me(Not Working . . . )</h2>
         <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
               <Label htmlFor="name">Name</Label>
               <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="grid gap-2">
               <Label htmlFor="email">Email</Label>
               <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="youremail@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="grid gap-2">
               <Label htmlFor="message">Message</Label>
               <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
               />
            </div>
            <Button type="submit" className="justify-self-end" disabled={isSubmitting}>
               {isSubmitting ? 'Submitting' : 'Submit'}
            </Button>
         </form>

         <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
            <AlertDialogTrigger asChild>
               <span style={{ display: 'none' }}></span>
            </AlertDialogTrigger>
            <AlertDialogContent>
               <AlertDialogHeader>
                  <AlertDialogTitle>Submission Status</AlertDialogTitle>
                  <AlertDialogDescription>{responseMessage}</AlertDialogDescription>
               </AlertDialogHeader>
               <AlertDialogFooter>
                  <AlertDialogAction onClick={() => setShowDialog(false)}>Close</AlertDialogAction>
               </AlertDialogFooter>
            </AlertDialogContent>
         </AlertDialog>
      </section>
   );
}
