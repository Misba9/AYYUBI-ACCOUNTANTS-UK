'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ArrowRight, Phone, Mail, FileText, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';

export default function LimitedCompanyAccountsPage() {
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
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  Accounts
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Limited Company Accounts Preparation
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Professional statutory accounts preparation and filing for limited companies. We ensure full compliance with Companies House requirements and accounting standards, giving you peace of mind and more time to focus on your business.
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
                  <span>Starting from <strong className="text-slate-900 dark:text-white">£350</strong></span>
                </div> */}
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>5-7 day turnaround</span>
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
                Quick Contact
              </h3>
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
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">Hours</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      Mon-Fri: 9AM-6PM
                    </div>
                  </div>
                </div>
              </div>
              <Button asChild className="w-full mt-6" variant="outline">
                <Link href="#contact">
                  Schedule Consultation
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
                  "Annual accounts preparation",
                  "Companies House filing",
                  "Statutory compliance",
                  "Management accounts",
                  "Financial statements",
                  "Directors' report preparation",
                  "Audit exemption certificates",
                  "Corporation tax computation"
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
                  "Initial consultation and document collection",
                  "Preparation of trial balance and adjustments",
                  "Accounts preparation and technical review",
                  "Filing with Companies House and HMRC",
                  "Ongoing support and advisory services"
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-2">
              <strong>Limited Company Accounts</strong> 
            </p>
            {/* <div className="text-4xl font-bold text-white mb-8">
              £350
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
            title="Get Started with Limited Company Accounts"
            subtitle="Fill out the form below and we'll get back to you within 24 hours with a detailed quote and next steps."
          />
        </div>
      </section>
    </div>
  );
}