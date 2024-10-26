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
  teachers: {
    id: string;
    image: string;
    name: string;
    email: string;
    major: string;
    teachYear: [];
    subjects: [];
    gender: string;
  }[];
};

const TeacherTable = ({ teachers }: Props) => {
  const renderCell = useCallback((item: any, columnKey: any) => {
    switch (columnKey) {
      case "$.0":
        return <div className=" table-des-nb  p-2">1.</div>;
      case "$.1":
        return (
          <div className="table-des-nb p-2 flex flex-row items-center gap-5 ">
            <ProfileImage
              image={item.image}
              name={item.name}
              width={40}
              height={40}
              textSize="text-sm"
            />
            <div className="mb-1">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.email}</p>
            </div>
          </div>
        );
      case "$.2":
        return <p className="table-des-nb min-w-[100px]">{item.major}</p>;
      case "$.3":
        return (
          <p className="table-des-nb max-w-[150px] overflow-x-scroll no-scrollbar">
            {item.subjects.join(" , ")}
          </p>
        );
      case "$.4":
        return (
          <p className="table-des-nb min-w-[150px]">
            {item.teachYear.join(" , ")}
          </p>
        );
      case "$.5":
        return <p className="table-des-nb">{item.gender}</p>;
      default:
        return <p className="">default</p>;
    }
  }, []);

  const tableHeadStyle =
    "table-head-nb text-base text-black font-semibold bg-blue-100 p-5 ";

  return (
    <div>
      <Table className="w-full">
        <TableHeader>
          <TableColumn className={tableHeadStyle}>S/N</TableColumn>
          <TableColumn className={tableHeadStyle}>Name</TableColumn>
          <TableColumn className={tableHeadStyle}>Major</TableColumn>
          <TableColumn className={tableHeadStyle}>Subjects</TableColumn>
          <TableColumn className={tableHeadStyle}>Teach Year</TableColumn>
          <TableColumn className={tableHeadStyle}>Gender</TableColumn>
        </TableHeader>
        <TableBody
          items={teachers}
          emptyContent={"No rows to display."}
          style={{ height: "200px" }}
          loadingContent={<Spinner label="Loading..." />}
        >
          {(item) => (
            <TableRow className="border-gray-300 border-[1px]" key={item.name}>
              {(columnKey) => (
                <TableCell
                  className={`border-gray-300 border-[1px] ${
                    columnKey === "$.0" && "w-[80px]"
                  }`}
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

export default TeacherTable;
