import React, { useState } from "react";
import "./MusicItem.css";

const MusictItem = ({ title }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = (e) => {
    setIsFavorite(!isFavorite);
  };

  const btnClass = isFavorite ? "active-btn" : "";

  return (
    <div className="music-item">
      <span>{title}</span>
      <button className={btnClass} onClick={handleClick}>
        Favorite
      </button>
    </div>
  );
};

export default MusictItem;
