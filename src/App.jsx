import "./App.css";
import Header from "./components/Header/Header";
import MusicTable from "./components/MusicTable/MusicTable";
import MusicInfo from "./components/MusicInfo/MusicInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <MusicTable />
      <MusicInfo
        title="Always Knew"
        artist="Lecrae"
        album="All Things Work Together"
        releaseDate={2017 - 9 - 22}
        genre="Hip-Hop"
      />
    </div>
  );
}

export default App;
