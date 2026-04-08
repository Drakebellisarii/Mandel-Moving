import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import TestimonialCarousel from '@/components/testimonial-carousel';
import { Component as EtheralShadow } from '@/components/ui/etheral-shadow';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { FadeIn, FadeInGroup, FadeInItem } from '@/components/fade-in';
import { StatCounter } from '@/components/stat-counter';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Star,
  CheckCircle2,
  Package,
  Truck,
  ClipboardList,
  Home,
  Building2,
  MapPin,
  Shield,
  Award,
  Phone,
  Heart,
  Wrench,
} from 'lucide-react';

const stats = [
  { value: '250', label: 'Successful Moves', icon: Truck },
  { value: '5', label: 'Years in Service', icon: Award },
  { value: '40', label: '5-Star Reviews', icon: Star },
];

const services = [
  {
    icon: Home,
    title: 'Residential Moving',
    description:
      'Full-service home moves handled with care — from studio apartments to multi-bedroom estates. We protect every item as if it were our own.',
  },
  {
    icon: Building2,
    title: 'Commercial Moving',
    description:
      'Minimize downtime with our expert office and commercial relocation services. We work around your schedule to keep business running.',
  },
  {
    icon: MapPin,
    title: 'Furniture Assembly and Disassembly',
    description:
      'Professional assembly and disassembly of furniture for your home or office. We handle all the heavy lifting so you can focus on settling in.',
  },
  {
    icon: Package,
    title: 'Packing & Unpacking',
    description:
      "Professional packing using premium materials. We box, wrap, label, and unpack — so you don't have to lift a finger.",
  },
  {
    icon: Shield,
    title: 'Mulching',
    description:
      'High-quality mulching services for landscaping and outdoor spaces. Keep your gardens and yards looking beautiful and well-maintained.',
  },
  {
    icon: ClipboardList,
    title: 'Specialty Item Moving',
    description:
      'Pianos, artwork, antiques, and fragile items handled by specialists with the equipment and expertise to move them safely.',
  },
];

