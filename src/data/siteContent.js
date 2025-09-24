 // ✅ Import project images
import productImg from "../assets/product.png";
import f1Img from "../assets/f1.png";
import figmaImg from "../assets/figma.png";

// ✅ Import profile photo
// import profilePhoto from "../public/profile.jpg"

// ✅ Import skill icons (all bundled, no string paths)
import reactIcon from "../assets/icons/react.png";
import nodeIcon from "../assets/icons/node.png";
import nextjsIcon from "../assets/icons/nextjs.jpeg";
import tailwindIcon from "../assets/icons/tailwind.jpeg";
import pythonIcon from "../assets/icons/python.png";
import mongodbIcon from "../assets/icons/mongodb.png";
import sqlIcon from "../assets/icons/sql.png";
import expressIcon from "../assets/icons/express.png";
import jsIcon from "../assets/icons/js.jpeg";
import tsIcon from "../assets/icons/ts.png";
import htmlIcon from "../assets/icons/html.jpeg";
import cssIcon from "../assets/icons/css.png";
import powerbiIcon from "../assets/icons/powerbi.jpeg";
import tableauIcon from "../assets/icons/tableou.png";
import excelIcon from "../assets/icons/excel.jpeg";
import mlIcon from "../assets/icons/ml.png";

export const siteMeta = {
  name: "MD SAHIL KHAN",
  tagline: "Building delightful interfaces & scalable backends",
  roleTypes: [
    "Frontend Developer",
    "MERN Stack",
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
  location: "BTM Layout,Bangalore, Karnataka"
};

export const skills = [
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Next.js", icon: nextjsIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Python", icon: pythonIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "SQL", icon: sqlIcon },
  { name: "Exprees", icon: expressIcon }, // kept typo to match your existing data
  { name: "JavaScript", icon: jsIcon },
  { name: "Typescript", icon: tsIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "PowerBi", icon: powerbiIcon },
  { name: "Tableau", icon: tableauIcon },
  { name: "Excel", icon: excelIcon },
  { name: "Machine Learning", icon: mlIcon },
];

// ✅ Fixed project section with imports
export const projects = [
  {
    id: "f1",
    title: "F1 Streetwear Framer E-commerce",
    desc: "Visually engaging e-commerce site built with Framer and modern animations.",
    github: "https://github.com/mdsahilkhan2001/F1-streetwear-Framer-e-commerce",
    live: "https://f1-streetwear-framer-e-commerce.vercel.app/",
    tags: ["Web", "UI/UX"],
    img: productImg
  },
  {
    id: "movie",
    title: "Movie Explorer",
    desc: "Responsive app to browse/search movies using TMDB API.",
    github: "https://github.com/mdsahilkhan2001/movie-explorer-website",
    live: "#",
    tags: ["Web"],
    img: f1Img
  },
  {
    id: "SkinCare",
    title: "Beauty product",
    desc: "Cloned the beauty product platform using React.js, Next.js, and Tailwind CSS.",
    github: "https://github.com/mdsahilkhan2001/Convert-provided-Figma-designs-into-fully-responsive-web-pages",
    live: "https://convert-provided-figma-designs-into.vercel.app/",
    tags: ["Web"],
    img: figmaImg
  }
];

export const timeline = [
  {
    id: "collage",
    title: "Collage",
    timeframe: "2019 - 2023",
    desc: "B.Tech in Computer Science and Engineering from Gaya collage of engineering , gaya.",
  },
  {
    id: 11,
    title: "Frontend Developer",
    company: "DMX Tech Services Pvt. Ltd. Bangalore",
    timeframe: "Jun 2024 - Present",
    desc: "Building responsive and user-friendly web applications using React.js, Next.js, and Tailwind CSS.",
  },
  {
    id: 1,
    title: "MERN Stack Javascript Training - Fynde",
    timeframe: " Issued on  may 6 ,2025 ",
    desc: "Completed a MERN stack javascript training course at Fynde, gaining hands-on experience in building full-stack web applications using React.js, Node.js, Express.js, and MongoDB."
  },
  {
    id: 2,
    title: "Data Science Intern ",
    timeframe: "Jan 2024 - Aug 2024",
    company:"Evostra venture pvt ltd ",
    desc: "Internship involving data analysis and model building."
  }
];
