"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const NavBar = () => {
  const scrollToSection = (id:any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const pathname = usePathname();
  return (
    <nav className="bg-background/40 backdrop-blur-sm backdrop-saturate-140 backdrop-brightness-110 rounded-xl shadow-slate-800 shadow-sm border border-white/10">
      <ul className="flex justify-center gap-12 py-3 px-7 text-xl">
        <li
          className="text-deactivate hover:text-title transition-all duration-300 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          HOME
        </li>
        <li
          className="text-deactivate hover:text-title transition-all duration-300 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          ABOUT ME
        </li>
        <li
          className="text-deactivate hover:text-title transition-all duration-300 cursor-pointer"
          onClick={() => scrollToSection("project")}
        >
          PROJECT
        </li>
      </ul>
    </nav>
  );
};
