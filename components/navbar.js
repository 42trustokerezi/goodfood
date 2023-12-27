import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden md:flex justify-between w-[80%] mx-auto relative pt-10 text-white">
      <h2 className="text-3xl font-extrabold">GoodFood</h2>
      <div className="text-xl font-light">
        <Link className="pr-8" href="/menu">
          Menu
        </Link>
        <Link className="pr-8" href="/about">
          About
        </Link>
        <Link className="pr-8" href="/blog">
          Blog
        </Link>
        <Link className="pr-8" href="/contact">
          Contact Us
        </Link>
      </div>
      <div>
        <button className="text-xl bg-[#2c5ebe] px-12 py-3 rounded-full text-white">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
