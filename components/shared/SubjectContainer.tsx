import React from "react";
import { backend_url } from "@/lib/constant";
import { headers } from "next/headers";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { getSubjectAndTeacherResponse } from "@/lib/responseType";
import SubjectCard from "./SubjectCard";

const getSubjectAndTeacher = async ({
  year,
  term,
  major,
}: {
  year: string | undefined;
  term: string | undefined;
  major: string | undefined;
}): Promise<getSubjectAndTeacherResponse> => {
  const res = await fetch(
    `${backend_url}/subject/contain-teacher?year=${year}&term=${term}&major=${major}`,
    {
      method: "GET",
      headers: new Headers(headers()),
    }
  );

  const data = await res.json();
  return data;
};

type Props = {
  year: string | undefined;
  term: string | undefined;
  major: string | undefined;
};

const SubjectContainer = async ({
  year = "2",
  term = "2",
  major = "it",
}: Props) => {
  const { data: subjects } = await getSubjectAndTeacher({ year, term, major });

  console.log(subjects);

  return (
    <div className="p-2 ">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between">
        <div>
          <p className="font-semibold text-2xl">
            {major.toUpperCase()} / {`${year} Year`} / {`${term} Term`}
          </p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Link
            href="/teacher/subject/create"
            className="max-w-[200px] min-w-[175px] h-[49px] flex flex-row items-center gap-2 border-primary border-[3px] text-primary font-semibold p-3 rounded-md"
          >
            <FaPlus size={20} />
            Create Subject
          </Link>
        </div>
      </div>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 mt-8">
        {subjects.length > 0 ? (
          subjects.map((item, index) => (
            <SubjectCard
              key={index}
              name={item.subject}
              teachers={item.teachers}
            />
          ))
        ) : (
          <p>No subject found</p>
        )}
      </section>
    </div>
  );
};

export default SubjectContainer;
