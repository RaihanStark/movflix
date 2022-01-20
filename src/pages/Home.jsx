import MovieList from "../components/Movie/List";
import FeaturedItem from "../components/Featured/Item";
import { API_ENDPOINTS } from "../constraints";
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
      <FeaturedItem />
      {sectionDisplayTitles.map((title) => (
        <MovieList
          key={title}
          titleList={title}
          endpoint={API_ENDPOINTS[title].value}
          type={API_ENDPOINTS[title].type}
        />
      ))}
    </>
  );
}

export default Home;
