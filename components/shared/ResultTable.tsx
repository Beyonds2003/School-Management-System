import React from "react";
import { Table, TableBody, TableHead, TableRow } from "@/components/ui/table";
import ResultTableRow from "./ResultTableRow";
import { StudentResult } from "@/lib/responseType";

const ResultTable = ({ data }: { data: StudentResult[] }) => {
  const tableHeadStyle = "table-head text-base text-black font-semibold";

  return (
    <div className="">
      {data === undefined ? (
        <div className="text-center">Find your exam result</div>
      ) : (
        <>
          {data.length === 0 || data === undefined ? (
            <div className="text-center">Result has not been created</div>
          ) : (
            <Table className="w-full">
              <TableBody>
                <TableRow className="bg-blue-100 hover:bg-blue-100">
                  <TableHead className={tableHeadStyle}>S/N</TableHead>
                  <TableHead className={tableHeadStyle}>Name</TableHead>
                  <TableHead className={tableHeadStyle}>Roll No</TableHead>
                  {data[0].result.map((item, index) => (
                    <TableHead key={index} className={tableHeadStyle}>
                      {item.subject}
                    </TableHead>
                  ))}
                </TableRow>
                {data.map((item, index) => (
                  <ResultTableRow
                    key={index}
                    num={index + 1}
                    name={item.name}
                    roll={item.roll}
                    result={item.result}
                  />
                ))}
              </TableBody>
            </Table>
          )}
        </>
      )}
    </div>
  );
};

export default ResultTable;
