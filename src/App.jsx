import "./App.css";
import Header from "./components/Header/Header";
import MusicTable from "./components/MusicTable/MusicTable";
import SearchMusic from "./components/SearchMusic/SearchMusic";
// import MusicInfo from "./components/MusicInfo/MusicInfo";
import NewMusicForm from "./components/NewMusicForm/NewMusicForm";
import DeleteMusicForm from "./components/DeleteMusicForm/DeleteMusicForm";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [music, setMusic] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [filterMusic, setFilterMusic] = useState([]);

  const fetchMusic = async () => {
    try {
      const response = await axios.get("https://localhost:7063/api/Songs");
      // console.log(response);
      setMusic(response.data);
    } catch (error) {
      console.warn("Error in fetchMovies request: ", error);
    }
  };

  useEffect(() => {
    fetchMusic();
  }, []);

  const userSearch = async (searchMusic) => {
    try {
      const response = await axios.get("https://localhost:7063/api/Songs/");

      const filterMusic = response.data.filter(
        (song) =>
          song.title.toLowerCase().includes(searchMusic.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchMusic.toLowerCase()) ||
          song.album.toLowerCase().includes(searchMusic.toLowerCase()) ||
          song.releaseDate.toLowerCase().includes(searchMusic.toLowerCase()) ||
          song.genre.toLowerCase().includes(searchMusic.toLowerCase())
      );

      setFilterMusic(filterMusic);
    } catch (error) {
      console.warn("Error in userSearch:", error);
    }
  };

  const userDelete = async (musicId) => {
    try {
      const response = await axios.delete(
        `https://localhost:7063/api/Songs/${musicId}`
      );
      if (response.data === 204) {
        setActiveIndex(-1);
      }
    } catch (error) {
      console.warn("Error in UserDelete", error);
    }
  };

  const selectedMusic = filterMusic[activeIndex];

  return (
    <div className="App">
      <Header />
      <SearchMusic onSearch={userSearch} />

      <div className="flex-container">
        <MusicTable
          music={filterMusic.length > 0 ? filterMusic : music}
          // music={music}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <NewMusicForm onNewMusic={fetchMusic} />
        {/* <MusicInfo musicobj={selectedMusic} /> */}
        {selectedMusic && (
          <DeleteMusicForm
            musicId={selectedMusic.id}
            onDelete={() => userDelete(selectedMusic.id)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
