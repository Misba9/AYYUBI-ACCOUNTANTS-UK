'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
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
              Privacy Policy
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
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Information We Collect</h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include your name, email address, phone number, 
                  and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, 
                  communicate with you, and comply with legal obligations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Information Sharing</h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  except as described in this policy or with your consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Data Security</h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Your Rights</h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  You have the right to access, update, or delete your personal information. 
                  Contact us if you wish to exercise these rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Contact Us</h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:privacy@ayyubiaccountants.co.uk" className="text-blue-600 hover:text-blue-700">
                    privacy@ayyubiaccountants.co.uk
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