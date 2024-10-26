"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const StudentTeacherSelect = ({
  rootRoute,
  route,
}: {
  rootRoute: string;
  route: "teacher" | "student";
}) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [value, setValue] = useState({
    year: "",
    term: "",
    major: "",
    gender: "",
  });

  const handleStudentSearch = async () => {
    const year = value.year.length === 0 ? undefined : value.year;
    const term = value.term.length === 0 ? undefined : value.term;
    const major = value.major.length === 0 ? undefined : value.major;
    const gender = value.gender.length === 0 ? undefined : value.gender;
    const name = search.length === 0 ? undefined : search;
    router.push(
      `${rootRoute}?q=${name}&year=${year}&term=${term}&major=${major}&gender=${gender}`,
    );
    setSearch("");
    setValue({
      year: "",
      term: "",
      major: "",
      gender: "",
    });
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center mt-6">
        <Select
          value={value.year}
          onValueChange={(val) => setValue({ ...value, year: val })}
        >
          <SelectTrigger className="h-[50px] focus:ring-0 ring-0 shadow-sm shadow-gray-400 ">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Year</SelectItem>
            <SelectItem value="2">2 Year</SelectItem>
            <SelectItem value="3">3 Year</SelectItem>
            <SelectItem value="4">4 Year</SelectItem>
            <SelectItem value="5">5 Year</SelectItem>
            <SelectItem value="6">6 Year</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={value.term}
          onValueChange={(val) => setValue({ ...value, term: val })}
        >
          <SelectTrigger className=" h-[50px] focus:ring-0 ring-0 shadow-sm shadow-gray-400 ">
            <SelectValue placeholder="Term" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">First Term</SelectItem>
            <SelectItem value="2">Second Term</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={value.major}
          onValueChange={(val) => setValue({ ...value, major: val })}
        >
          <SelectTrigger className=" h-[50px] focus:ring-0 ring-0 shadow-sm shadow-gray-400 ">
            <SelectValue placeholder="Major" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="it">It</SelectItem>
            <SelectItem value="civil">Civil</SelectItem>
            <SelectItem value="archi">Archi</SelectItem>
            <SelectItem value="ep">Ep</SelectItem>
            <SelectItem value="ec">Ec</SelectItem>
            <SelectItem value="mc">Mc</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={value.gender}
          onValueChange={(val) => setValue({ ...value, gender: val })}
        >
          <SelectTrigger className=" h-[50px] focus:ring-0 ring-0 shadow-sm shadow-gray-400 ">
            <SelectValue placeholder="Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Search Student */}
      <div className="mt-8 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-2">
          <div className="border-[1px] bg-white max-w-[260px] flex flex-row items-center rounded-md shadow-gray-400 shadow-sm gap-2 border-gray-300 pl-2">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search ${route === "teacher" ? "Teacher" : "Student"}`}
              className="w-full placeholder-gray-500 p-3 border-r-[2px] border-gray-200  focus:outline-none"
            />
          </div>
          <Button
            onClick={handleStudentSearch}
            className="bg-primary p-6 px-4 rounded-lg text-white shadow-gray-500 shadow-sm"
          >
            <FaSearch size={20} />
          </Button>
        </div>

        <div className="flex flex-row items-center gap-4">
          <Link
            href={`${rootRoute}/create`}
            className="max-w-[200px] min-w-[175px] h-[49px] flex flex-row items-center gap-2 border-primary border-[3px] text-primary font-semibold p-3 rounded-md"
          >
            <FaPlus size={20} />
            Create {route === "teacher" ? "Teacher" : "Student"}
          </Link>
          <button className="max-w-[200px] px-4 flex flex-row items-center gap-3 bg-primary text-white font-semibold p-[13px] rounded-md">
            <FiDownload size={24} />
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentTeacherSelect;
