import "./App.css";
import Header from "./components/Header/Header";
import MusicTable from "./components/MusicTable/MusicTable";
import MusicInfo from "./components/MusicInfo/MusicInfo";
import NewMusicForm from "./components/NewMusicForm/NewMusicForm";
import React, { useState } from "react";

function App() {
  const [music, setMusic] = useState([]);

  const handleNewMusic = (newMusic) => {
    const updatedMusic = [...music, newMusic];
    setMusic(updatedMusic);
  };

  const selectedMusic = {
    title: "Always Knew",
    artist: "Lecrae",
    album: "All Things Work Together",
    releaseDate: 2017,
  };

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <MusicTable music={music} />
        <MusicInfo musicobj={selectedMusic} />
        <NewMusicForm onNewMusic={handleNewMusic} />
      </div>
    </div>
  );
}

export default App;
