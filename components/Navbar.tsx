import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl font-bold tracking-tighter text-zinc-900">
          Hair by Tigi
        </Link>
        <div className="hidden gap-6 md:flex">
          <Link href="/services" className="text-sm font-medium text-zinc-900 hover:text-amber-600 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-sm font-medium text-zinc-900 hover:text-amber-600 transition-colors">
            Contact
          </Link>
        </div>
        <a
          href="https://www.vagaro.com/hairbytigi"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}
