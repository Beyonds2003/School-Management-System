import EventCalander from "@/components/shared/EventCalander";
import React, { Suspense } from "react";
import StudentCard from "@/components/shared/StudentCard";
import EventCardContainer from "@/components/shared/EventCardContainer";
import Timetable from "@/components/shared/Timetable";
import { getUserData } from "@/components/shared/home/Test";
import { backend_url } from "@/lib/constant";
import { headers } from "next/headers";
import { getOneStudentResponse } from "@/lib/responseType";

const getStudentData = async (id: string): Promise<getOneStudentResponse> => {
  const res = await fetch(`${backend_url}/student/${id}`, {
    method: "GET",
    headers: headers(),
  });
  const data = await res.json();
  return data;
};

const Student = async () => {
  const userData = getUserData("student");

  const student = await getStudentData(userData.id);

  return (
    <main className="p-6 bg-gray-100">
      <div className=" flex flex-row">
        <section className=" w-full max-[1400px]:w-full h-full pr-5">
          {/* Student Card */}
          <StudentCard
            id={student.id}
            image={student.image}
            name={student.name}
            year={student.year}
            major={student.major}
            term={student.term}
            gender={student.gender}
          />

          {/* Timeline Table */}
          <article className="mt-6 p-6 bg-white shadow-gray-500 shadow-sm rounded-lg">
            <p className=" text-2xl font-semibold">Timetable</p>
            <Suspense fallback={<div>Loading...</div>}>
              <Timetable
                year={String(student.year)}
                term={String(student.term)}
                major={student.major}
                role={"student"}
              />
            </Suspense>
          </article>

          {/* Event Remainder Card */}
          {/*
          <div className=" shadow-gray-500 mt-6 shadow-sm p-5 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Today Event</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <MainEventCard
                image="/images/iso9001_label.png"
                title={"Water Festival"}
                date={"11 of October 2024"}
                time={"2:00 - 4:00 PM"}
              />
            </div>
          </div>
          */}
        </section>

        <section className="max-w-[500px] max-[1400px]:hidden h-full">
          {/* Event Calander */}
          <article className="w-full flex flex-col  items-center">
            <EventCalander />
          </article>

          {/* Event Card */}
          <EventCardContainer role="student" />
        </section>
      </div>
    </main>
  );
};

export default Student;
