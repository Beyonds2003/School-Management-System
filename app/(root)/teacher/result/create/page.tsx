"use client";
import ResultTable from "@/components/shared/ResultTable";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FaCheck, FaMinus, FaPlus, FaSearch } from "react-icons/fa";
import CreateResultTable from "@/components/shared/CreateResultTable";

const page = () => {
  const [tableRowCount, setTableRowCount] = useState<number>(1);
  const [checkTableRowValid, setCheckTableRowValid] = useState<{
    [key: string]: number;
  }>({
    false: tableRowCount,
  });

  const handleTableRowPlus = () => {
    setTableRowCount(tableRowCount + 1);
  };

  const handleTableRowMinus = () => {
    if (tableRowCount > 1) {
      setTableRowCount(tableRowCount - 1);
    }
  };

  useEffect(() => {
    if (tableRowCount > 0) {
      setCheckTableRowValid({
        false: tableRowCount,
      });
    }
  }, [tableRowCount]);

  console.log(checkTableRowValid);

  return (
    <main className="p-4 space-y-8 bg-gray-100 h-screen">
      <h2 className="font-semibold text-2xl">Create Result</h2>
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
        <Button className=" flex flex-row items-center gap-2 border-primary border-[3px] text-primary font-semibold p-3 bg-white rounded-md h-[44px] px-4 hover:bg-gray-100">
          <FaSearch size={18} className="" />
          Search
        </Button>
        <div className="flex flex-row items-center gap-8">
          {/* Row Count Button */}
          <div className="flex flex-row items-center gap-3">
            <p className="text-lg font-semibold">Add Row : </p>
            <Button
              onClick={handleTableRowMinus}
              className="bg-white p-3 shadow-gray-300 shadow-sm rounded-full hover:bg-gray-100"
            >
              <FaMinus size={14} />
            </Button>
            <p className="mx-2 text-lg font-semibold">{tableRowCount}</p>
            <Button
              onClick={handleTableRowPlus}
              className="bg-white p-3 shadow-gray-300 shadow-sm rounded-full hover:bg-gray-100"
            >
              <FaPlus size={15} />
            </Button>
          </div>
          <Button
            disabled={checkTableRowValid["false"] !== 0}
            className="max-w-[200px] px-4 h-[44px] flex flex-row items-center gap-3 bg-primary text-white font-semibold p-[13px] rounded-md text-lg"
          >
            <FaCheck size={18} />
            Submit
          </Button>
        </div>
      </div>

      <CreateResultTable
        setCheckTableRowValid={setCheckTableRowValid}
        rowCount={tableRowCount}
      />
    </main>
  );
};

export default page;
