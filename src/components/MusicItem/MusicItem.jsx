const MusictItem = ({ title }) => {
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <div className="music-item">
      <span>{title}</span>
      <button onClick={handleClick}>Favorite</button>
    </div>
  );
};

export default MusictItem;
