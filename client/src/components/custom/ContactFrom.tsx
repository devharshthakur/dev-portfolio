'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import axios from 'axios';

const ContactForm = () => {
   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus('loading');

      try {
         const response = await axios.post('/api/contact', formData);

         if (response.status === 200) {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
         } else {
            setStatus('error');
         }
      } catch (error) {
         console.error(error);
         setStatus('error');
      }
   };

   return (
      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
         <h2 className="mb-8 text-3xl font-bold tracking-tight text-primary">Contact Me</h2>
         <form onSubmit={handleSubmit} className="w-full space-y-8">
            <div className="space-y-3">
               <Label htmlFor="name">Name</Label>
               <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="space-y-3">
               <Label htmlFor="email">Email</Label>
               <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="space-y-3">
               <Label htmlFor="message">Message</Label>
               <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
            </div>

            <Button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto">
               {status === 'loading' ? 'Sending...' : 'Send'}
            </Button>

            {status === 'success' && (
               <p className="mt-4 text-green-500 dark:text-green-400">Message sent successfully!</p>
            )}
            {status === 'error' && (
               <p className="mt-4 text-red-500 dark:text-red-400">Failed to send the message. Please try again.</p>
            )}
         </form>
      </div>
   );
};

export default ContactForm;
