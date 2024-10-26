"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { backend_url } from "@/lib/constant";

type Props = {
  timetableRow_id: string;
  num: number;
  major: string;
  time: string;
  year: number;
  term: number;
  status: string;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

const TeacherTimelineTableRow = ({
  timetableRow_id,
  num,
  major,
  time,
  year,
  term,
  status,
  active,
  setActive,
}: Props) => {
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleValueChange = async (value: string) => {
    try {
      const res = await fetch(
        `${backend_url}/timetable/timetable-row/status/${timetableRow_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            status: value,
          }),
        },
      );
      const data = await res.json();
      console.log(data);
      setCurrentStatus(value);
      setActive(0);
    } catch (error) {
      console.log(error);
    }
    console.log(value);
  };

  let times = Number(time.split(":")[0]);
  let plusTime = times + 1;
  let amOrpm = times >= 12 ? "PM" : "AM";
  let plusTimeAmOrPm = plusTime >= 12 ? "PM" : "AM";

  return (
    <tr
      onClick={() => {
        active === num ? setActive(0) : setActive(num);
      }}
      className={`cursor-pointer transition-all ${active === num ? "bg-white shadow-custom shadow-gray-200 " : ""}`}
    >
      <td className="table-des">{num}.</td>
      <td className="table-des p-7">{major}</td>
      <td className="table-des min-w-[190px]">
        {time} {amOrpm} - {`${plusTime}:00`} {plusTimeAmOrPm}
      </td>
      <td className="table-des min-w-[100px]">{year} Year</td>
      <td className="table-des min-w-[100px]">{term} Term</td>
      <td className="table-des min-w-[153px]">
        {active === num ? (
          <Select onValueChange={handleValueChange}>
            <SelectTrigger className="w-[120px] focus:ring-0 text-black ring-0  ">
              <SelectValue placeholder={currentStatus} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="present">Present</SelectItem>
              <SelectItem value="absent">Absent</SelectItem>
            </SelectContent>
          </Select>
        ) : (
          <p>{currentStatus}</p>
        )}
      </td>
    </tr>
  );
};

export default TeacherTimelineTableRow;
