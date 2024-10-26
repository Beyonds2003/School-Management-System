import { getUserData } from "@/components/shared/home/Test";
import SubjectContainer from "@/components/shared/SubjectContainer";
import TimetableSelect from "@/components/shared/TimetableSelect";
import React, { Suspense } from "react";

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const userData = getUserData("teacher");

  return (
    <main className="p-4">
      {/* Subject Title */}
      <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
        <div className="flex flex-row items-center gap-4 mr-4">
          <p className="text-2xl font-semibold">Subject</p>
        </div>

        <div className="mt-4">
          <TimetableSelect rootRoute="/teacher/subject" />
        </div>
      </div>

      <div className="mt-8">
        <Suspense fallback={<div>Loading...</div>}>
          <SubjectContainer
            year={searchParams.year}
            term={searchParams.term}
            major={searchParams.major}
          />
        </Suspense>
      </div>
    </main>
  );
};

export default page;
