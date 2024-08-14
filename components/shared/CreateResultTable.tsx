"use client";
import React, { useState, useEffect } from "react";
import { Table, TableBody, TableHead, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FaCheck, FaMinus, FaPlus, FaSearch } from "react-icons/fa";
import CreateResultTableRow from "./CreateResultTableRow";

const subjects = ["English", "Math", "Be", "Dld", "Dc", "Web", "C++"];

const CreateResultTable = () => {
  const [tableRowCount, setTableRowCount] = useState<number>(1);
  const [validTableRowCount, setValidTableRowCount] = useState<number>(0);
  const [resultData, setResultData] = useState(
    new Array(tableRowCount).fill({}),
  );

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
      // Create new array
      const newResultData = new Array(tableRowCount).fill({});

      // Copy old array data tp new array
      for (let i = 0; i < resultData.length; i++) {
        newResultData[i] = resultData[i];
      }

      setResultData(newResultData);

      setCheckTableRowValid({
        false: tableRowCount - validTableRowCount,
      });
    }
  }, [tableRowCount]);

  const tableHeadStyle = "table-head text-base text-black font-semibold";

  return (
    <div className="">
      {/* Result */}
      <div className="flex flex-row items-end justify-between mb-6">
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
            onClick={() => console.log(resultData)}
            className="max-w-[200px] px-4 h-[44px] flex flex-row items-center gap-3 bg-primary text-white font-semibold p-[13px] rounded-md text-lg"
          >
            <FaCheck size={18} />
            Submit
          </Button>
        </div>
      </div>
      <Table className="w-full">
        <TableBody>
          <TableRow className="bg-blue-100 hover:bg-blue-100">
            <TableHead className={tableHeadStyle}>S/N</TableHead>
            <TableHead className={tableHeadStyle}>Name</TableHead>
            <TableHead className={tableHeadStyle}>Roll No</TableHead>
            {subjects.map((item, index) => (
              <TableHead key={index} className={tableHeadStyle}>
                {item}
              </TableHead>
            ))}
          </TableRow>
          {new Array(tableRowCount).fill(0).map((_, index) => (
            <CreateResultTableRow
              setCheckTableRowValid={setCheckTableRowValid}
              setValidTableRowCount={setValidTableRowCount}
              setResultData={setResultData}
              key={index}
              num={index + 1}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CreateResultTable;
