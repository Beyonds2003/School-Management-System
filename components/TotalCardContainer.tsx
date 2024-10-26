import React from "react";
import { IoPeopleOutline } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { MdAccessTime } from "react-icons/md";
import TotalCard from "./shared/TotalCard";

const totalCardItems = [
  {
    title: "Total Students",
    value: 102,
    icon: <IoPeopleOutline size={28} />,
    bgColor: "bg-green-100",
  },
  {
    title: "Total Teacher",
    value: 40,
    icon: <PiStudent size={28} />,
    bgColor: "bg-pink-100",
  },
  {
    title: "Total Timeline",
    value: 5,
    icon: <MdAccessTime size={28} />,
    bgColor: "bg-red-100",
  },
];

const TotalCardContainer = () => {
  return (
    <article className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-6">
      {totalCardItems.map((item, index) => (
        <TotalCard
          key={index}
          title={item.title}
          value={item.value}
          icon={item.icon}
          bgColor={item.bgColor}
        />
      ))}
    </article>
  );
};

export default TotalCardContainer;
