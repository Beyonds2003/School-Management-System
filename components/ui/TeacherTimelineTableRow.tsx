import React from "react";

type Props = {
  num: number;
  major: string;
  time: string;
  room: string;
  year: string;
};

const TeacherTimelineTableRow = ({ num, major, time, room, year }: Props) => {
  return (
    <tr>
      <td className="table-des">{num}.</td>
      <td className="table-des">{major}</td>
      <td className="table-des">{time}</td>
      <td className="table-des">{room}</td>
      <td className="table-des">{year}</td>
    </tr>
  );
};

export default TeacherTimelineTableRow;
