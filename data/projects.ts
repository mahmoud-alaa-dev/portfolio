import dashboardImg from "@/public/projects/dashboard-img.png";
import nexcartImg from "@/public/projects/nexcart-img.png";
import shopyraImg from "@/public/projects/shopyra-img.png";

export const projects = [
  {
    id: 1,
    title: "Admin-dashboard",
    img: dashboardImg,
    description:
      "A modern users dashboard built with Next.js, TypeScript, and shadcn/ui. It includes a home page, users management system with a dynamic table, single user details page, edit user sheet, and a payments page. The project focuses on clean UI, reusable components, and scalable architecture for admin dashboard systems.",
    liveView: "https://users-dashboard-seven-pi.vercel.app/",
    githubLink: "https://github.com/mahmoud-alaa-dev/users-dashboard",
    tech: ["Next.js", "TypeScript", "Tailwind Css", "Shadcn ui"],
  },
  {
    id: 2,
    title: "NexCart — E-Commerce Platform",
    img: nexcartImg,
    description:
      "Modern e-commerce frontend project focused on responsive UI, reusable structure, and clean user experience",
    liveView: "https://nexcart-v1-flax.vercel.app/",
    githubLink: "https://github.com/mahmoud-alaa-dev/nexcart-v1 ",
    tech: ["HTML", "Sass", "javaScript"],
  },
  {
    id: 3,
    title: "Shopyra — E-Commerce Platform",
    img: shopyraImg,
    description:
      "A modern e-commerce web application built with Next.js, TypeScript, Tailwind CSS, Zustand, and Zod.",
    liveView: "https://shopyra-seven.vercel.app/",
    githubLink: "https://github.com/mahmoud-alaa-dev/shopyra",
    tech: ["Next.js", "TypeScript", "Tailwind Css", "Zustand", "Zod"],
  },
];
