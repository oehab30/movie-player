import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Bell, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Darkmode from "./Darkmode";
import Searchbar from "../common/Searchbar";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "Tv show", path: "/Tvshow" },
    { name: "My List", path: "/Mylist" },
  ];

  return (
    <nav className={`fixed w-full z-100 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-xl py-2 shadow-2xl' : 'bg-linear-to-b from-background/80 to-transparent py-4'}`}>
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-6 lg:px-12">
        {/* Left Section: Logo & Desktop Links */}
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-1.5 group">
            <span className="text-2xl font-black tracking-tighter uppercase text-foreground transition-colors duration-500 group-hover:text-red-600">Cine<span className="text-red-600 group-hover:text-foreground">Play</span></span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[11px] font-extrabold uppercase tracking-widest transition-all hover:text-foreground ${location.pathname === link.path ? 'text-red-600 underline underline-offset-8 decoration-2' : 'text-gray-400'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section: Search & Actions */}
        <div className="flex items-center gap-4 md:gap-8 lg:gap-5">

  {/* Download Icon */}
<Download
  className="w-4 h-4 cursor-pointer transition-all duration-300 text-foreground  hover:text-brand-primary hover:scale-110 "

/>

  {/* Search Icon */}
<Search
  className="w-4 h-4 cursor-pointer transition-all duration-300 text-foreground hover:text-brand-primary hover:scale-110 "
  onClick={() => setShowSearch(true)}
/>

{/* Searchbar component */}
{showSearch && (
  <Searchbar onClose={() => setShowSearch(false)} />
)}



          {/* Notifications */}
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400   relative cursor-pointer transition-all duration-300 hover:text-brand-primary hover:scale-110">
              <Bell className="w-5 h-5  text-foreground " />
              <span className="absolute top-2 right-2 w-2 h-2 bg-brand-primary rounded-full border-2 border-black"></span>
            </button>

          </div>

          {/* Dark Mode Toggle */}
          <div className="hidden lg:block">
          <Darkmode />
          </div>


          {/* User Profile Hook/Button */}
          <button className="hidden sm:block">
            <div className="w-8 h-8 p-4 px-6 rounded bg-brand-primary flex items-center justify-center font-bold text-xs text-white">
              Login
            </div>
          </button>




          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 -mr-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>


      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-200 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#0f0f0f] z-201 lg:hidden shadow-2xl flex flex-col p-8"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="text-xl font-extrabold tracking-tighter text-white">Cine<span className="text-brand-primary">Play</span></span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-gray-500 hover:bg-white/5 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search movies..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm text-white focus:outline-hidden focus:border-brand-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`text-xl font-bold tracking-tight py-2 ${location.pathname === link.path ? 'text-brand-primary' : 'text-white hover:text-brand-primary'}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-white/5 space-y-6">
                <button className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-red-600/20 active:scale-[0.98] transition-all">
                  Try Premium Free
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
