import { Search, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchbarProps {
  onClose: () => void;
}

function Searchbar({ onClose }: SearchbarProps) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <AnimatePresence>
      { (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          /**frame Back ground**/
          className="fixed inset-0 z-[1000]  sm:bg-background/40 bg-black/20  backdrop-blur-lg">
          <div className="mx-auto max-w-3xl px-4 pt-24 sm:px-6 sm:pt-20">
            <div className=" mb-4 rounded-2xl p-4 sm:p-4 bg-[#12161499]">
              {/* Search Icon */}
              <div className="relative flex items-center justify-between gap-3 sm:gap-4">
               <Search className={`absolute left-0 top-1/2 h-6 w-6 -translate-y-1/2  transition-all duration-300 ease-out
               ${searchFocused ? "text-red-600 scale-110":"text-gray-400 scale-100"}`}/>

                 {/* Search Input */}
                <div className="flex-col">
                <input
                  type="text"
                  placeholder="Search movies & TV shows..."
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="min-w-0 flex-1 bg-transparent pl-10 text-lg font-light text-foreground outline-none placeholder:text-muted-foreground sm:text-3xl"
                  />
                 <p className="mt-2 ml-10 text-xs text-muted-foreground">Press Enter to see all results</p>
                  </div>


                <button
                  type="button"
                  aria-label="Close search"
                  className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                  onClick={onClose}                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

              <div className=" mb-4 rounded-2xl p-3 sm:p-3 bg-[#12161499]"></div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Searchbar