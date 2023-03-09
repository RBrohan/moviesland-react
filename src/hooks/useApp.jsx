import { useState, useEffect } from "react";

const API_URL = "http://www.omdbapi.com?apikey=28587f2e";

export const useApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const data = await fetch(`${API_URL}&s=${title}`).then((response) =>
      response.json()
    );
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return { searchTerm, setSearchTerm, movies, searchMovies };
};
