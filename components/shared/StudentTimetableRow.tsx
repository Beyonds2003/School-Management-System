"use client";
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Sheet, SheetTrigger } from "../ui/sheet";
import EditTimetableRow from "./EditTimetableRow";
import { majorColor } from "@/lib/constant";
import { cn } from "@/lib/utils";

type Props = {
  time: string;
  year: number;
  term: string;
  majors: {
    id: number;
    day: string;
    subject: string;
    code: string;
    status: string;
  }[];
  day: number;
  show: "Day" | "Week";
  role: "teacher" | "student" | "admin";
};

const StudentTimetableRow = ({
  time,
  year,
  term,
  majors,
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
          {majors.map((major, index) => (
            <Sheet key={major.id}>
              <TableCellMajor role={role} major={major} time={time} day={day} />
            </Sheet>
          ))}
        </>
      ) : (
        <TableCell colSpan={6} className={`table-des-nb text-start `}>
          <div
            className={cn(
              `shadow-gray-400 shadow-sm p-4 rounded-md ${majorColor[majors[day - 1].subject as keyof typeof majorColor]}`,
            )}
          >
            <p className="font-[700] text-base">{majors[day - 1].subject}</p>
            <p className="text-xs mt-[2px]">{majors[day - 1].code}</p>
          </div>
        </TableCell>
      )}
    </TableRow>
  );
};

export default StudentTimetableRow;

const TableCellMajor = ({ role, major, time, day }: any) => {
  const [subject, setSubject] = React.useState<string>(major.subject);
  const [code, setCode] = React.useState<string>(major.code);

  return (
    <TableCell
      className={`table-des p-0 text-center min-w-[105px] hover:bg-gray-100 ${role === "teacher" ? "cursor-pointer" : ""}`}
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
        major={major}
        time={time}
        day={day}
        setSubject={setSubject}
        setCode={setCode}
      />
    </TableCell>
  );
};
