import { useState } from "react";

const categories = ["All", "Music", "Podcasts","Trending"];

const CategoryFilter = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="flex gap-3 overflow-x-auto">
      {categories.map((item, key) => (
        <button
          key={key}
          onClick={() => setActive(item)}
          className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors duration-200
            ${
              active === item
                ? "bg-white text-black font-semibold"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
