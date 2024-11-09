import React from "react";
import StudentTimetable from "@/components/shared/StudentTimetable";
import { FaPlus } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import { backend_url, TimetableDataType } from "@/lib/constant";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getSubjectsResponse } from "@/lib/responseType";

type Props = {
  year: string | undefined;
  term: string | undefined;
  major: string | undefined;
  role: "teacher" | "student";
};

const getTimetable = async ({
  year,
  term,
  major,
}: {
  year: string | undefined;
  term: string | undefined;
  major: string | undefined;
}): Promise<{ timetable: TimetableDataType[] | [] }> => {
  const res = await fetch(
    `${backend_url}/timetable?year=${year}&term=${term}&major=${major}`,
    {
      method: "GET",
      cache: "no-cache",
      headers: new Headers(headers()),
    }
  );
  if (!res.ok) {
    redirect("/teacher/timetable");
  }
  const data = await res.json();
  return data;
};

const getSubjects = async ({
  year,
  term,
  major,
}: {
  year: string | undefined;
  term: string | undefined;
  major: string | undefined;
}): Promise<getSubjectsResponse> => {
  const res = await fetch(
    `${backend_url}/subject?year=${year}&term=${term}&major=${major}&free=${true}`,
    {
      method: "GET",
      cache: "no-cache",
      headers: new Headers(headers()),
    }
  );
  const data = await res.json();
  return data;
};

const Timetable = async ({
  year = "2",
  term = "2",
  major = "it",
  role,
}: Props) => {
  const [{ timetable }, data] = await Promise.all([
    getTimetable({ year, term, major }),
    getSubjects({ year, term, major }),
  ]);

  return (
    <div className="p-2 ">
      {role === "teacher" && (
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between">
          <div>
            <p className="font-semibold text-2xl">
              {major.toUpperCase()} / {`${year} Year`} / {`${term} Term`}
            </p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Link
              href="/teacher/timetable/create"
              className="max-w-[200px] min-w-[175px] h-[49px] flex flex-row items-center gap-2 border-primary border-[3px] text-primary font-semibold p-3 rounded-md"
            >
              <FaPlus size={20} />
              Create Timetable
            </Link>
            <button className="max-w-[200px] px-4 flex flex-row items-center gap-3 bg-primary text-white font-semibold p-[13px] rounded-md">
              <FiDownload size={24} />
              Download
            </button>
          </div>
        </div>
      )}
      <StudentTimetable
        timetableData={timetable}
        timetableSubject={data}
        role={role}
      />
    </div>
  );
};

export default Timetable;
