import EventCalander from "@/components/shared/EventCalander";
import React, { Suspense } from "react";
import TeacherTimelineTable from "@/components/shared/TeacherTimelineTable";
import EventCardContainer from "@/components/shared/EventCardContainer";
import { backend_url } from "@/lib/constant";
import { getTimetableRowData } from "@/lib/responseType";
import TotalCardContainer from "@/components/TotalCardContainer";
import { headers } from "next/headers";
import { getUserData } from "@/components/shared/home/Test";

// const getTodayTimelne = async (id: string): Promise<getTimetableRowData> => {
//   const res = await fetch(`${backend_url}/teacher/timeline/${id}`, {
//     method: "GET",
//     cache: "no-cache",
//     headers: headers(),
//   });
//   const data = await res.json();
//   return data;
// };

const Admin = async () => {
  const userData = getUserData("teacher");
  // const { data } = await getTodayTimelne(userData.id);

  return (
    <main className="p-6 bg-gray-100">
      <h2 className="text-xl font-semibold">Overview</h2>
      <div className="flex flex-row">
        <section className=" w-full max-[1350px]:w-full h-full pr-5">
        </section>
      </div>
    </main>
  );
};

export default Admin;
