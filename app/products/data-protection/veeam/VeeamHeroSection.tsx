'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, Clock, Award, CheckCircle, Eye, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VeeamHeroSection() {
  return (
    <section className="relative w-full flex items-center overflow-hidden bg-white dark:bg-black text-black dark:text-white" style={{height: 'calc(100vh - var(--header-height, 6rem))', marginTop: 'var(--header-height, 6rem)', minHeight: '600px'}}>
      {/* Header Spacer - removed as we're using paddingTop now */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-green-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent blur-3xl"></div>
      
      
      {/* Veeam Brand Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300B050' fill-opacity='0.4'%3E%3Cpath d='M20 20h20v20H20V20zm-20 0h20v20H0V20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="relative z-10 mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-24 py-2 sm:py-4 lg:py-8">
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          {/* Veeam Certified Badge */}
          <motion.div 
            className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-green-500/30 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/products/data-protection/veeam-data-platform/veeam-logo.png"
              alt="Veeam"
              width={20}
              height={20}
              className="mr-1.5 sm:mr-2 dark:brightness-0 dark:invert"
            />
            <span className="text-green-600 dark:text-green-400 font-black text-xs tracking-wider">CERTIFIED PARTNER</span>
            <div className="ml-1.5 sm:ml-2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
          </motion.div>
          
          {/* Main Headline */}
          <motion.div 
            className="space-y-1 sm:space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="font-sofia font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.85] tracking-tight">
              <span className="block text-gray-900 dark:text-white">VEEAM</span>
              <span className="block text-green-600 dark:text-green-400 drop-shadow-2xl">DATA PROTECTION</span>
              <span className="block text-gray-700 dark:text-gray-300 text-base sm:text-xl md:text-2xl lg:text-3xl font-medium mt-0.5 sm:mt-1">
                in Orlando & Central Florida
              </span>
            </h1>
            
            <div className="flex items-center justify-center lg:justify-start space-x-1.5 sm:space-x-2 mt-2 sm:mt-3">
              <div className="h-0.5 sm:h-1 w-8 sm:w-12 bg-green-500 rounded-full shadow-lg"></div>
              <div className="h-0.5 sm:h-1 w-4 sm:w-6 bg-green-400 rounded-full shadow-lg"></div>
              <div className="h-0.5 sm:h-1 w-2 sm:w-3 bg-green-300 rounded-full shadow-lg"></div>
            </div>
          </motion.div>
          
          {/* Power Subtitle */}
          <motion.p 
            className="text-sm sm:text-base lg:text-xl font-semibold text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            From <span className="text-green-600 dark:text-green-400 font-bold">ransomware protection</span> to <span className="text-blue-600 dark:text-blue-400 font-bold">instant recovery</span> — enterprise-grade solutions that <span className="text-primary font-bold">never fail</span>.
          </motion.p>

          {/* Performance Metrics */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 py-2 sm:py-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-green-200/50 dark:border-green-700/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="p-1.5 sm:p-2 bg-green-100 dark:bg-green-900/40 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 dark:text-white truncate">99.9%</div>
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">Recovery Success</div>
                </div>
              </div>
            </div>
            
            <div className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-blue-200/50 dark:border-blue-700/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 dark:text-white truncate">&lt; 5min</div>
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">Recovery Time</div>
                </div>
              </div>
            </div>
            
            <div className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-primary/30 dark:border-primary/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 sm:col-span-1 col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 dark:text-white truncate">24/7</div>
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">Expert Support</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Premium CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-black text-xs sm:text-sm rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                Get Free Veeam Assessment
                <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
            <Link
              href="#veeam-solutions"
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-black text-xs sm:text-sm rounded-2xl sm:rounded-3xl shadow-2xl hover:border-green-500 hover:text-green-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center">
                View Veeam Solutions
                <Eye className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:scale-125 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Visual Showcase */}
        <motion.div 
          className="relative flex-1 max-w-2xl hidden sm:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          
          {/* Main Veeam Dashboard */}
          <div className="relative bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-gray-800/95 dark:to-gray-900/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
            <Image
              src="/images/products/data-protection/veeam-data-platform/veeam-data-platform-hero.png"
              alt="Veeam Data Platform Dashboard showing comprehensive backup and recovery management"
              width={800}
              height={600}
              className="w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl"
              priority
            />
            
            {/* Live Status Indicator */}
            <div className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-green-500/95 backdrop-blur-sm text-white px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-black shadow-2xl flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full animate-pulse shadow-lg"></div>
              <span>VEEAM ACTIVE</span>
            </div>
          </div>
          
          {/* Floating Achievement Badges */}
          <motion.div 
            className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-2xl sm:rounded-3xl text-xs sm:text-sm font-black shadow-2xl transform rotate-[-8deg] hover:rotate-0 transition-transform duration-300 hidden md:block"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>RANSOMWARE PROTECTED</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-2xl sm:rounded-3xl text-xs sm:text-sm font-black shadow-2xl transform rotate-[8deg] hover:rotate-0 transition-transform duration-300 hidden md:block"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2 sm:space-x-3">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>INSTANT RECOVERY</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute top-1/2 -left-3 sm:-left-6 bg-gradient-to-r from-primary to-orange-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs font-black shadow-2xl transform rotate-[-90deg] hover:rotate-[-85deg] transition-transform duration-300 hidden lg:block"
            whileHover={{ scale: 1.05 }}
          >
            <span>CERTIFIED EXPERTS</span>
          </motion.div>
          
          {/* Premium Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-primary/20 rounded-2xl sm:rounded-3xl blur-3xl -z-10 scale-125 animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
}