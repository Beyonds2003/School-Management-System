import { getTextColorBasedOnBackground, stringToColor } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  id: number;
  image: string;
  name: string;
  year: number;
  major: string;
  term: string;
  gender: string;
};

const StudentCard = ({ id, image, name, year, major, term, gender }: Props) => {
  const avatarColor = stringToColor(name);
  const avatarTextColor = getTextColorBasedOnBackground(avatarColor);

  return (
    <article
      className={` mt-4 relative flex flex-row gap-8 shadow-gray-500 shadow-sm rounded-lg p-4 items-start`}
    >
      {/* Image */}
      <div>
        {image === "" ? (
          <div
            className={`rounded-full w-20 h-20 flex justify-center items-center`}
            style={{ backgroundColor: avatarColor }}
          >
            <p
              className="text-3xl font-semibold"
              style={{ color: avatarTextColor }}
            >
              {name.split(" ").length > 1
                ? name.split(" ")[0][0] + name.split(" ")[1][0]
                : name[0]}
            </p>
          </div>
        ) : (
          <Image
            src={image}
            width={60}
            height={60}
            className="rounded-full object-cover h-20 w-20"
            alt="student profile image"
          />
        )}
      </div>

      {/* Details */}
      <div className="w-full z-10">
        <p className="text-2xl font-bold">{name}</p>

        <div className="flex text-lg flex-row font-semibold mt-4">
          <p className="pr-4 border-r-[1px] border-gray-500">{major}</p>
          <p className="px-4 border-r-[1px] border-gray-500">
            {year} Year - {term} Term
          </p>
          <p className="pl-4">{gender}</p>
        </div>
        <div className="mt-6">
          <div className="flex flex-row  justify-between font-semibold">
            <p>Overall Performance</p>
            <p>80%</p>
          </div>
          <div className="w-full h-2 mt-4 bg-gray-300 rounded-md">
            <div className="w-[80%] h-full bg-primary rounded-md" />
          </div>
        </div>
      </div>

      {/* Watermark Logo */}
      {/* 
        <div className="absolute top-0 right-0">
        <Image
          src={"/images/Hmawbi-logo.png"}
          alt="School logo"
          width={140}
          height={100}
          className="object-cover opacity-50"
          style={{
            filter: "opacity(0.5)",
          }}
        />
      </div>
     */}
    </article>
  );
};

export default StudentCard;
