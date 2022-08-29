/** @format */

import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import React from "react";

export default function Post({ post }) {
  return (
    <div className="flex justify-start items-start p-2 mr-1 cursor-pointer">
      {/* Image */}
      <img
        src={post.userImg}
        alt="user-img"
        className="rounded-full p-1 w-[4rem] h-[4rem] hoverEffect shadow-md shadow-sky-200 brightness-95"
      />

      {/* Right Side div */}
      <div>
        {/* Header */}
        <div className="flex justify-between p-2">
          {/* post user info */}
          <div className="space-x-1 flex justify-center items-center whitespace-nowrap">
            <h4 className="font-bold text-lg hover:underline ">{post.name}</h4>
            <span className="text-gray-500 text-sm sm:text-md ">
              @{post.username}
            </span>
            <span className="text-gray-300">{post.timeStamp}</span>
          </div>

          {/* dot Icon */}
          <div>
            <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-blue-500" />
          </div>
        </div>
        {/* post Text */}
        <p className="ml-2.5 mb-2 text-sm sm:text-lg">{post.text}</p>

        {/* post Image */}
        <img
          src={post.img}
          alt="post-img"
          className="rounded-2xl mr-2 shadow-lg shadow-sky-200"
        />

        {/* Icons */}
        <div className="flex justify-between items-center p-3">
          <ChatIcon className="h-11 hoverEffect w-11 p-1.5 hover:bg-sky-100 hover:text-blue-500" />
          <HeartIcon className="h-11 hoverEffect w-11  p-1.5 hover:bg-red-100 hover:text-red-500" />
          <TrashIcon className="h-11 hoverEffect w-11 p-1.5 hover:bg-gray-100 hover:text-gray-500" />
          <ShareIcon className="h-11 hoverEffect w-11 p-1.5 hover:bg-sky-100 hover:text-blue-500" />
          <ChartBarIcon className="h-11 hoverEffect w-11 p-1.5 hover:bg-yellow-100 hover:text-yellowç-500" />
        </div>
      </div>
    </div>
  );
}
