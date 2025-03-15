"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">
        <Link href={"/"} className="text-xl font-bold">
          Tell Me India
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-[#18a558]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:text-[#18a558]">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="/delete" className="hover:text-[#18a558]">
              Delete Account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
