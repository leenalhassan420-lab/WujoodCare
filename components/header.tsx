"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-0 z-50 sticky bg-white shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex justify-center items-center bg-gradient-to-br from-[#563293] to-[#c060a5] rounded-full w-10 h-10">
              <span className="font-bold text-white text-lg">W</span>
            </div>
            <span className="font-bold text-[#563293] text-xl">
              Wujood Care
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link
              href="#hero"
              className="text-gray-700 hover:text-[#563293] transition"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-[#563293] transition"
            >
              About
            </Link>
            <Link
              href="#products"
              className="text-gray-700 hover:text-[#563293] transition"
            >
              Value
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-[#563293] transition"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Link href={"#contact"}>
            <button className="hidden md:block bg-gradient-to-r from-[#f9f081] to-[#c060a5] hover:shadow-lg px-6 py-2 rounded-full font-bold text-[#563293] transition">
              Get Started
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden flex flex-col gap-2 pb-4">
            <Link href="#home" className="text-gray-700 hover:text-[#563293]">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-[#563293]">
              About
            </Link>
            <Link
              href="#products"
              className="text-gray-700 hover:text-[#563293]"
            >
              Value
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-[#563293]"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
