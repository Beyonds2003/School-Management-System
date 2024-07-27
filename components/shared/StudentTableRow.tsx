import { getTextColorBasedOnBackground, stringToColor } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";

type Props = {
  num: number;
  photo: string;
  name: string;
  year: number;
  major: string;
  term: string;
  gender: string;
};

const StudentTableRow = ({
  num,
  photo,
  name,
  year,
  major,
  term,
  gender,
}: Props) => {
  const avatarColor = stringToColor(name);
  const avatarTextColor = getTextColorBasedOnBackground(avatarColor);

  return (
    <TableRow className="">
      <TableCell className="table-des">{num}.</TableCell>
      <TableCell className="table-des  ">
        {photo === "" ? (
          <div
            className={`rounded-full w-10 h-10 flex justify-center items-center`}
            style={{ backgroundColor: avatarColor }}
          >
            <p
              className="text-base font-semibold"
              style={{ color: avatarTextColor }}
            >
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
      </TableCell>
      <TableCell className="table-des cursor-pointer min-w-[170px] hover:text-primary">
        {name}
      </TableCell>
      <TableCell className="table-des min-w-[100px]">{year} Year</TableCell>
      <TableCell className="table-des">{major}</TableCell>
      <TableCell className="table-des min-w-[150px]">{term} Term</TableCell>
      <TableCell className="table-des">{gender}</TableCell>
    </TableRow>
  );
};

export default StudentTableRow;
