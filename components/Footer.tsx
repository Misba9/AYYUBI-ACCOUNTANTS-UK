'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const services = [
  'Limited Company Accounts',
  'Personal Tax Accounting',
  'Bookkeeping Services',
  'VAT Preparation',
  'Payroll Services',
  'Corporation Tax'
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
  { name: 'Info Zone', href: '/#info-zone' },
  { name: 'FAQ', href: '/faq' }
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms' }
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-slate-300 mb-8">
              Receive the latest tax updates, business tips, and accounting insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <div className="text-xl font-bold">Ayyubi Accountants</div>
                <div className="text-sm text-slate-400">Financial Accountants</div>
              </div>
            </div>
            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              We provide expert accounting, tax, and financial services to businesses and individuals
              across the UK. Your trusted partner for all accounting needs.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Facebook className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Twitter className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Instagram className="h-4 w-4" />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="/services" 
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300 text-sm">
                  149 Commercial Road<br />
                  London, E1 1PX<br />
                  United Kingdom
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+447402448109" 
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  +44 7402 448109
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:info@ayyubiaccountants.co.uk" 
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  info@ayyubiaccountants.co.uk
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300 text-sm">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 10:00 AM - 2:00 PM<br />
                  Sun: Closed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Ayyubi Accountants. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6 text-sm">
              {legalLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          {/* <div className="mt-4 pt-4 border-t border-slate-800">
            <p className="text-xs text-slate-500 text-center">
              Ayyubi Accountants is a trading name of Ayyubi Financial Services Ltd. 
              Registered in England and Wales. Company Registration Number: 12345678. 
              Registered office: 149 Commercial Road, London, E1 1PX.
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
}