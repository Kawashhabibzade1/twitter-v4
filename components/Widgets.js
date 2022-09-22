/** @format */
import { SearchIcon } from "@heroicons/react/outline";
const widgets = () => {
  return (
    <>
      <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
        <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
          <div className="flex items-center relative rounded-full p-3 ">
            <SearchIcon className="h-5 z-50" />
            <input
              className="absolute rounded-full inset-0 pl-11 bg-gray-100 text-gray-700 border focus:bg-white border-gray-300 focus:shadow-lg"
              placeholder="Search Twitter"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default widgets;
