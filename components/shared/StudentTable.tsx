"use client";
import React, { useCallback } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Spinner,
  Button,
} from "@nextui-org/react";
import ProfileImage from "./ProfileImage";

type Props = {
  students: {
    id: string;
    name: string;
    image: string;
    email: string;
    password: string;
    year: number;
    term: number;
    major: "it" | "civil" | "ep" | "ec" | "mc" | "archi" | "none";
    gender: "male" | "female";
    rollNum: number;
  }[];
};

function capitalize(s: string) {
  return s[0].toUpperCase() + s.slice(1);
}

const StudentTable = ({ students }: Props) => {
  const renderCell = useCallback((item: any, columnKey: any) => {
    switch (columnKey) {
      case "$.0":
        return <div className=" table-des-nb  p-2">{item.rollNum}</div>;
      case "$.1":
        return (
          <div className="table-des-nb p-2 flex flex-row items-center gap-5 ">
            <ProfileImage
              image={item.image}
              name={item.name}
              width={45}
              height={45}
              textSize="text-sm"
            />
            <div className="mb-1">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.email}</p>
            </div>
          </div>
        );
      case "$.2":
        return (
          <p className="table-des-nb p-2 min-w-[100px]">{item.year} Year</p>
        );
      case "$.3":
        return (
          <p className="table-des-nb p-2 min-w-[150px]">{item.term} Term</p>
        );
      case "$.4":
        return <p className="table-des-nb p-2">{capitalize(item.major)}</p>;
      case "$.5":
        return <p className="table-des-nb p-2">{capitalize(item.gender)}</p>;
      default:
        return <p className="">default</p>;
    }
  }, []);

  const tableHeadStyle =
    "table-head-nb text-base text-black font-semibold bg-blue-100 p-5 ";

  return (
    <div className="">
      <Table isHeaderSticky className="w-full ">
        <TableHeader>
          <TableColumn className={tableHeadStyle}>Roll No</TableColumn>
          <TableColumn className={tableHeadStyle}>Name</TableColumn>
          <TableColumn className={tableHeadStyle}>Year</TableColumn>
          <TableColumn className={tableHeadStyle}>Term</TableColumn>
          <TableColumn className={tableHeadStyle}>Major</TableColumn>
          <TableColumn className={tableHeadStyle}>Gender</TableColumn>
        </TableHeader>
        <TableBody
          items={students}
          emptyContent={"No rows to display."}
          style={{ height: "200px" }}
          loadingContent={<Spinner label="Loading..." />}
        >
          {(item) => (
            <TableRow className="border-gray-300 border-[1px]" key={item.id}>
              {(columnKey) => (
                <TableCell
                  className={`border-gray-300 border-[1px] ${columnKey === "$.0" && "w-[80px]"}`}
                >
                  {renderCell(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default StudentTable;
