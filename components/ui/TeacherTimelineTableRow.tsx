import React from "react";

type Props = {
  num: number;
  major: string;
  time: string;
  room: string;
  year: string;
  status: string;
};

const TeacherTimelineTableRow = ({
  num,
  major,
  time,
  room,
  year,
  status,
}: Props) => {
  return (
    <tr>
      <td className="table-des">{num}.</td>
      <td className="table-des">{major}</td>
      <td className="table-des">{time}</td>
      <td className="table-des">{room}</td>
      <td className="table-des">{year}</td>
      <td className="table-des">{status}</td>
    </tr>
  );
};

export default TeacherTimelineTableRow;
