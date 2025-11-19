import { Link } from "react-router";
import MovieCard from "../components/MovieCard";
import Navbar from "../Navbar";
import MovieListData from "../assets/movieListData.json";

const HomePage = () => {
  <div className="min-h-screen max-w-full">
    <Navbar />
    <div className="p-4">
      <div
        className="
            grid gap-4
            sm:grid-cols-3
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            place-items-center
          "
      >
        {MovieListData.results.map((movie) => (
          <Link to={`/detail/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  </div>;
};

export default HomePage;
