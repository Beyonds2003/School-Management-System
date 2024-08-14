import React from "react";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import { Button } from "@nextui-org/react";

const studentImages = [
  "/images/student/dashboard.png",
  "/images/student/classroom.png",
  "/images/student/exam.png",
  "/images/student/result.png",
];

const teacherImages = [
  "/images/teacher/dashboard.png",
  "/images/teacher/student.png",
  "/images/teacher/teacher.png",
  "/images/teacher/exam.png",
  "/images/teacher/result.png",
];

const FifthSection = () => {
  return (
    <section className="min-h-[40rem] pb-12 rounded-md flex flex-col antialiased bg-gray-100  items-center  relative overflow-hidden">
      <div className="container bg-white shadow-gray-200 shadow-sm rounded-xl flex flex-col py-10 space-y-4">
        <InfiniteMovingCards
          items={studentImages}
          direction="left"
          speed="slow"
        />
        <InfiniteMovingCards
          items={teacherImages}
          direction="right"
          speed="slow"
        />
        <div className="p-10 flex flex-start justify-between">
          <div>
            <h2 className="text-4xl text-gray-500">Powered by</h2>
            <h1 className="text-7xl text-black font-semibold mt-2">Next.js</h1>
          </div>
          <div>
            <p className="text-gray-500 text-xl">
              Over 2500,000 websites have been designed and build using <br />
              Relume. Here are a few of our favorites.
            </p>
            <Button className="bg-primary p-6  text-white rounded-lg font-semibold  mt-4">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
