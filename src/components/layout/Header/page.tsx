"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   return (
      <header
         className={`absolute top-0 left-0 w-full z-50 transition-all duration-500`}
      >
         <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link
               href="/"
               className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
            >
               {/* animated logo */}
               <Image
                  src="/logo.svg"
                  alt="BrewHouse Logo"
                  width={60}
                  height={60}
                  className={`transition-transform duration-300 ${
                     scrolled ? "group-hover:rotate-12" : ""
                  }`}
               />
            </Link>

            <nav className="hidden md:flex items-center gap-8 bg-amber-700 h-20 rounded-b-2xl">
               {["Home", "Menu", "About", "Locations", "Contact"].map(
                  (item, idx) => (
                     <Link
                        key={item}
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className={`relative transition-colors duration-300 ${
                           scrolled
                              ? "text-gray-700 hover:text-amber-600"
                              : "text-white/90 hover:text-white"
                        } group`}
                        style={{
                           animation: `fadeInDown 0.6s ease-out ${
                              idx * 0.1
                           }s both`,
                        }}
                     >
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                     </Link>
                  )
               )}
            </nav>

            <div className="flex items-center gap-3">
               <Link
                  href="/order"
                  className={`hidden md:inline-block px-5 py-2.5 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                     scrolled
                        ? "bg-amber-600 text-white hover:bg-amber-700"
                        : "bg-white text-amber-600 hover:bg-amber-50"
                  }`}
                  style={{ animation: "fadeInDown 0.8s ease-out 0.5s both" }}
               >
                  Order Now
               </Link>

               {/* mobile menu button */}
               <button
                  aria-label="Toggle menu"
                  className={`md:hidden p-2 rounded-md transition-all duration-300 ${
                     scrolled
                        ? "text-gray-700 hover:bg-gray-100"
                        : "text-white hover:bg-white/10"
                  }`}
                  onClick={() => setMenuOpen((s) => !s)}
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-6 w-6 transition-transform duration-300"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     style={{
                        transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)",
                     }}
                  >
                     {menuOpen ? (
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M6 18L18 6M6 6l12 12"
                        />
                     ) : (
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M4 6h16M4 12h16M4 18h16"
                        />
                     )}
                  </svg>
               </button>
            </div>
         </div>

         {/* mobile menu with slide-in animation */}
         <div
            className={`md:hidden bg-white/95 backdrop-blur-lg overflow-hidden transition-all duration-500 ${
               menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
         >
            <div className="flex flex-col gap-2 p-4 max-w-6xl mx-auto">
               {["Home", "Menu", "About", "Locations", "Contact"].map(
                  (item, idx) => (
                     <Link
                        key={item}
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className="text-gray-700 py-2 hover:text-amber-600 hover:translate-x-2 transition-all duration-300"
                        style={{
                           animation: menuOpen
                              ? `slideInLeft 0.4s ease-out ${idx * 0.1}s both`
                              : "none",
                        }}
                     >
                        {item}
                     </Link>
                  )
               )}
               <Link
                  href="/order"
                  className="mt-2 inline-block bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
                  style={{
                     animation: menuOpen
                        ? "slideInLeft 0.4s ease-out 0.5s both"
                        : "none",
                  }}
               >
                  Order Now
               </Link>
            </div>
         </div>

         <style jsx>{`
            @keyframes fadeInDown {
               from {
                  opacity: 0;
                  transform: translateY(-20px);
               }
               to {
                  opacity: 1;
                  transform: translateY(0);
               }
            }

            @keyframes slideInLeft {
               from {
                  opacity: 0;
                  transform: translateX(-20px);
               }
               to {
                  opacity: 1;
                  transform: translateX(0);
               }
            }
         `}</style>
      </header>
   );
};

export default Header;
