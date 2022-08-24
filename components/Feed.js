/** @format */

import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: 1,
      name: "Mir Kawash Habibzade",
      username: "React Developer ",
      userImg:
        "https://media-exp1.licdn.com/dms/image/C4D03AQH7xcKUw3Svfg/profile-displayphoto-shrink_100_100/0/1657620735523?e=1666224000&v=beta&t=ssizmeOh18nM_NQsDsbu5r7-hbOOYQ7Httw30yPguMk",
      img: "https://images.unsplash.com/photo-1525770041010-2a1233dd8152?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      timeStamp: "2 hours ago..",
    },
    {
      id: 2,
      name: "Mir Kawash Habibzade",
      username: "Mir Kawash ",
      userImg:
        "https://media-exp1.licdn.com/dms/image/C4D03AQH7xcKUw3Svfg/profile-displayphoto-shrink_100_100/0/1657620735523?e=1666224000&v=beta&t=ssizmeOh18nM_NQsDsbu5r7-hbOOYQ7Httw30yPguMk",
      img: "https://images.unsplash.com/photo-1585250003680-b12dbff01e65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      timeStamp: "2 hours ago..",
    },
  ];

  return (
    <div className="xl:ml-[23.125rem] sm:ml-[73px]  flex-grow border-l border-r min-w-[576px] max-w-xl ">
      <div className="flex sticky z-50 border-b border-gray-400 py-3 px-3 top-0 bg-white">
        <h3 className="font-bold text-lg mt-1 sm:text-xl">Home</h3>
        <div className=" hoverEffect flex justify-center px-0 items-center ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />

      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}
