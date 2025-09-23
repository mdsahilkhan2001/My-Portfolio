 import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// SkillCard Component
function SkillCard({ skill, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const skillLevels = {
    "React": 90,
    "Node.js": 85,
    "Next.js": 88,
    "Tailwind CSS": 92,
    "Python": 80,
    "MongoDB": 85,
    "SQL": 78,
    "Express": 82,
    "Exprees": 82,
    "javascript": 88,
    "Typescript": 82,
    "HTML": 95,
    "CSS": 90,
    "PowerBi": 75,
    "Tableau": 78,
    "Excel": 85,
    "Machine Learning": 70,
  };

  const proficiency = skillLevels[skill.name] || 75;

  const getSkillClasses = (skillName) => {
    const classMap = {
      "React": {
        gradient: "from-blue-400 to-cyan-400",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800"
      },
      "Node.js": {
        gradient: "from-green-400 to-emerald-400",
        bg: "bg-green-50 dark:bg-green-900/20",
        text: "text-green-600 dark:text-green-400",
        border: "border-green-200 dark:border-green-800"
      },
      "Next.js": {
        gradient: "from-gray-700 to-gray-900",
        bg: "bg-gray-50 dark:bg-gray-900/20",
        text: "text-gray-600 dark:text-gray-300",
        border: "border-gray-200 dark:border-gray-800"
      },
      "Tailwind CSS": {
        gradient: "from-teal-400 to-blue-400",
        bg: "bg-teal-50 dark:bg-teal-900/20",
        text: "text-teal-600 dark:text-teal-400",
        border: "border-teal-200 dark:border-teal-800"
      },
      "Python": {
        gradient: "from-yellow-400 to-orange-400",
        bg: "bg-yellow-50 dark:bg-yellow-900/20",
        text: "text-yellow-600 dark:text-yellow-400",
        border: "border-yellow-200 dark:border-yellow-800"
      },
      "MongoDB": {
        gradient: "from-green-600 to-green-800",
        bg: "bg-green-50 dark:bg-green-900/20",
        text: "text-green-600 dark:text-green-400",
        border: "border-green-200 dark:border-green-800"
      },
      "SQL": {
        gradient: "from-blue-600 to-indigo-600",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800"
      },
      "Express": {
        gradient: "from-gray-600 to-gray-800",
        bg: "bg-gray-50 dark:bg-gray-900/20",
        text: "text-gray-600 dark:text-gray-300",
        border: "border-gray-200 dark:border-gray-800"
      },
      "Exprees": {
        gradient: "from-gray-600 to-gray-800",
        bg: "bg-gray-50 dark:bg-gray-900/20",
        text: "text-gray-600 dark:text-gray-300",
        border: "border-gray-200 dark:border-gray-800"
      },
      "javascript": {
        gradient: "from-yellow-300 to-yellow-500",
        bg: "bg-yellow-50 dark:bg-yellow-900/20",
        text: "text-yellow-600 dark:text-yellow-400",
        border: "border-yellow-200 dark:border-yellow-800"
      },
      "Typescript": {
        gradient: "from-blue-500 to-blue-700",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800"
      },
      "HTML": {
        gradient: "from-orange-400 to-red-500",
        bg: "bg-orange-50 dark:bg-orange-900/20",
        text: "text-orange-600 dark:text-orange-400",
        border: "border-orange-200 dark:border-orange-800"
      },
      "CSS": {
        gradient: "from-blue-400 to-blue-600",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800"
      },
      "PowerBi": {
        gradient: "from-yellow-500 to-orange-500",
        bg: "bg-yellow-50 dark:bg-yellow-900/20",
        text: "text-yellow-600 dark:text-yellow-400",
        border: "border-yellow-200 dark:border-yellow-800"
      },
      "Tableau": {
        gradient: "from-blue-500 to-blue-700",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800"
      },
      "Excel": {
        gradient: "from-green-500 to-green-700",
        bg: "bg-green-50 dark:bg-green-900/20",
        text: "text-green-600 dark:text-green-400",
        border: "border-green-200 dark:border-green-800"
      },
      "Machine Learning": {
        gradient: "from-purple-500 to-pink-500",
        bg: "bg-purple-50 dark:bg-purple-900/20",
        text: "text-purple-600 dark:text-purple-400",
        border: "border-purple-200 dark:border-purple-800"
      },
    };
    
    return classMap[skillName] || {
      gradient: "from-purple-400 to-pink-400",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-200 dark:border-purple-800"
    };
  };

  const skillClasses = getSkillClasses(skill.name);

  const cardVariants = {
    initial: { 
      scale: 1,
      rotateY: 0,
      y: 0
    },
    hover: { 
      scale: 1.08,
      rotateY: 8,
      y: -10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 400
      }
    }
  };

  const iconVariants = {
    initial: { 
      rotate: 0,
      scale: 1 
    },
    hover: { 
      rotate: 12,
      scale: 1.15,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 300
      }
    }
  };

  const progressVariants = {
    initial: { width: 0 },
    animate: { 
      width: `${proficiency}%`,
      transition: {
        duration: 1.8,
        delay: 0.3 + (index * 0.15),
        ease: "easeOut"
      }
    }
  };

  const particleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: [0, 1.2, 1],
      opacity: [0, 1, 0.8],
      y: [-5, -25, -20],
      x: [0, Math.random() * 20 - 10, Math.random() * 15 - 7.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
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
      {/* Enhanced glow effect */}
      <motion.div
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${skillClasses.gradient} blur-lg`}
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.05 : 0.95,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Secondary glow */}
      <motion.div
        className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${skillClasses.gradient} blur-sm`}
        animate={{
          opacity: isHovered ? 0.4 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main card */}
      <motion.div 
        className={`relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border ${skillClasses.border} overflow-hidden`}
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          boxShadow: isHovered 
            ? "0 20px 40px rgba(0,0,0,0.15)" 
            : "0 4px 20px rgba(0,0,0,0.08)"
        }}
      >
        {/* Animated background pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: isHovered ? "40px 40px" : "0px 0px"
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `radial-gradient(circle at 20px 20px, currentColor 1px, transparent 1px)`,
                 backgroundSize: '20px 20px'
               }}
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header with icon and name */}
          <div className="flex items-center gap-4 mb-4">
            <motion.div 
              className="relative"
              variants={iconVariants}
            >
              {/* Icon container with enhanced gradient border */}
              <motion.div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skillClasses.gradient} p-0.5 shadow-lg`}
                animate={{
                  rotate: isHovered ? [0, 3, -3, 0] : 0,
                  scale: isHovered ? 1.05 : 1
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                  {skill.icon ? (
                    <motion.img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-9 h-9 object-contain"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    />
                  ) : (
                    <motion.div 
                      className={`w-9 h-9 rounded-lg bg-gradient-to-br ${skillClasses.gradient}`}
                      whileHover={{ scale: 1.1 }}
                    />
                  )}
                </div>
              </motion.div>

              {/* Enhanced floating particles */}
              {isHovered && (
                <>
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
                    variants={particleVariants}
                    initial="initial"
                    animate="animate"
                  />
                  <motion.div
                    className="absolute -top-2 left-1 w-1.5 h-1.5 bg-blue-400 rounded-full"
                    variants={particleVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.2 }}
                  />
                  <motion.div
                    className="absolute top-0 -left-1 w-1 h-1 bg-pink-400 rounded-full"
                    variants={particleVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.4 }}
                  />
                </>
              )}
            </motion.div>

            <div className="flex-1">
              <motion.h3 
                className={`font-bold text-lg ${skillClasses.text}`}
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  x: isHovered ? 4 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {skill.name}
              </motion.h3>
              
              {/* Enhanced skill level indicator */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skillClasses.gradient} rounded-full relative overflow-hidden`}
                    variants={progressVariants}
                    initial="initial"
                    animate="animate"
                  >
                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      animate={{
                        x: ["-100%", "100%"]
                      }}
                      transition={{
                        duration: 2,
                        delay: 1 + (index * 0.15),
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>
                <motion.span 
                  className={`text-sm font-bold ${skillClasses.text} tabular-nums`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + (index * 0.1) }}
                >
                  {proficiency}%
                </motion.span>
              </div>
            </div>
          </div>

          {/* Enhanced experience level badge and stars */}
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + (index * 0.08) }}
          >
            <motion.div 
              className={`px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r ${skillClasses.gradient} text-white shadow-lg`}
              whileHover={{ 
                scale: 1.08,
                y: -2,
                boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
              }}
              transition={{ duration: 0.2 }}
            >
              {proficiency >= 90 ? "🚀 Expert" : proficiency >= 80 ? "⚡ Advanced" : proficiency >= 70 ? "🎯 Intermediate" : "📚 Learning"}
            </motion.div>
            
            {/* Enhanced interactive stars */}
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  className={`text-lg cursor-pointer ${
                    star <= Math.round(proficiency / 20) 
                      ? "text-yellow-400" 
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                  whileHover={{ 
                    scale: 1.3,
                    rotate: 10,
                    textShadow: "0 0 8px rgba(255, 193, 7, 0.8)"
                  }}
                  animate={{
                    opacity: isHovered && star <= Math.round(proficiency / 20) ? [0.7, 1, 0.7] : 1,
                    scale: isHovered && star <= Math.round(proficiency / 20) ? [1, 1.1, 1] : 1
                  }}
                  transition={{ 
                    duration: 0.8,
                    delay: star * 0.1,
                    repeat: isHovered ? Infinity : 0,
                    repeatType: "reverse"
                  }}
                >
                  ★
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced hover overlay effect */}
          <motion.div
            className={`absolute inset-0 rounded-2xl ${skillClasses.bg}`}
            animate={{ 
              opacity: isHovered ? 0.1 : 0,
              scale: isHovered ? 1.02 : 1
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// Enhanced SkillsGrid Component
export default function SkillsGrid() {
  const [filter, setFilter] = useState("all");
  const [filteredSkills, setFilteredSkills] = useState([]);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Sample skills data - replace with your imported skills
  const skills = [
    { name: "React", icon: "/src/assets/icons/react.png" },
    { name: "Node.js", icon: "/src/assets/icons/node.png" },
    { name: "Next.js", icon: "/src/assets/icons/nextjs.jpeg" },
    { name: "Tailwind CSS", icon: "/src/assets/icons/tailwind.jpeg" },
    { name: "Python", icon: "/src/assets/icons/python.png" },
    { name: "MongoDB", icon: "/src/assets/icons/mongodb.png" },
    { name: "SQL", icon: "/src/assets/icons/sql.png" },
    { name: "Exprees", icon: "/src/assets/icons/express.png" },
    { name: "javascript", icon: "/src/assets/icons/js.jpeg" },
    { name: "Typescript", icon: "/src/assets/icons/ts.png" },
    { name: "HTML", icon: "/src/assets/icons/html.jpeg" },
    { name: "CSS", icon: "/src/assets/icons/css.png" },
    { name: "PowerBi", icon: "/src/assets/icons/powerbi.jpeg" },
    { name: "Tableau", icon: "/src/assets/icons/tableou.png" },
    { name: "Excel", icon: "/src/assets/icons/excel.jpeg" },
    { name: "Machine Learning", icon: "/src/assets/icons/ml.png" },
  ];

  // Enhanced categorization
  const skillCategories = {
    all: skills,
    frontend: skills.filter(skill => 
      ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "javascript", "Typescript"].includes(skill.name)
    ),
    backend: skills.filter(skill => 
      ["Node.js", "Express", "Exprees", "MongoDB", "SQL"].includes(skill.name)
    ),
    languages: skills.filter(skill => 
      ["Python", "javascript", "Typescript"].includes(skill.name)
    ),
    tools: skills.filter(skill => 
      ["PowerBi", "Tableau", "Excel", "Machine Learning"].includes(skill.name)
    )
  };

  useEffect(() => {
    setFilteredSkills(skillCategories[filter] || skills);
  }, [filter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8,
      rotateX: -15
    },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const filterButtonVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.8 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <section 
      id="skills" 
      className="py-24 bg-gradient-to-br from-gray-50/60 via-white to-blue-50/40 dark:from-gray-900/60 dark:via-gray-900 dark:to-blue-900/20 relative overflow-hidden" 
      ref={ref}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse">
              Skills & Technologies
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Technologies I work with to bring innovative ideas to life
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.6
              }
            }
          }}
        >
          {Object.keys(skillCategories).map((category) => (
            <motion.button
              key={category}
              variants={filterButtonVariants}
              onClick={() => setFilter(category)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-400 ${
                filter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105"
                  : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg backdrop-blur-sm"
              }`}
              whileHover={{ 
                scale: filter === category ? 1.08 : 1.05,
                y: -2,
                boxShadow: filter === category 
                  ? "0 12px 30px rgba(0,0,0,0.2)" 
                  : "0 8px 20px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="capitalize font-bold">
                {category === "all" ? "All Skills" : category}
              </span>
              <span className="ml-3 text-sm opacity-80 bg-white/20 px-2 py-0.5 rounded-full">
                {skillCategories[category].length}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Skills Grid */}
        <motion.div 
          initial="hidden" 
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          key={filter}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div 
              key={`${skill.name}-${filter}`}
              variants={itemVariants}
              custom={index}
              layout
              layoutId={skill.name}
              transition={{
                layout: { duration: 0.6, ease: "easeInOut" },
                type: "spring",
                damping: 20,
                stiffness: 300
              }}
            >
              <SkillCard skill={skill} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            {[
              { value: filteredSkills.length, label: "Skills", color: "text-blue-600", icon: "🎯" },
              { value: "3+", label: "Years", color: "text-purple-600", icon: "⏱️" },
              { value: "∞", label: "Learning", color: "text-pink-600", icon: "🚀" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                className="text-center"
                whileHover={{ 
                  scale: 1.15,
                  y: -5
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r ${
              i % 3 === 0 ? 'from-blue-400/10 to-purple-400/10' :
              i % 3 === 1 ? 'from-pink-400/10 to-red-400/10' :
              'from-teal-400/10 to-cyan-400/10'
            } filter blur-3xl`}
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 80 - 40, 0],
              scale: [1, Math.random() * 0.5 + 0.8, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </section>
  );
}