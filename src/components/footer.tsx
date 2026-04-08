import Link from 'next/link';
import { Truck, Phone, Mail, Share2, MessageCircle, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-[#2a5298] flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <span
                className="text-white font-bold text-lg tracking-tight"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Mandel Moving
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Your trusted partner for seamless residential and commercial relocations. Started in 2021 by Robby Mandell with a commitment to excellence and care.
            </p>
            <div className="flex gap-3">
              {[Share2, MessageCircle, Briefcase].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-[opacity,border-color] duration-150"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Our Services' },
                { href: '/contact', label: 'Contact' },
                { href: '/contact', label: 'Get a Free Quote' },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/50 hover:text-white text-sm transition-opacity duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Residential Moving',
                'Commercial Moving',
                'Furniture Assembly and Disassembly',
                'Packing & Unpacking',
                'Mulching',
                'Specialty Item Moving',
                'Senior Moving',
                'Odd Jobs & House Repairs',
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/50 hover:text-white text-sm transition-opacity duration-150"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#3b6cc9] shrink-0" />
                <a
                  href="tel:+12019780188"
                  className="text-white/50 hover:text-white text-sm transition-opacity duration-150"
                >
                  (201) 978-0188
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#3b6cc9] shrink-0" />
                <a
                  href="mailto:hello@mandelmoving.com"
                  className="text-white/50 hover:text-white text-sm transition-opacity duration-150"
                >
                  hello@mandelmoving.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Mandel Moving. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Licensing'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/30 hover:text-white/60 text-sm transition-opacity duration-150"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
