'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const heroSlides = [
  {
    id: 1,
    title: "Financial Accountants",
    subtitle: "Expert financial solutions for your business success",
    description: "Comprehensive accounting, tax, and financial advisory services tailored to meet your unique business needs. Trust our qualified team to handle your finances while you focus on growing your business.",
    primaryCTA: {
      text: "Get Free Consultation",
      href: "/contact"
    },
    secondaryCTA: {
      text: "View Our Services",
      href: "/services"
    },
    backgroundImage: "https://images.pexels.com/photos/4386325/pexels-photo-4386325.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    stats: [
      { number: "--", label: "Years Experience" },
      { number: "98%", label: "Client Satisfaction" },
      { number: "24/7", label: "Support" }
    ]
  },
  {
    id: 2,
    title: "Tax Planning & Compliance",
    subtitle: "Maximize your savings with expert tax advice",
    description: "Stay compliant and minimise your tax liability with our comprehensive tax services. From self-assessment to corporation tax, we ensure you never miss a deadline or an opportunity to save.",
    primaryCTA: {
      text: "Book Tax Consultation",
      href: "/contact"
    },
    secondaryCTA: {
      text: "Tax Services",
      href: "/services?category=tax"
    },
    backgroundImage: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    stats: [
      { number: "1200+", label: "Returns Filed" },
      { number: "£2M+", label: "Tax Savings" },
      { number: "24/7", label: "Support" }
    ]
  },
  {
    id: 3,
    title: "Business Growth Advisory",
    subtitle: "Strategic financial guidance for scaling businesses",
    description: "From startup to established enterprise, our business advisory services help you make informed financial decisions, plan for growth, and achieve your business objectives with confidence.",
    primaryCTA: {
      text: "Schedule Strategy Call",
      href: "/contact"
    },
    secondaryCTA: {
      text: "Advisory Services",
      href: "/services?category=advisory"
    },
    backgroundImage: "https://images.pexels.com/photos/8296974/pexels-photo-8296974.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    stats: [
      { number: "150+", label: "Businesses Grown" },
      { number: "£50M+", label: "Revenue Managed" },
      { number: "95%", label: "Success Rate" }
    ]
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroSlides[currentSlide].backgroundImage})`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-4">
                {heroSlides[currentSlide].subtitle}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              {heroSlides[currentSlide].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              {heroSlides[currentSlide].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href={heroSlides[currentSlide].primaryCTA.href}>
                  {heroSlides[currentSlide].primaryCTA.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 rounded-xl border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm"
              >
                <Link href={heroSlides[currentSlide].secondaryCTA.href}>
                  {heroSlides[currentSlide].secondaryCTA.text}
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {heroSlides[currentSlide].stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4 ml-0.5" />
            )}
          </button>
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </div>
  );
}