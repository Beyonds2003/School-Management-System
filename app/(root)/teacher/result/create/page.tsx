import React from "react";
import CreateResultTable from "@/components/shared/CreateResultTable";
import { ResultSelect } from "@/components/shared/ResultSelect";
import { backend_url } from "@/lib/constant";
import { getStudnetsAndSubjectsResponse } from "@/lib/responseType";
import { headers } from "next/headers";

const getStudentAndSubjects = async (
  examId: string | undefined,
): Promise<getStudnetsAndSubjectsResponse> => {
  const res = await fetch(
    `${backend_url}/result/students&subjects?examId=${examId}`,
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
  const data = await getStudentAndSubjects(searchParams.examId);

  return (
    <main className="p-4 space-y-8 bg-gray-100 h-screen">
      <h2 className="font-semibold text-2xl">Create Result</h2>
      {/* Filter Result  */}
      <ResultSelect rootRoute="/teacher/result/create" />

      {data.subjects !== undefined ? (
        <CreateResultTable
          examId={searchParams.examId}
          students={data.students}
          subjects={data.subjects}
        />
      ) : (
        <div className="text-center"> Result Already Created</div>
      )}
    </main>
  );
};

export default page;
