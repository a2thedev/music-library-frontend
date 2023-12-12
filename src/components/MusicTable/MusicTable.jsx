import MusictItem from "../MusicItem/MusicItem";
import "./MusicTable.css";

const MusicTable = ({ music = [], activeIndex, setActiveIndex, onDelete }) => {
  const musicItems = music.map((song, i) => (
    <MusictItem
      key={song.title}
      title={song.title}
      artist={song.artist}
      album={song.album}
      releaseDate={song.releaseDate}
      genre={song.genre}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      index={i}
      onDelete={onDelete}
    />
  ));
  return (
    <table className="table-success flex-item">
      <thead>
        <tr>
          <th className="header-cell">Song Title</th>
          <th className="header-cell">Artist</th>
          <th className="header-cell">Album</th>
          <th className="header-cell">Release Date</th>
          <th className="header-cell">Genre</th>
          <th className="header-cell">Add Favorite</th>
          <th className="header-cell">Delete Music</th>
        </tr>
      </thead>
      <tbody>{musicItems}</tbody>
    </table>
  );
};

export default MusicTable;
