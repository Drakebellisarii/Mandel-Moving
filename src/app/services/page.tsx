import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { FadeIn } from '@/components/fade-in';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Home,
  Building2,
  Wrench,
  Shield,
  CheckCircle2,
  Phone,
  Heart,
  Hammer,
  Wind,
} from 'lucide-react';

const services = [
  {
    id: 'residential',
    icon: Home,
    title: 'Residential Moving',
    subtitle: 'Home Sweet New Home',
    description:
      "Moving your household is one of life's biggest transitions. Our residential moving team handles everything from careful packing to precise placement in your new home — treating your belongings with the respect they deserve.",
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=900&q=80',
    features: [
      'Full-service packing and unpacking',
      'Furniture disassembly and reassembly',
      'Wardrobe boxes and specialty packaging',
      'Appliance disconnection and reconnection',
      'Fragile item crating and wrapping',
      'Same-day and weekend availability',
    ],
  },
  {
    id: 'commercial',
    icon: Building2,
    title: 'Commercial Moving',
    subtitle: 'Zero Downtime. Maximum Efficiency.',
    description:
      "Business relocations require precision planning and after-hours execution. Our commercial division handles office furniture, IT equipment, and sensitive documents with the discretion and speed your business demands.",
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80',
    features: [
      'After-hours and weekend scheduling',
      'IT equipment packing and transport',
      'Modular furniture disassembly/reassembly',
      'Secure document and file moving',
      'Single-point-of-contact project management',
      'Detailed inventory and asset tracking',
    ],
  },
  {
    id: 'furniture-assembly',
    icon: Wrench,
    title: 'Furniture Assembly and Disassembly',
    subtitle: 'Expert Assembly for Your New Space',
    description:
      'Whether you are setting up a new home or office, our furniture assembly and disassembly service handles all your furniture needs with precision and care — ensuring everything is properly assembled and ready to use.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80',
    features: [
      'Full furniture assembly from flat-pack items',
      'Careful disassembly for moves and storage',
      'Furniture moving and repositioning',
      'Professional-grade tools and expertise',
      'Quick turnaround on assembly requests',
      'Residential and commercial coverage',
    ],
  },
  {
    id: 'mulching',
    icon: Shield,
    title: 'Mulching',
    subtitle: 'Transform Your Outdoor Spaces',
    description:
      'Professional mulching services for residential and commercial properties. Our expert team delivers and installs premium mulch to enhance your landscaping while protecting soil and suppressing weeds.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80',
    features: [
      'Premium mulch selection and delivery',
      'Professional installation and spreading',
      'Landscape design consultation',
      'Year-round mulch maintenance',
      'Eco-friendly mulching options',
      'Commercial and residential services',
    ],
  },
  {
    id: 'senior-moving',
    icon: Heart,
    title: 'Senior Moving',
    subtitle: 'Compassionate Care for Every Step',
    description:
      'Moving later in life deserves a team that leads with patience and compassion. Our senior moving specialists are trained to provide calm, unhurried, and fully managed relocations — from downsizing assistance to seamless transition-home setups.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80',
    features: [
      'Unhurried, patient-centered scheduling',
      'Downsizing and decluttering guidance',
      'Assisted-living and retirement community moves',
      'Coordination with family members',
      'Fragile heirloom packing and handling',
      'Full-service setup in the new home',
    ],
  },
  {
    id: 'odd-jobs',
    icon: Wrench,
    title: 'Odd Jobs & House Repairs',
    subtitle: 'One Call for All the Small Stuff',
    description:
      'From hanging shelves and patching drywall to assembling furniture and fixing leaky faucets — our skilled handymen tackle the jobs that pile up. No task is too small, and no job gets left half-done.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80',
    features: [
      'Furniture assembly and wall mounting',
      'Drywall patching and painting touch-ups',
      'Plumbing and fixture installation',
      'Door and window adjustments',
      'Gutter cleaning and minor exterior work',
      'Seasonal home maintenance checks',
    ],
  },
  {
    id: 'window-cleaning',
    icon: Wind,
    title: 'Window Cleaning',
    subtitle: 'Crystal Clear Results',
    description:
      'Professional interior and exterior window cleaning for homes and businesses. We leave every pane streak-free and spotless, improving your view and your property\'s curb appeal.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80',
    features: [
      'Interior and exterior window cleaning',
      'Screen removal and cleaning',
      'Track and sill detailing',
      'Multi-story residential service',
      'Commercial storefront cleaning',
      'Eco-friendly cleaning solutions',
    ],
  },
  {
    id: 'wood-refinishing',
    icon: Hammer,
    title: 'Refinish Wooden Furniture & Decks',
    subtitle: 'Restore the Natural Beauty',
    description:
      'Bring worn-out wood back to life. We sand, stain, and seal wooden furniture, floors, and outdoor decks — restoring their original beauty and protecting them for years to come.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    features: [
      'Deck sanding, staining, and sealing',
      'Wooden furniture restoration',
      'Custom stain color matching',
      'Interior hardwood refinishing',
      'Weatherproofing and UV protection',
      'Residential and commercial projects',
    ],
  },
];

