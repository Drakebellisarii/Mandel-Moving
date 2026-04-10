import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Share2, MessageCircle, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f0f4ff] border-t border-[#d0d9e8] text-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5">
              <Image
                src="/Mandel-Logo.png"
                alt="Mandel Moving"
                width={160}
                height={64}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-[#4a6080] text-sm leading-relaxed mb-6">
              Your trusted partner for seamless residential and commercial relocations. Started in 2021 by Robby Mandell with a commitment to excellence and care.
            </p>
            <div className="flex gap-3">
              {[Share2, MessageCircle, Briefcase].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-[#c0cde0] flex items-center justify-center text-[#4a6080] hover:text-[#2a5298] hover:border-[#2a5298]/40 transition-[color,border-color] duration-150"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#4a6080] mb-5">
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
                    className="text-[#4a6080] hover:text-[#2a5298] text-sm transition-[color] duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#4a6080] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Residential Moving',
                'Commercial Moving',
                'Furniture Assembly and Disassembly',
                'Mulching',
                'Senior Moving',
                'Odd Jobs & House Repairs',
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-[#4a6080] hover:text-[#2a5298] text-sm transition-[color] duration-150"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#4a6080] mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#2a5298] shrink-0" />
                <a
                  href="tel:+12019780188"
                  className="text-[#4a6080] hover:text-[#2a5298] text-sm transition-[color] duration-150"
                >
                  (201) 978-0188
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#2a5298] shrink-0" />
                <a
                  href="mailto:mandelrobby@gmail.com"
                  className="text-[#4a6080] hover:text-[#2a5298] text-sm transition-[color] duration-150"
                >
                  mandelrobby@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[#c0cde0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#4a6080]/70 text-sm">
            © {new Date().getFullYear()} Mandel Moving. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Licensing'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#4a6080]/70 hover:text-[#2a5298] text-sm transition-[color] duration-150"
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
