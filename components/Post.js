/** @format */

import {
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
        className="rounded-full h-[4rem] p-1 mr-4 hoverEffect"
      />

      {/* Right Side div */}
      <div>
        {/* Header */}
        <div className="flex justify-between p-2">
          {/* post user info */}
          <div className="space-x-2 flex justify-center items-center">
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
        <p>{post.text}</p>

        {/* post Image */}
        <img src={post.img} alt="post-img" />

        {/* Icons */}
        <div className="flex justify-between items-center p-3">
          <ChatIcon className="h-11 hoverEffect w-11 p-1.5 hover:bg-sky-100 hover:text-blue-500" />
          <HeartIcon className="h-11 hoverEffect w-11  p-1.5 hover:bg-red-100 hover:text-red-500" />
          <TrashIcon className="h-11 hoverEffect w-11 p-1.5 hover:bg-gray-100 hover:text-gray-500" />
          <ShareIcon className="h-11 hoverEffect w-11 p-1.5 hover:bg-sky-100 hover:text-blue-500" />
        </div>
      </div>
    </div>
  );
}
