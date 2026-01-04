import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans pt-10">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact Us</h1>
            <p className="mt-4 text-zinc-600">We&apos;d love to hear from you. Visit us or get in touch.</p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:gap-24">
            <div className="space-y-8">
              <div className="rounded-2xl bg-zinc-50 p-8">
                <h3 className="mb-6 text-xl font-bold">Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-zinc-200 pb-2">
                    <span className="font-medium">Monday</span>
                    <span className="text-zinc-600">Closed</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-200 pb-2">
                    <span className="font-medium">Tuesday</span>
                    <span className="text-zinc-600">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-200 pb-2">
                    <span className="font-medium">Wednesday</span>
                    <span className="text-zinc-600">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-200 pb-2">
                    <span className="font-medium">Thursday</span>
                    <span className="text-zinc-600">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-200 pb-2">
                    <span className="font-medium">Friday</span>
                    <span className="text-zinc-600">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-200 pb-2">
                    <span className="font-medium">Saturday</span>
                    <span className="text-zinc-600">9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="font-medium">Sunday</span>
                    <span className="text-zinc-600">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="mb-6 text-xl font-bold">Visit Us</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-6 w-6 text-amber-600" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-zinc-600">7643 Pineville-Matthews Rd #101<br />Charlotte, NC</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-6 w-6 text-amber-600" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-zinc-600">+1 980-475-2235</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-6 w-6 text-amber-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-zinc-600">hairbytigi2@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-64 w-full overflow-hidden rounded-2xl bg-zinc-100">
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  allowFullScreen 
                  src="https://maps.google.com/maps?q=7643+Pineville-Matthews+Rd+%23101,+Charlotte,+NC&t=&z=15&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
