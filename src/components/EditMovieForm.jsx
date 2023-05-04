import React, { useState } from "react";
import { updateDoc, doc } from "@firebase/firestore";
import { db } from "../config/firebase";

const EditMovieForm = ({
  setShowUpdateMovieForm,
  fetchMovies,
  id,
  title,
  rating,
  banner,
}) => {
  const [movieTitle, setMovieTitle] = useState(title);
  const [movieBanner, setMovieBanner] = useState("");
  const [movieRating, setMovieRating] = useState(rating);

  const updateMovie = async (id) => {
    console.log(movieTitle, movieRating, movieBanner);
    const movieDoc = doc(db, "movies", id);
    await updateDoc(movieDoc, { title: movieTitle, rating: movieRating });
    setShowUpdateMovieForm(false);
    fetchMovies();
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 movie-form">
          <button
            className="relative -top-4 -right-52 p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={() => setShowUpdateMovieForm(false)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 011.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="mb-4">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Movie Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              defaultValue={title}
              onChange={(e) => setMovieTitle(e.target.value)}
              placeholder="movie title"
            />
          </div>
          <div className="mb-4">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Movie Poster
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              onChange={(e) => setMovieBanner(e.target.files[0])}
              placeholder="movie title"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Rating
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="string"
              defaultValue={rating}
              onChange={(e) => setMovieRating(e.target.value)}
              placeholder="rating"
            />
          </div>
          <button
            onClick={() => updateMovie(id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMovieForm;
