import React from "react";
import { IoPeopleOutline } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { MdAccessTime } from "react-icons/md";
import TotalCard from "./shared/TotalCard";
import { backend_url } from "@/lib/constant";

const getTotalSAT = async (): Promise<{
  student_total: number;
  teacher_total: number;
}> => {
  const res = await fetch(`${backend_url}/totalSAT`, {
    method: "GET",
    cache: "no-store"
  });
  const data = await res.json()
  return data
}

const TotalCardContainer = async ({ timelineLength }: { timelineLength: number }) => {

  const totalSAT = await getTotalSAT()
  const totalCardItems = [
    {
      title: "Total Students",
      value: totalSAT.student_total,
      icon: <IoPeopleOutline size={28} />,
      bgColor: "bg-green-100",
    },
    {
      title: "Total Teacher",
      value: totalSAT.teacher_total,
      icon: <PiStudent size={28} />,
      bgColor: "bg-pink-100",
    },
    {
      title: "Total Timeline",
      value: timelineLength,
      icon: <MdAccessTime size={28} />,
      bgColor: "bg-red-100",
    },
  ]


  return (
    <article className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
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
