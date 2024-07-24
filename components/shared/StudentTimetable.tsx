"use client";
import React, { useState } from "react";
import StudentTimetableRow from "./StudentTimetableRow";
import StudentTimetableDayRow from "./StudentTimetableDayRow";

const StudentTimetable = () => {
  const [show, setShow] = useState<"Week" | "Day">("Week");

  const activeStyle = "font-semibold text-lg border-b-2 border-black";

  const date = new Date();
  const day = date.getDay();

  const data = [
    {
      time: "9:00",
      year: 2,
      term: "Second",
      majors: ["English", "Math", "Web", "C++", "Web"],
    },
    {
      time: "10:00",
      year: 2,
      term: "Second",
      majors: ["English", "Math", "Web", "C++", "Web"],
    },
    {
      time: "11:00",
      year: 2,
      term: "Second",
      majors: ["Dld", "Dc", "Math", "Be", "Library"],
    },
    {
      time: "1:00",
      year: 2,
      term: "Second",
      majors: ["Dld", "Dc", "English", "Be", "Library"],
    },
    {
      time: "2:00",
      year: 2,
      term: "Second",
      majors: ["Dc", "C++", "Dld", "Math", "Be"],
    },
    {
      time: "3:00",
      year: 2,
      term: "Second",
      majors: ["Dc", "C++", "Dld", "Math", "Be"],
    },
  ];

  const majorTableRowStyle = (input: number) =>
    `table-head rounded-md text-center  text-lg ${day !== input ? "font-medium" : "font-[900]"}`;

  return (
    <div className="mt-4">
      <div className="flex flex-row gap-4 items-center">
        <button
          onClick={() => setShow("Week")}
          className={show === "Week" ? activeStyle : ""}
        >
          <p className="">Week</p>
        </button>
        <button
          onClick={() => setShow("Day")}
          className={show === "Day" ? activeStyle : ""}
        >
          <p>Day</p>
        </button>
      </div>

      <table
        style={{ borderCollapse: "separate", border: "0px" }}
        className="w-full mt-6"
      >
        <tbody>
          <tr className="bg-blue-50">
            <th className="table-head"></th>
            <th className={majorTableRowStyle(1)}>Mon</th>
            <th className={majorTableRowStyle(2)}>Tue</th>
            <th className={majorTableRowStyle(3)}>Wed</th>
            <th className={majorTableRowStyle(4)}>Thu</th>
            <th className={majorTableRowStyle(5)}>Fri</th>
          </tr>
          {data.map((item, index) => (
            <StudentTimetableRow
              key={index}
              time={item.time}
              term={item.term}
              year={item.year}
              majors={item.majors}
              day={day}
              show={show}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTimetable;
