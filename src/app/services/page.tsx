import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { FadeIn } from '@/components/fade-in';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Home,
  Building2,
  MapPin,
  Package,
  Shield,
  ClipboardList,
  CheckCircle2,
  Phone,
  Heart,
  Wrench,
} from 'lucide-react';

const services = [
  {
    id: 'residential',
    icon: Home,
    title: 'Residential Moving',
    subtitle: 'Home Sweet New Home',
    description:
      "Moving your household is one of life's biggest transitions. Our residential moving team handles everything from careful packing to precise placement in your new home — treating your belongings with the respect they deserve.",
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
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
    icon: MapPin,
    title: 'Furniture Assembly and Disassembly',
    subtitle: 'Expert Assembly for Your New Space',
    description:
      'Whether you are setting up a new home or office, our furniture assembly and disassembly service handles all your furniture needs with precision and care — ensuring everything is properly assembled and ready to use.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    features: [
      'Full furniture assembly from flat-pack items',
      'Careful disassembly for moves and storage',
      'Furniture moving and repositioning',
      'Professional-grade tools and expertise',
      'Quick turnaround on assembly requests',
      'Nationwide service coverage',
    ],
  },
  {
    id: 'packing',
    icon: Package,
    title: 'Packing & Unpacking',
    subtitle: 'Not a Single Box to Lift',
    description:
      "Our professional packers arrive with premium materials and a systematic approach. Every item is catalogued, wrapped, and boxed for maximum protection. When we arrive at your new location, we'll unpack and set everything up exactly as you want it.",
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80',
    features: [
      'Full or partial packing options',
      'Premium double-wall moving boxes',
      'Dish pack and glass cells for fragile items',
      'Detailed labeling and room mapping',
      'Unpacking and debris removal',
      'Artwork and mirror crating',
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
    id: 'specialty',
    icon: ClipboardList,
    title: 'Specialty Item Moving',
    subtitle: 'For Items That Need Extra Care',
    description:
      'Pianos, safes, antiques, fine art, and grandfather clocks require expertise beyond standard moving. Our specialty team has the equipment, training, and experience to move your most prized possessions safely.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80',
    features: [
      'Grand and upright piano moving',
      'Safe and vault relocation',
      'Fine art crating and transport',
      'Antique furniture specialists',
      'Hot tub and pool table moving',
      'Custom crating available',
    ],
  },
  {
    id: 'senior-moving',
    icon: Heart,
    title: 'Senior Moving',
    subtitle: 'Compassionate Care for Every Step',
    description:
      'Moving later in life deserves a team that leads with patience and compassion. Our senior moving specialists are trained to provide calm, unhurried, and fully managed relocations — from downsizing assistance to seamless transition-home setups.',
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=80',
    features: [
      'Furniture assembly and wall mounting',
      'Drywall patching and painting touch-ups',
      'Plumbing and fixture installation',
      'Door and window adjustments',
      'Gutter cleaning and minor exterior work',
      'Seasonal home maintenance checks',
    ],
  },
];


export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[#0a1628] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1800&q=80"
            alt="Professional movers"
            fill
            className="object-cover opacity-15"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 to-[#0a1628]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#7ba3e0] text-sm font-semibold uppercase tracking-widest mb-4">
            Our Services
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.03em' }}
          >
            Every Move. Every<br />
            <span className="text-[#7ba3e0]">Type of Need.</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            From studio apartments to corporate headquarters, we offer a complete suite of
            moving and relocation services tailored to your exact situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#2a5298] text-white font-semibold hover:bg-[#3b6cc9] active:scale-[0.98] transition-[transform,background-color] duration-150 text-base"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
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
                {/* Text — swap order for even items on desktop */}
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
                    className="inline-flex items-center gap-2 text-[#2a5298] font-semibold hover:text-[#1e3a5f] transition-[opacity] duration-150"
                  >
                    Request this service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Image */}
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
      <section className="bg-[#0a1628] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.025em' }}
          >
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto">
            Our move coordinators are happy to walk you through the best option for your
            situation. Call or fill out our form — no pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#2a5298] text-white font-semibold hover:bg-[#3b6cc9] active:scale-[0.98] transition-[transform,background-color] duration-150"
            >
              Contact Us for a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+12019780188"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white/80 font-semibold hover:border-white/40 hover:text-white transition-[border-color,opacity] duration-150"
            >
              <Phone className="w-4 h-4" />
              (201) 978-0188
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
