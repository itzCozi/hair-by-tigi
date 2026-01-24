import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream text-dark-brown font-sans">
      <section className="pb-20 pt-8 md:pb-32 md:pt-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact Us</h1>
            <p className="mt-4 text-light-brown">Have a question or need to book an appointment? We're here to help.</p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:gap-24">
            <div className="space-y-8">
              <div className="rounded-2xl bg-white/50 border border-light-brown/20 p-8 shadow-sm">
                <h3 className="mb-6 text-xl font-bold">Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-light-brown/20 pb-2">
                    <span className="font-medium">Monday</span>
                    <span className="text-light-brown">Closed</span>
                  </div>
                  <div className="flex justify-between border-b border-light-brown/20 pb-2">
                    <span className="font-medium">Tuesday</span>
                    <span className="text-light-brown">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-light-brown/20 pb-2">
                    <span className="font-medium">Wednesday</span>
                    <span className="text-light-brown">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-light-brown/20 pb-2">
                    <span className="font-medium">Thursday</span>
                    <span className="text-light-brown">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-light-brown/20 pb-2">
                    <span className="font-medium">Friday</span>
                    <span className="text-light-brown">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-light-brown/20 pb-2">
                    <span className="font-medium">Saturday</span>
                    <span className="text-light-brown">9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="font-medium">Sunday</span>
                    <span className="text-light-brown">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="mb-6 text-xl font-bold">Visit Us</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-6 w-6 text-light-brown" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-dark-brown/80">7643 Pineville-Matthews Rd #101<br />Charlotte, NC</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-6 w-6 text-light-brown" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-dark-brown/80">+1 980-475-2235</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-6 w-6 text-light-brown" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-dark-brown/80">hairbytigi2@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-64 w-full overflow-hidden rounded-2xl bg-white/50 border border-light-brown/20 shadow-sm">
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
