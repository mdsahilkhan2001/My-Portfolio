// ✅ Import project images (keep assets for projects)
import productImg from "../assets/product.png";
import f1Img from "../assets/f1.png";
import figmaImg from "../assets/figma.png";

// ✅ Use public folder for profile and skills
export const siteMeta = {
  name: "MD SAHIL KHAN",
  tagline: "Building delightful interfaces & scalable backends",
  roleTypes: [
    "Frontend Developer",
    "MERN Stack Developer",
    "Data Science Enthusiast"
  ],
  phone: "+91 7079990338",
  email: "mdsahilkhan2001@gmail.com",
  linkedin: "https://www.linkedin.com/in/sahilkhanq1",
  github: "https://github.com/mdsahilkhan2001",
  resumeUrl: "/resume.pdf"
};

export const about = {
  photo: "/profile.jpg",
  summary: "Full Stack Developer with expertise in MERN stack (MongoDB, Express.js, React.js, Node.js). Experienced in building scalable web applications, RESTful APIs, and responsive user interfaces. Familiar with data analysis and machine learning concepts.",
  location: "BTM Layout, Bangalore, Karnataka"
};

// ✅ Skills data with correct public folder paths - matches your enhanced components
export const skills = [
  { name: "React", icon: "/icons/react.png" },
  { name: "Node.js", icon: "/icons/node.png" },
  { name: "Next.js", icon: "/icons/nextjs.jpeg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.jpeg" },
  { name: "Python", icon: "/icons/python.png" },
  { name: "MongoDB", icon: "/icons/mongodb.png" },
  { name: "SQL", icon: "/icons/sql.png" },
  { name: "Express", icon: "/icons/express.png" }, // Fixed typo from "Exprees"
  { name: "JavaScript", icon: "/icons/js.jpeg" },
  { name: "TypeScript", icon: "/icons/ts.png" }, // Fixed from "Typescript"
  { name: "HTML", icon: "/icons/html.jpeg" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "Power BI", icon: "/icons/powerbi.jpeg" }, // Fixed from "PowerBi"
  { name: "Tableau", icon: "/icons/tableou.png" },
  { name: "Excel", icon: "/icons/excel.jpeg" },
  { name: "Machine Learning", icon: "/icons/ml.png" },
];

// ✅ Projects still use imported assets
export const projects = [
  {
    id: "f1",
    title: "F1 Streetwear Framer E-commerce",
    desc: "Visually engaging e-commerce site built with Framer and modern animations.",
    github: "https://github.com/mdsahilkhan2001/F1-streetwear-Framer-e-commerce",
    live: "https://f1-streetwear-framer-e-commerce.vercel.app/",
    tags: ["Web", "UI/UX", "E-commerce"],
    img: productImg
  },
  {
    id: "movie",
    title: "Movie Explorer",
    desc: "Responsive app to browse and search movies using TMDB API with React.js.",
    github: "https://github.com/mdsahilkhan2001/movie-explorer-website",
    live: "#",
    tags: ["Web", "API Integration"],
    img: f1Img
  },
  {
    id: "SkinCare",
    title: "Beauty Product Landing",
    desc: "Converted Figma designs into fully responsive web pages using React.js, Next.js, and Tailwind CSS.",
    github: "https://github.com/mdsahilkhan2001/Convert-provided-Figma-designs-into-fully-responsive-web-pages",
    live: "https://convert-provided-figma-designs-into.vercel.app/",
    tags: ["Web", "UI/UX", "Responsive"],
    img: figmaImg
  }
];

export const timeline = [
  {
    id: "college",
    title: "Bachelor's in Computer Science",
    company: "Gaya College of Engineering, Gaya",
    timeframe: "2019 - 2023",
    desc: "B.Tech in Computer Science and Engineering with focus on software development and data structures.",
  },
  {
    id: "frontend-dev",
    title: "Frontend Developer",
    company: "DMX Tech Services Pvt. Ltd., Bangalore",
    timeframe: "Jun 2024 - Present",
    desc: "Building responsive and user-friendly web applications using React.js, Next.js, and Tailwind CSS. Collaborating with cross-functional teams to deliver high-quality solutions.",
  },
  {
    id: "mern-training",
    title: "MERN Stack JavaScript Training",
    company: "Fynde",
    timeframe: "Issued May 6, 2024",
    desc: "Completed comprehensive MERN stack training course, gaining hands-on experience in building full-stack web applications using React.js, Node.js, Express.js, and MongoDB."
  },
  {
    id: "data-science-intern",
    title: "Data Science Intern",
    company: "Evostra Venture Pvt Ltd",
    timeframe: "Jan 2024 - Aug 2024",
    desc: "Worked on data analysis projects and machine learning model development. Gained experience in Python, data visualization, and statistical analysis."
  }
];

// ✅ Additional utility functions for the components
export const getSkillsByCategory = (category = 'all') => {
  const categories = {
    all: skills,
    frontend: skills.filter(skill => 
      ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript", "TypeScript"].includes(skill.name)
    ),
    backend: skills.filter(skill => 
      ["Node.js", "Express", "MongoDB", "SQL"].includes(skill.name)
    ),
    languages: skills.filter(skill => 
      ["Python", "JavaScript", "TypeScript"].includes(skill.name)
    ),
    tools: skills.filter(skill => 
      ["Power BI", "Tableau", "Excel", "Machine Learning"].includes(skill.name)
    )
  };
  
  return categories[category] || skills;
};

// ✅ Skill levels for progress bars
export const skillLevels = {
  "React": 90,
  "Node.js": 85,
  "Next.js": 88,
  "Tailwind CSS": 92,
  "Python": 80,
  "MongoDB": 85,
  "SQL": 78,
  "Express": 82,
  "JavaScript": 88,
  "TypeScript": 82,
  "HTML": 95,
  "CSS": 90,
  "Power BI": 75,
  "Tableau": 78,
  "Excel": 85,
  "Machine Learning": 70,
};

// ✅ Contact information
export const contact = {
  email: siteMeta.email,
  phone: siteMeta.phone,
  social: {
    linkedin: siteMeta.linkedin,
    github: siteMeta.github
  },
  location: about.location
};