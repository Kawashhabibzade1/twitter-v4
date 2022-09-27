/** @format */
import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import News from "./News";
const Widgets = ({ newsResults, randomUserResults }) => {
  const [change, setChange] = useState(3);
  const [changeR, setChangeR] = useState(3);

  return (
    <>
      <div className="xl:w-[600px] hidden sm:inline ml-8 space-y-5">
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

        <div className="xl:w-[75%] w-[90%] text-gray-600 space-y-3 bg-gray-100 rounded-xl p-2">
          <h4 className="text-gray-700 text-lg font-bold">Who to Follow?</h4>
          {randomUserResults.slice(0, changeR).map((randomUser) => (
            <div
              key={randomUser.login.username}
              className="flex items-center justify-between hover:bg-gray-200 p-2 cursor-pointer rounded-xl">
              <img
                src={randomUser.picture.thumbnail}
                alt=""
                className="rounded-lg w-12"
              />
              <div className="flex-col  ">
                <div className="flex space-x-1.5 font-serif">
                  <h4>{randomUser.name.title}</h4>
                  <h4>{randomUser.name.first}</h4>
                  <h4>{randomUser.name.last}</h4>
                </div>
                <h4 className="text-gray-400">@{randomUser.login.username}</h4>
              </div>
              <button className="rounded-xl w-[5rem] h-7  bg-blue-400 hover:bg-blue-500 text-white">
                follow
              </button>
            </div>
          ))}
          <button
            className="text-blue-300 hover:text-blue-500 "
            onClick={() => {
              setChangeR(changeR + 3);
            }}>
            Show more...
          </button>
        </div>
      </div>
    </>
  );
};

export default Widgets;
