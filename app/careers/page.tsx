'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  Briefcase, 
  Users, 
  Award, 
  Heart,
  GraduationCap,
  Coffee,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { jobListings } from '@/data/jobs';

const benefits = [
  {
    icon: GraduationCap,
    title: "Professional Development",
    description: "Full study support for ACCA, ACA, and other professional qualifications"
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible working arrangements and generous holiday allowance"
  },
  {
    icon: TrendingUp,
    title: "Career Progression",
    description: "Clear advancement paths with regular performance reviews"
  },
  {
    icon: Coffee,
    title: "Great Culture",
    description: "Friendly, supportive team environment with regular social events"
  }
];

export default function Careers() {
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
              Join Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Growing Team
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Build your career with a leading accounting firm that values professional growth,
              work-life balance, and team collaboration. Discover exciting opportunities to make a difference.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Growing Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>Professional Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4" />
                <span>Great Culture</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
              Why Work With Us?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We invest in our people and provide an environment where you can thrive both
              personally and professionally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
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
              Current Opportunities
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Explore our open positions and take the next step in your career.
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobListings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-6 lg:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {job.title}
                      </h3>
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium px-2 py-1 rounded">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      {job.description}
                    </p>
                    
                    <div className="text-lg font-semibold text-slate-900 dark:text-white">
                      {job.salary}
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2 lg:space-y-3">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                    >
                      <Link href={`/careers/${job.slug}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <span className="text-xs text-slate-500 dark:text-slate-400 text-center">
                      Posted {new Date(job.publishedAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {jobListings.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                No Open Positions
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                We do not have any open positions at the moment, but we are always interested
                in hearing from talented professionals.
              </p>
              <Button asChild variant="outline">
                <Link href="/contact">
                  Send Us Your CV
                </Link>
              </Button>
            </motion.div>
          )}
        </div>
      </section>

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
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We are always looking for talented individuals to join our team.
              Send us your CV and we will keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-50 text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">
                  Submit Your CV
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-blue-600 hover:bg-white hover:text-blue-600 text-lg px-8 py-3 rounded-xl"
              >
                <Link href="mailto:careers@ayyubiaccountants.co.uk">
                  Email: careers@ayyubiaccountants.co.uk
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}