import React from "react";
import TeacherTimelineTableRow from "./TeacherTimelineTableRow";

const TeacherTimelineTable = () => {
  const data = [
    {
      major: "English",
      time: "9:00 AM - 10:00 AM",
      room: "313 (A)",
      year: "1 Year",
      status: "Present",
    },
    {
      major: "English",
      time: "11:00 AM - 12:00 AM",
      room: "313 (B)",
      year: "2 Year",
      status: "Absent",
    },
    {
      major: "English",
      time: "1:00 PM - 2:00 PM",
      room: "313 (C)",
      year: "3 Year",
      status: "Absent",
    },
    {
      major: "English",
      time: "2:00 PM - 3:00 PM",
      room: "313 (A)",
      year: "4 Year",
      status: "Present",
    },
    {
      major: "English",
      time: "3:00 PM - 4:00 PM",
      room: "313 (B)",
      year: "2 Year",
      status: "Present",
    },
  ];

  return (
    <div className="mt-6">
      <table className="w-full" border={1}>
        <tbody>
          <tr className="bg-blue-50">
            <th className="table-head">S/N</th>
            <th className="table-head">Major</th>
            <th className="table-head">Time</th>
            <th className="table-head">Room No</th>
            <th className="table-head">Year</th>
            <th className="table-head">Status</th>
          </tr>
          {data.map((item, index) => (
            <TeacherTimelineTableRow
              key={index}
              num={index + 1}
              major={item.major}
              time={item.time}
              room={item.room}
              year={item.year}
              status={item.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTimelineTable;
