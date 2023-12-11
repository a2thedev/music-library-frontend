import "./App.css";
import Header from "./components/Header/Header";
import MusicTable from "./components/MusicTable/MusicTable";
import MusicInfo from "./components/MusicInfo/MusicInfo";
import NewMusicForm from "./components/NewMusicForm/NewMusicForm";
import React, { useState, useEffect } from "react";
import initData from "./data/data";

function App() {
  const [music, setMusic] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    setMusic(initData);
  }, []);

  const handleNewMusic = (newMusic) => {
    const updatedMusic = [...music, newMusic];
    setMusic(updatedMusic);
  };

  const selectedMusic = music[activeIndex];

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <MusicTable
          music={music}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <MusicInfo musicobj={selectedMusic} />
        <NewMusicForm onNewMusic={handleNewMusic} />
      </div>
    </div>
  );
}

export default App;
