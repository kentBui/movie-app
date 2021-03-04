import { categories } from "../dev-data/category";
import { moviesList } from "../dev-data/data_2";
export const getmoviesData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(moviesList);
      // reject("can not fetch movies");
    }, 2000);
  });
};

export const getMovie = (id) => {
  return new Promise((resolve, reject) => {
    const movie = moviesList.find((item) => item.id === id);
    setTimeout(() => {
      resolve(movie);
    }, 2000);
  });
};

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(categories);
    }, 2000);
  });
};

export const getMovieWithCate = (cateId) => {
  return new Promise((resolve, reject) => {
    const movies = moviesList.filter(
      (mv) => mv.category.findIndex((cate) => cate === cateId) !== -1
    );

    console.log(movies);
    setTimeout(() => {
      resolve(movies);
    }, 2000);
  });
};
