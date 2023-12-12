import React, { useState } from "react";
import TextField from "../TextField/TextField";
import axios from "axios";

const NewMusicForm = ({ onNewMusic }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      artist,
      album,
      releaseDate,
      genre,
    };
    try {
      const response = await axios.post(
        "https://localhost:7063/api/Songs/",
        formData
      );
      if (response.status === 201) {
        onNewMusic();
      }
    } catch (error) {
      console.warn("Error submitting new music form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <h4>Add Music</h4>
      <div className="p-2">
        <TextField label="Title" value={title} onChange={setTitle} />
        <TextField label="Artist" value={artist} onChange={setArtist} />
        <TextField label="Album" value={album} onChange={setAlbum} />
        <TextField
          label="Release Date"
          value={releaseDate}
          onChange={setReleaseDate}
        />
        <TextField label="Genre" value={genre} onChange={setGenre} />
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-outline-success">
            Add music
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewMusicForm;
