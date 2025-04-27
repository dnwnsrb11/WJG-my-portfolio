"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-background rounded-xl">
      <ul className="flex justify-center gap-12 py-3 px-7 text-xl">
        <li className={`${pathname === "/" ? "text-title" : "text-deactivate"} hover:text-title transition-all duration-300`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`${pathname === "/about" ? "text-title" : "text-deactivate"} hover:text-title transition-all duration-300`}>
          <Link href="/about">About</Link>
        </li>
        <li className={`${pathname === "/project" ? "text-title" : "text-deactivate"} hover:text-title transition-all duration-300`}>
          <Link href="/project">Project</Link>
        </li>
      </ul>
    </nav>
  );
};
