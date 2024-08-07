import EventCalander from "@/components/shared/EventCalander";
import React from "react";
import EventCard from "@/components/shared/EventCard";
import StudentCard from "@/components/shared/StudentCard";
import StudentTimetable from "@/components/shared/StudentTimetable";
import EventCardContainer from "@/components/shared/EventCardContainer";

const Student = () => {
  return (
    <main className="p-6 bg-gray-100">
      <div className=" flex flex-row">
        <section className=" w-[74%] max-[1400px]:w-full h-full pr-5">
          {/* Student Card */}
          <StudentCard
            id={1}
            image=""
            name="John Doe"
            year={1}
            major="It"
            term="Second"
            gender="Male"
          />

          {/* Timeline Table */}
          <article className="mt-6 p-6 bg-white shadow-gray-500 shadow-sm rounded-lg">
            <p className=" text-2xl font-semibold">Timetable</p>
            <StudentTimetable role={"student"} />
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

        <section className="w-[26%] max-[1400px]:hidden h-full">
          {/* Event Calander */}
          <article className="w-full flex flex-col  items-center">
            <EventCalander />
          </article>

          {/* Event Card */}
          <EventCardContainer />
        </section>
      </div>
    </main>
  );
};

export default Student;
