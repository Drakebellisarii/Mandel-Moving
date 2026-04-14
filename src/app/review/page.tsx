"use client";

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Star } from 'lucide-react';

export default function ReviewPage() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (rating === 0) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, rating, review }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 bg-white py-24 lg:py-32">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#2a5298] text-sm font-semibold uppercase tracking-widest mb-4">
              Share Your Experience
            </p>
            <h1
              className="text-4xl lg:text-5xl font-bold text-[#0a1628]"
              style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.025em' }}
            >
              Write a Review
            </h1>
            <p className="text-[#4a6080] text-base mt-4 leading-relaxed">
              We'd love to hear about your experience with Mandel Moving.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-[#e8edf5] bg-[#f6f8fc] p-10 text-center">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#2a5298]" fill="currentColor" />
                ))}
              </div>
              <h2
                className="text-2xl font-bold text-[#0a1628] mb-2"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Thank you{name ? `, ${name}` : ''}!
              </h2>
              <p className="text-[#4a6080] text-sm">
                We appreciate you taking the time to share your feedback.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl border border-[#e8edf5] bg-[#f6f8fc] p-8 space-y-8">
              {/* Star rating */}
              <div>
                <label className="block text-sm font-semibold text-[#0a1628] mb-3">
                  Your Rating <span className="text-[#2a5298]">*</span>
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHovered(star)}
                      onMouseLeave={() => setHovered(0)}
                      className="transition-transform duration-100 hover:scale-110 active:scale-95"
                      aria-label={`Rate ${star} star${star !== 1 ? 's' : ''}`}
                    >
                      <Star
                        className="w-9 h-9 transition-colors duration-100"
                        style={{
                          color: star <= (hovered || rating) ? '#2a5298' : '#d0d9e8',
                          fill: star <= (hovered || rating) ? '#2a5298' : 'transparent',
                        }}
                      />
                    </button>
                  ))}
                </div>
                {rating > 0 && (
                  <p className="text-xs text-[#4a6080] mt-2">
                    {['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][rating]}
                  </p>
                )}
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#0a1628] mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah L."
                  className="w-full px-4 py-3 rounded-xl border border-[#d0d9e8] bg-white text-[#0a1628] text-sm placeholder:text-[#b0bece] focus:outline-none focus:ring-2 focus:ring-[#2a5298]/30 focus:border-[#2a5298] transition-[border-color,box-shadow] duration-150"
                />
              </div>

              {/* Review text */}
              <div>
                <label htmlFor="review" className="block text-sm font-semibold text-[#0a1628] mb-2">
                  Your Review <span className="text-[#2a5298]">*</span>
                </label>
                <textarea
                  id="review"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  required
                  rows={5}
                  placeholder="Tell us about your experience with Mandel Moving..."
                  className="w-full px-4 py-3 rounded-xl border border-[#d0d9e8] bg-white text-[#0a1628] text-sm placeholder:text-[#b0bece] focus:outline-none focus:ring-2 focus:ring-[#2a5298]/30 focus:border-[#2a5298] transition-[border-color,box-shadow] duration-150 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={rating === 0 || loading}
                className="w-full py-3.5 rounded-xl bg-[#2a5298] text-white font-semibold text-sm hover:bg-[#3b6cc9] active:scale-[0.98] transition-[transform,background-color] duration-150 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                {loading ? 'Sending…' : 'Submit Review'}
              </button>

              {error && (
                <p className="text-center text-red-500 text-xs">{error}</p>
              )}
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
