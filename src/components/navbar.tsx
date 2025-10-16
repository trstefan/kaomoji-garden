import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav
      className="
        sticky top-0 z-50 flex items-center
        bg-[#868a50] text-black px-6 py-4 font-semibold
        shadow-[0_2px_4px_rgba(0,0,0,0.04)]
        transition-all duration-200 ease-in-out
        hover:shadow-md
      "
    >
      <Link
        href="/"
        className="
          flex items-center gap-2 text-lg
          hover:text-[#e2eada]
          transition-colors duration-200
        "
      >
        <span className="text-xl">&#x2F95;</span>
        <span>Kaomoji Garden</span>
      </Link>
    </nav>
  );
};
