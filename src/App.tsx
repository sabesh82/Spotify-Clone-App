import { useState } from "react";
import Sidebar from "./components/SideBar";
import Topbar from "./components/Topbar";
import CategoryFilter from "./components/CategoryFilter";
import FeaturedCard from "./components/FeaturedCard";
import assets from "./assets";
import Player from "./components/Player";
import SongCard from "./components/SongCard";
import PlaylistView from "./components/PlaylistView";

const App = () => {
  const [selectedPlaylistIndex, setSelectedPlaylistIndex] = useState<
    number | null
  >(null);

  const handleCardClick = (index: number) => {
    setSelectedPlaylistIndex(index);
  };

  const handleBack = () => {
    setSelectedPlaylistIndex(null);
  };

  return (
    <div className="flex h-screen w-screen bg-black text-white overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />

        <div className="p-4 overflow-y-auto flex-1">
          {selectedPlaylistIndex === null ? (
            <>
              <CategoryFilter />

              <h2 className="text-xl font-bold mt-6 mb-4">Featured Charts</h2>
              <div className="grid grid-cols-6 gap-4">
                {assets.featured.map((item, i) => (
                  <FeaturedCard
                    key={i}
                    data={item}
                    onClick={() => handleCardClick(i)}
                  />
                ))}
              </div>

              <h2 className="text-xl font-bold mt-6 mb-4">
                Today's biggest hits
              </h2>
              <div className="w-full overflow-x-auto scrollbar-hide">
                <div className="flex gap-4">
                  {assets.hits.map((song, i) => (
                    <div key={i} className="min-w-[150px]">
                      <SongCard song={song} />
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <PlaylistView
              playlist={assets.featured[selectedPlaylistIndex]}
              onBack={handleBack}
            />
          )}
        </div>

        <Player />
      </div>
    </div>
  );
};

export default App;
