"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect,useState } from "react";

export const NavBar = () => {
  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const projectSection = document.getElementById("project");

      const scrollPosition = window.scrollY + 100;

      if (projectSection && scrollPosition >= projectSection.offsetTop) {
        setActiveSection("project");
      } else if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
        setActiveSection("about");
      } else if (homeSection) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const pathname = usePathname();
  return (
    <nav className="bg-background/40 backdrop-blur-sm backdrop-saturate-140 backdrop-brightness-110 rounded-xl shadow-slate-800 shadow-sm border border-white/10">
      <ul className="flex justify-center gap-12 py-3 px-7 text-xl">
        <li
          className={`${
            activeSection === "home" ? "text-title" : "text-deactivate"
          } hover:text-title transition-all duration-300 cursor-pointer`}
          onClick={() => scrollToSection("home")}
        >
          Home
        </li>
        <li
          className={`${
            activeSection === "about" ? "text-title" : "text-deactivate"
          } hover:text-title transition-all duration-300 cursor-pointer`}
          onClick={() => scrollToSection("about")}
        >
          About me
        </li>
        <li
          className={`${
            activeSection === "project" ? "text-title" : "text-deactivate"
          } hover:text-title transition-all duration-300 cursor-pointer`}
          onClick={() => scrollToSection("project")}
        >
          Project
        </li>
      </ul>
    </nav>
  );
};
