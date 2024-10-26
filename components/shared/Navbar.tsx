import Image from "next/image";
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { getUserData } from "./home/Test";
import ProfileImage from "./ProfileImage";

const Navbar = ({ role }: { role: "teacher" | "student" }) => {
  const userData = getUserData(role);

  return (
    <nav className=" px-4  bg-white shadow-gray-300 shadow-sm  w-full h-24 flex items-center justify-between">
      <div className="font-bold text-3xl">
        {userData.type.charAt(0).toUpperCase() + userData.type.slice(1)}
      </div>
      <div className="flex flex-row gap-5 items-center">
        <button>
          <IoMdNotificationsOutline size={30} />
        </button>
        <div className="flex gap-3 flex-row items-center px-3 border-gray-400 border-l-[1px]">
          <div>
            <p className="font-semibold">{userData.name}</p>
          </div>
          <ProfileImage
            image={userData.image}
            name={userData.name}
            width={40}
            height={40}
            textSize="text-base"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
