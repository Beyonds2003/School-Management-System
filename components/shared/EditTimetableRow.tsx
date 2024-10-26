import React, { useEffect, useState, useTransition } from "react";
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";
import { backend_url, TimetableDataType } from "@/lib/constant";
import { useRouter } from "next/navigation";
import { getSubjectsResponse } from "@/lib/responseType";

type Props = {
  index: string;
  major: {
    timetable_row_id: string;
    id: number;
    day: string;
    subject: string;
    code: string;
    status: string;
  };
  time: string;
  day: number;
  timetableSubject: getSubjectsResponse;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  setEmptyTimetable?: React.Dispatch<React.SetStateAction<TimetableDataType[]>>;
  setInvalidCell?: React.Dispatch<React.SetStateAction<number>>;
  action: "edit" | "create";
};

const EditTimetableRow = ({
  index,
  major,
  time,
  day,
  timetableSubject,
  setSubject,
  setCode,
  setEmptyTimetable,
  setInvalidCell,
  action,
}: Props) => {
  const router = useRouter();
  const [currentSubject, setCurrentSubject] = useState({
    id: index,
    name: major.subject,
    code: major.code,
  });
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  // 2. Handle form submission.
  async function onSubmit() {
    console.log(major, currentSubject);
    if (action === "edit") {
      const res = await fetch(
        `${backend_url}/timetable/timetable-row/subject/${major.timetable_row_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            subject_id: currentSubject.id,
          }),
        },
      );

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setSubject(currentSubject.name);
        setCode(currentSubject.code);

        router.refresh();
      }
    } else if (action === "create") {
      console.log("Create", index);
      if (setEmptyTimetable && setInvalidCell) {
        console.log(currentSubject.name, currentSubject.code);
        setSubject(currentSubject.name);
        setCode(currentSubject.code);

        if (!open) {
          setInvalidCell((prev) => {
            return prev - 1;
          });
        }

        setOpen(true);

        // Low priority update just for performance
        startTransition(() => {
          setEmptyTimetable((prev: any) => {
            return prev.map((timeSlot: any, i: number) => {
              return {
                ...timeSlot,
                year: timetableSubject.data[i].year,
                term: timetableSubject.data[i].term,
                subjects: timeSlot.subjects.map((subject: any) => {
                  if (subject.id === index) {
                    return {
                      ...subject,
                      subject: currentSubject.name,
                      code: currentSubject.code,
                    };
                  } else {
                    return subject;
                  }
                }),
              };
            });
          });
        });
      }
    } else {
      return null;
    }
  }

  useEffect(() => {
    if (action === "edit") {
      setCurrentSubject({
        id: index,
        name: major.subject,
        code: major.code,
      });
      console.log("Effect run");
    }
  }, [open]);

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-3xl">
          {action === "create" ? "Create" : "Edit"} Timetable Row
        </SheetTitle>
      </SheetHeader>
      <div className="">
        <h2 className="text-2xl font-semibold mt-4">
          {major.day} - {time}
        </h2>
      </div>
      <section className="grid grid-cols-2 gap-4 mt-8">
        {timetableSubject.data.length > 0 ? (
          timetableSubject.data.map((item) => (
            <article
              key={item.id}
              onClick={() => {
                setCurrentSubject({
                  id: item.id,
                  name: item.name,
                  code: item.code,
                });
              }}
              className={`w-full rounded-xl p-3 cursor-pointer  border-[1px] ${item.id === currentSubject.id ? "border-primary" : "border-gray-300"}`}
            >
              <h2 className="text-base font-semibold">{item.name}</h2>
            </article>
          ))
        ) : (
          <div
            style={{ gridColumn: "span 2" }}
            className=" w-full text-xl font-semibold text-gray-600"
          >
            No Subjects Exit
          </div>
        )}
      </section>
      {timetableSubject.data.length > 0 && (
        <SheetClose asChild>
          <Button
            onClick={onSubmit}
            className="mt-6 bg-primary items-center  gap-3 text-white px-6 py-3 pl-5"
          >
            <FaCheck size={18} />
            <p className="text-lg pb-[1px]">
              {action === "create" ? "Add" : "Edit"}
            </p>
          </Button>
        </SheetClose>
      )}
    </SheetContent>
  );
};

export default EditTimetableRow;
