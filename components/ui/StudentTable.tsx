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
      gender: "Male",
    },
    {
      photo:
        "https://wallpapers.com/images/hd/naruto-profile-pictures-sa1tekghfajrr928.jpg",
      name: "Naruto Uzumaki",
      year: 4,
      major: "It",
      term: "First",
      gender: "Male",
    },
    {
      photo: "",
      name: "Sasuke",
      year: 4,
      major: "It",
      term: "First",
      gender: "Male",
    },
    {
      photo: "",
      name: "Sakura",
      year: 4,
      major: "Ep",
      term: "Second",
      gender: "Female",
    },
    {
      photo: "",
      name: "Hinata",
      year: 4,
      major: "Mc",
      term: "First",
      gender: "Female",
    },
    {
      photo: "",
      name: "Kakashi",
      year: 6,
      major: "It",
      term: "First",
      gender: "Male",
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
            <th className="table-head">Gender</th>
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
              gender={item.gender}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
