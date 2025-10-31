import { Link } from "react-router";
import movieListData from "../assets/movieListData.json";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
  const movies = movieListData.results;
  return (
    <div className="">
      <div className=" grid grid-cols-5 gap-2">
        {movies.map((movie) => {
          return (
            <Link to="/details" key={movie.id}>
              <MovieCard movie={movie} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
