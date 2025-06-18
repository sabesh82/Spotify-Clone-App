interface SongItem {
  title: string;
  artist: string;
  img: string;
}

interface SongCardProps {
  song: SongItem;
}

const SongCard = ({ song }: SongCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg p-1 hover:bg-gray-700 transition-colors cursor-pointer">
      <img
        src={song.img}
        alt={song.title}
        className="w-full h-28 object-fit rounded-md mb-2"
      />
      <h4 className="text-sm font-semibold">{song.title}</h4>
      <p className="text-xs text-gray-400">{song.artist}</p>
    </div>
  );
};

export default SongCard;
