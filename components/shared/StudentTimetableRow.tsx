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
            <td key={index} className={`table-des p-0 text-center `}>
              <div
                className={`${majorColor[major as keyof typeof majorColor]} p-4 rounded-md m-3`}
              >
                {major}
              </div>
            </td>
          ))}
        </>
      ) : (
        <td colSpan={6} className={`table-des text-start `}>
          <div
            className={`${majorColor[majors[day - 1] as keyof typeof majorColor]} p-4 rounded-md m-1`}
          >
            {majors[day - 1]}
          </div>
        </td>
      )}
    </tr>
  );
};

export default StudentTimetableRow;
