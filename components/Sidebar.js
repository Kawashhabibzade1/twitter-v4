/** @format */

import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { DotsHorizontalIcon, HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  BookmarkIcon,
  InboxIcon,
  ClipboardIcon,
  DocumentIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full ">
      {/* Sidebar logo */}
      <div className="hoverEffect  hover:bg-blue-100 xl:px-[1px] sm:p-2 ">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png"
          width={40}
          height={35}></Image>
      </div>
      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="List" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      {/* button */}
      <button className="bg-blue-400 w-56 h-12 rounded-full hover:brightness-95 text-white font-bold shadow-md text-lg hidden xl:inline">
        tweet
      </button>
      {/* Sidebar mini-profile */}
      <div className="hoverEffect  flex  items-center justify-center xl:justify-start mt-auto">
        <img
          className="rounded-full  xl:mr-2 w-10 h-10 "
          src="https://media-exp1.licdn.com/dms/image/C4D03AQH7xcKUw3Svfg/profile-displayphoto-shrink_100_100/0/1657620735523?e=1666224000&v=beta&t=ssizmeOh18nM_NQsDsbu5r7-hbOOYQ7Httw30yPguMk"
          alt="my-profile"
        />
        <div className="flex flex-col">
          <h4 className="font-bold hidden leading-5  xl:inline ">
            Mir Kawash Habibzade
          </h4>
          <p className="hidden xl:inline  text-gray-500">
            Co-Founder & Creative Head
          </p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
}
