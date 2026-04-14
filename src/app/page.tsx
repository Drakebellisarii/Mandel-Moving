import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import TestimonialCarousel from '@/components/testimonial-carousel';
import { FadeIn, FadeInGroup, FadeInItem } from '@/components/fade-in';
import { Waves } from '@/components/ui/wave-background';
import { StatCounter } from '@/components/stat-counter';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Star,
  Truck,
  Home,
  Building2,
  MapPin,
  Shield,
  Award,
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
      'Minimize downtime with our expert moving and home maintenance services. We work around your schedule to keep business running.',
  },
  {
    icon: MapPin,
    title: 'Furniture Assembly and Disassembly',
    description:
      'Professional assembly and disassembly of furniture for your home or office. We handle all the heavy lifting so you can focus on settling in.',
  },
  {
    icon: Shield,
    title: 'Mulching',
    description:
      'High-quality mulching services for landscaping and outdoor spaces. Keep your gardens and yards looking beautiful and well-maintained.',
  },
  {
    icon: Heart,
    title: 'Senior Moving',
    description:
      'Patient, compassionate relocations for seniors — from downsizing assistance to full-service moves into assisted-living and retirement communities.',
  },
  {
    icon: Wrench,
    title: 'Odd Jobs & House Repairs',
    description:
      'Hanging shelves, patching drywall, furniture assembly, fixture installation — no task is too small, and no job gets left half-done.',
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
      <section className="relative min-h-screen flex items-center overflow-hidden pt-18">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src="moving-hero.jpg"
            alt="Professional movers loading boxes into a moving truck"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          {/* Grey tint overlay */}
          <div className="absolute inset-0 bg-white/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-white/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="max-w-2xl">
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0a1628] leading-[1.08] mb-6"
              style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.03em' }}
            >
              No Job is Too Small<br />
              <span className="text-[#2a5298]">for Professionals.</span>
            </h1>

            <p className="text-[#1e3a5f] text-lg leading-relaxed mb-4 max-w-xl">
              For over five years, Mandel Moving has delivered trusted moving and home maintenance
              services for families and businesses across the region.
            </p>

            <div className="flex items-center gap-2 mb-8">
              <MapPin className="w-4 h-4 text-[#2a5298] shrink-0" />
              <span className="text-[#1e3a5f] text-sm font-medium">Serving North Jersey &amp; Southern New York &mdash; Based in Ramsey, NJ</span>
            </div>

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
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-[#0a1628]/20 bg-white/40 text-[#0a1628] font-semibold tracking-wide hover:bg-white/60 hover:border-[#0a1628]/30 transition-[background-color,border-color] duration-150 text-base backdrop-blur-sm"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-white border-t border-b border-[#e8edf5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <FadeInGroup className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-[#e8edf5]" stagger={0.15}>
            {stats.map(({ value, label, icon: Icon }) => (
              <FadeInItem key={label} className="flex items-center justify-center gap-6 px-8">
                <Icon className="w-6 h-6 text-[#2a5298] shrink-0" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <div
                    className="text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    <StatCounter value={value} />
                  </div>
                  <div className="text-[#4a6080] text-sm font-medium tracking-wide uppercase">
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
      <section className="relative py-32 lg:py-44 overflow-hidden bg-[#0a1628]">
        {/* Wave animation background */}
        <Waves
          strokeColor="rgba(91,138,219,0.45)"
          backgroundColor="transparent"
          pointerSize={0}
        />
        {/* Navy gradient overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(160deg, rgba(10,22,40,0.72) 0%, rgba(26,48,85,0.60) 50%, rgba(42,82,152,0.55) 100%)' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#7ba3e0] text-sm font-semibold uppercase tracking-widest mb-4">
              How It Works
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.025em' }}
            >
              Our Moving Process
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              A clear, five-step journey from quote to keys — designed to take the stress out of every move.
            </p>
          </FadeIn>

          <FadeInGroup className="grid grid-cols-1 md:grid-cols-5 gap-3" stagger={0.1}>
            {process.map(({ step, title, description }, index) => (
              <FadeInItem key={step} className="relative flex flex-col">
                {/* Connector arrow */}
                {index < process.length - 1 && (
                  <div className="hidden md:flex absolute top-8 -right-3 z-10 items-center gap-0">
                    <div className="w-4 h-0.5 bg-white/50" />
                    <div className="w-0 h-0" style={{ borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '7px solid rgba(255,255,255,0.5)' }} />
                  </div>
                )}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-brand border border-[#e8edf5] hover:border-[#2a5298]/20 hover:shadow-[0_4px_24px_rgba(42,82,152,0.1)] transition-[border-color,box-shadow] duration-300">
                  {/* Step number pill */}
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#2a5298] mb-5">
                    <span
                      className="text-sm font-bold text-white"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {step}
                    </span>
                  </div>
                  <h3
                    className="text-[#0a1628] font-bold text-sm mb-2"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {title}
                  </h3>
                  <p className="text-[#4a6080] text-xs leading-relaxed">{description}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInGroup>
        </div>
      </section>

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

          <div className="mt-12 rounded-2xl bg-gray-50 border border-gray-200 px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#2a5298]" fill="currentColor" />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-[#0a1628]">Loved your experience?</p>
                <p className="text-xs text-[#4a6080]">Your review helps families find a mover they can trust.</p>
              </div>
            </div>
            <Link
              href="/review"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2a5298] text-white font-semibold text-sm hover:bg-[#3b6cc9] active:scale-[0.98] transition-[transform,background-color] duration-150"
            >
              Write a Review
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
