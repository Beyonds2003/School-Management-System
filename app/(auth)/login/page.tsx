import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentTeacherLoginForm from "./StudentTeacherLoginForm";

const page = () => {
  return (
    <section className="bg-gray-100 flex h-screen items-center justify-center">
      <Tabs
        defaultValue="student"
        className="w-[500px] shadow-gray-500 shadow-sm rounded-lg"
      >
        <TabsList className="w-full">
          <TabsTrigger value="student" className="w-full">
            Student
          </TabsTrigger>
          <TabsTrigger value="teacher" className="w-full">
            Teacher
          </TabsTrigger>
        </TabsList>
        <TabsContent value="student">
          <StudentTeacherLoginForm role="student" />
        </TabsContent>
        <TabsContent value="teacher">
          <StudentTeacherLoginForm role="teacher" />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default page;
