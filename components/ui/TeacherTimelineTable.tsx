import React from "react";
import TeacherTimelineTableRow from "./TeacherTimelineTableRow";

const TeacherTimelineTable = () => {
  const data = [
    {
      major: "English",
      time: "9:00 AM - 10:00 AM",
      room: "Room 1",
      year: "1 Year",
    },
    {
      major: "English",
      time: "11:00 AM - 12:00 AM",
      room: "Room 2",
      year: "2 Year",
    },
    {
      major: "English",
      time: "1:00 PM - 2:00 PM",
      room: "Room 3",
      year: "3 Year",
    },
    {
      major: "English",
      time: "2:00 PM - 3:00 PM",
      room: "Room 4",
      year: "4 Year",
    },
    {
      major: "English",
      time: "3:00 PM - 4:00 PM",
      room: "Room 5",
      year: "2 Year",
    },
  ];

  return (
    <div className="mt-6">
      <table className="w-full" border={1}>
        <tbody>
          <tr className="bg-gray-200">
            <th className="table-head">No</th>
            <th className="table-head">Major</th>
            <th className="table-head">Time</th>
            <th className="table-head">Room No</th>
            <th className="table-head">Year</th>
          </tr>
          {data.map((item, index) => (
            <TeacherTimelineTableRow
              key={index}
              num={index + 1}
              major={item.major}
              time={item.time}
              room={item.room}
              year={item.year}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTimelineTable;
