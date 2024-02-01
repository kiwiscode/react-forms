// src/components/AddMovie.jsx

import { useState } from "react";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(false);

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeDirector = (e) => setDirector(e.target.value);
  const handleChangeIMDBRating = (e) => setIMDBRating(e.target.value);
  const handleChangeHasOscars = (e) => setHasOscars(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("You Submit button clicked and created new movie !!!");

    const newMovie = {
      title,
      director,
      IMDBRating,
      hasOscars,
    };

    console.log("Ready to add this movie that you created => ", newMovie);

    console.log("Submitted", newMovie);
    props.addMovie(newMovie); // <== ADD

    // Reset the state
    setTitle("");
    setDirector("");
    setIMDBRating(5);
    setHasOscars(true);
  };

  console.log("Title =>", title);

  console.log("Director =>", director);

  console.log("IMDB Rating =>", IMDBRating);

  console.log("Has oscars ? =>", hasOscars);

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>

      {/* form will be added here */}

      <form>
        <label>Title : </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />

        <label>Director : </label>
        <input
          type="text"
          name="director"
          value={director}
          onChange={handleChangeDirector}
        />

        <label>IMDB Rating :</label>
        <input
          type="number"
          name="IMDBRating"
          value={IMDBRating}
          onChange={handleChangeIMDBRating}
        />

        <label>Won Oscars : </label>
        <input
          type="checkbox"
          name="hasOscars"
          checked={hasOscars}
          onChange={handleChangeHasOscars}
        />

        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Add a Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
