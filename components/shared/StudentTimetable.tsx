"use client";
import React, { useState } from "react";

const StudentTimetable = () => {
  const [show, setShow] = useState<"Week" | "Day">("Week");

  const activeStyle = "font-semibold text-lg border-b-2 border-black";

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

      <table className="w-full mt-6" border={1}>
        <tbody>
          <tr className="bg-blue-50">
            <th className="table-head"></th>
            <th className="table-head">Mon</th>
            <th className="table-head">Tue</th>
            <th className="table-head">Wed</th>
            <th className="table-head">Thu</th>
            <th className="table-head">Fri</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentTimetable;
