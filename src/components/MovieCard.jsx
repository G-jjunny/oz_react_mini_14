const MovieCard = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div
      className="
               w-full h-auto mb-4
               p-4 border-b border-gray-300
              "
    >
      <img
        src={`${baseUrl}${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-auto object-cover"
      />
      <div className="p-2 flex flex-col gap-1">
        <div className="font-semibold text-gray-800 text-sm truncate">
          {movie.title}
        </div>
        <div className="text-xs text-gray-600">
          {movie.vote_average.toFixed(1)}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
