import ExamCard from "@/components/shared/ExamCard";
import { getUserData } from "@/components/shared/home/Test";
import { backend_url } from "@/lib/constant";
import { getExamResponse, getOneStudentResponse } from "@/lib/responseType";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const getStudentData = async (id: string): Promise<getOneStudentResponse> => {
  const res = await fetch(`${backend_url}/student/${id}`, {
    method: "GET",
    headers: headers(),
  });
  const data = await res.json();
  return data;
};

const getExams = async ({
  year,
  term,
  major,
}: {
  year: string;
  term: string;
  major: string;
}): Promise<getExamResponse> => {
  const res = await fetch(
    `${backend_url}/exam?year=${year}&term=${term}&major=${major}`,
    {
      method: "GET",
      cache: "no-store",
      headers: headers(),
    },
  );
  if (!res.ok) {
    redirect("/login");
  }
  const data = await res.json();
  return data;
};

const page = async () => {
  const userData = getUserData("student");

  const student = await getStudentData(userData.id);

  const { final, tutorial, assignment } = await getExams({
    year: String(student.year),
    term: String(student.term),
    major: student.major,
  });

  return (
    <main className="p-4">
      <div className="mt-4">
        {/* Guide */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between ">
          <div>
            <p className="font-semibold text-2xl">
              {student.major.toUpperCase()} / {student.year} Year /{" "}
              {student.term} Term
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-6 mr-2 mt-2">
          <div className="flex flex-row gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-gray-800" />
            <p className="font-semibold">Upcoming</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <p className="font-semibold">Today</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-2 xl:h-screen lg:h-full pb-10">
          {/* Exam Card */}
          <article className="mt-6 bg-white shadow-gray-500 shadow-sm rounded-lg overflow-hidden h-full">
            <div className="bg-gray-900 p-4">
              <p className=" text-2xl text-white font-semibold">Final Exam</p>
            </div>
            <div className="p-6 space-y-6  overflow-y-scroll no-scrollbar">
              {final.map((item) => (
                <ExamCard
                  title={item.name}
                  description={item.description}
                  date={item.date}
                  time={item.time}
                />
              ))}
              {final.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-2xl font-semibold mt-10">No Final</p>
                </div>
              )}
            </div>
          </article>

          {/* Tuto Card */}
          <article className="mt-6 bg-white shadow-gray-500 shadow-sm rounded-lg overflow-hidden h-full">
            <div className="bg-gray-200 p-4">
              <p className=" text-2xl font-semibold">Tutorial</p>
            </div>
            <div className=" p-6 space-y-6 overflow-y-scroll no-scrollbar">
              {tutorial.map((item) => (
                <ExamCard
                  title={item.name}
                  description={item.description}
                  date={item.date}
                  time={item.time}
                />
              ))}
              {tutorial.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-2xl font-semibold mt-10">No Tutorial</p>
                </div>
              )}
            </div>
          </article>

          {/* Assignment Card */}
          <article className="mt-6 bg-white shadow-gray-500 shadow-sm rounded-lg overflow-hidden h-full">
            <div className="bg-gray-200 p-4">
              <p className=" text-2xl font-semibold">Assignment</p>
            </div>
            <div className="p-6 space-y-6 overflow-y-scroll no-scrollbar">
              {assignment.map((item) => (
                <ExamCard
                  title={item.name}
                  description={item.description}
                  date={item.date}
                  time={item.time}
                />
              ))}
              {assignment.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-2xl font-semibold mt-10">No Assignment</p>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default page;
