import ExamCard from "@/components/shared/ExamCard";
import React from "react";

const page = () => {
  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      {/* Guide */}
      <div className="flex flex-row items-center justify-between">
        <div>
          <p className="font-semibold text-2xl ml-2">IT / 2 Year / 2 Term</p>
        </div>
        <div className="flex flex-row items-center gap-6 mr-2">
          <div className="flex flex-row gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-gray-800" />
            <p className="font-semibold">Upcoming</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <p className="font-semibold">Today</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-2">
        {/* Exam Card */}
        <article className="mt-6 bg-white shadow-gray-500 shadow-sm rounded-lg overflow-hidden">
          <div className="bg-gray-900 p-4">
            <p className=" text-2xl text-white font-semibold">Final Exam</p>
          </div>
          <div className="p-6 space-y-6  overflow-y-scroll no-scrollbar">
            <ExamCard
              title="English 1"
              date="11 of October 2024"
              time="2:00 - 4:00 PM"
            />
            <ExamCard
              title="English 1"
              date="11 of October 2024"
              time="2:00 - 4:00 PM"
            />
          </div>
        </article>

        {/* Tuto Card */}
        <article className="mt-6 bg-white shadow-gray-500 shadow-sm rounded-lg overflow-hidden">
          <div className="bg-gray-200 p-4">
            <p className=" text-2xl font-semibold">Tutorial</p>
          </div>
          <div className=" p-6 space-y-6 overflow-y-scroll no-scrollbar">
            <ExamCard
              title="English 1"
              date="11 of October 2024"
              time="2:00 - 4:00 PM"
            />
            <ExamCard
              title="English 1"
              date="11 of October 2024"
              time="2:00 - 4:00 PM"
            />
          </div>
        </article>

        {/* Assignment Card */}
        <article className="mt-6 bg-white shadow-gray-500 shadow-sm rounded-lg overflow-hidden">
          <div className="bg-gray-200 p-4">
            <p className=" text-2xl font-semibold">Assignment</p>
          </div>
          <div className="p-6 space-y-6 overflow-y-scroll no-scrollbar">
            <ExamCard
              title="English 1"
              date="11 of October 2024"
              time="2:00 - 4:00 PM"
            />
            <ExamCard
              title="English 1"
              date="11 of October 2024"
              time="2:00 - 4:00 PM"
            />
          </div>
        </article>
      </div>
    </main>
  );
};

export default page;
