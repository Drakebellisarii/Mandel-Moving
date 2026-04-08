'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Truck } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-[#2a5298] flex items-center justify-center shadow-blue-tint">
            <Truck className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
          <span
            className="text-white font-bold text-lg tracking-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Mandel<span className="text-[#3b6cc9]"> Moving</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium tracking-wide transition-opacity duration-200 ${
                pathname === href
                  ? 'text-white opacity-100'
                  : 'text-white/60 hover:text-white hover:opacity-100'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[#2a5298] text-white text-sm font-semibold tracking-wide hover:bg-[#3b6cc9] active:scale-[0.98] transition-[transform,background-color] duration-150 shadow-blue-tint"
          >
            Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/80 hover:text-white transition-opacity duration-150 p-1"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a1628] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-base font-medium transition-opacity duration-150 ${
                pathname === href ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-lg bg-[#2a5298] text-white font-semibold tracking-wide hover:bg-[#3b6cc9] transition-[background-color] duration-150"
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}
