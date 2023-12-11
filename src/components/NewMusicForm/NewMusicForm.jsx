import React, { useState } from "react";

const NewMusicForm = ({}) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      artist,
      album,
      releaseDate,
      genre,
    };
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <h4>Add Music</h4>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Artist</label>
        <input value={artist} onChange={(e) => setArtist(e.target.value)} />
      </div>
      <div>
        <label>Album</label>
        <input value={album} onChange={(e) => setAlbum(e.target.value)} />
      </div>
      <div>
        <label>Release Date</label>
        <input
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </div>
      <div>
        <label>Genre</label>
        <input value={genre} onChange={(e) => setGenre(e.target.value)} />
      </div>
      <button type="submit">Add music</button>
    </form>
  );
};

export default NewMusicForm;
