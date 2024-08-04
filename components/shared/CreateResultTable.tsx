"use client";
import React from "react";
import { Table, TableBody, TableHead, TableRow } from "@/components/ui/table";
import CreateResultTableRow from "./CreateResultTableRow";

const subjects = ["English", "Math", "Be", "Dld", "Dc", "Web", "C++"];

type Props = {
  rowCount: number;
  setCheckTableRowValid: React.Dispatch<React.SetStateAction<boolean[]>>;
};

const CreateResultTable = ({ rowCount, setCheckTableRowValid }: Props) => {
  const tableHeadStyle = "table-head text-base text-black font-semibold";

  return (
    <div className="">
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
          {new Array(rowCount).fill(0).map((_, index) => (
            <CreateResultTableRow
              setCheckTableRowValid={setCheckTableRowValid}
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
