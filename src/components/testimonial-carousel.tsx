"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    location: "Hoboken, NJ",
    text: "Mandel Moving made what I dreaded the most completely painless. The crew was professional, fast, and handled my furniture like it was their own. Worth every dollar.",
  },
  {
    name: "Michael R.",
    location: "Jersey City, NJ",
    text: "I've used three different movers over the years — none came close to this. On time, zero damage, and genuinely kind people. Mandel is the only call I'll make from now on.",
  },
  {
    name: "Priya K.",
    location: "Brooklyn, NY",
    text: "I've moved four times in the last decade and this was by far the best experience. Organized, respectful, and they treated every item like it mattered.",
  },
  {
    name: "Daniel M.",
    location: "Weehawken, NJ",
    text: "Booked them last minute and they still showed up prepared and professional. Packed my entire apartment in under two hours. Absolutely incredible team.",
  },
  {
    name: "Tanya W.",
    location: "Astoria, Queens, NY",
    text: "From the first call to the last box, everything was smooth and stress-free. They even helped me reassemble my furniture at the new place. Five stars without question.",
  },
  {
    name: "James F.",
    location: "Montclair, NJ",
    text: "Our office relocation was done over a weekend with zero disruption to the business. The crew was efficient, careful, and left the new space exactly how we wanted it.",
  },
  {
    name: "Alicia B.",
    location: "Upper West Side, NY",
    text: "I was nervous about moving my antiques and piano — Robby's team handled them with such care. Everything arrived in perfect condition. I can't recommend them enough.",
  },
  {
    name: "Kevin T.",
    location: "Fort Lee, NJ",
    text: "Honest pricing, no surprise fees, and a crew that actually cares. My move was done faster than quoted and nothing was scratched. A+ from start to finish.",
  },
];

const VISIBLE = 3; // cards visible at once on desktop

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const total = testimonials.length;
  // number of "pages" when showing VISIBLE at once
  const pageCount = total - VISIBLE + 1; // 6 stop positions

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + pageCount) % pageCount);
    },
    [pageCount]
  );

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [go, paused]);

  const visible = testimonials.slice(index, index + VISIBLE);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Cards */}
      <div className="overflow-hidden">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {visible.map(({ name, location, text }) => (
              <div
                key={name}
                className="h-full p-8 rounded-2xl bg-[#f6f8fc] border border-[#e8edf5] hover:shadow-brand transition-[box-shadow] duration-300"
              >
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#2a5298]" fill="currentColor" />
                  ))}
                </div>
                <p className="text-[#0a1628] text-sm leading-relaxed mb-6 italic">
                  &ldquo;{text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[#0a1628] text-sm">{name}</p>
                  <p className="text-[#7a90aa] text-xs mt-0.5">{location}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-10">
        {/* Dots */}
        <div className="flex gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                i === index
                  ? "w-6 bg-[#2a5298]"
                  : "w-1.5 bg-[#d0d9e8] hover:bg-[#2a5298]/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button
            onClick={() => go(-1)}
            className="w-9 h-9 rounded-xl border border-[#e8edf5] bg-white flex items-center justify-center text-[#4a6080] hover:border-[#2a5298]/30 hover:text-[#2a5298] transition-[border-color,color] duration-150"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => go(1)}
            className="w-9 h-9 rounded-xl border border-[#e8edf5] bg-white flex items-center justify-center text-[#4a6080] hover:border-[#2a5298]/30 hover:text-[#2a5298] transition-[border-color,color] duration-150"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
