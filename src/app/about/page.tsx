import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { FadeIn, FadeInGroup, FadeInItem } from '@/components/fade-in';
import { StatCounter } from '@/components/stat-counter';
import Image from 'next/image';
import { MapPin, Star, Award, Truck, Users } from 'lucide-react';

const stats = [
  { value: '250', label: 'Successful Moves', icon: Truck },
  { value: '5', label: 'Years in Service', icon: Award },
  { value: '40', label: '5-Star Reviews', icon: Star },
  { value: '5', label: 'Team Members', icon: Users },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* ── Page Hero ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20" style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #1a3358 50%, #1e3f6b 100%)' }}>
        {/* Subtle diagonal stripes */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 32px)',
        }} />
        {/* Soft glow top-right */}
        <div className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at top right, rgba(91,138,219,0.2) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[350px] h-[300px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at bottom left, rgba(42,82,152,0.2) 0%, transparent 70%)' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
          <FadeIn className="max-w-2xl">
            <p className="text-[#7ba3e0] text-sm font-semibold uppercase tracking-widest mb-5">
              About Us
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6"
              style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.03em' }}
            >
              The People Behind<br />
              <span className="text-[#7ba3e0]">Every Move</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-6 max-w-xl">
              Founded in 2021 by Robby Mandel with one truck and a commitment to doing right by his community — one move at a time.
            </p>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#7ba3e0] shrink-0" />
              <span className="text-white/50 text-sm">Serving North Jersey &amp; Southern New York — Based in Ramsey, NJ</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white border-t border-b border-[#e8edf5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <FadeInGroup className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#e8edf5]" stagger={0.12}>
            {stats.map(({ value, label, icon: Icon }) => (
              <FadeInItem key={label} className="flex flex-col items-center text-center px-6">
                <Icon className="w-5 h-5 text-[#2a5298] mb-3" strokeWidth={1.5} />
                <div
                  className="text-3xl lg:text-4xl font-bold text-[#0a1628] mb-1"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  <StatCounter value={value} />
                </div>
                <div className="text-[#4a6080] text-xs font-medium tracking-wide uppercase">
                  {label}
                </div>
              </FadeInItem>
            ))}
          </FadeInGroup>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="bg-[#f8faff] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
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
                 What started as Robby, a pickup truck, and a buddy has grown into something much bigger. In the early days, it was all about putting in the hours, helping people out, and building trust one job at a time.

                </p>
                <p>
                  Now, we’re a team of five with years of experience and thousands of happy customers behind us. Even as we’ve grown, we’ve never lost sight of what got us here: showing up, working hard, and making sure every customer is taken care of. We believe in doing honest work and standing behind everything we do.
                </p>
                <p>
                  Whether it’s your first time working with us or you’ve been with us for years, you can count on the same level of dedication and care every time.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-brand-lg aspect-[4/3]">
                <Image
                  src="house2.jpg"
                  alt="Average suburban home"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/30 via-transparent to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
