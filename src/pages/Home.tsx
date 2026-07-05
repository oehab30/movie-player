import Hero from "../component/home/Hero"
import Moviecard from "../component/Moviecard"

function Home() {
    const movies = [
        {
            id: 1,
            title: "Inception",
            release_date: "2010",
            url: "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
            rating: 8.8
        },
        {
            id: 2,
            title: "John Wick",
            release_date: "2014",
            url: "https://image.tmdb.org/t/p/w500/fzcmQj9BvS359vth9OQzicUvI1f.jpg",
            rating: 7.4
        },
        {
            id: 3,
            title: "The Batman",
            release_date: "2022",
            url: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T6f4uC3.jpg",
            rating: 7.8
        },
        {
            id: 4,
            title: "Interstellar",
            release_date: "2014",
            url: "https://image.tmdb.org/t/p/w500/gEU2QniE6EwfV4vSIvOJubbP9BM.jpg",
            rating: 8.7
        },
        {
            id: 5,
            title: "Dune",
            release_date: "2021",
            url: "https://image.tmdb.org/t/p/w500/d5icS9S1BDI3WxllpkpW9uHdq4Z.jpg",
            rating: 8.0
        },
        {
            id: 6,
            title: "Spider-Man: No Way Home",
            release_date: "2021",
            url: "https://image.tmdb.org/t/p/w500/1g0dhvR8n91FTZ0qXo7vIuUf9U5.jpg",
            rating: 8.2
        },
    ]

    return (
        <>
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            <Hero />

            <div className="container mx-auto px-6 py-12 lg:py-20">
                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">
                        Featured <span className="text-red-600">Movies</span>
                    </h2>
                    <p className="text-gray-500 font-medium">Handpicked selection of today's best cinematic experiences</p>
                </div>

                {/* Movies Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-8 gap-y-12">
                    {movies.map((movie) => (
                        <Moviecard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </div>

        <div className="min-h-screen bg-[#0a0a0a] text-white">

            <div className="container mx-auto px-6 py-12 lg:py-20">
                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">
                        Featured <span className="text-red-600">Movies</span>
                    </h2>
                    <p className="text-gray-500 font-medium">Handpicked selection of today's best cinematic experiences</p>
                </div>

                {/* Movies Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-8 gap-y-12">
                    {movies.map((movie) => (
                        <Moviecard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
