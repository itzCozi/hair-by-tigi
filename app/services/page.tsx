import React from 'react';

const serviceCategories = [
  {
    title: "Natural Hair Services",
    items: [
      { name: "Wash & Go", price: "Starting at $65.00", description: "Hydrating wash and definition for your natural curls." },
      { name: "2 Strand Twist", price: "Starting at $95.00", description: "Protective style using two-strand twists." },
      { name: "Twist Out", price: "Starting at $95.00", description: "Two-strand twists unraveled for a defined, wavy look." },
      { name: "Finger Coil", price: "Starting at $95.00", description: "Defined coils created using a finger coiling technique." },
      { name: "Flat Twist", price: "Starting at $95.00", description: "Cornrow-like twists lying flat against the scalp." },
    ]
  },
  {
    title: "Hair Styling Services",
    items: [
      { name: "Shampoo/Blow Dry/Thermal Curl", price: "Starting at $80.00", description: "Cleanse, blow dry, and thermal styling for a polished look." },
      { name: "Shampoo/Blow Dry/Thermal Silk Out", price: "Starting at $80.00", description: "Silky smooth finish with thermal straightening." },
      { name: "Shampoo/Roller-Set/Style", price: "Starting at $75.00", description: "Classic roller set for volume and bounce." },
      { name: "Shampoo & Blow Out", price: "Starting at $70.00", description: "Wash and professional blow out for volume and shine." },
    ]
  },
  {
    title: "Hair Color Services",
    items: [
      { name: "Full Color", price: "Starting at $120.00", description: "All-over single process color application." },
      { name: "Base Retouch (Black Color)", price: "Starting at $85.00", description: "Touch up for new growth to match existing color." },
      { name: "Double Process w/ Hydration", price: "Starting at $220.00", description: "Lightening followed by toning, includes hydration treatment." },
      { name: "Full Highlights w/ Conditioner", price: "Starting at $280.00", description: "Full head of highlights to add dimension, includes conditioning." },
      { name: "Partial Highlight (Face Framing)", price: "Starting at $120.00", description: "Highlights focused around the face for a brightening effect." },
    ]
  },
  {
    title: "Hair Extension Services",
    items: [
      { name: "Traditional Sew-In", price: "Starting at $200.00", description: "Natural-looking weave installation with leave-out." },
      { name: "Sew-In with Closure", price: "Starting at $240.00", description: "Full protective style with a closure piece." },
      { name: "Clip-On Style (Per Track)", price: "Starting at $15.00", description: "Temporary length and volume added with clip-ins." },
    ]
  },
  {
    title: "Hair Braiding Services",
    items: [
      { name: "Crochet Hair Braid", price: "Starting at $180.00", description: "Protective style using the crochet method." },
      { name: "Natural Braid (No Added Hair)", price: "Starting at $120.00", description: "Intricate braiding styles using your natural hair." },
      { name: "Men's Hair Braid", price: "Starting at $120.00", description: "Professional braiding styles for men." },
    ]
  },
  {
    title: "Hair Cut Services",
    items: [
      { name: "Curly Cut", price: "$65.00", description: "Specialized cut to enhance your natural curl pattern." },
      { name: "Short Haircut", price: "$35.00", description: "Precision cut for short styles." },
      { name: "Trim", price: "$25.00", description: "Maintenance trim to keep ends healthy." },
    ]
  },
  {
    title: "Hair SPA Services",
    items: [
      { name: "K-18 Treatment", price: "$35.00", description: "Bioactive peptide treatment to reverse hair damage." },
      { name: "Hair Mask & Steam", price: "$30.00", description: "Deep conditioning mask with steam for penetration." },
      { name: "Protein Treatment", price: "$25.00", description: "Strengthening treatment for damaged or weak hair." },
    ]
  },
  {
    title: "Chemical Straightening",
    items: [
      { name: "Relaxer (Full)", price: "Starting at $180.00", description: "Permanent straightening for the entire head." },
      { name: "Relaxer (Touch-Up)", price: "Starting at $150.00", description: "Straightening for new growth only." },
    ]
  },
  {
    title: "Additional Services",
    items: [
      { name: "Eyebrow Waxing", price: "$25.00", description: "Shaping and grooming of eyebrows." },
      { name: "Eyebrow Threading", price: "$25.00", description: "Precise hair removal using thread." },
      { name: "Hair Consultation", price: "Free", description: "Discuss your hair goals and needs with a professional." },
      { name: "Bridal Services", price: "Consultation Required", description: "Custom styling for your special day." },
    ]
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans pt-10">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Services</h1>
            <p className="mt-4 text-zinc-600">Full service hair salon for all hair types, including natural & textured hair.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category, index) => (
              <div key={index} className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-xl font-bold text-amber-600">{category.title}</h3>
                <ul className="space-y-6 mb-6 grow">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="border-b border-zinc-50 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between gap-4">
                        <span className="font-medium text-zinc-900">{item.name}</span>
                        <span className="shrink-0 text-sm text-zinc-500">{item.price}</span>
                      </div>
                      <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{item.description}</p>
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://www.solasalonstudios.com/salon-professional/tigi-tadesse" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto block w-full rounded-lg bg-amber-600 px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  Book Appointment
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
