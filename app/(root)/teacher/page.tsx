import EventCalander from "@/components/ui/EventCalander";
import TotalCard from "@/components/ui/TotalCard";
import React from "react";
import { IoPeopleOutline } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { MdAccessTime } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import EventCard from "@/components/ui/EventCard";
import TeacherTimelineTable from "@/components/ui/TeacherTimelineTable";

const Admin = () => {
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

  return (
    <main className="p-6">
      <h2 className="text-xl font-semibold">Overview</h2>
      <div className=" flex flex-row">
        <section className=" w-[74%] h-full pr-5">
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-6">
            {totalCardItems.map((item, index) => (
              <TotalCard
                key={index}
                title={item.title}
                value={item.value}
                icon={item.icon}
                bgColor={item.bgColor}
              />
            ))}
          </div>
          <p className="mt-6 text-xl font-semibold">Today's Timeline</p>
          <TeacherTimelineTable />
        </section>

        <section className="w-[26%] h-full">
          <div className="w-full flex flex-col  items-center">
            <EventCalander />
          </div>
          <div className="mt-4 p-4 shadow-gray-500 shadow-sm rounded-lg">
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-lg font-semibold">Upcoming Events</h2>
              <button className="bg-blue-300 p-2 rounded-lg">
                <FaPlus size={20} />
              </button>
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <EventCard
                title={"First Term Examination"}
                date={"11 of October 2024"}
                time={"2:00 - 4:00 PM"}
              />
              <EventCard
                title={"Second Term Examination"}
                date={"23 of January 2025"}
                time={"2:00 - 4:00 PM"}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Admin;
