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
    description: `During my internship at HuggleGroup, I executed the website's relaunch by collaborating closely with the UI/UX team to ensure seamless integration of design requirements with front-end and back-end development using ReactJS, NodeJS, and PostgreSQL. I successfully achieved ADA compliance, leveraging tools like Accessibe, UserWay, and W3C, and reduced website loading time by 3.2 seconds, as measured by PageSpeed. Additionally, I facilitated and managed ongoing website updates, aligning with company trends, product lines, sales, and discounts to optimize user engagement and conversions.`,
    technologies: ["Javascript", "React.js", "Node.js", "PostgreSQL"],
  }
];
