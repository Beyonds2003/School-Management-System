import { getUserData } from "@/components/shared/home/Test";
import StudentTable from "@/components/shared/StudentTable";
import { backend_url } from "@/lib/constant";
import {
  getOneStudentResponse,
  getStudentsResponse,
  getSubjectAndTeacherResponse,
} from "@/lib/responseType";
import React from "react";
import { headers } from "next/headers";
import SubjectCard from "@/components/shared/SubjectCard";

const getStudents = async (
  year?: string,
  term?: string,
  major?: string,
): Promise<getStudentsResponse> => {
  const res = await fetch(
    `${backend_url}/student?year=${year}&term=${term}&major=${major}&gender=${undefined}&name=${""}&page=${page}&limit=${10}`,
    {
      method: "GET",
      cache: "no-cache",
      headers: headers(),
    },
  );
  const data = await res.json();
  return data;
};

const getSubjectAndTeacher = async ({
  year,
  term,
  major,
}: {
  year: string;
  term: string;
  major: string;
}): Promise<getSubjectAndTeacherResponse> => {
  const res = await fetch(
    `${backend_url}/subject/contain-teacher?year=${year}&term=${term}&major=${major}`,
    {
      method: "GET",
      headers: headers(),
    },
  );
  const data = await res.json();
  return data;
};

const getStudentData = async (id: string): Promise<getOneStudentResponse> => {
  const res = await fetch(`${backend_url}/student/${id}`, {
    method: "GET",
    headers: headers(),
  });
  const data = await res.json();
  return data;
};

const page = async () => {
  const userData = getUserData("student");

  const student = await getStudentData(userData.id);

  const [subjectAndTeacher, students] = await Promise.all([
    getSubjectAndTeacher({
      year: String(student.year),
      term: String(student.term),
      major: student.major,
    }),
    getStudents(String(student.year), String(student.term), student.major),
  ]);

  return (
    <main className="p-4 bg-gray-100">
      {/* Teachers Card */}
      <div className="p-4">
        <h1 className="font-semibold text-2xl ml-1 mb-4">Subjects & Teachers</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          {subjectAndTeacher.data.map((item, index) => (
            <SubjectCard
              key={index}
              name={item.subject}
              teachers={item.teachers}
            />
          ))}
        </div>
      </div>

      {/* Students Table */}
      <div>
        <div className="">
          {/* Student Table */}
          <section className="shadow-gray-500 shadow-sm p-6 rounded-lg mt-4 space-y-6">
            <h2 className="font-semibold text-2xl">Students</h2>
            <p className="font-semibold text-lg ml-1 pb-4">
              Total: {students.total.count}
            </p>

            <StudentTable students={students.data} />
          </section>
        </div>
      </div>
    </main>
  );
};

export default page;
