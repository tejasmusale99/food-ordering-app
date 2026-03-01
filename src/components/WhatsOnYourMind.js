import useRestaurentCards from "../hooks/useRestaurentCards";

const WhatsOnYourMind = () => {
  const { whatsOnMind } = useRestaurentCards();

  const title = whatsOnMind?.card?.card?.header?.title;
  const whatsOnMindData = whatsOnMind?.card?.card?.imageGridCards?.info;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      </div>

      {/* Scroll Container */}
      <div className="flex gap-8 overflow-x-auto pb-6">
        {whatsOnMindData?.map((item) => (
          <div
            key={item?.id}
            className="flex-shrink-0 cursor-pointer transition duration-300 hover:scale-105"
          >
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-white shadow-lg flex items-center justify-center">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                  item?.imageId
                }
                alt="category"
                className="w-24 h-24 md:w-36 md:h-36 object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="border-b mt-8"></div>
    </div>
  );
};

export default WhatsOnYourMind;
