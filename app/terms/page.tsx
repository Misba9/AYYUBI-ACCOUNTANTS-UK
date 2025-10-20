'use client';

import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="pt-32 lg:pt-40">
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Last updated: {new Date().toLocaleDateString('en-GB')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-slate dark:prose-invert max-w-none"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  By accessing and using our services, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Services</h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  We provide professional accounting, tax, and financial advisory services. 
                  All services are subject to our professional standards and regulatory requirements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Client Responsibilities</h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Clients are responsible for providing accurate and complete information, 
                  maintaining proper records, and complying with all applicable laws and regulations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Confidentiality</h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  We maintain strict confidentiality of all client information in accordance with 
                  professional standards and applicable laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Limitation of Liability</h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Our liability is limited as set forth in our engagement letters and applicable law. 
                  We maintain professional indemnity insurance.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Contact Information</h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  For questions regarding these terms, contact us at{' '}
                  <a href="mailto:info@ayyubiaccountants.co.uk" className="text-blue-600 hover:text-blue-700">
                    info@ayyubiaccountants.co.uk
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}