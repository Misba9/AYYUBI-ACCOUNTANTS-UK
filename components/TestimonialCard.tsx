'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700"
    >
      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-slate-700 dark:text-slate-300 mb-6 italic leading-relaxed">
        "{testimonial.content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center space-x-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-slate-900 dark:text-white">
            {testimonial.name}
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            {testimonial.role}
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
            {testimonial.company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}