const serviceNames = services.map(s => s.title);

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-20" style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #1a3358 50%, #1e3f6b 100%)' }}>
        {/* Diagonal stripe texture */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 32px)',
        }} />
        {/* Glow accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at top right, rgba(91,138,219,0.2) 0%, transparent 70%)' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
          {/* Header text */}
          <div className="text-center mb-12">
            <p className="text-[#7ba3e0] text-sm font-semibold uppercase tracking-widest mb-4">
              Our Services
            </p>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mb-5"
              style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.03em' }}
            >
              Every Move. Every<br />
              <span className="text-[#7ba3e0]">Type of Need.</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              From studio apartments to corporate headquarters — moving, maintenance, and home services all under one roof.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#2a5298] text-white font-semibold hover:bg-[#3b6cc9] active:scale-[0.98] transition-[transform,background-color] duration-150 text-sm"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Service name pills */}
          <div className="flex flex-wrap justify-center gap-2 pb-12">
            {serviceNames.map((name) => (
              <span
                key={name}
                className="px-4 py-1.5 rounded-full bg-white/8 border border-white/15 text-white/70 text-xs font-medium tracking-wide"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Detail ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {services.map(({ id, icon: Icon, title, subtitle, description, image, features }, index) => (
              <FadeIn
                key={id}
                delay={0}
                direction={index % 2 === 0 ? 'left' : 'right'}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a1628]/5 mb-5">
                    <Icon className="w-4 h-4 text-[#2a5298]" strokeWidth={1.5} />
                    <span className="text-[#2a5298] text-xs font-semibold uppercase tracking-widest">
                      {subtitle}
                    </span>
                  </div>
                  <h2
                    className="text-3xl lg:text-4xl font-bold text-[#0a1628] mb-4"
                    style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.025em' }}
                  >
                    {title}
                  </h2>
                  <p className="text-[#4a6080] text-base leading-relaxed mb-8">{description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#2a5298] mt-0.5 shrink-0" />
                        <span className="text-[#4a6080] text-sm leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#2a5298] font-semibold hover:text-[#1e3a5f] transition-[color] duration-150"
                  >
                    Request this service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className={`relative rounded-2xl overflow-hidden shadow-brand-lg aspect-[4/3] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/30 to-transparent" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a1628] py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-playfair)' }}>
              Not Sure Which Service You Need?
            </p>
            <p className="text-white/50 text-sm mt-0.5">No pressure — we'll help you figure it out.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#2a5298] text-white font-semibold text-sm hover:bg-[#3b6cc9] active:scale-[0.98] transition-[transform,background-color] duration-150"
            >
              Get a Free Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="tel:+12019780188"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-white/20 text-white/80 font-semibold text-sm hover:border-white/40 hover:text-white transition-[border-color,color] duration-150"
            >
              <Phone className="w-3.5 h-3.5" />
              (201) 978-0188
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
