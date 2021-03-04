import Head from "next/head";
import NavBar from "../components/navbar";
import SideMenu from "../components/sideMenu";
import SlideHead from "../components/slideHead";
import MovieList from "../components/movieList";
import Footer from "../components/footer";
import { getCategories, getmoviesData } from "../actions";

const Index = ({ movies, categories }) => {
  const images =
    movies &&
    movies.map((item) => ({
      image: item.image,
      id: item.id,
      title: item.title,
    }));
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideMenu categories={categories || []} />
          </div>

          <div className="col-lg-9">
            <SlideHead images={images || []} />

            <div className="row">
              <MovieList movies={movies} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Index.getInitialProps = async (ctx) => {
  try {
    const movies = await getmoviesData();
    const categories = await getCategories();
    return { movies, categories };
  } catch (error) {
    console.log(error);
  }
};

export default Index;
