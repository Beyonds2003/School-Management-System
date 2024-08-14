import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import ProfileImage from "./ProfileImage";

type Props = {
  num: number;
  image: string;
  name: string;
  year: number;
  major: string;
  term: string;
  gender: string;
};

const StudentTableRow = ({
  num,
  image,
  name,
  year,
  major,
  term,
  gender,
}: Props) => {
  return (
    <TableRow className="">
      <TableCell className="table-des w-[100px]">{num}.</TableCell>
      <TableCell className="table-des flex flex-row items-center gap-5 ">
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
      <TableCell className="table-des min-w-[100px]">{year} Year</TableCell>
      <TableCell className="table-des min-w-[150px]">{term} Term</TableCell>
      <TableCell className="table-des">{major}</TableCell>
      <TableCell className="table-des">{gender}</TableCell>
    </TableRow>
  );
};

export default StudentTableRow;
