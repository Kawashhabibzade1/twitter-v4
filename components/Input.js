/** @format */

import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";

export default function Input() {
  return (
    <div className="flex space-x-3 w-full p-5 border-b border-gray-200 ">
      <img
        className="w-11 h-11 rounded-full cursor-pointer hover:brightness-95 "
        src="https://media-exp1.licdn.com/dms/image/C4D03AQH7xcKUw3Svfg/profile-displayphoto-shrink_100_100/0/1657620735523?e=1666224000&v=beta&t=ssizmeOh18nM_NQsDsbu5r7-hbOOYQ7Httw30yPguMk"
        alt="user-img"
      />

      <div className="w-full">
        <div className="w-full ">
          <textarea
            rows="2"
            className="w-full min-h-[50px] text-lg placeholder-gray-400 text-gray-700 focus:ring-0 tracking-wide "
            placeholder="What's happening"></textarea>
        </div>
        <div>
          <div className="flex">
            <PhotographIcon className="w-10" />
            <EmojiHappyIcon className="w-10" />
          </div>
          <button>Tweet</button>
        </div>
      </div>
    </div>
  );
}
