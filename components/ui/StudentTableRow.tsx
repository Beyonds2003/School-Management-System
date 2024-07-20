import Image from "next/image";
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
      <td className="table-des  ">
        {photo === "" ? (
          <div className="bg-blue-200 rounded-full w-10 h-10 flex justify-center items-center">
            <p className="text-base">
              {name.split(" ").length > 1
                ? name.split(" ")[0][0] + name.split(" ")[1][0]
                : name[0]}
            </p>
          </div>
        ) : (
          <Image
            src={photo}
            width={60}
            height={60}
            className="rounded-full object-cover h-10 w-10"
            alt="student profile image"
          />
        )}
      </td>
      <td className="table-des">{name}</td>
      <td className="table-des">{year} Year</td>
      <td className="table-des">{major}</td>
      <td className="table-des">{term} Term</td>
    </tr>
  );
};

export default StudentTableRow;
