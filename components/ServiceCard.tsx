'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Calculator, BookOpen, Receipt, Users, PiggyBank, TrendingUp, Building, FileCheck, UserCheck, Building2, Search, Shield, Target, LineChart, Heart, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Calculator,
  BookOpen,
  Receipt,
  Users,
  PiggyBank,
  TrendingUp,
  Building,
  FileCheck,
  UserCheck,
  Building2,
  Search,
  Shield,
  Target,
  LineChart,
  Heart
};

interface Service {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  icon: string;
  pricing: string;
  category: string;
}

interface ServiceCardProps {
  service: Service;
  index?: number;
  featured?: boolean;
}

export default function ServiceCard({ service, index = 0, featured = false }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || FileText;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-xl transition-all duration-300 ${
        featured ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900' : ''
      }`}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative">
        {/* Icon and Category */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
              <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
              {service.category}
            </span>
          </div>
          {featured && (
            <span className="text-xs font-medium text-orange-600 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-full">
              Popular
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
          {service.shortDescription}
        </p>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-6">
          {/* <div>
            <span className="text-xs text-slate-500 dark:text-slate-400">Starting from</span>
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              {service.pricing}
            </div>
          </div> */}
        </div>

        {/* CTA Button */}
        <Button
          asChild
          variant="outline"
          className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
        >
          <Link href={`/services/${service.slug}`} className="flex items-center justify-center">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </Button>
      </div>

      {/* Hover effect border */}
      <div className="absolute inset-0 border border-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}