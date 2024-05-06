import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="h-20 w-full flex items-center justify-between px-16">
      <div className="flex gap-24">
        <h1 className="text-xl">Logo</h1>
        <section className="flex gap-12">
          <div className="py-3 hover:underline-offset-2 hover:underline ">
            About
          </div>
          <div className="py-3 hover:underline-offset-2 hover:underline">
            Why us
          </div>
          <div className="py-3 hover:underline-offset-2 hover:underline">
            Contact Us
          </div>
        </section>
      </div>
      <div className="flex gap-8">
        <Link href="/login">
          <button className="border rounded-full py-3 px-6 hover:bg-gray-200">
            Log In
          </button>
        </Link>
        <Link href="/register">
          <button className="border rounded-full py-3 px-6 bg-blue-600 hover:bg-blue-400 text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
