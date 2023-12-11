import "./App.css";
import Header from "./components/Header/Header";
import MusicTable from "./components/MusicTable/MusicTable";
import MusicInfo from "./components/MusicInfo/MusicInfo";
import NewMusicForm from "./components/NewMusicForm/NewMusicFile";

function App() {
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
        <MusicTable />
        <MusicInfo musicobj={selectedMusic} />
        <NewMusicForm />
      </div>
    </div>
  );
}

export default App;
