import ContactForm from '@/components/ia/ContactForm';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Synthi AI',
  description: 'Get in touch with the Synthi AI team. We build AI and computer vision solutions for startups and enterprises across Africa.',
  openGraph: {
    title: 'Contact Us - Synthi AI',
    description: 'Get in touch with the Synthi AI team. We build AI and computer vision solutions for startups and enterprises across Africa.',
  },
};

export default function Contact() {
  return (
    <>
      <ContactForm />
    </>
  );
}
