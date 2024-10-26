"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

const TimetableSelect = ({ rootRoute }: { rootRoute: string }) => {
  const [value, setValue] = useState({
    year: "",
    term: "",
    major: "",
  });

  const router = useRouter();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Select onValueChange={(val) => setValue({ ...value, major: val })}>
        <SelectTrigger className=" h-[50px] focus:ring-0 ring-0 shadow-sm shadow-gray-200 ">
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

      <Select onValueChange={(val) => setValue({ ...value, year: val })}>
        <SelectTrigger className="h-[50px]  focus:ring-0 ring-0 shadow-sm shadow-gray-200 ">
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
      <Select onValueChange={(val) => setValue({ ...value, term: val })}>
        <SelectTrigger className=" h-[50px] focus:ring-0 ring-0 shadow-sm shadow-gray-200 ">
          <SelectValue placeholder="Term" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">First</SelectItem>
          <SelectItem value="2">Second</SelectItem>
        </SelectContent>
      </Select>
      <button
        className="search-button"
        onClick={() =>
          router.push(
            `${rootRoute}?major=${value.major}&year=${value.year}&term=${value.term}`,
          )
        }
      >
        <FaSearch size={18} />
        <p className="font-semibold">Search</p>
      </button>
    </div>
  );
};

export default TimetableSelect;
