import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')"
          }}
        />
        
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-6 text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Style, Shine, Confidence
          </h1>
          <p className="mb-8 max-w-[600px] text-lg text-zinc-200 sm:text-xl md:text-2xl">
            Welcome to your hair salon, where style meets natural beauty, and every visit promises an uplifting transformation.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950"
            >
              View Services
            </Link>
            <a
              href="https://www.vagaro.com/hairbytigi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white bg-transparent px-8 text-sm font-medium text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950"
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
              <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Bliss Out Every Strand
              </h2>
              <p className="mb-8 text-lg text-zinc-600">
                Discover the secret to silky smooth, sleek hair with our professional straightening service, leaving you with effortlessly elegant locks that shine with sophistication.
              </p>
              <Link
                href="/services"
                className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-black px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="mt-24 grid gap-12 md:grid-cols-2 lg:gap-24 items-center">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Highlight Your Style
              </h2>
              <p className="mb-8 text-lg text-zinc-600">
                Transform your look with our expert hair highlighting service, adding dimension and radiance to your locks for a vibrant, head-turning style.
              </p>
              <ul className="mb-8 space-y-2 text-zinc-600">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-black" />
                  Full Color
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-black" />
                  Partial Highlights
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-black" />
                  Retouch
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-black px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
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
