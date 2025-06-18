import { FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-gray-900 to-transparent">
      {/* Search Input */}
      <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 w-1/3">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm text-white w-full placeholder-gray-400"
        />
      </div>

      {/* User Icon */}
      <div className="flex items-center gap-2 cursor-pointer">
        <FaUserCircle className="text-2xl text-white" />
        <span className="text-sm">Profile</span>
      </div>
    </div>
  );
};

export default Topbar;
