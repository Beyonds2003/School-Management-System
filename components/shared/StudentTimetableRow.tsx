"use client";
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Sheet, SheetTrigger } from "../ui/sheet";
import EditTimetableRow from "./EditTimetableRow";
import { majorColor } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { getSubjectsResponse } from "@/lib/responseType";

type Props = {
  time: string;
  year: number;
  term: string;

  subjects: {
    timetable_row_id: string;
    id: number;
    day: string;
    subject: string;
    code: string;
    status: string;
  }[];
  timetableSubject: getSubjectsResponse;
  day: number;
  show: "Day" | "Week";
  role: "teacher" | "student" | "admin";
};

const StudentTimetableRow = ({
  time,
  year,
  term,
  subjects,
  timetableSubject,
  day,
  show,
  role,
}: Props) => {
  day = day === 6 || day === 0 ? 1 : day;

  return (
    <TableRow className="mt-1 hover:bg-white">
      <TableCell className="table-des w-[89px]">{time}</TableCell>
      {show === "Week" ? (
        <>
          {subjects.map((major, index) => (
            <Sheet key={major.timetable_row_id + index}>
              <TableCellMajor
                timetableSubject={timetableSubject}
                id={major.id}
                role={role}
                major={major}
                time={time}
                day={day}
              />
            </Sheet>
          ))}
        </>
      ) : (
        <TableCell colSpan={6} className={`table-des-nb text-start `}>
          <div
            className={cn(
              `shadow-gray-400 shadow-sm p-4 rounded-md ${majorColor[subjects[day - 1].subject as keyof typeof majorColor]}`,
            )}
          >
            <p className="font-[700] text-base">{subjects[day - 1].subject}</p>
            <p className="text-xs mt-[2px]">{subjects[day - 1].code}</p>
          </div>
        </TableCell>
      )}
    </TableRow>
  );
};

export default StudentTimetableRow;

const TableCellMajor = ({
  id,
  timetableSubject,
  role,
  major,
  time,
  day,
}: any) => {
  const [subject, setSubject] = React.useState<string>(major.subject);
  const [code, setCode] = React.useState<string>(major.code);

  return (
    <TableCell
      className={`table-des ${major.status === "absent" ? "bg-red-200" : "hover:bg-gray-100"}  p-0 text-center min-w-[105px]  ${role === "teacher" ? "cursor-pointer" : ""}`}
    >
      {role === "teacher" ? (
        <SheetTrigger asChild>
          <div className={` p-4 rounded-md m-[6px]`}>
            <p className="font-[700] text-base">{subject}</p>
            <p className="text-xs mt-[2px]">{code}</p>
          </div>
        </SheetTrigger>
      ) : (
        <div className={` p-4 rounded-md m-[6px]`}>
          <p className="font-[700] text-base">{subject}</p>
          <p className="text-xs mt-[2px]">{code}</p>
        </div>
      )}
      <EditTimetableRow
        index={id}
        major={major}
        time={time}
        day={day}
        timetableSubject={timetableSubject}
        setSubject={setSubject}
        setCode={setCode}
        action={"edit"}
      />
    </TableCell>
  );
};
