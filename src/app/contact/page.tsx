'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { FadeIn } from '@/components/fade-in';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  Truck,
} from 'lucide-react';

const serviceOptions = [
  'Residential Moving',
  'Commercial Moving',
  'Furniture Assembly and Disassembly',
  'Packing & Unpacking',
  'Mulching',
  'Specialty Item Moving',
  'Senior Moving',
  'Odd Jobs & House Repairs',
  'Other',
];

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(201) 978-0188',
    href: 'tel:+12019780188',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'mandelrobby@gmail.com',
    href: 'mailto:mandelrobby@gmail.com',
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-[#0a1628] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#7ba3e0] text-sm font-semibold uppercase tracking-widest mb-4">
            Contact Us
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white mb-5"
            style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.03em' }}
          >
            Get Your<br />
            <span className="text-[#7ba3e0]">Free Quote Today</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Fill out the form below and a move coordinator will be in touch within 24 hours.
            No pressure, no obligation — just a clear, honest estimate.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="bg-[#f6f8fc] py-16 lg:py-24 flex-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Form ── */}
            <FadeIn direction="left" className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-[#e8edf5] shadow-brand p-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#0a1628] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h2
                    className="text-3xl font-bold text-[#0a1628] mb-3"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Request Received!
                  </h2>
                  <p className="text-[#4a6080] text-base leading-relaxed max-w-md">
                    Thank you for reaching out. One of our move coordinators will contact you
                    within 24 hours with a detailed, no-obligation quote.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl border border-[#e8edf5] shadow-brand p-8 lg:p-10"
                >
                  <h2
                    className="text-2xl font-bold text-[#0a1628] mb-1"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Request a Free Quote
                  </h2>
                  <p className="text-[#7a90aa] text-sm mb-8">
                    All fields marked * are required.
                  </p>

                  {/* Name row */}
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-[#0a1628] uppercase tracking-wide mb-1.5">
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="border-[#d0d9e8] focus-visible:ring-[#2a5298]/30 focus-visible:border-[#2a5298]"
                    />
                  </div>

                  {/* Phone / Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0a1628] uppercase tracking-wide mb-1.5">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="(123) 456-7890"
                        className="border-[#d0d9e8] focus-visible:ring-[#2a5298]/30 focus-visible:border-[#2a5298]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0a1628] uppercase tracking-wide mb-1.5">
                        Email Address
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@email.com"
                        className="border-[#d0d9e8] focus-visible:ring-[#2a5298]/30 focus-visible:border-[#2a5298]"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-[#0a1628] uppercase tracking-wide mb-1.5">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full h-9 rounded-md border border-[#d0d9e8] bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2a5298]/30 focus-visible:border-[#2a5298] text-[#0a1628]"
                    >
                      <option value="">Select a service…</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="block text-xs font-semibold text-[#0a1628] uppercase tracking-wide mb-1.5">
                      Additional Details
                    </label>
                    <Textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about the size of your move, any specialty items, storage needs, or questions you have…"
                      className="border-[#d0d9e8] focus-visible:ring-[#2a5298]/30 focus-visible:border-[#2a5298] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#0a1628] hover:bg-[#1e3a5f] text-white font-semibold py-3 h-auto rounded-xl active:scale-[0.98] transition-[transform,background-color] duration-150 cursor-pointer"
                  >
                    Submit Request — Get My Free Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <p className="text-center text-[#7a90aa] text-xs mt-4">
                    We typically respond within 24 hours. No commitment required.
                  </p>
                </form>
              )}
            </FadeIn>

            {/* ── Sidebar ── */}
            <FadeIn direction="right" delay={0.12} className="flex flex-col gap-6">
              {/* Contact details card */}
              <div className="bg-white rounded-2xl border border-[#e8edf5] shadow-brand p-7">
                <h3
                  className="text-lg font-bold text-[#0a1628] mb-6"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Contact Details
                </h3>
                <div className="space-y-5">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#0a1628]/5 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-[#2a5298]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#0a1628] uppercase tracking-wide mb-0.5">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-[#4a6080] text-sm leading-relaxed hover:text-[#2a5298] transition-[color] duration-150 whitespace-pre-line"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-[#4a6080] text-sm leading-relaxed whitespace-pre-line">
                            {value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why us card */}
              <div className="bg-[#0a1628] rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#2a5298]/30 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-[#7ba3e0]" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-base font-bold text-white"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Why Choose Mandel?
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    'Free, no-obligation quotes',
                    'Transparent pricing from the start',
                    'No hidden fees — ever',
                    '24-hour response guarantee',
                    'Professional & experienced team',
                    '250+ 5-star reviews',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#3b6cc9] shrink-0" />
                      <span className="text-white/60 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
