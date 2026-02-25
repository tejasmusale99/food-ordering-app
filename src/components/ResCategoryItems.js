const ResCategoryItems = ({ resCategoryItems }) => {
  const menuItems = resCategoryItems?.card?.card?.itemCards;
  console.log(menuItems);

  return (
    <div className="divide-y">
      {/* Item 1 */}
      <div className="p-6 flex flex-col md:flex-row justify-between gap-6">
        {/* Left */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Margherita</h3>

          <p className="text-gray-900 font-semibold mt-1">₹169</p>

          <p className="text-green-600 text-sm mt-1">★ 4.0 (167)</p>

          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            Classic cheese pizza topped with signature pan sauce and mozzarella.
            Perfect for cheese lovers.
          </p>
        </div>

        {/* Right */}
        <div className="relative w-full md:w-44 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1601924582975-7e3e63fbe3e1"
            alt="pizza"
            className="w-full h-36 object-cover rounded-xl"
          />

          <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-xl shadow-md font-semibold text-green-600">
            ADD
          </button>

          <p className="text-center text-xs text-gray-400 mt-2">Customisable</p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="p-6 flex flex-col md:flex-row justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Veggie Feast</h3>

          <p className="text-gray-900 font-semibold mt-1">₹269</p>

          <p className="text-green-600 text-sm mt-1">★ 4.2 (143)</p>

          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            Fresh capsicum, sweet corn, onions and mozzarella with flavourful
            pan sauce.
          </p>
        </div>

        <div className="relative w-full md:w-44 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1594007654729-407eedc4be65"
            alt="pizza"
            className="w-full h-36 object-cover rounded-xl"
          />

          <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-xl shadow-md font-semibold text-green-600">
            ADD
          </button>

          <p className="text-center text-xs text-gray-400 mt-2">Customisable</p>
        </div>
      </div>
    </div>
  );
};

export default ResCategoryItems;
