import type { FeaturedItem } from "../assets";

const PlaylistView = ({
  playlist,
  onBack,
}: {
  playlist: FeaturedItem;
  onBack: () => void;
}) => {
  return (
    <div className="bg-gradient-to-b from-purple-900 via-purple-950 to-black p-3">
      <button
        onClick={onBack}
        className="text-sm text-white font-bold px-4 py-2 bg-black border hover:bg-gray-900 border-white/50 rounded-md mb-4"
      >
        ← Back
      </button>

      <div className="flex items-center gap-6 mb-6">
        <img src={playlist.img} className="w-48 h-48 rounded shadow-lg" />
        <div>
          <h2 className="text-sm uppercase font-semibold">Playlist</h2>
          <h1 className="text-4xl font-bold">{playlist.title}</h1>
          <p className="text-gray-400 mt-2">{playlist.desc}</p>
          <p className="text-sm text-green-400 mt-1">
            {playlist.songs.length} songs, ~
            {Math.floor(playlist.songs.length * 4)} min
          </p>
        </div>
      </div>

      <table className="w-full text-left text-sm mt-4">
        <thead>
          <tr className="text-gray-400 border-b border-gray-700">
            <th className="py-2">#</th>
            <th className="py-2">Title</th>
            <th className="py-2">Album</th>
            <th className="py-2">Date Added</th>
            <th className="py-2">Duration</th>
          </tr>
        </thead>
        <tbody>
          {playlist.songs.map((song, key) => (
            <tr key={key} className="hover:bg-gray-800">
              <td className="py-2 px-2">{key + 1}</td>
              <td className="py-2 px-2">{song.title}</td>
              <td className="py-2 px-2">{playlist.title}</td>
              <td className="py-2 px-2 text-gray-400">5 days ago</td>
              <td className="py-2 px-2">{`${2 + (key % 3)}:${
                (20 + key * 5) % 60
              }`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlaylistView;
