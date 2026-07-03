import { Instagram, Facebook, Twitter, Globe, ArrowRight, Film } from "lucide-react";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/5 pt-24 pb-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">

          {/* Brand & Mission */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <Film className="w-8 h-8 text-red-600" />
              <h1 className="text-3xl font-black tracking-tighter uppercase text-gray-900 dark:text-white">CinePlay</h1>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed max-w-xs">
              Your ultimate destination for cinematic excellence. Stream the latest blockbusters and timeless classics in stunning quality, anywhere, anytime.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <Link key={i} to="#" className="w-10 h-10 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-600 transition-all">
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-6">
              <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Explore</h2>
              <ul className="space-y-4">
                {['New Releases', 'Top Rated', 'Coming Soon', 'Trending Now'].map((item) => (
                  <li key={item}>
                    <Link to="/" className="text-sm font-bold text-gray-900 dark:text-white hover:text-red-600 transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Genres</h2>
              <ul className="space-y-4">
                {['Action & Sci-Fi', 'Drama', 'Comedy', 'Documentaries'].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-sm font-bold text-gray-900 dark:text-white hover:text-red-600 transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Newsletter</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Subscribe to get updates on new movie releases and exclusive trailers.</p>
            </div>

            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="email@cineplay.com"
                className="w-full bg-transparent border-b-2 border-gray-200 dark:border-white/10 py-4 text-sm font-bold text-gray-900 dark:text-white focus:outline-none focus:border-red-600 transition-colors placeholder:text-gray-300 dark:placeholder:text-gray-700"
              />
              <button type="submit" className="absolute right-0 bottom-4 p-2 text-gray-400 group-hover:text-red-600 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="flex items-center gap-2 text-gray-400">
               <Globe className="w-4 h-4" />
               <span className="text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:text-red-600">English (US)</span>
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="pt-12 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} CinePlay Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {['Privacy Policy', 'Terms of Use', 'Help Center'].map((item) => (
              <Link key={item} to="#" className="text-[10px] text-gray-400 font-bold uppercase tracking-widest hover:text-red-600 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
