import StudentTable from "@/components/shared/StudentTable";
import TeacherCard from "@/components/shared/TeacherCard";
import React from "react";
import { CiSearch } from "react-icons/ci";

const page = () => {
  return (
    <main className="p-4 bg-gray-100">
      {/* Teachers Card */}
      <div className="p-4">
        <h1 className="font-semibold text-2xl ml-1 mb-2">Teachers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          <TeacherCard id={1} image="" name="John Doe" major="IT" />
          <TeacherCard id={2} image="" name="Michel" major="Be" />
          <TeacherCard id={3} image="" name="Justin" major="Dc" />
          <TeacherCard id={4} image="" name="Bob" major="Dld" />
          <TeacherCard id={5} image="" name="Sheldon" major="Math" />
          <TeacherCard id={6} image="" name="Kyaw Gyi" major="Eng" />
          <TeacherCard id={7} image="" name="Daw Su" major="Web" />
          <TeacherCard id={8} image="" name="Daw Mya" major="C++" />
        </div>
      </div>

      {/* Students Table */}
      <div>
        <div className="">
          {/* Student Table */}
          <section className="shadow-gray-500 shadow-sm p-6 rounded-lg mt-4 space-y-6">
            <h2 className="font-semibold text-2xl">Students</h2>
            <div className="border-[1px] bg-white max-w-[260px] flex flex-row items-center rounded-md shadow-gray-400 shadow-sm gap-2 border-gray-300 pl-2">
              <CiSearch size={25} />
              <input
                type="text"
                placeholder="Search Student"
                className="w-full placeholder-gray-500 p-3 border-r-[2px] border-gray-200  focus:outline-none"
              />
            </div>

            <StudentTable />
          </section>
        </div>
      </div>
    </main>
  );
};

export default page;
