import ResultTable from "@/components/shared/ResultTable";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";

const page = () => {
  return (
    <main className="p-4 space-y-8">
      {/* Filter Result  */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center mt-6">
        <Select>
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
        <Select>
          <SelectTrigger className=" h-[50px] focus:ring-0 ring-0 shadow-sm shadow-gray-400 ">
            <SelectValue placeholder="Term" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="first term">First Term</SelectItem>
            <SelectItem value="second term">Second Term</SelectItem>
          </SelectContent>
        </Select>
        <Select>
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
        <Select>
          <SelectTrigger className=" h-[50px] focus:ring-0 ring-0 shadow-sm shadow-gray-400 ">
            <SelectValue placeholder="Date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
            <SelectItem value="2020">2020</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Result */}
      <div className="flex flex-row items-end justify-between">
        <h2 className="font-semibold text-2xl">IT / 2 Year / 2 Term / 2024</h2>
        <div className="flex flex-row items-center gap-4">
          <Button className=" flex flex-row items-center gap-2 border-primary border-[3px] text-primary font-semibold p-3 bg-white rounded-md h-[42px] px-4 hover:bg-gray-100">
            <CiSearch size={24} className="text-blue-700 font-bold" />
            Search
          </Button>
          <Button className="max-w-[200px] px-4 flex flex-row items-center gap-3 bg-primary text-white font-semibold p-[13px] rounded-md">
            <FiDownload size={24} />
            Download
          </Button>
        </div>
      </div>

      <ResultTable />
    </main>
  );
};

export default page;
