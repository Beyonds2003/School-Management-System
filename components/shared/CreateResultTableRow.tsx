import React, { useEffect, useState } from "react";
import { TableRow, TableCell } from "../ui/table";
import { Checkbox } from "../ui/checkbox";

type Props = {
  student: {
    studentId: string;
    studentName: string;
    studentRollNum: number;
  };
  subjects: {
    subjectId: string;
    subjectName: string;
  }[];
  num: number;
  setCheckTableRowValid: React.Dispatch<
    React.SetStateAction<{ [key: string]: number }>
  >;
  setValidTableRowCount: React.Dispatch<React.SetStateAction<number>>;
  setResultData: React.Dispatch<React.SetStateAction<any[]>>;
};

const CreateResultTableRow = ({
  student,
  subjects,
  num,
  setCheckTableRowValid,
  setValidTableRowCount,
  setResultData,
}: Props) => {
  const initialScores = subjects.reduce((accumulator: any, current) => {
    accumulator[current.subjectId] = "";
    return accumulator;
  }, {});

  const [isValid, setIsValid] = useState(false);
  const [data, setData] = useState({
    studentId: student.studentId,
    name: student.studentName,
    rollNum: String(student.studentRollNum),
    pass: true,
    ...initialScores,
  });

  useEffect(() => {
    let checkSubject = true;

    // Check Subject is not empty string
    for (let i = 0; i < subjects.length; i++) {
      if (data[subjects[i].subjectId] === "") {
        checkSubject = false;
        break;
      }
    }

    if (checkSubject && data.rollNum !== "") {
      console.log("set valid row", isValid);
      setIsValid(true);

      if (!isValid) {
        setValidTableRowCount((prev) => prev + 1);
        setCheckTableRowValid((prev) => ({
          ...prev,
          false: prev["false"] - 1,
        }));
      }
      // Update data in specific array of index
      setResultData((prev) => {
        prev[num - 1] = data;
        return prev;
      });
    } else {
      console.log("set INvalid row", num);
      if (isValid) {
        setValidTableRowCount((prev) => prev - 1);
        setCheckTableRowValid((prev) => ({
          ...prev,
          false: prev["false"] + 1,
        }));
      }

      setIsValid(false);
    }
  }, [data]);

  return (
    <TableRow>
      <TableCell className="table-des">
        <Checkbox
          checked={data.pass}
          onCheckedChange={() => setData({ ...data, pass: !data.pass })}
        />
      </TableCell>
      <TableCell className="table-des">
        <input
          type="text"
          value={student.studentName}
          disabled
          className="focus:outline-none min-w-[150px] bg-gray-100 w-full h-full"
        />
      </TableCell>
      <TableCell className="table-des">
        <input
          type="number"
          value={data.rollNum}
          onChange={(e) => setData({ ...data, rollNum: e.target.value })}
          className="focus:outline-none bg-gray-100 w-full h-full"
        />
      </TableCell>
      {subjects.map((subject) => (
        <TableCell className="table-des">
          <input
            key={subject.subjectId}
            type="number"
            value={data[subject.subjectName]}
            onChange={(e) =>
              setData({ ...data, [subject.subjectId]: e.target.value })
            }
            className="focus:outline-none bg-gray-100 w-full h-full"
          />
        </TableCell>
      ))}
    </TableRow>
  );
};

export default CreateResultTableRow;
