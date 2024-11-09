import EventCalander from "@/components/shared/EventCalander";
import React, { Suspense } from "react";
import TeacherTimelineTable from "@/components/shared/TeacherTimelineTable";
import EventCardContainer from "@/components/shared/EventCardContainer";
import { backend_url } from "@/lib/constant";
import { getTimetableRowData } from "@/lib/responseType";
import TotalCardContainer from "@/components/TotalCardContainer";
import { headers } from "next/headers";
import { getUserData } from "@/components/shared/home/Test";

const getTodayTimelne = async (id: string): Promise<getTimetableRowData> => {
  const res = await fetch(`${backend_url}/teacher/timeline/${id}`, {
    method: "GET",
    cache: "no-cache",
    headers: headers(),
  });
  const data = await res.json();
  return data;
};

const Admin = async () => {
  const userData = getUserData("teacher");
  const { data } = await getTodayTimelne(userData.id);

  return (
    <main className="p-6 bg-gray-100">
      <h2 className="text-xl font-semibold">Overview</h2>
      <div className="flex flex-row">
        <section className=" w-full max-[1350px]:w-full h-full pr-5">
          {/* Total Card */}
          <Suspense fallback={<div className="p-6 bg-white shadow-gray-500 shadow-sm rounded-lg max-w-[280px]">Loading...</div>}>
            <TotalCardContainer timelineLength={data === undefined ? 0 : data.length} />
          </Suspense>

          {/* Timeline Table */}
          <article className="mt-6 overflow-x-scroll no-scrollbar  p-6 bg-white shadow-gray-500 shadow-sm rounded-lg">
            <p className=" text-xl font-semibold">Today's Timeline</p>
            <TeacherTimelineTable data={data === undefined ? [] : data} />
          </article>
        </section>

        <section className="max-w-[500px] max-[1350px]:hidden h-full">
          {/* Event Calander */}
          <article className=" flex flex-col  ">
            <EventCalander />
          </article>

          {/* Event Card */}
          <EventCardContainer role="teacher" />
        </section>
      </div>
    </main>
  );
};

export default Admin;
