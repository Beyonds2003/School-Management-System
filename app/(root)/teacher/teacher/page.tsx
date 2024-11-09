import React from "react";
import TeacherTable from "@/components/shared/TeacherTable";
import StudentTeacherSelect from "@/components/shared/StudentTeacherSelect";
import { backend_url } from "@/lib/constant";
import { getTeacherResponse } from "@/lib/responseType";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getUserData } from "@/components/shared/home/Test";

const getTeachers = async (
  year?: string,
  term?: string,
  major?: string,
  gender?: string,
  name?: string,
  page = 1,
  limit = 10
): Promise<getTeacherResponse> => {
  const res = await fetch(
    `${backend_url}/teacher?year=${year}&term=${term}&major=${major}&gender=${gender}&name=${name}&page=${page}&limit=${limit}`,
    {
      method: "GET",
      cache: "no-cache",
      headers: new Headers(headers()),
    }
  );
  if (!res.ok) {
    redirect("/login");
  }
  const data = await res.json();
  return data;
};

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const userData = getUserData("teacher");

  const teachers = await getTeachers(
    searchParams.year,
    searchParams.term,
    searchParams.major,
    searchParams.gender,
    searchParams.q,
    1,
    10
  );

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <h2 className="font-semibold text-2xl">Teachers</h2>
      {/* Filter Students Card */}
      <StudentTeacherSelect rootRoute="/teacher/teacher" route="teacher" />

      {/* Student Table */}
      <section className="shadow-gray-500 shadow-sm p-6 rounded-lg mt-6">
        <p className="font-semibold text-lg ml-1 pb-4">Total: 4</p>
        <TeacherTable teachers={teachers.data} />
      </section>
    </main>
  );
};

export default page;
