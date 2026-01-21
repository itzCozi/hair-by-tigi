import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-dark-brown font-sans">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://media.theeverygirl.com/wp-content/uploads/2024/06/the-everygirl-dry-shampoo-black-hair-f-2.jpg')"
          }}
        />
        
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-6 text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Style, Shine, Confidence
          </h1>
          <p className="mb-8 max-w-[600px] text-lg text-cream sm:text-xl md:text-2xl">
            Welcome to your hair salon, where style meets natural beauty, and every visit promises an uplifting transformation.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-full bg-cream px-8 text-sm font-medium text-dark-brown transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950"
            >
              View Services
            </Link>
            <a
              href="https://www.vagaro.com/hairbytigi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-cream bg-transparent px-8 text-sm font-medium text-cream transition-colors hover:bg-cream/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950"
            >
              Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-24 items-center">
            <div className="relative h-96 overflow-hidden rounded-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
                }}
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-dark-brown">
                Bliss Forever Start
              </h2>
              <p className="mb-8 text-lg text-light-brown">
                Discover the secret to silky smooth, sleek hair with our professional straightening service, leaving you with effortlessly elegant locks that shine with sophistication.
              </p>
              <Link
                href="/services"
                className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-dark-brown px-8 text-sm font-medium text-cream transition-colors hover:bg-light-brown"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="mt-24 grid gap-12 md:grid-cols-2 lg:gap-24 items-center">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-dark-brown">
                Highlight Your Style
              </h2>
              <p className="mb-8 text-lg text-light-brown">
                Transform your look with our expert hair highlighting service, adding dimension and radiance to your locks for a vibrant, head-turning style.
              </p>
              <ul className="mb-8 space-y-2 text-dark-brown">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-dark-brown" />
                  Full Color
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-dark-brown" />
                  Partial Highlights
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-dark-brown" />
                  Retouch
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-dark-brown px-8 text-sm font-medium text-cream transition-colors hover:bg-light-brown"
              >
                View Color Services
              </Link>
            </div>
            <div className="relative h-96 overflow-hidden rounded-2xl order-1 md:order-2">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
