import MusictItem from "../MusicItem/MusicItem";
import "./MusicTable.css";

const MusicTable = ({ music = [], activeIndex, setActiveIndex }) => {
  const musicItems = music.map((song, i) => (
    <MusictItem
      song={song}
      key={song.id}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      index={i}
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
