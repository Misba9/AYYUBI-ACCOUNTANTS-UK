'use client';

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Briefcase, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Send,
  Upload
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { jobListings } from '@/data/jobs';

interface JobPageProps {
  params: {
    slug: string;
  };
}

export default function JobPage({ params }: JobPageProps) {
  const job = jobListings.find(j => j.slug === params.slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="pt-32 lg:pt-40">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back link */}
            <Link
              href="/careers"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-8 font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Link>

            {/* Job title and meta */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                  {job.title}
                </h1>
                <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                  {job.department}
                </span>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-400 mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">{job.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">{job.type}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5" />
                  <span className="font-medium">{job.experience}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5" />
                  <span className="font-medium">{job.salary}</span>
                </div>
              </div>

              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                {job.description}
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              <Link href="#apply">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {/* Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Key Responsibilities
                </h2>
                <div className="space-y-4">
                  {job.responsibilities.map((responsibility, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">{responsibility}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Requirements
                </h2>
                <div className="space-y-4">
                  {job.requirements.map((requirement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">{requirement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Benefits & Perks
                </h2>
                <div className="space-y-4">
                  {job.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Apply */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                  Quick Apply
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Interested in this position? Apply now and we'll be in touch within 48 hours.
                </p>
                <Button asChild className="w-full">
                  <Link href="#apply">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              {/* Job Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                  Job Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Department</span>
                    <span className="font-medium text-slate-900 dark:text-white">{job.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Location</span>
                    <span className="font-medium text-slate-900 dark:text-white">{job.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Type</span>
                    <span className="font-medium text-slate-900 dark:text-white">{job.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Experience</span>
                    <span className="font-medium text-slate-900 dark:text-white">{job.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Salary</span>
                    <span className="font-medium text-slate-900 dark:text-white">{job.salary}</span>
                  </div>
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                  Questions?
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Have questions about this role? Get in touch with our HR team.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="mailto:careers@ayyubiaccountants.co.uk">
                    Contact HR Team
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Apply for {job.title}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                We'd love to hear from you. Fill out the form below and we'll be in touch soon.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" type="text" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" type="text" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" />
                </div>
              </div>

              <div>
                <Label htmlFor="coverLetter">Cover Letter *</Label>
                <Textarea
                  id="coverLetter"
                  rows={6}
                  placeholder="Tell us why you're interested in this role and what you can bring to our team..."
                  required
                />
              </div>

              <div>
                <Label htmlFor="cv">Upload CV/Resume *</Label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-lg hover:border-slate-400 transition-colors">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-slate-400" />
                    <div className="flex text-sm text-slate-600">
                      <label
                        htmlFor="cv"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>Upload a file</span>
                        <input id="cv" name="cv" type="file" className="sr-only" accept=".pdf,.doc,.docx" required />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-slate-500">PDF, DOC, DOCX up to 10MB</p>
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Application
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}