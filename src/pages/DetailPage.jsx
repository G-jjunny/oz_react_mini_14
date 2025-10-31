import movieDetailData from "../assets/movieDetailData.json";

// movieDetailData.genres => [{id: 18, name: "Drama"}, {id: 80, name: "Crime"}]
// genre => {id: 18, name: "Drama"}

const DetailPage = () => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  console.log(movieDetailData);
  return (
    <div className=" flex gap-2">
      <img src={`${baseUrl}${movieDetailData.poster_path}`} alt="" />
      <div>
        <h1>{movieDetailData.title}</h1>
        <p>{movieDetailData.vote_average}</p>
        <div className="flex gap-2">
          {movieDetailData.genres.map((genre) => (
            <div className=" p-1 border ">{genre.name}</div>
          ))}
        </div>
        <div>{movieDetailData.overview}</div>
      </div>
    </div>
  );
};

export default DetailPage;
