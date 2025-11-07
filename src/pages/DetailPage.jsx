import movieDetailData from "../assets/movieDetailData.json"; // src/pages/DetailPage
import Navbar from "../Navbar";
// src/assets/movieDetailData.json

const DetailPage = () => {
  console.log(movieDetailData);

  const genres = movieDetailData.genres;
  return (
    <div className="flex gap-4 w-full h-full">
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetailData.poster_path}`}
      />
      {/* https://image.tmdb.org/t/p/w500  <===>  /plNOSbqkSuGEK2i15A5btAXtB7t.jpg */}
      <div>
        <div>{movieDetailData.title}</div>
        <div>{movieDetailData.release_date}</div>
        <div>{movieDetailData.vote_average}</div>
        <div className=" flex gap-2">
          {genres.map((genre) => {
            return <div key={genre.id}>{genre.name}</div>;
          })}
        </div>
        <div>{movieDetailData.overview}</div>
      </div>
    </div>
  );
};

export default DetailPage;
