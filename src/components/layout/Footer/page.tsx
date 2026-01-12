import Link from "next/link";

const Footer = () => {
   return (
      <footer className="absolute w-full border-t bg-gray-50 z-50 ">
         <div className="max-w-6xl mx-auto p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
               <h3 className="text-lg font-semibold text-gray-800">
                  BrewHouse
               </h3>
               <p className="text-sm text-gray-600 mt-2">
                  Small-batch coffee roasted locally. Warm space, cooler vibes.
               </p>
               <div className="flex items-center gap-3 mt-4 text-gray-600">
                  <svg
                     className="w-5 h-5"
                     viewBox="0 0 24 24"
                     fill="none"
                     aria-hidden
                  >
                     <path
                        d="M3 7v6a4 4 0 004 4h10"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                     <path
                        d="M21 10a2 2 0 01-2 2"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
                  <span className="text-sm">123 Coffee Lane, Bean City</span>
               </div>
            </div>

            <div>
               <h4 className="font-semibold text-gray-800">Hours</h4>
               <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>Mon–Fri: 7:00 — 18:00</li>
                  <li>Sat: 8:00 — 17:00</li>
                  <li>Sun: 8:00 — 15:00</li>
               </ul>
            </div>

            <div>
               <h4 className="font-semibold text-gray-800">Connect</h4>
               <ul className="mt-2 space-y-2">
                  <li>
                     <Link
                        href="mailto:hello@brewhouse.example"
                        className="text-sm text-amber-600 hover:underline"
                     >
                        hello@brewhouse.example
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/contact"
                        className="text-sm text-gray-700 hover:underline"
                     >
                        Contact form
                     </Link>
                  </li>
                  <li className="flex items-center gap-3 mt-3">
                     <a
                        href="#"
                        aria-label="Instagram"
                        className="text-gray-600 hover:text-amber-600"
                     >
                        <svg
                           className="w-5 h-5"
                           viewBox="0 0 24 24"
                           fill="none"
                           aria-hidden
                        >
                           <rect
                              x="3"
                              y="3"
                              width="18"
                              height="18"
                              rx="4"
                              stroke="currentColor"
                              strokeWidth="1.2"
                           />
                           <path
                              d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                     </a>
                     <a
                        href="#"
                        aria-label="Twitter"
                        className="text-gray-600 hover:text-amber-600"
                     >
                        <svg
                           className="w-5 h-5"
                           viewBox="0 0 24 24"
                           fill="none"
                           aria-hidden
                        >
                           <path
                              d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                     </a>
                  </li>
               </ul>
            </div>
         </div>

         <div className="border-t bg-gray-50">
            <div className="max-w-6xl mx-auto p-4 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
               <span>
                  © {new Date().getFullYear()} BrewHouse — All rights reserved.
               </span>
               <span className="mt-2 md:mt-0">
                  Built with ❤️ for coffee lovers
               </span>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
