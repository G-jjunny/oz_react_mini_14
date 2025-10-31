const MovieCard = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className=" flex flex-col p-4 ">
      <img
        src={`${baseUrl}${movie.poster_path}`}
        alt={movie.title}
        className=""
      />
      <h2 className="">{movie.title}</h2>
      <p className=" text-end">{movie.vote_average}</p>
    </div>
  );
};

export default MovieCard;
