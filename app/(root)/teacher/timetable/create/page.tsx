import React from "react";
import CreateStudentTimetable from "@/components/shared/CreateStudentTimetable";
import {
  backend_url,
  emptyTimetableData,
  TimetableDataType,
} from "@/lib/constant";
import TimetableSelect from "@/components/shared/TimetableSelect";
import { getUserData } from "@/components/shared/home/Test";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getSubjectsResponse } from "@/lib/responseType";

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
      headers: headers(),
    },
  );
  if (!res.ok) {
    redirect("/login");
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
      headers: headers(),
    },
  );
  const data = await res.json();
  return data;
};

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { year, term, major } = searchParams;

  const userData = getUserData("teacher");

  const subjects = await getSubjects({
    year,
    term,
    major,
  });

  let data;
  if (year && term && major) {
    data = await getTimetable({
      year,
      term,
      major,
    });
  }

  console.log("Timetable: ", data?.timetable);

  return (
    <main className="p-4">
      {/* Timetable Title */}
      {/* Timetable Title */}
      <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
        <div className="flex flex-row items-center gap-4 mr-4">
          <p className="text-2xl font-semibold">Create Timetable</p>
        </div>

        <div className="mt-4 ">
          <TimetableSelect rootRoute="/teacher/timetable/create" />
        </div>
      </div>

      <div className="mt-8">
        {data?.timetable ? (
          <div>
            {data.timetable.length > 0 ? (
              <p className="mt-32 flex flex-row items-center justify-center text-2xl ">
                Timetable Already Exists
              </p>
            ) : (
              <CreateStudentTimetable timetableSubject={subjects} />
            )}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </main>
  );
};

export default page;
