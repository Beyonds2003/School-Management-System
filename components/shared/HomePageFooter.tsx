import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const HomePageFooter = () => {
  return (
    <footer className="bg-primary font-semibold text-white">
      <div className="flex flex-row p-10 pt-16 justify-evenly">
        <div className="text-center space-y-3 font-medium">
          <p className="font-bold text-xl">About University</p>
          <p className="text-gray-200">News And Announcements</p>
          <p className="text-gray-200">Departments</p>
          <p className="text-gray-200">Student Communities</p>
        </div>
        <div className="text-center space-y-3 font-medium">
          <p className="font-bold text-xl">Online Registration</p>
          <p className="text-gray-200">Programs</p>
          <p className="text-gray-200">Events And Activities</p>
          <p className="text-gray-200">Research</p>
        </div>
        <div className="text-center space-y-3 font-medium">
          <p className="font-bold text-xl">Organization</p>
          <p className="text-gray-200">Collboration Programs</p>
          <p className="text-gray-200">Campus Map</p>
          <p className="text-gray-200">Library</p>
        </div>
      </div>

      <div className="flex flex-row items-end justify-between p-6 px-10">
        <div className="text-gray-200">
          <p>Copyright @ 2024</p>
          <p>From Teachers and Students</p>
        </div>
        <div className="text-center ml-28">
          <p className="text-3xl">Hmawbi Technological</p>
          <p className="text-2xl mt-[-2px] font-medium">University</p>
          <div className="flex justify-center mt-2">
            <Image
              src={"/images/Hmawbi-logo.png"}
              width={60}
              height={60}
              alt={"Hmawbi logo"}
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-14">
          <FaFacebookF size={55} />
          <FaViber size={55} />
          <FaYoutube size={67} />
        </div>
      </div>
    </footer>
  );
};

export default HomePageFooter;
