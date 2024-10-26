"use client";
import React, { useState } from "react";
import TeacherCreateForm from "@/components/shared/TeacherCreateForm";
import TeacherSubjectCreateForm from "@/components/shared/TeacherSubjectCreateForm";

const page = () => {
  const [teacherId, setTeacherId] = useState<string>("");
  const [teacherMajor, setTeacherMajor] = useState("");

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center">
        {teacherId === "" ? (
          <TeacherCreateForm
            setTeacherId={setTeacherId}
            setTeacherMajor={setTeacherMajor}
          />
        ) : (
          <TeacherSubjectCreateForm
            teacherId={teacherId}
            teacherMajor={teacherMajor}
          />
        )}
      </div>
    </main>
  );
};

export default page;
