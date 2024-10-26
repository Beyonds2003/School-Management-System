import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";

type Props = {
  num: number;
  name: string;
  roll: number;
  result: {
    subject: string;
    marks: string;
  }[];
};

const ResultTableRow = ({ num, name, roll, result }: Props) => {
  return (
    <TableRow className="">
      <TableCell className="table-des">{num}.</TableCell>
      <TableCell className="table-des cursor-pointer min-w-[170px] hover:text-primary">
        {name}
      </TableCell>
      <TableCell className="table-des">{roll}</TableCell>
      {result.map((item, index) => {
        let mark = "";
        if (+item.marks < 40) {
          mark = "D";
        } else if (+item.marks < 60) {
          mark = "C";
        } else if (+item.marks < 80) {
          mark = "B";
        } else if (+item.marks < 100) {
          mark = "A";
        }
        return (
          <TableCell
            key={index}
            className="table-des cursor-pointer min-w-[80px] hover:text-primary"
          >
            {mark}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default ResultTableRow;
