import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // 1. Removed mt-12 so it snaps directly to the section above
    // 2. Wrapped the background utility globally so it covers the full width of the screen
    <div className="mx-auto max-w-[1200px]  bg-black border-t border-slate-900">
      <footer className="max-w-[1200px] sm:h-[150px] p-5 flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between md:items-center mx-auto text-slate-400">
        {/* Branding Name */}
        <span className="font-semibold text-slate-200 text-lg tracking-wide hover:text-white transition-colors duration-300 cursor-default">
          Aman Kumar
        </span>

        {/* Heart Note */}
        <p className="text-sm text-slate-400">
          Made With <span className="text-purple-500">🩵</span> By Aman
        </p>

        {/* Contact & Tag */}
        <div className="text-center md:text-right">
          <p className="text-slate-300 font-medium hover:text-white transition-colors duration-300">
            <a
              href="mailto:jh9.amn@outlook.com"
              className="hover:underline decoration-purple-500/50"
            >
              jh9.amn@outlook.com
            </a>
          </p>

          {/* Harmonized Cloud AI Tag */}
          <p className="text-xs font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mt-1.5 tracking-wider uppercase">
            #CloudAIDev {currentYear}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
