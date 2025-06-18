import { FaHome, FaSearch, FaBook, FaCog, FaSpotify } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-70 bg-black p-4 flex flex-col text-gray-300 h-screen border-r-1 border-white/20">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-bold text-white mb-6">Spotify-Clone</h1>
        <FaSpotify className="text-green-500 w-6 h-6 -translate-y-2" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 mb-6">
        <div className="flex items-center gap-3 hover:text-white cursor-pointer">
          <FaHome />
          <span>Home</span>
        </div>
        <div className="flex items-center gap-3 hover:text-white cursor-pointer">
          <FaSearch />
          <span>Search</span>
        </div>
        <div className="flex items-center gap-3 hover:text-white cursor-pointer">
          <FaBook />
          <span>Your Library</span>
        </div>
      </nav>

      {/* Playlist Box */}
      <div className="bg-gray-800 rounded-lg p-4 mb-4">
        <p className="text-white font-medium mb-1">
          Create your first playlist
        </p>
        <p className="text-gray-400 text-sm mb-3">It's easy, we'll help you</p>
        <button className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold hover:scale-105 transition cursor-pointer">
          Create playlist
        </button>
      </div>

      {/* Podcast Box */}
      <div className="bg-gray-800 rounded-lg p-4 mb-40">
        <p className="text-white font-medium mb-1">
          Let's find some podcasts to follow
        </p>
        <p className="text-gray-400 text-sm mb-3">
          We'll keep you updated on new episodes
        </p>
        <button className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold hover:scale-105 transition cursor-pointer">
          Browse podcasts
        </button>
      </div>

      <div className="flex items-center gap-3 hover:text-white cursor-pointer">
        <FaCog />
        <p>Settings</p>
      </div>
    </div>
  );
};

export default Sidebar;
