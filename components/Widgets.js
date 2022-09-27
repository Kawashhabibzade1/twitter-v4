/** @format */
import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import News from "./News";
const Widgets = ({ newsResults }) => {
  const [change, setChange] = useState(1);

  return (
    <>
      <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
        <div className=" sticky top-0 bg-white py-1.5 z-50">
          <div className="flex items-center relative rounded-full p-3 w-[90%] xl:w-[75%] ">
            <SearchIcon className="h-5 z-50" />
            <input
              className="absolute
               rounded-full inset-0 pl-11
                bg-gray-100 text-gray-700 
                border focus:bg-white border-gray-300
                 focus:shadow-lg"
              placeholder="Search Twitter"
            />
          </div>
        </div>
        <div className="  xl:w-[75%] w-[90%] text-gray-700 space-y-3 bg-gray-100 rounded-xl  border border-gray-300 p-3">
          <h4 className="text-bold text-xl ">Whats happening?</h4>
          {newsResults.slice(0, change).map((article) => (
            <News key={article.title} article={article} />
          ))}
          <button
            className="text-blue-300 hover:text-blue-400"
            onClick={() => setChange(change + 3)}>
            Show more...
          </button>
        </div>
      </div>
    </>
  );
};

export default widgets;
