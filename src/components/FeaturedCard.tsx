interface FeaturedItem {
  title: string;
  desc: string;
  img: string;
}

interface FeaturedCardProps {
  data: FeaturedItem;
  onClick: () => void;
}

const FeaturedCard = ({ data, onClick }: FeaturedCardProps) => {
  const { title, desc, img } = data;

  return (
    <div
      className="rounded-lg bg-zinc-900 overflow-hidden cursor-pointer group hover:scale-[1.02] transition-transform duration-200 shadow-lg"
      onClick={onClick}
    >
      <img src={img} alt={title} className="w-full h-40 object-fit" />
      <div className=" p-3">
        <h3 className="text-white font-semibold text-lg truncate">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2">{desc}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
