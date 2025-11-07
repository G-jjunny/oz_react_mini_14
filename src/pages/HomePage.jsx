import movieListData from "../assets/movieListData.json";
import Navbar from "../Navbar";

const HomePage = () => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  console.log(movieListData);
  return (
    <div className=" w-full h-full">
      <div className="grid grid-cols-5 gap-4 p-4">
        {movieListData.results.map((movie) => {
          // console.log(movie);
          return (
            <div className=" w-[200px] h-fit bg-blue-400 text-white flex flex-col">
              <img
                src={`${baseUrl}${movie.poster_path}`}
                className="border border-black w-fit"
                alt={`${movie.title}`}
              ></img>
              {/* https://image.tmdb.org/t/p/w500--------- */}
              <div className="border border-black">{movie.title}</div>
              <div className="border border-black">{movie.vote_average}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
