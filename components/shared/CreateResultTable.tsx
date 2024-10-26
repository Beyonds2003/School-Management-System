"use client";
import React, { useState, useEffect } from "react";
import { Table, TableBody, TableHead, TableRow } from "@/components/ui/table";
import CreateResultTableRow from "./CreateResultTableRow";
import { Button } from "@nextui-org/react";
import { backend_url } from "@/lib/constant";
import { useRouter } from "next/navigation";

type Props = {
  examId: string | undefined;
  students: {
    studentId: string;
    studentName: string;
    studentRollNum: number;
  }[];
  subjects: {
    subjectId: string;
    subjectName: string;
  }[];
};

const CreateResultTable = ({ examId, students, subjects }: Props) => {
  const router = useRouter();
  const [tableRowCount, setTableRowCount] = useState<number>(students.length);
  const [validTableRowCount, setValidTableRowCount] = useState<number>(0);
  const [resultData, setResultData] = useState(
    new Array(tableRowCount).fill({}),
  );

  const [checkTableRowValid, setCheckTableRowValid] = useState<{
    [key: string]: number;
  }>({
    false: tableRowCount,
  });

  useEffect(() => {
    if (tableRowCount > 0) {
      setCheckTableRowValid({
        false: tableRowCount - validTableRowCount,
      });
    }
  }, [tableRowCount]);

  const handleResultSubmit = async () => {
    try {
      const res = await fetch(`${backend_url}/result`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          examId,
          data: resultData,
        }),
      });
      const data = await res.json();
      console.log(data);
      router.push("/teacher/result");
    } catch (error) {
      console.log(error);
    }
  };

  const tableHeadStyle = "table-head text-base text-black font-semibold";

  return (
    <div className="">
      {/* Submit */}
      <div className="flex justify-end mb-4 mt-[-85px]">
        <Button
          disabled={checkTableRowValid.false !== 0}
          onClick={handleResultSubmit}
          type="submit"
          className="mt-1 bg-primary rounded-lg disabled:bg-primary/50 flex text-[16px] flex-row gap-3 text-white px-8 h-[48px] "
        >
          Submit
        </Button>
      </div>

      {/* Result */}
      <Table className="w-full">
        <TableBody>
          <TableRow className="bg-blue-100 hover:bg-blue-100">
            <TableHead className={tableHeadStyle}>S/N</TableHead>
            <TableHead className={tableHeadStyle}>Name</TableHead>
            <TableHead className={tableHeadStyle}>Roll No</TableHead>
            {subjects.map((item) => (
              <TableHead key={item.subjectId} className={tableHeadStyle}>
                {item.subjectName}
              </TableHead>
            ))}
          </TableRow>
          {students.map((student, index) => (
            <CreateResultTableRow
              student={student}
              subjects={subjects}
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
