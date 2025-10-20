'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ArrowRight, Phone, Mail, Receipt, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';

export default function VATPreparationPage() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-6 font-medium"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>

              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Receipt className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  VAT
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                VAT Preparation & Submission
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Complete VAT services including return preparation, submission, and VAT planning advice. We ensure your VAT returns are accurate, submitted on time, and help you optimize your VAT position to improve cash flow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                >
                  <Link href="#contact">
                    Get Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                >
                  <Link href="tel:+442012345678">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-slate-600 dark:text-slate-400">
                {/* <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>Starting from <strong className="text-slate-900 dark:text-white">£80/quarter</strong></span>
                </div> */}
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Never miss a deadline</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                VAT Deadlines 2024
              </h3>
              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                  <div className="font-medium text-slate-900 dark:text-white text-sm">Q1 2024</div>
                  <div className="text-blue-600 dark:text-blue-400 text-sm">Due: 7th May 2024</div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                  <div className="font-medium text-slate-900 dark:text-white text-sm">Q2 2024</div>
                  <div className="text-blue-600 dark:text-blue-400 text-sm">Due: 7th August 2024</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-3">
                  <div className="font-medium text-slate-900 dark:text-white text-sm">Q3 2024</div>
                  <div className="text-orange-600 dark:text-orange-400 text-sm">Due: 7th November 2024</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">Phone</div>
                    <a href="tel:+442012345678" className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600">
                      +44 7402 448109
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">Email</div>
                    <a href="mailto:info@ayyubiaccountants.co.uk" className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600">
                      info@ayyubiaccountants.co.uk
                    </a>
                  </div>
                </div>
              </div>
              <Button asChild className="w-full mt-6" variant="outline">
                <Link href="#contact">
                  Never Miss a Deadline
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* What's Included */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                What's Included
              </h2>
              <div className="space-y-4">
                {[
                  "VAT return preparation and review",
                  "Online submission to HMRC",
                  "VAT planning and optimization advice",
                  "Registration and deregistration assistance",
                  "Compliance monitoring and alerts",
                  "Cash accounting scheme advice",
                  "Flat rate scheme optimization",
                  "VAT refund claim assistance"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Our Process
              </h2>
              <div className="space-y-6">
                {[
                  "VAT records review and reconciliation",
                  "Return preparation with accuracy checks",
                  "Online submission to HMRC before deadline",
                  "Payment advice and cash flow planning",
                  "Ongoing VAT guidance and optimization"
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-slate-700 dark:text-slate-300">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay VAT Compliant
            </h2>
            <p className="text-xl text-blue-100 mb-2">
              <strong>VAT Return Preparation</strong> 
            </p>
            {/* <div className="text-4xl font-bold text-white mb-8">
              £80/quarter
            </div> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-50 text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="#contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 rounded-xl"
              >
                <Link href="tel:+442012345678">
                  Call: +44 7402 448109
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Get Started with VAT Services"
            subtitle="Let us handle your VAT compliance while you focus on your business. Contact us for expert VAT advice."
          />
        </div>
      </section>
    </div>
  );
}