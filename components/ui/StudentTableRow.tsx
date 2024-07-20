import React from "react";

type Props = {
  num: number;
  photo: string;
  name: string;
  year: number;
  major: string;
  term: string;
};

const StudentTableRow = ({ num, photo, name, year, major, term }: Props) => {
  return (
    <tr>
      <td className="table-des">{num}.</td>
      <td className="table-des">{photo}</td>
      <td className="table-des">{name}</td>
      <td className="table-des">{year} Year</td>
      <td className="table-des">{major}</td>
      <td className="table-des">{term} Term</td>
    </tr>
  );
};

export default StudentTableRow;