const process = [
  {
    step: '01',
    title: 'Request Your Free Quote',
    description:
      "Tell us about your move — origin, destination, volume, and timeline. We'll provide a transparent, no-obligation estimate within 24 hours.",
  },
  {
    step: '02',
    title: 'Schedule & Plan',
    description:
      'A dedicated move coordinator contacts you to lock in your date, walk through logistics, and answer every question you have.',
  },
  {
    step: '03',
    title: 'Professional Packing',
    description:
      'Our crew arrives with premium materials and carefully packs, labels, and inventory-checks every item before loading.',
  },
  {
    step: '04',
    title: 'Safe Transport',
    description:
      "Your belongings are loaded into our clean, GPS-tracked fleet. We handle all driving and logistics — you just relax.",
  },
  {
    step: '05',
    title: 'Delivery & Setup',
    description:
      "We unload, unwrap, and place every item exactly where you want it. Our job isn't done until you're completely satisfied.",
  },
];


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1628] pt-18">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80"
            alt="Professional movers at work"
            fill
            className="object-cover opacity-25"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/70 to-[#0a1628]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
        </div>

        {/* Ethereal shadow accent */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] opacity-30 pointer-events-none">
          <EtheralShadow
            color="rgba(42, 82, 152, 0.8)"
            animation={{ scale: 60, speed: 30 }}
            noise={{ opacity: 0.4, scale: 1 }}
            sizing="fill"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2a5298]/40 bg-[#2a5298]/10 mb-8">
              <Star className="w-3.5 h-3.5 text-[#3b6cc9]" fill="currentColor" />
              <span className="text-[#7ba3e0] text-xs font-medium tracking-wide">
                Weehawken Township #1 Moving Company
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6"
              style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.03em' }}
            >
              Where Every Move<br />
              <span className="text-[#7ba3e0]">Feels Effortless</span>
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl">
              For over two decades, Mandel Moving has delivered trusted, white-glove relocation
              services for families and businesses across the region.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#2a5298] text-white font-semibold tracking-wide hover:bg-[#3b6cc9] active:scale-[0.98] transition-[transform,background-color] duration-150 shadow-blue-tint text-base"
              >
                Contact Us for a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/20 text-white/80 font-semibold tracking-wide hover:border-white/40 hover:text-white transition-[border-color,opacity] duration-150 text-base"
              >
                View Services
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6 flex-wrap">
              {['Licensed & Insured', 'No Hidden Fees', 'Satisfaction Guarantee'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3b6cc9]" />
                  <span className="text-white/50 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-white/40" />
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#0e1f3d] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <FadeInGroup className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-white/10" stagger={0.15}>
            {stats.map(({ value, label, icon: Icon }) => (
              <FadeInItem key={label} className="flex items-center justify-center gap-6 px-8">
                <Icon className="w-6 h-6 text-[#3b6cc9] shrink-0" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <div
                    className="text-4xl lg:text-5xl font-bold text-white leading-tight"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    <StatCounter value={value} />
                  </div>
                  <div className="text-white/40 text-sm font-medium tracking-wide uppercase">
                    {label}
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInGroup>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="max-w-2xl mb-16">
            <p className="text-[#2a5298] text-sm font-semibold uppercase tracking-widest mb-4">
              What We Do
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#0a1628] mb-5"
              style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.025em' }}
            >
              Full-Service Moving,<br />Your Way
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">
              From a single room to an entire office floor, we offer tailored solutions to make
              your move seamless — no matter the size or distance.
            </p>
          </FadeIn>

          <FadeInGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.07}>
            {services.map(({ icon: Icon, title, description }) => (
              <FadeInItem key={title}>
                <div className="group h-full p-8 rounded-2xl border border-[#e8edf5] bg-white hover:border-[#2a5298]/20 hover:shadow-brand transition-[border-color,box-shadow] duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#0a1628]/5 flex items-center justify-center mb-6 group-hover:bg-[#2a5298]/10 transition-[background-color] duration-300">
                    <Icon className="w-5 h-5 text-[#2a5298]" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#0a1628] mb-3"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {title}
                  </h3>
                  <p className="text-[#4a6080] text-sm leading-relaxed">{description}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInGroup>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#2a5298] font-semibold hover:text-[#1e3a5f] transition-[opacity] duration-150"
            >
              See all services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Moving Process ── */}
      <HeroHighlight containerClassName="h-auto py-24 lg:py-32 bg-[#f6f8fc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#2a5298] text-sm font-semibold uppercase tracking-widest mb-4">
              How It Works
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#0a1628] mb-5"
              style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.025em' }}
            >
              Our{' '}
              <Highlight className="text-[#0a1628] dark:text-white">
                Moving Process
              </Highlight>
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">
              A clear, five-step journey from quote to keys — designed to take the stress out of
              every move.
            </p>
          </FadeIn>

          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-px bg-[#d0d9e8]" />

            <FadeInGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8" stagger={0.1}>
              {process.map(({ step, title, description }) => (
                <FadeInItem key={step} className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 rounded-2xl bg-[#0a1628] flex items-center justify-center mb-6 shadow-brand z-10">
                    <span
                      className="text-2xl font-bold text-white/90"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {step}
                    </span>
                  </div>
                  <h3
                    className="text-base font-bold text-[#0a1628] mb-2"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {title}
                  </h3>
                  <p className="text-[#4a6080] text-sm leading-relaxed">{description}</p>
                </FadeInItem>
              ))}
            </FadeInGroup>
          </div>
        </div>
      </HeroHighlight>

      {/* ── Testimonials ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center max-w-xl mx-auto mb-16">
            <p className="text-[#2a5298] text-sm font-semibold uppercase tracking-widest mb-4">
              Customer Reviews
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#0a1628]"
              style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.025em' }}
            >
              What Our Clients Say
            </h2>
          </FadeIn>

          <TestimonialCarousel />
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative bg-[#f6f8fc] py-14 overflow-hidden border-t border-[#e8edf5]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 right-0 w-[500px] h-[400px] rounded-full bg-[#2a5298]/5 blur-3xl" />
        </div>

        <FadeIn className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left: text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2a5298]/10 mb-4">
                <Truck className="w-3.5 h-3.5 text-[#2a5298]" strokeWidth={1.5} />
                <span className="text-[#2a5298] text-xs font-semibold uppercase tracking-widest">Free Estimates</span>
              </div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-[#0a1628] mb-3"
                style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.025em' }}
              >
                Ready to Make Your Move?
              </h2>
              <p className="text-[#4a6080] text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                Get a free, no-obligation quote today. Our team responds within 24 hours.
              </p>
            </div>

            {/* Right: actions + trust */}
            <div className="flex flex-col items-center lg:items-end gap-4 shrink-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#2a5298] text-white font-semibold tracking-wide hover:bg-[#3b6cc9] active:scale-[0.98] transition-[transform,background-color] duration-150 shadow-blue-tint text-sm"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+12019780188"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-[#d0d9e8] bg-white text-[#0a1628] font-semibold tracking-wide hover:border-[#2a5298]/40 hover:text-[#2a5298] transition-[border-color,color] duration-150 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  (201) 978-0188
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-5 gap-y-2">
                {['Licensed & Insured', 'No Hidden Fees', 'Satisfaction Guarantee'].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3b6cc9]" />
                    <span className="text-[#4a6080] text-xs font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
