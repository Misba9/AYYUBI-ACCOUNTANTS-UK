'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Award, 
  Clock,
  Shield,
  Phone,
  Star,
  MapPin,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroCarousel from '@/components/HeroCarousel';
import TestimonialCard from '@/components/TestimonialCard';
import AnimatedCounter from '@/components/AnimatedCounter';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';

const featuredServices = services.slice(0, 6);

const whyChooseUs = [
  {
    icon: Users,
    title: "HMRC Expertise",
    description: "Our qualified accountants handle tax investigations, self assessment and corporation tax with full HMRC support."
  },
  {
    icon: Clock,
    title: "Deadline Compliant",
    description: "Never miss a filing. We meet all Companies House and HMRC deadlines with reliable UK accounting services."
  },
  {
    icon: Shield,
    title: "Compliance Focus",
    description: "GDPR compliant, secure data handling. Your bookkeeping and tax records are protected."
  },
  {
    icon: TrendingUp,
    title: "Tax Saving Focus",
    description: "Strategic business tax planning to minimise liability and help your SME grow."
  },
  {
    icon: Phone,
    title: "Free Consultation",
    description: "Speak to a London accountant today. No obligation—get expert advice and a quote."
  }
];

const stats = [
  { number: 0, suffix: '+', label: 'Years Experience' },
  { number: 0, suffix: '+', label: 'Returns Filed' },
  { number: 98, suffix: '%', label: 'Client Satisfaction' }
];

const infoZoneItems = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+44 7402 448109',
    href: 'tel:+447402448109'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@ayyubiaccountants.co.uk',
    href: 'mailto:info@ayyubiaccountants.co.uk'
  },
  {
    icon: MapPin,
    label: 'Office',
    value: '149 Commercial Road, London E1 1PX',
    href: 'https://maps.google.com/?q=149+Commercial+Road+London+E1+1PX'
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Fri 9am–6pm, Sat 10am–2pm',
    href: null
  }
];

export default function Home() {
  return (
    <div className="pt-0 lg:pt-10">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Info Zone */}
      <section id="info-zone" className="py-6 bg-slate-100 dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoZoneItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-slate-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-slate-900 dark:text-white font-medium">
                      {item.value}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <AnimatedCounter
                  end={stat.number}
                  suffix={stat.suffix}
                  className="text-3xl md:text-4xl font-bold mb-2"
                />
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              UK Accounting Services for London Businesses
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              As trusted accountants in London, we combine HMRC expertise with compliance focus. 
              From startups to established SMEs—bookkeeping, VAT, payroll and tax done right.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-750 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Tax, Bookkeeping & Payroll in London
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Full UK accounting services: self assessment, corporation tax, VAT, bookkeeping and payroll. 
              Affordable accountant for small businesses and individuals in London.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                featured={index === 0}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 rounded-xl border-2"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Your Free Consultation Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of London businesses who trust us with their accounts. 
              Free quote, no obligation. Call, WhatsApp or fill in the form—we respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-50 text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-blue-600  hover:bg-white hover:text-blue-600 text-lg px-8 py-3 rounded-xl"
              >
                <Link href="tel:+447402448109">
                  Call Now: +44 7402 448109
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}