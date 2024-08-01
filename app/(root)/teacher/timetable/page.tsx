import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StudentTimetable from "@/components/shared/StudentTimetable";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

const page = () => {
  return (
    <main className="p-4">
      {/* Timetable Title */}
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <h2 className="text-2xl font-semibold">Timetable</h2>
          <Link
            href={"/teacher/timetable/create"}
            className="p-2 rounded-full shadow-gray-100 shadow-sm border-[2px]"
          >
            <FaPlus size={20} />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Select>
            <SelectTrigger className="h-[50px] w-[150px] focus:ring-0 ring-0 shadow-sm shadow-gray-200 ">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Year</SelectItem>
              <SelectItem value="2">2 Year</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className=" h-[50px] w-[200px] focus:ring-0 ring-0 shadow-sm shadow-gray-200 ">
              <SelectValue placeholder="Term" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="first term">First Term</SelectItem>
              <SelectItem value="second term">Second Term</SelectItem>
            </SelectContent>
          </Select>
          <button className="flex flex-row text-primary items-center gap-4 h-[48px] pl-4 border-[2px] border-primary rounded-lg px-6 shadow-sm shadow-gray-200 p-2">
            <CiSearch size={25} color="blue" />
            <p className="font-semibold">Search</p>
          </button>
        </div>
      </div>

      {/* Timetable */}
      <div className="p-2">
        <StudentTimetable role="teacher" />
      </div>
    </main>
  );
};

export default page;
