import { useState } from "react";
import ResCategoryItems from "./ResCategoryItems";

const RestaurentMenuCategory = ({ menuCategory }) => {
  // console.log(menuCategory)

  const [isOpen, setIsopen] = useState(true)

  const HandleAccordian = () => {
    setIsopen(prev => !prev)
  }
 
  return (
    <div className="max-w-4xl mx-auto mt-10">
      {/* Whole Category Container */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Category Header */}
        <div className="px-6 py-5 flex justify-between items-center cursor-pointer" onClick={() => HandleAccordian()}>
          <h2 className="text-xl md:text-2xl font-bold">
            {menuCategory?.card?.card?.title}{" "}
            {"(" + menuCategory?.card?.card?.itemCards?.length + ")"}
          </h2>

          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <div className="border-t"></div>

       {isOpen && <ResCategoryItems resCategoryItems = {menuCategory}/>} 
      </div>
    </div>
  );
};

export default RestaurentMenuCategory;
