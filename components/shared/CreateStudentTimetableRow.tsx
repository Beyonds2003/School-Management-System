"use client";
import React, { useState, useEffect, useRef } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Sheet, SheetTrigger } from "../ui/sheet";
import EditTimetableRow from "./EditTimetableRow";
import { majorColor, TimetableDataType } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { getSubjectsResponse } from "@/lib/responseType";

type Props = {
  time: string;
  year: number;
  term: string;
  subjects: {
    id: number;
    day: string;
    subject: string;
    code: string;
    status: string;
    timetable_row_id: string;
  }[];
  timetableSubject: getSubjectsResponse;
  day: number;
  show: "Day" | "Week";
  setEmptyTimetable: React.Dispatch<React.SetStateAction<TimetableDataType[]>>;
  setInvalidCell: React.Dispatch<React.SetStateAction<number>>;
  role: "teacher" | "student" | "admin";
};

const CreateStudentTimetableRow = ({
  time,
  year,
  term,
  subjects,
  timetableSubject,
  day,
  show,
  setEmptyTimetable,
  setInvalidCell,
  role,
}: Props) => {
  day = day === 6 || day === 0 ? 1 : day;

  return (
    <TableRow className="mt-1 hover:bg-white">
      <TableCell className="table-des w-[89px]">{time}</TableCell>
      {show === "Week" ? (
        <>
          {subjects.map((major) => (
            <Sheet key={major.id}>
              <TableCellMajor
                timetableSubject={timetableSubject}
                setEmptyTimetable={setEmptyTimetable}
                setInvalidCell={setInvalidCell}
                role={role}
                major={major}
                time={time}
                day={day}
                index={major.id}
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

export default CreateStudentTimetableRow;

const TableCellMajor = ({
  timetableSubject,
  index,
  role,
  major,
  time,
  day,
  setEmptyTimetable,
  setInvalidCell,
}: any) => {
  const [subject, setSubject] = useState<string>(major.subject);
  const [code, setCode] = useState<string>(major.code);

  return (
    <TableCell
      className={`table-des p-0 text-center min-w-[105px] hover:bg-gray-100 ${role === "teacher" ? "cursor-pointer" : ""}`}
    >
      <SheetTrigger asChild>
        <div className={`${subject !== "" ? "p-4" : "p-9"} rounded-md m-[6px]`}>
          <p className="font-[700] text-base">{subject}</p>
          <p className="text-xs mt-[2px]">{code}</p>
        </div>
      </SheetTrigger>
      <EditTimetableRow
        timetableSubject={timetableSubject}
        index={index}
        major={major}
        time={time}
        day={day}
        setSubject={setSubject}
        setCode={setCode}
        setEmptyTimetable={setEmptyTimetable}
        setInvalidCell={setInvalidCell}
        action={"create"}
      />
    </TableCell>
  );
};
