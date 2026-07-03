import { Play, Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Movie {
  id: number;
  title: string;
  url: string;
  release_date: string;
  rating?: number;
}

interface MoviecardProps {
  movie: Movie;
}

function Moviecard({ movie }: MoviecardProps) {
  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Playing movie: ${movie.title}`);
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 w-full sm:w-64 max-w-sm"
    >
      {/* Image Container */}
      <div className="relative aspect-2/3 overflow-hidden">
        <img
          src={movie.url}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-40"
        />

        {/* Overlay Actions */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
          <button
            onClick={handlePlay}
            className="p-4 bg-red-600 text-white rounded-full hover:bg-red-700 hover:scale-110 transition-all mb-4"
          >
            <Play size={24} fill="currentColor" />
          </button>
          <div className="flex gap-4">
            <button className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/20">
              <Heart size={20} />
            </button>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded-md flex items-center gap-1 border border-white/10">
          <Star size={12} className="text-yellow-500 fill-yellow-500" />
          <span className="text-white text-xs font-bold">{movie.rating || "8.5"}</span>
        </div>
      </div>

      {/* Details */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-white text-lg font-bold truncate pr-2">{movie.title}</h3>
          <span className="text-gray-500 text-xs mt-1">{movie.release_date}</span>
        </div>

        <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-400 border border-gray-700 px-1.5 py-0.5 rounded uppercase tracking-wider">HD</span>
            <span className="text-[10px] text-gray-400 border border-gray-700 px-1.5 py-0.5 rounded uppercase tracking-wider">Action</span>
        </div>
      </div>
    </motion.div>
  );
}

export default Moviecard;
