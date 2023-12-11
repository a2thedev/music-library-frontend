import MusictItem from "../MusicItem/MusicItem";

const MusicTable = ({ music = [], activeIndex, setActiveIndex }) => {
  const musicItems = music.map((song, i) => (
    <MusictItem
      key={song.title}
      title={song.title}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      index={i}
    />
  ));
  return (
    <div className="flex-item">
      <h4>My Music</h4>
      <div>{musicItems}</div>
    </div>
  );
};

export default MusicTable;
