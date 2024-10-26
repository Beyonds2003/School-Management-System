"use client";
import React, { useState } from "react";
import { Table, TableBody, TableHead, TableRow } from "@/components/ui/table";
import {
  backend_url,
  emptyTimetableData,
  TimetableDataType,
} from "@/lib/constant";
import CreateStudentTimetableRow from "./CreateStudentTimetableRow";
import { getSubjectsResponse } from "@/lib/responseType";
import { FaPlus } from "react-icons/fa";
import { redirect } from "next/navigation";
import { Button } from "@nextui-org/react";
import Loading_spinner from "../ui/loading_spinner";

const CreateStudentTimetable = ({
  timetableSubject,
}: {
  timetableSubject: getSubjectsResponse;
}) => {
  const [emptyTimetable, setEmptyTimetable] =
    useState<TimetableDataType[]>(emptyTimetableData);
  const [invalidCell, setInvalidCell] = useState<number>(30);

  const [show, setShow] = useState<"Week" | "Day">("Week");

  const activeStyle = "font-semibold text-lg border-b-2 border-black";

  const date = new Date();
  const [day, setDay] = useState<number>(date.getDay());
  const [loading, setLoading] = useState<boolean>(false);

  const handleDay = (day: number) => {
    if (show === "Day") {
      setDay(day);
    }
  };

  const handleCreateTimetable = async () => {
    const year = timetableSubject.data[0].year;
    const term = timetableSubject.data[0].term;
    const major = timetableSubject.data[0].major;

    try {
      setLoading(true);
      const res = await fetch(`${backend_url}/timetable`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          year,
          term,
          major,
          subjects: timetableSubject.data,
          timetableData: emptyTimetable,
        }),
      });
      const data = await res.json();
      setLoading(false);

      console.log(data);
      redirect(`/teacher/timetable?year=${year}&term=${term}&major=${major}`);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const majorTableRowStyle = (input: number) =>
    `table-head rounded-md text-black text-center  text-lg ${day !== input ? "font-[500]" : "font-[900]"} ${show === "Day" && "cursor-pointer"}`;

  return (
    <div className="mt-4">
      <div className="flex flex-row gap-4 items-center justify-between">
        <button
          onClick={() => {
            setShow("Week");
            setDay(date.getDay());
          }}
          className={show === "Week" ? activeStyle : ""}
        >
          <p className="">Week</p>
        </button>
        <Button
          className="search-button bg-primary text-white disabled:opacity-50  border-none p-6"
          disabled={invalidCell !== 0}
          isLoading={loading}
          spinner={<Loading_spinner />}
          onClick={handleCreateTimetable}
        >
          {!loading && <FaPlus size={18} />}
          <p className="font-semibold">Create</p>
        </Button>
      </div>

      {/* Timetable */}
      <Table className="w-full mt-6">
        <TableBody>
          <TableRow className="bg-blue-100 hover:bg-blue-100">
            <TableHead className="table-head"></TableHead>
            <TableHead
              onClick={() => handleDay(1)}
              className={majorTableRowStyle(1)}
            >
              <p>Mon</p>
            </TableHead>
            <TableHead
              onClick={() => handleDay(2)}
              className={majorTableRowStyle(2)}
            >
              <p>Tue</p>
            </TableHead>
            <TableHead
              onClick={() => handleDay(3)}
              className={majorTableRowStyle(3)}
            >
              <p>Wed</p>
            </TableHead>
            <TableHead
              onClick={() => handleDay(4)}
              className={majorTableRowStyle(4)}
            >
              <p>Thu</p>
            </TableHead>
            <TableHead
              onClick={() => handleDay(5)}
              className={majorTableRowStyle(5)}
            >
              <p>Fri</p>
            </TableHead>
          </TableRow>
          {emptyTimetableData.map((item: TimetableDataType, index) => (
            <CreateStudentTimetableRow
              key={index}
              time={item.time}
              term={item.term}
              year={item.year}
              subjects={item.subjects}
              timetableSubject={timetableSubject}
              day={day}
              show={show}
              setEmptyTimetable={setEmptyTimetable}
              setInvalidCell={setInvalidCell}
              role={"teacher"}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CreateStudentTimetable;
