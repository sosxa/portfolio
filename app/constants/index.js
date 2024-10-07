import HGlogo from "../../public/HGlogo.jpg"

import CarImg from "../../public/Car-Img.png";
import HotelImg from "../../public/Hotel-Img.png";
import TbayImg from "../../public/TBay-Eats-Img.png";

import TbayVid from "../../public/TbayVid.webp";
import CarVid from "../../public/CarVid.webp";
import HotelVid from "../../public/HotelVid.webp";

export const PROFILE = {
  name: "Jose Sosa",
  city: "Succasunna NJ",
  greet: "Hello!",
};

export const PROJECTS = [
  {
    name: "TBay Eats",
    video: TbayVid,
    image: TbayImg,
    url: "https://github.com/sosxa/TBay-Eats",
  },
  {
    name: "Car Parts & Dealership landing page",
    video: CarVid,
    image: CarImg,
    url: "https://github.com/sosxa/Car-Shop-Landing-Page",
  },
  {
    name: "Hotel Landing Page",
    video: HotelVid,
    image: HotelImg,
    url: "https://github.com/sosxa/Hotel-Landing-Page",
  }
];

export const SKILLS = [
  "React, Next.js",
  "Node.js, Express.js",
  "PostgreSQL, MySQL, MongoDB, and Supabase",
  "Stripe API, Rest API, AccessiBe API",
  "AWS, Azure, and Google Cloud",
];

export const EXPERIENCES = [
  {
    img: HGlogo,
    year: "2023 - Present",
    role: "Full Stack Developer Internship",
    company: "HuggleGroup (prev HuggleHounds)",
    description: `Worked with a team of three to relaunch the company website, enhancing accessibility to meet ADA compliance standards measured by UserWay Accessibe and W3C guidelines. Improved load times by 3.2 seconds measured by PageSpeed and developed landing pages for new product lines, and provided engaging SEO for users.`,
    technologies: ["Javascript", "React.js", "Node.js", "PostgreSQL"],
  }
];
