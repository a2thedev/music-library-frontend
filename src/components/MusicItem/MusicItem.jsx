import React, { useState } from "react";
import "./MusicItem.css";

const MusictItem = ({
  title,
  artist,
  album,
  releaseDate,
  genre,
  activeIndex,
  setActiveIndex,
  index,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = (e) => {
    setIsFavorite(!isFavorite);
  };

  const handleActive = () => {
    setActiveIndex(index);
  };

  const btnClass = isFavorite ? "active-btn" : "";
  const actvieClass = index === activeIndex ? "active-movie" : "";

  return (
    <tr onClick={handleActive} className={`music-item ${actvieClass}`}>
      <td className="item-cell">{title}</td>
      <td className="item-cell">{artist}</td>
      <td className="item-cell">{album}</td>
      <td className="item-cell">{releaseDate}</td>
      <td className="item-cell">{genre}</td>
      <td>
        <button className={btnClass} onClick={handleFavorite}>
          Favorite
        </button>
      </td>
    </tr>
  );
};

export default MusictItem;
