import React from "react";
import { Table, TableBody, TableHead, TableRow } from "@/components/ui/table";
import TeacherTableRow from "./TeacherTableRow";

const data = [
  {
    image: "",
    name: "Daw Mya",
    major: "It",
    teachYear: [4, 3, 2],
    subjects: ["C++", "Web", "English", "Math", "Be"],
    gender: "Female",
  },
  {
    image: "",
    name: "Daw Hla",
    major: "Ec",
    teachYear: [1, 2],
    subjects: ["C++", "Web"],
    gender: "Female",
  },
  {
    image: "",
    name: "Daw Su",
    major: "Ep",
    teachYear: [1],
    subjects: ["C++", "Web"],
    gender: "Female",
  },
  {
    image: "",
    name: "U Kyaw",
    major: "Mc",
    teachYear: [5, 6],
    subjects: ["C++", "Web"],
    gender: "Male",
  },
];

const TeacherTable = () => {
  const tableHeadStyle = "table-head text-base text-black font-semibold";
  return (
    <div>
      <Table className="w-full">
        <TableBody>
          <TableRow className="bg-blue-100 hover:bg-blue-100">
            <TableHead className={tableHeadStyle}>S/N</TableHead>
            <TableHead className={tableHeadStyle}>Image</TableHead>
            <TableHead className={tableHeadStyle}>Name</TableHead>
            <TableHead className={tableHeadStyle}>Major</TableHead>
            <TableHead className={tableHeadStyle}>Subjects</TableHead>
            <TableHead className={tableHeadStyle}>Teach Year</TableHead>
            <TableHead className={tableHeadStyle}>Gender</TableHead>
          </TableRow>
          {data.map((item, index) => (
            <TeacherTableRow
              key={index}
              num={index + 1}
              image={item.image}
              name={item.name}
              major={item.major}
              teachYear={item.teachYear}
              subjects={item.subjects}
              gender={item.gender}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TeacherTable;
