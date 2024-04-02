import React, { useState, useEffect } from "react";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://hoblist.com/api/movieList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting",
          }),
        });

        const data = await response.json();
        setMovies(data.result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie list:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Movie List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={styles.list}>
          {movies.map((movie) => (
            <li key={movie._id} style={styles.movie}>
              <h3>{movie.title}</h3>
              <p>Genre: {movie.genre}</p>
              <p>Director: {movie.director}</p>
              <p>Starring: {movie.stars.join(", ")}</p>
              {/* Add more */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  movie: {
    marginBottom: "20px",
    padding: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
};

export default MovieList;
