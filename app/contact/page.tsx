'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: [
      "149 Commercial Road",
      "London, E1 1PX",
      "United Kingdom"
    ],
    action: "Get Directions",
    href: "https://maps.google.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [
      "+44 7402 448109",
      "Mon-Fri: 9:00 AM - 6:00 PM",
      "Sat: 10:00 AM - 2:00 PM"
    ],
    action: "Call Now",
    href: "tel:+442012345678"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "info@ayyubiaccountants.co.uk",
      "quotes@ayyubiaccountants.co.uk",
      "support@ayyubiaccountants.co.uk"
    ],
    action: "Send Email",
    href: "mailto:info@ayyubiaccountants.co.uk"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: [
      "+44 7700 123456",
      "Available 24/7",
      "Quick responses"
    ],
    action: "Message Us",
    href: "https://wa.me/447700123456"
  }
];

export default function Contact() {
  return (
    <div className="pt-32 lg:pt-40">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Get in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Ready to take control of your finances? We're here to help. Contact us today 
              for a free consultation and discover how we can support your financial success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <div className="space-y-2 mb-6">
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-slate-600 dark:text-slate-300 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                <a
                  href={item.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {item.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Map and Office Info */}
            <div className="space-y-8">
              {/* Google Maps Embed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Our Location
                </h3>
                <div className="aspect-video rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5634524073983!2d-0.09862568423027!3d51.515618979636925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2f0b7b7e05%3A0x9b82c4b7a8e9d7f!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1635789123456!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ayyubi Accountants Location"
                  />
                </div>
              </motion.div>

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Monday - Friday</span>
                    <span className="font-medium text-slate-900 dark:text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Saturday</span>
                    <span className="font-medium text-slate-900 dark:text-white">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Sunday</span>
                    <span className="font-medium text-red-600 dark:text-red-400">Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Emergency support available 24/7</strong> for existing clients during tax season.
                  </p>
                </div>
              </motion.div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800"
              >
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Quick Response Guarantee
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">Email inquiries: Within 4 hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">Phone calls: Answered immediately</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">Quotes: Within 24 hours</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Quick answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can you prepare my accounts?",
                answer: "Most limited company accounts are completed within 5-7 working days of receiving all required documentation. For urgent cases, we offer a fast-track service with 2-3 day turnaround."
              },
              {
                question: "Do you offer fixed-price quotes?",
                answer: "Yes, we provide transparent, fixed-price quotes for all our services. No hidden fees or surprises - you'll know exactly what you'll pay upfront."
              },
              {
                question: "Can you help with HMRC investigations?",
                answer: "Absolutely. Our experienced team can represent you throughout any HMRC inquiry or investigation, handling all correspondence and working to achieve the best possible outcome."
              },
              {
                question: "Do you work with cloud accounting software?",
                answer: "Yes, we work with all major cloud accounting platforms including Xero, QuickBooks, Sage, and FreeAgent. We can help you choose the right software for your business."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700"
              >
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  {faq.question}
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}