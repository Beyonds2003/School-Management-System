import React from "react";

type Props = {
  time: string;
  year: number;
  term: string;
  majors: string[];
  day: number;
  show: "Day" | "Week";
};

const majorColor = {
  English: "bg-blue-100",
  Math: "bg-red-200",
  Web: "bg-yellow-100",
  "C++": "bg-green-100",
  Dld: "bg-orange-100",
  Dc: "bg-violet-200",
  Be: "bg-pink-100",
  Library: "bg-lime-100",
};

const StudentTimetableRow = ({
  time,
  year,
  term,
  majors,
  day,
  show,
}: Props) => {
  return (
    <tr className="mt-1">
      <td className="table-des w-[89px]">{time}</td>
      {show === "Week" ? (
        <>
          {majors.map((major, index) => (
            <td key={index} className={`table-des text-center`}>
              {major}
            </td>
          ))}
        </>
      ) : (
        <td colSpan={6} className={`table-des text-center`}>
          {majors[day - 1]}
        </td>
      )}
    </tr>
  );
};

export default StudentTimetableRow;
