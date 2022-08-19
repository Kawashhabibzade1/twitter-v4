/** @format */

import { SparklesIcon } from "@heroicons/react/outline";

export default function Feed() {
  return (
    <div className="xl:ml-[23.125rem] sm:ml-[73px]  flex-grow border-l border-r min-w-[576px] max-w-xl">
      <div className="flex sticky z-50 border-b border-gray-400 py-3 px-3 top-0">
        <h3 className="font-bold text-lg mt-1 sm:text-xl">Home</h3>
        <div className=" hoverEffect flex justify-center px-0 items-center ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
    </div>
  );
}
