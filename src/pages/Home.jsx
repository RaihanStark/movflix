import MovieList from "../components/Movie/List";

function Home() {
  const sectionDisplayTitles = [
    "Now playing movies",
    "Top rated movies",
    "Upcoming movies",
    "Popular movies",
    "Top rated TV shows",
    "On the air TV shows",
    "Airing today TV shows",
  ];
  return (
    <>
      {sectionDisplayTitles.map((title) => (
        <MovieList key={title} titleList={title} />
      ))}
    </>
  );
}

export default Home;