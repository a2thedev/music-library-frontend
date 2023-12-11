import React, { useState } from "react";
import TextField from "../TextField/TextField";

const NewMusicForm = ({ onNewMusic }) => {
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
    onNewMusic(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <h4>Add Music</h4>
      <TextField label="Title" value={title} onChange={setTitle} />
      <TextField label="Artist" value={artist} onChange={setArtist} />
      <TextField label="Album" value={album} onChange={setAlbum} />
      <TextField
        label="Release Date"
        value={releaseDate}
        onChange={setReleaseDate}
      />
      <TextField label="Genre" value={genre} onChange={setGenre} />
      <button type="submit">Add music</button>
    </form>
  );
};

export default NewMusicForm;
