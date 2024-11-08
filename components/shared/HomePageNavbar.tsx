import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getUserRole } from "./home/Test";

const HomePageNavbar = () => {
  const userRole = getUserRole();
  return (
    <nav
      style={{ background: "transparent" }}
      className="bg-red-50 p-4 absolute top-0 left-0 right-0 z-10"
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-6 items-center">
          <Image
            src={"/images/Hmawbi-logo.png"}
            width={60}
            height={60}
            alt={"Hmawbi logo"}
          />
          <div className="text-4xl text-white text-start">
            <p className="font-bold">Hmawbi Technological</p>
            <p className="font-semibold text-2xl mt-[-4px]">University</p>
          </div>
        </div>
        {userRole !== null ? (
          <Link
            href={`${userRole}`}
            className="mx-4 bg-white text-black text-lg font-semibold p-2 px-6 rounded-lg"
          >
            Dashboard
          </Link>
        ) : (
          <Link
            href="/login"
            className="mx-4 bg-white text-black text-lg font-semibold p-2 px-6 rounded-lg"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default HomePageNavbar;
