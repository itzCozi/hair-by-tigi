import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-light-brown/20 bg-cream py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:items-start md:text-left">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-dark-brown">Hair by Tigi</h3>
          <p className="text-sm text-light-brown">
            7643 Pineville-Matthews Rd #101<br />
            Charlotte, NC 28226
          </p>
          <p className="text-sm text-light-brown">
            <a href="tel:+19804752235" className="hover:text-dark-brown">+1 980-475-2235</a>
          </p>
        </div>
        
        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex gap-4 text-sm text-light-brown">
            <a href="https://www.instagram.com/hairbytigi2" target="_blank" rel="noopener noreferrer" className="hover:text-dark-brown">Instagram</a>
            <a href="mailto:hairbytigi2@gmail.com" className="hover:text-dark-brown">Email</a>
          </div>
          <p className="text-sm text-light-brown">
            © {new Date().getFullYear()} Hair by Tigi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
