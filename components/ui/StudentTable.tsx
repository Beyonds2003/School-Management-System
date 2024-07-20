import React from "react";
import StudentTableRow from "./StudentTableRow";

const StudentTable = () => {
  const data = [
    {
      photo: "",
      name: "Madara",
      year: 6,
      major: "It",
      term: "Second",
    },
    {
      photo: "",
      name: "Naruto",
      year: 4,
      major: "It",
      term: "First",
    },
    {
      photo: "",
      name: "Sasuke",
      year: 4,
      major: "It",
      term: "First",
    },
    {
      photo: "",
      name: "Sakura",
      year: 4,
      major: "Ep",
      term: "Second",
    },
    {
      photo: "",
      name: "Chou",
      year: 4,
      major: "Mc",
      term: "First",
    },
    {
      photo: "",
      name: "Kakashi",
      year: 6,
      major: "It",
      term: "First",
    },
  ];

  return (
    <div className="">
      <table className="w-full" border={1}>
        <tbody>
          <tr className="bg-blue-50">
            <th className="table-head">S/N</th>
            <th className="table-head">Photo</th>
            <th className="table-head">Name</th>
            <th className="table-head">Year</th>
            <th className="table-head">Major</th>
            <th className="table-head">Term</th>
          </tr>
          {data.map((item, index) => (
            <StudentTableRow
              key={index}
              num={index + 1}
              photo={item.photo}
              name={item.name}
              year={item.year}
              major={item.major}
              term={item.term}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
