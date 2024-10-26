import React, { Suspense } from "react";
import TimetableSelect from "@/components/shared/TimetableSelect";
import Timetable from "@/components/shared/Timetable";
import { getUserData } from "@/components/shared/home/Test";

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const userData = getUserData("teacher");

  return (
    <main className="p-4">
      {/* Timetable Title */}
      <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
        <div className="flex flex-row items-center gap-4 mr-4">
          <p className="text-2xl font-semibold">Timetable</p>
        </div>

        <div className="mt-4">
          <TimetableSelect rootRoute="/teacher/timetable" />
        </div>
      </div>

      <div className="mt-8">
        <Suspense fallback={<div>Loading...</div>}>
          <Timetable
            year={searchParams.year}
            term={searchParams.term}
            major={searchParams.major}
            role={"teacher"}
          />
        </Suspense>
      </div>
    </main>
  );
};

export default page;
