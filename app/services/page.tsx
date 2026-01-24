"use client";

import React, { useState, useMemo } from 'react';

// Interfaces for type safety
interface ServiceItem {
  name: string;
  price: string;
  priceValue: number; // Numeric value for filtering
  duration: number; // In minutes, for filtering
  description: string;
}

interface ServiceCategory {
  title: string;
  categoryId: string; // unique ID for filtering
  items: ServiceItem[];
}

// Data with added basic metadata for filters
const serviceCategories: ServiceCategory[] = [
  {
    title: "Natural Hair Services",
    categoryId: "natural",
    items: [
      { name: "Wash & Go", price: "Starting at $65.00", priceValue: 65, duration: 60, description: "Deep cleanse, hydration, and curl definition that lets your natural texture shine." },
      { name: "2 Strand Twist", price: "Starting at $95.00", priceValue: 95, duration: 90, description: "A classic protective style that keeps hair moisturized and tangle-free." },
      { name: "Twist Out", price: "Starting at $95.00", priceValue: 95, duration: 105, description: "We set your twists and unravel them for defined, bouncy waves." },
      { name: "Finger Coil", price: "Starting at $95.00", priceValue: 95, duration: 120, description: "Individual coils created by hand for maximum definition and longevity." },
      { name: "Flat Twist", price: "Starting at $95.00", priceValue: 95, duration: 90, description: "A neat, flat protective style similar to cornrows but with a softer finish." },
    ]
  },
  {
    title: "Hair Styling Services",
    categoryId: "styling",
    items: [
      { name: "Shampoo/Blow Dry/Thermal Curl", price: "Starting at $80.00", priceValue: 80, duration: 75, description: "Includes a wash, blow dry, and curling iron style." },
      { name: "Shampoo/Blow Dry/Thermal Silk Out", price: "Starting at $80.00", priceValue: 80, duration: 90, description: "Our signature silk press for bone-straight, flowing hair." },
      { name: "Shampoo/Roller-Set/Style", price: "Starting at $75.00", priceValue: 75, duration: 90, description: "Traditional roller set for volume, body, and curl without direct heat." },
      { name: "Shampoo & Blow Out", price: "Starting at $70.00", priceValue: 70, duration: 60, description: "A thorough cleanse and professional blowout for a smooth, airy finish." },
    ]
  },
  {
    title: "Hair Color Services",
    categoryId: "color",
    items: [
      { name: "Full Color", price: "Starting at $120.00", priceValue: 120, duration: 120, description: "Single-process color from roots to ends for a rich, uniform look." },
      { name: "Base Retouch (Black Color)", price: "Starting at $85.00", priceValue: 85, duration: 90, description: "Cover grays or touch up your roots to match your current shade." },
      { name: "Double Process w/ Hydration", price: "Starting at $220.00", priceValue: 220, duration: 180, description: "Required for lighter lift. Includes lightening, toning, and a hydration treatment." },
      { name: "Full Highlights w/ Conditioner", price: "Starting at $280.00", priceValue: 280, duration: 210, description: "All-over dimension with a customized conditioning treatment included." },
      { name: "Partial Highlight (Face Framing)", price: "Starting at $120.00", priceValue: 120, duration: 105, description: "Focuses brightness around your face to enhance your features." },
    ]
  },
  {
    title: "Hair Extension Services",
    categoryId: "extensions",
    items: [
      { name: "Traditional Sew-In", price: "Starting at $200.00", priceValue: 200, duration: 180, description: "Full weave installation with minimal leave-out for a natural blend." },
      { name: "Sew-In with Closure", price: "Starting at $240.00", priceValue: 240, duration: 210, description: "Full protective style with no leave-out, great for heat-free styling." },
      { name: "Clip-On Style (Per Track)", price: "Starting at $15.00", priceValue: 15, duration: 30, description: "Add instant volume or length with custom-placed clip-ins." },
    ]
  },
  {
    title: "Hair Braiding Services",
    categoryId: "braiding",
    items: [
      { name: "Crochet Hair Braid", price: "Starting at $180.00", priceValue: 180, duration: 150, description: "Quick and versatile protective style using pre-looped hair." },
      { name: "Natural Braid (No Added Hair)", price: "Starting at $120.00", priceValue: 120, duration: 120, description: "Cornrows or braid designs using only your own hair." },
      { name: "Men's Hair Braid", price: "Starting at $120.00", priceValue: 120, duration: 60, description: "Clean, precise braiding styles for men." },
    ]
  },
  {
    title: "Hair Cut Services",
    categoryId: "cut",
    items: [
      { name: "Curly Cut", price: "$65.00", priceValue: 65, duration: 60, description: "Shape and structure designed specifically for your curl pattern." },
      { name: "Short Haircut", price: "$35.00", priceValue: 35, duration: 45, description: "Precision cutting for pixies, crops, and tapered styles." },
      { name: "Trim", price: "$25.00", priceValue: 25, duration: 30, description: "Essential maintenance to remove split ends and retain length." },
    ]
  },
  {
    title: "Hair SPA Services",
    categoryId: "spa",
    items: [
      { name: "K-18 Treatment", price: "$35.00", priceValue: 35, duration: 15, description: "Molecular repair treatment that reverses damage in 4 minutes." },
      { name: "Hair Mask & Steam", price: "$30.00", priceValue: 30, duration: 30, description: "Intense moisture infusion to revive dry, thirsty strands." },
      { name: "Protein Treatment", price: "$25.00", priceValue: 25, duration: 30, description: "Restores strength to weak or breaking hair." },
    ]
  },
  {
    title: "Chemical Straightening",
    categoryId: "chemical",
    items: [
      { name: "Relaxer (Full)", price: "Starting at $180.00", priceValue: 180, duration: 120, description: "Permanent relaxer application for virgin hair." },
      { name: "Relaxer (Touch-Up)", price: "Starting at $150.00", priceValue: 150, duration: 90, description: "Application on new growth only to maintain straightness." },
    ]
  },
  {
    title: "Additional Services",
    categoryId: "additional",
    items: [
      { name: "Eyebrow Waxing", price: "$25.00", priceValue: 25, duration: 15, description: "Clean up and shape your brows with gentle wax." },
      { name: "Eyebrow Threading", price: "$25.00", priceValue: 25, duration: 20, description: "Precise hair removal for perfectly defined arches." },
      { name: "Hair Consultation", price: "Free", priceValue: 0, duration: 15, description: "Let's talk about your hair goals and come up with a plan." },
      { name: "Bridal Services", price: "Consultation Required", priceValue: 0, duration: 60, description: "Day-of styling and trial runs for brides and bridal parties." },
    ]
  },
];

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(300);
  const [maxDuration, setMaxDuration] = useState(240);

  const filteredData = useMemo(() => {
    return serviceCategories.map(category => {
      // 1. Filter by category
      if (selectedCategory !== "all" && category.categoryId !== selectedCategory) {
        return null;
      }

      // 2. Filter items within category
      const filteredItems = category.items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              item.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesPrice = item.priceValue <= maxPrice;
        const matchesDuration = item.duration <= maxDuration;

        return matchesSearch && matchesPrice && matchesDuration;
      });

      if (filteredItems.length === 0) return null;

      return { ...category, items: filteredItems };
    }).filter(Boolean) as ServiceCategory[];
  }, [searchTerm, selectedCategory, maxPrice, maxDuration]);

  return (
    <div className="min-h-screen bg-cream text-dark-brown font-sans">
      <section className="pb-20 pt-8 md:pb-32 md:pt-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-dark-brown">Our Services</h1>
            <p className="mt-4 text-light-brown font-medium">Full service salons for all specializing in natural and textured hair</p>
          </div>

          {/* Filters Section */}
          <div className="mb-12 p-6 bg-white/60 rounded-xl border border-light-brown/20 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-dark-brown">Find Your Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Search */}
              <div className="flex flex-col gap-2">
                <label htmlFor="search" className="text-sm font-semibold text-dark-brown">Search</label>
                <input 
                  id="search"
                  type="text" 
                  placeholder="Service name..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="p-2 rounded-md border border-light-brown/30 bg-white focus:outline-none focus:ring-2 focus:ring-light-brown/50"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-sm font-semibold text-dark-brown">Category</label>
                <select 
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="p-2 rounded-md border border-light-brown/30 bg-white focus:outline-none focus:ring-2 focus:ring-light-brown/50"
                >
                  <option value="all">All Categories</option>
                  {serviceCategories.map(cat => (
                    <option key={cat.categoryId} value={cat.categoryId}>{cat.title}</option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <label htmlFor="price" className="text-sm font-semibold text-dark-brown">Max Price</label>
                  <span className="text-sm text-light-brown font-medium">${maxPrice}</span>
                </div>
                <input 
                  id="price"
                  type="range" 
                  min="0" 
                  max="300" 
                  step="5"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-dark-brown cursor-pointer"
                />
                <div className="flex justify-between text-xs text-dark-brown/60">
                  <span>$0</span>
                  <span>$300+</span>
                </div>
              </div>

              {/* Duration Filter */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <label htmlFor="duration" className="text-sm font-semibold text-dark-brown">Max Duration</label>
                  <span className="text-sm text-light-brown font-medium">{Math.floor(maxDuration / 60)}h {maxDuration % 60}m</span>
                </div>
                <input 
                  id="duration"
                  type="range" 
                  min="15" 
                  max="240" 
                  step="15"
                  value={maxDuration}
                  onChange={(e) => setMaxDuration(Number(e.target.value))}
                  className="w-full accent-dark-brown cursor-pointer"
                />
                <div className="flex justify-between text-xs text-dark-brown/60">
                  <span>15m</span>
                  <span>4h+</span>
                </div>
              </div>

            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
            {filteredData.length > 0 ? (
              filteredData.map((category, index) => (
                <div key={index} className="flex flex-col rounded-2xl border border-light-brown/20 bg-white/50 p-8 shadow-sm">
                  <h3 className="mb-6 text-xl font-bold text-dark-brown">{category.title}</h3>
                  <ul className="space-y-6 mb-6">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="border-b border-light-brown/20 pb-4 last:border-0 last:pb-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                          <div className="font-semibold text-dark-brown">{item.name}</div>
                          <div className="font-medium text-light-brown whitespace-nowrap">{item.price}</div>
                        </div>
                        <div className="flex items-center gap-2 mt-1 mb-2">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-light-brown/10 text-dark-brown font-medium">
                            ~{item.duration} min
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-dark-brown/80">{item.description}</p>
                        <div className="mt-3">
                          <a 
                            href="https://www.vagaro.com/hairbytigi" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-dark-brown text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-light-brown transition-colors"
                          >
                            Book Appointment
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-dark-brown font-medium">No services found matching your filters.</p>
                <button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setMaxPrice(300);
                    setMaxDuration(240);
                  }}
                  className="mt-4 text-light-brown underline hover:text-dark-brown"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
