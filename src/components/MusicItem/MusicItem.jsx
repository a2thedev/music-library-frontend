import React, { useState } from "react";
import "./MusicItem.css";

const MusictItem = ({ title, activeIndex, setActiveIndex, index }) => {
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
    <div onClick={handleActive} className={`music-item ${actvieClass}`}>
      <span>{title}</span>
      <button className={btnClass} onClick={handleFavorite}>
        Favorite
      </button>
    </div>
  );
};

export default MusictItem;
