import MovieList from "../../components/MovieList/MovieList";

function Home() {
  return (
    <>
      <MovieList titleList="Now playing movies" />
      <MovieList titleList="Top rated movies" />
      <MovieList titleList="Upcoming movies" />
      <MovieList titleList="Popular movies" />
      <MovieList titleList="Popular TV shows" />
      <MovieList titleList="Top rated TV shows" />
      <MovieList titleList="On the air TV shows" />
      <MovieList titleList="Airing today TV shows" />
      {/* <MovieList titleList="Popular people" /> */}
    </>
  );
}

export default Home;
