import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { FadeIn, FadeInGroup, FadeInItem } from '@/components/fade-in';
import { StatCounter } from '@/components/stat-counter';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Star,
  Award,
  Truck,
  Users,
  ShieldCheck,
  Heart,
  CheckCircle2,
} from 'lucide-react';

const stats = [
  { value: '250', label: 'Successful Moves', icon: Truck },
  { value: '5', label: 'Years in Service', icon: Award },
  { value: '40', label: '5-Star Reviews', icon: Star },
  { value: '20', label: 'Team Members', icon: Users },
];

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity First',
    description:
      'We quote transparently, communicate honestly, and never surprise you with hidden fees. What we say is what you get.',
  },
  {
    icon: Heart,
    title: 'Genuine Care',
    description:
      "Your belongings aren't cargo to us — they're your life's memories. We handle every item with the same care we'd want for our own.",
  },
  {
    icon: Award,
    title: 'Relentless Excellence',
    description:
      'We hold ourselves to an industry-leading standard. Every move is an opportunity to earn your trust and your referral.',
  },
  {
    icon: Users,
    title: 'A Team You Can Trust',
    description:
      'Every Mandel crew member is background-checked, professionally trained, and dedicated to making your move a success.',
  },
];

const milestones = [
  {
    year: '2021',
    title: 'Mandel Moving Founded',
    description:
      'Robby Mandell started the company with a single truck and a vision to revolutionize the moving industry with integrity and care.',
  },
  {
    year: '2022',
    title: '50 Successful Moves',
    description:
      'In our first year, we completed 50 moves across the tri-state area, building a reputation for reliability and professionalism.',
  },
  {
    year: '2023',
    title: 'Expanded Team to 8 Employees',
    description:
      'Growing demand led us to expand our team to 8 dedicated professionals, each trained to the highest standards of moving excellence.',
  },
  {
    year: '2024',
    title: '150 Successful Moves',
    description:
      'We reached 150 completed moves and earned recognition as the #1 rated moving company in Weehawken Township.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* ── Page Hero ── */}
      <section className="relative bg-[#0a1628] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1800&q=80"
            alt="Mandel Moving team at work"
            fill
            className="object-cover opacity-15"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 to-[#0a1628]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#7ba3e0] text-sm font-semibold uppercase tracking-widest mb-4">
            About Us
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.03em' }}
          >
            The People Behind<br />
            <span className="text-[#7ba3e0]">Every Move</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            For over two decades, Mandel Moving has built its reputation on a simple promise:
            treat every client's belongings like our own and every move like it matters — because
            it does.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#0e1f3d] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <FadeInGroup className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10" stagger={0.12}>
            {stats.map(({ value, label, icon: Icon }) => (
              <FadeInItem key={label} className="flex flex-col items-center text-center px-6">
                <Icon className="w-6 h-6 text-[#3b6cc9] mb-3" strokeWidth={1.5} />
                <div
                  className="text-3xl lg:text-4xl font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  <StatCounter value={value} />
                </div>
                <div className="text-white/40 text-xs font-medium tracking-wide uppercase">
                  {label}
                </div>
              </FadeInItem>
            ))}
          </FadeInGroup>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#2a5298] text-sm font-semibold uppercase tracking-widest mb-4">
                Our Story
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#0a1628] mb-6"
                style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.025em' }}
              >
                Built on Trust,<br />Driven by Care
              </h2>
              <div className="space-y-5 text-[#4a6080] text-base leading-relaxed">
                <p>
                  Mandel Moving was founded in 2001 by David Mandel, a former logistics manager
                  who saw an industry rife with broken promises and hidden fees. He set out to do
                  things differently — one move at a time.
                </p>
                <p>
                  Starting with a single truck and three employees, David built the company on a
                  foundation of radical transparency, genuine care, and relentless attention to
                  detail. Word spread. Clients became advocates. The company grew.
                </p>
                <p>
                  Today, Mandel Moving employs over 85 dedicated professionals and operates a
                  modern fleet of GPS-tracked vehicles. We serve thousands of families and
                  businesses each year — but our values have never changed.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0a1628] text-white font-semibold hover:bg-[#1e3a5f] active:scale-[0.98] transition-[transform,background-color] duration-150"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#d0d9e8] text-[#0a1628] font-semibold hover:border-[#2a5298]/40 hover:text-[#2a5298] transition-[border-color,color] duration-150"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-brand-lg aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
                  alt="Happy family in new home"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-brand border border-[#e8edf5]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0a1628] flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0a1628]">Weehawken Township #1</div>
                    <div className="text-xs text-[#7a90aa]">Rated Moving Company 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-[#f6f8fc] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center max-w-xl mx-auto mb-16">
            <p className="text-[#2a5298] text-sm font-semibold uppercase tracking-widest mb-4">
              What Drives Us
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#0a1628]"
              style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.025em' }}
            >
              Our Core Values
            </h2>
          </FadeIn>

          <FadeInGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {values.map(({ icon: Icon, title, description }) => (
              <FadeInItem key={title}>
                <div className="h-full p-8 rounded-2xl bg-white border border-[#e8edf5] shadow-blue-tint">
                  <div className="w-12 h-12 rounded-xl bg-[#0a1628] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-lg font-bold text-[#0a1628] mb-3"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {title}
                  </h3>
                  <p className="text-[#4a6080] text-sm leading-relaxed">{description}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInGroup>
        </div>
      </section>

      {/* ── Company Timeline ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center max-w-xl mx-auto mb-16">
            <p className="text-[#2a5298] text-sm font-semibold uppercase tracking-widest mb-4">
              Our Journey
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#0a1628]"
              style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.025em' }}
            >
              From Startup to Success
            </h2>
          </FadeIn>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#e8edf5]" />

            <FadeInGroup className="space-y-10" stagger={0.12}>
              {milestones.map(({ year, title, description }) => (
                <FadeInItem key={year} className="relative">
                  <div className="flex gap-10 pl-20">
                    {/* Dot */}
                    <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-[#0a1628] border-4 border-white shadow-brand" />
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-[#2a5298] uppercase tracking-widest">
                          {year}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold text-[#0a1628] mb-2"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                      >
                        {title}
                      </h3>
                      <p className="text-[#4a6080] text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                </FadeInItem>
              ))}
            </FadeInGroup>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-[#0a1628] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#7ba3e0] text-sm font-semibold uppercase tracking-widest mb-4">
                Why Mandel Moving
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-white mb-8"
                style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.025em' }}
              >
                The Mandel Difference
              </h2>
              <div className="space-y-5">
                {[
                  'Fully licensed, bonded, and insured for your protection',
                  'Dedicated move coordinator from first call to final delivery',
                  'Real-time GPS tracking on every long-distance shipment',
                  'Premium packing materials included at no hidden cost',
                  'Flexible scheduling including evenings and weekends',
                  '100% satisfaction guarantee — we make it right, always',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3b6cc9] mt-0.5 shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-brand-lg">
              <Image
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=900&q=80"
                alt="Moving truck on the road"
                fill
                className="object-cover opacity-80"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-20 border-t border-[#e8edf5]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#0a1628] mb-4"
            style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.025em' }}
          >
            Ready to Experience the Mandel Difference?
          </h2>
          <p className="text-[#4a6080] text-lg mb-8">
            Contact us today for a free, no-obligation quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0a1628] text-white font-semibold hover:bg-[#1e3a5f] active:scale-[0.98] transition-[transform,background-color] duration-150 text-base"
          >
            Get Your Free Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
