import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import ProfileImage from "./ProfileImage";

type Props = {
  num: number;
  image: string;
  name: string;
  major: string;
  teachYear: number[];
  subjects: string[];
  gender: string;
};

const TeacherTableRow = ({
  num,
  image,
  name,
  major,
  teachYear,
  subjects,
  gender,
}: Props) => {
  return (
    <TableRow className="">
      <TableCell className="table-des">{num}.</TableCell>
      <TableCell className="table-des flex flex-row items-center gap-5">
        <ProfileImage
          image={image}
          name={name}
          width={40}
          height={40}
          textSize="text-sm"
        />
        <div className="mb-1">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-gray-600 text-sm">addykyaw4@gmail.com</p>
        </div>
      </TableCell>
      <TableCell className="table-des min-w-[100px]">{major}</TableCell>
      <TableCell className="table-des max-w-[150px] overflow-x-scroll no-scrollbar">
        {subjects.join(" , ")}
      </TableCell>
      <TableCell className="table-des min-w-[150px]">
        {teachYear.join(" , ")}
      </TableCell>
      <TableCell className="table-des">{gender}</TableCell>
    </TableRow>
  );
};

export default TeacherTableRow;
