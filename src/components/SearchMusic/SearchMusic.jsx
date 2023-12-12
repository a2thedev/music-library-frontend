import React, { useState } from "react";
import "./SearchMusic.css";

const SearchMusic = ({ onSearch }) => {
  const [SearchMusic, setSearchMusic] = useState("");

  const handleUser = async (e) => {
    setSearchMusic(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(SearchMusic);
  };

  return (
    <form className="search-music" onSubmit={handleSubmit}>
      <label className="label-search">
        Search:
        <input type="text" value={SearchMusic} onChange={handleUser} />
      </label>
      <button className="enter-btn" type="submit">
        Enter
      </button>
    </form>
  );
};

export default SearchMusic;
