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
    <div>
      {/* Sidebar logo */}
      <div className="hoverEffect m-1">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png"
          width={47}
          height={47}
          layout="intrinsic"></Image>
      </div>
      {/* Menu */}
      <div className="">
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
      <button>tweet</button>
      {/* Sidebar mini-profile */}
      <div className="hoverEffect flex  items-center xl:justify-start">
        <img
          className="rounded-full"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQH7xcKUw3Svfg/profile-displayphoto-shrink_100_100/0/1657620735523?e=1666224000&v=beta&t=ssizmeOh18nM_NQsDsbu5r7-hbOOYQ7Httw30yPguMk"
          alt="my-profile"
          width={50}
          height={50}
        />
        <div className="flex ">
          <h4>Mir Kawash Habibzade</h4>
          <p>Creative Head</p>
          <DotsHorizontalIcon className="h-5 ml-3" />
        </div>
      </div>
    </div>
  );
}
