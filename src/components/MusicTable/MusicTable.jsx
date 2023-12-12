import MusictItem from "../MusicItem/MusicItem";
import React from "react";
import "./MusicTable.css";

const MusicTable = ({ music = [], activeIndex, setActiveIndex }) => {
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
    />
  ));
  return (
    <table className="table flex-item">
      <thead>
        <tr>
          <th className="header-cell">Song Title</th>
          <th className="header-cell">Artist</th>
          <th className="header-cell">Album</th>
          <th className="header-cell">Release Date</th>
          <th className="header-cell">Genre</th>
          <th className="header-cell">Add Favorite</th>
        </tr>
      </thead>
      <tbody className="table">{musicItems}</tbody>
    </table>
  );
};

export default MusicTable;
