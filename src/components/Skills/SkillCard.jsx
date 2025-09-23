 import React, { useState } from "react";
import { motion } from "framer-motion";

export default function SkillCard({ skill, index }) {
  const [isHovered, setIsHovered] = useState(false);

  // Define skill proficiency levels (you can customize these)
  const skillLevels = {
    "React": 90,
    "Node.js": 85,
    "Next.js": 88,
    "Tailwind CSS": 92,
    "Python": 80,
    "MongoDB": 85,
    "SQL": 78,
    "Express": 82,
    "Exprees": 82 // Fixed typo from your data
  };

  const proficiency = skillLevels[skill.name] || 75;

  // Define CSS classes for different skill types (safer than dynamic parsing)
  const getSkillClasses = (skillName) => {
    const classMap = {
      "React": {
        gradient: "from-blue-400 to-cyan-400",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-600",
        border: "border-blue-200 dark:border-blue-800"
      },
      "Node.js": {
        gradient: "from-green-400 to-emerald-400",
        bg: "bg-green-50 dark:bg-green-900/20",
        text: "text-green-600",
        border: "border-green-200 dark:border-green-800"
      },
      "Next.js": {
        gradient: "from-gray-700 to-gray-900",
        bg: "bg-gray-50 dark:bg-gray-900/20",
        text: "text-gray-600",
        border: "border-gray-200 dark:border-gray-800"
      },
      "Tailwind CSS": {
        gradient: "from-teal-400 to-blue-400",
        bg: "bg-teal-50 dark:bg-teal-900/20",
        text: "text-teal-600",
        border: "border-teal-200 dark:border-teal-800"
      },
      "Python": {
        gradient: "from-yellow-400 to-orange-400",
        bg: "bg-yellow-50 dark:bg-yellow-900/20",
        text: "text-yellow-600",
        border: "border-yellow-200 dark:border-yellow-800"
      },
      "MongoDB": {
        gradient: "from-green-600 to-green-800",
        bg: "bg-green-50 dark:bg-green-900/20",
        text: "text-green-600",
        border: "border-green-200 dark:border-green-800"
      },
      "SQL": {
        gradient: "from-blue-600 to-indigo-600",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-600",
        border: "border-blue-200 dark:border-blue-800"
      },
      "Express": {
        gradient: "from-gray-600 to-gray-800",
        bg: "bg-gray-50 dark:bg-gray-900/20",
        text: "text-gray-600",
        border: "border-gray-200 dark:border-gray-800"
      },
      "Exprees": {
        gradient: "from-gray-600 to-gray-800",
        bg: "bg-gray-50 dark:bg-gray-900/20",
        text: "text-gray-600",
        border: "border-gray-200 dark:border-gray-800"
      },



      
    };
    return classMap[skillName] || {
      gradient: "from-purple-400 to-pink-400",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      text: "text-purple-600",
      border: "border-purple-200 dark:border-purple-800"
    };
  };

  const skillClasses = getSkillClasses(skill.name);

  const cardVariants = {
    initial: { 
      scale: 1,
      rotateY: 0
    },
    hover: { 
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300
      }
    }
  };

  const iconVariants = {
    initial: { 
      rotate: 0,
      scale: 1 
    },
    hover: { 
      rotate: 360,
      scale: 1.2,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200
      }
    }
  };

  const progressVariants = {
    initial: { width: 0 },
    animate: { 
      width: `${proficiency}%`,
      transition: {
        duration: 1.5,
        delay: 0.2 + (index * 0.1),
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="group relative"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${skillClasses.gradient} opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-sm`}
        animate={{
          opacity: isHovered ? 0.75 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main card */}
      <motion.div 
        className={`relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border ${skillClasses.border} overflow-hidden`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `radial-gradient(circle at 20px 20px, currentColor 1px, transparent 1px)`,
                 backgroundSize: '20px 20px'
               }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header with icon and name */}
          <div className="flex items-center gap-4 mb-4">
            <motion.div 
              className="relative"
              variants={iconVariants}
            >
              {/* Icon container with gradient border */}
              <motion.div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skillClasses.gradient} p-0.5`}
                animate={{
                  rotate: isHovered ? [0, 5, -5, 0] : 0
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                  {skill.icon ? (
                    <motion.img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-8 h-8 object-contain"
                      whileHover={{ scale: 1.1 }}
                    />
                  ) : (
                    <motion.div 
                      className={`w-8 h-8 rounded-lg bg-gradient-to-br ${skillClasses.gradient}`}
                      whileHover={{ scale: 1.1 }}
                    />
                  )}
                </div>
              </motion.div>

              {/* Floating particles */}
              {isHovered && (
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    y: [-10, -20, -10],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>

            <div className="flex-1">
              <motion.h3 
                className="font-bold text-lg text-gray-800 dark:text-white"
                animate={{
                  color: isHovered ? "#3B82F6" : undefined
                }}
                transition={{ duration: 0.3 }}
              >
                {skill.name}
              </motion.h3>
              
              {/* Skill level indicator */}
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skillClasses.gradient} rounded-full`}
                    variants={progressVariants}
                    initial="initial"
                    animate="animate"
                  />
                </div>
                <motion.span 
                  className="text-xs font-medium text-gray-500 dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + (index * 0.1) }}
                >
                  {proficiency}%
                </motion.span>
              </div>
            </div>
          </div>

          {/* Experience level badge */}
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + (index * 0.05) }}
          >
            <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${skillClasses.gradient} text-white`}>
              {proficiency >= 90 ? "Expert" : proficiency >= 80 ? "Advanced" : proficiency >= 70 ? "Intermediate" : "Learning"}
            </div>
            
            {/* Interactive stars */}
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  className={`w-3 h-3 ${
                    star <= Math.round(proficiency / 20) 
                      ? "text-yellow-400" 
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    opacity: isHovered ? [0.5, 1, 0.5] : 1
                  }}
                  transition={{ 
                    duration: 0.5,
                    delay: star * 0.1,
                    repeat: isHovered ? Infinity : 0
                  }}
                >
                  ★
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hover overlay effect */}
          <motion.div
            className={`absolute inset-0 rounded-2xl ${skillClasses.bg} opacity-0`}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}