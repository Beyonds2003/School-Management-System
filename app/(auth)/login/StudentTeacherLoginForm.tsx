"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { studentTeacherLoginForm } from "@/lib/formSchema";
import { z } from "zod";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const StudentTeacherLoginForm = ({ role }: { role: "teacher" | "student" }) => {
  const router = useRouter();
  // 1. Define student login form.
  const form = useForm<z.infer<typeof studentTeacherLoginForm>>({
    resolver: zodResolver(studentTeacherLoginForm),
  });

  // 2. Handle form submission.
  function onSubmit(values: z.infer<typeof studentTeacherLoginForm>) {
    if (role === "teacher") {
      // Do Teacher Request
      router.push("/teacher");
    } else {
      // Do Student Request
      router.push("/student");
    }

    console.log(values);
  }

  return (
    <article className="mt-0 p-6 py-0 overflow-hidden bg-white shadow-gray-500 shadow-sm rounded-lg relative">
      <div className="py-10 text-white z-10 relative mt-2">
        <h3 className="font-semibold text-3xl">
          Login {role === "teacher" ? "Teacher" : "Student"}
        </h3>
        <p className="text-gray-200 mt-2">
          Only the valid student and teacher can login.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 py-14"
        >
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">Email</FormLabel>
                <FormControl>
                  <input
                    type="text"
                    {...field}
                    placeholder="Add your email"
                    className="w-full placeholder-gray-500 p-3 border-[2px] border-gray-200 rounded-md   focus:outline-none"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">
                  Password
                </FormLabel>
                <FormControl>
                  <input
                    type="password"
                    {...field}
                    placeholder="Add your password"
                    className="w-full placeholder-gray-500 p-3 border-[2px] border-gray-200 rounded-md   focus:outline-none"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              className="mt-1 flex text-[16px] flex-row gap-3 text-white bg-primary rounded-lg px-8 h-[48px]"
            >
              <FaCheck size={18} />
              Login
            </Button>
          </div>
        </form>
      </Form>
      {/* Blue Background */}
      <div
        className="absolute top-0 left-0 right-[0px] bg-primary h-44"
        style={{ borderRadius: "0 0 300px 0" }}
      />
    </article>
  );
};

export default StudentTeacherLoginForm;
