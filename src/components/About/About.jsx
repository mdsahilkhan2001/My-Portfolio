 import React from "react";
import { about } from "../../data/siteContent";
import { motion } from "framer-motion";
import profile from "../../assets/profile.jpg";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20 dark:from-blue-900/10 dark:to-purple-900/5"></div>
      
      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 rounded-full"
            />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Discover my journey and passion</p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              variants={imageVariants}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="relative group">
                {/* Floating background elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-20 animate-pulse"></div>
                
                {/* Main image */}
                <motion.img
                  src={profile}
                  alt="profile"
                  className="relative w-72 h-80 rounded-2xl object-cover shadow-2xl ring-4 ring-white dark:ring-gray-800"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.4 }
                  }}
                  whileTap={{ scale: 0.98 }}
                />
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5, type: "spring" }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg ring-4 ring-white dark:ring-gray-800"
                >
                  ✨ Available
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 space-y-6"
            >
              {/* Summary with typewriter effect */}
              <motion.div
                className="prose prose-lg dark:prose-invert max-w-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {about.summary}
                </p>
              </motion.div>

              {/* Info Cards */}
              <motion.div
                variants={itemVariants}
                className="grid sm:grid-cols-2 gap-4"
              >
                {/* Location Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg">📍</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{about.location}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Status Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg">💼</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                      <p className="font-semibold text-gray-900 dark:text-white">Open to work</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                className="pt-4"
              >
                <motion.button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'center'
                      });
                      // Optional: Focus on the first input field after scroll
                      setTimeout(() => {
                        const firstInput = contactSection.querySelector('input[name="name"]');
                        if (firstInput) firstInput.focus();
                      }, 800);
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <span className="relative z-10">Let's Connect</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}