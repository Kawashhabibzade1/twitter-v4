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
    <div className="flex justify-start items-start p-2">
      {/* Image */}
      <img
        src={post.userImg}
        alt="user-img"
        className="rounded-full h-[4rem] p-1"
      />

      {/* Right Side div */}
      <div>
        {/* Header */}
        <div className="flex justify-between p-2">
          {/* post user info */}
          <div>
            <h4 className="font-bold text-lg">{post.name}</h4>
            <span className="text-gray-500">{post.username}</span>
            <span className="text-gray-300">{post.timeStamp}</span>
          </div>

          {/* dot Icon */}
          <div>
            <DotsHorizontalIcon className="h-10" />
          </div>
        </div>
        {/* post Text */}
        <p>{post.text}</p>

        {/* post Image */}
        <img src={post.img} alt="post-img" />

        {/* Icons */}
        <div className="flex justify-between items-center p-3">
          <ChatIcon className="h-9" />
          <HeartIcon className="h-9" />
          <TrashIcon className="h-9" />
          <ShareIcon className="h-9" />
        </div>
      </div>
    </div>
  );
}
