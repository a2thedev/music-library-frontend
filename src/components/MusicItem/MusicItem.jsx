import React, { useState } from "react";
import "./MusicItem.css";
import DeleteMusicForm from "../DeleteMusicForm/DeleteMusicForm";

const MusictItem = ({ song, activeIndex, setActiveIndex, index }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = (e) => {
    setIsFavorite(!isFavorite);
  };

  const handleActive = () => {
    setActiveIndex(index);
  };

  const btnClass = isFavorite ? "btn btn-success" : "btn btn-secondary";
  const activeClass = index === activeIndex ? "active-movie" : "";

  return (
    <tr onClick={handleActive} className={`music-item ${activeClass}`}>
      <td className="item-cell">{song.title}</td>
      <td className="item-cell">{song.artist}</td>
      <td className="item-cell">{song.album}</td>
      <td className="item-cell">{song.releaseDate}</td>
      <td className="item-cell">{song.genre}</td>
      <td className="item-cell">
        <button className={btnClass} onClick={handleFavorite}>
          Favorite
        </button>
      </td>
      <td className="item-cell">
        <DeleteMusicForm musicId={song.id} />
      </td>
    </tr>
  );
};

export default MusictItem;
