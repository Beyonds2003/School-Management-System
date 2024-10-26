"use client";
import React, { useState } from "react";
import TeacherTimelineTableRow from "./TeacherTimelineTableRow";
import { Table, TableBody, TableHead, TableRow } from "@/components/ui/table";

type Props = {
  data: {
    id: string;
    day: string;
    time: string;
    status: "present" | "absent";
    subjectName: string;
    year: number;
    term: number;
    timetableId: string;
  }[];
};

const TeacherTimelineTable = ({ data }: Props) => {
  const [active, setActive] = useState<number>(0);
  const tableHeadStyle = "table-head text-base text-black font-semibold";

  return (
    <div className="mt-6">
      {data.length === 0 ? (
        <div className="h-[280px] w-full  flex justify-center items-center">
          <div className="text-lg font-semibold mb-10">
            No timeline for today
          </div>
        </div>
      ) : (
        <Table className="w-full">
          <TableBody>
            <TableRow className="bg-blue-100 hover:bg-blue-100">
              <TableHead className={tableHeadStyle}>S/N</TableHead>
              <TableHead className={tableHeadStyle}>Major</TableHead>
              <TableHead className={tableHeadStyle}>Time</TableHead>
              <TableHead className={tableHeadStyle}>Year</TableHead>
              <TableHead className={tableHeadStyle}>Term</TableHead>
              <TableHead className={tableHeadStyle}>Status</TableHead>
            </TableRow>
            {data.map((item, index) => (
              <TeacherTimelineTableRow
                key={index}
                num={index + 1}
                timetableRow_id={item.id}
                major={item.subjectName}
                time={item.time}
                year={item.year}
                term={item.term}
                status={item.status}
                active={active}
                setActive={setActive}
              />
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default TeacherTimelineTable;
