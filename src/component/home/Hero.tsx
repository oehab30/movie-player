import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Info, ChevronLeft, ChevronRight, Star } from "lucide-react";

const FEATURED_MOVIES = [
  {
    id: 1,
    title: "John Wick: Chapter 4",
    description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", // Replace with real John Wick trailer if available
    backdrop: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
    rating: "4.9",
    genre: "Action • Thriller",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/John_Wick_Logo.svg"
  },
  {
    id: 2,
    title: "Dune: Part Two",
    description: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
    videoUrl: "../../../public/mylivewallpapers-com-Stoic-Itachi-4K.mp4",
    backdrop: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=2070&auto=format&fit=crop",
    rating: "5.0",
    genre: "Sci-Fi • Adventure",
    logo: ""
  },
  {
    id: 3,
    title: "The Batman",
    description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    backdrop: "https://images.unsplash.com/photo-1611419010196-a360856ff42f?q=80&w=2000&auto=format&fit=crop",
    rating: "4.8",
    genre: "Crime • Mystery",
    logo: ""
  }
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FEATURED_MOVIES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % FEATURED_MOVIES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + FEATURED_MOVIES.length) % FEATURED_MOVIES.length);

  const activeMovie = FEATURED_MOVIES[currentSlide];

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMovie.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
            src={activeMovie.videoUrl}
          />
          
          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent " />
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMovie.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl space-y-8"
          >
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-red-600/20 border border-red-600/30 rounded-full text-red-500 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Star size={12} className="fill-current" />
                {activeMovie.rating} Rating
              </span>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
                {activeMovie.genre}
              </span>
            </div>

            <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter uppercase italic">
              {activeMovie.title}
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-xl font-medium leading-relaxed line-clamp-3">
              {activeMovie.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="px-10 py-4 bg-white text-black rounded-lg font-black uppercase tracking-widest text-xs transition-all hover:bg-neutral-200 hover:scale-105 shadow-2xl flex items-center gap-3 group">
                <Play className="w-4 h-4 fill-current" />
                Watch Now
              </button>
              <button className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg font-black uppercase tracking-widest text-xs transition-all hover:bg-white/20 flex items-center gap-3">
                <Info className="w-4 h-4" />
                Details
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-12 right-6 lg:right-24 z-30 flex items-center gap-6">
        <div className="flex gap-2">
          {FEATURED_MOVIES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-12 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]' : 'w-6 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>
        
        <div className="flex gap-2 ml-4">
          <button 
            onClick={prevSlide}
            className="p-3 border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all bg-black/20 backdrop-blur-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all bg-black/20 backdrop-blur-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Video Status Toggle (Mute/Unmute) */}
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-12 left-6 lg:left-24 z-30 p-3 border border-white/10 rounded-full text-white hover:bg-white/10 transition-all bg-black/20 backdrop-blur-sm"
      >
        {isMuted ? <span className="text-[10px] font-bold px-2">UNMUTE</span> : <span className="text-[10px] font-bold px-2">MUTE</span>}
      </button>

      {/* Movie Progress Bar for current slide */}
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-white/5 z-40 overflow-hidden">
        <motion.div
           key={currentSlide}
           initial={{ x: "-100%" }}
           animate={{ x: "0%" }}
           transition={{ duration: 10, ease: "linear" }}
           className="h-full bg-red-600"
        />
      </div>
    </section>
  );
}

export default Hero;
