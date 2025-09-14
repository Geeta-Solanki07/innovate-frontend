// Store the component, not JSX
import { FaLaptopCode, FaGraduationCap, FaShoppingCart } from "react-icons/fa";

export const subsidiariesData = [
  {
    id: 1,
    icon: FaLaptopCode, // ✅ just the component
    title: "Dousoft IT Solutions",
    description: "Your comprehensive technology partner for software development and IT services.",
    features: ["Custom Software Development", "Web & Mobile Applications", "IT Consulting Services", "Enterprise Solutions"],
    linkText: "Discover IT",
    link: "#",
  },
  {
    id: 2,
    icon: FaGraduationCap,
    title: "Dousoft Eduverse",
    description: "Transforming education through innovative technology and digital learning solutions.",
    features: ["Learning Management Systems", "E-Learning Platforms", "Educational Content Development", "Student Management Tools"],
    linkText: "Explore Eduverse",
    link: "#",
  },
  {
    id: 3,
    icon: FaShoppingCart,
    title: "Dousoft Ecom",
    description: "Powerful e-commerce solutions designed to help businesses thrive in the digital marketplace.",
    features: ["E-commerce Platform Development", "Online Store Solutions", "Payment Gateway Integration", "Inventory Management Systems"],
    linkText: "Shop Now",
    link: "#",
  },
];
