"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createTeacherFormSchema } from "@/lib/formSchema";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaCheck } from "react-icons/fa";
import { backend_url } from "@/lib/constant";

type Props = {
  setTeacherId: React.Dispatch<React.SetStateAction<string>>;
  setTeacherMajor: React.Dispatch<React.SetStateAction<string>>;
};

const TeacherCreateForm = ({ setTeacherId, setTeacherMajor }: Props) => {
  // 1. Define create teacher form.
  const form = useForm<z.infer<typeof createTeacherFormSchema>>({
    resolver: zodResolver(createTeacherFormSchema),
  });

  // 2. Handle form submission.
  async function onSubmit(values: z.infer<typeof createTeacherFormSchema>) {
    // Do something with the form values.
    try {
      const res = await fetch(`${backend_url}/teacher/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(values),
      });

      const data: {
        message: string;
        id: string;
      } = await res.json();
      console.log(data);
      if (data.id) {
        setTeacherId(data.id);
        setTeacherMajor(values.major);
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <article className="mt-8 p-6 py-0 w-[600px] overflow-hidden bg-white shadow-gray-500 shadow-sm rounded-lg relative">
      <div className="py-10 text-white z-10 relative mt-2">
        <h3 className="font-semibold text-3xl">Create Teacher</h3>
        <p className="text-gray-200 mt-2">Only the admin can create teacher.</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 py-14"
        >
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">Name</FormLabel>
                <FormControl>
                  <input
                    type="text"
                    placeholder="Create your name"
                    {...field}
                    className="w-full placeholder-gray-500 p-3 border-[2px] border-gray-200 rounded-md   focus:outline-none"
                  />
                </FormControl>
              </FormItem>
            )}
          />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Major */}
            <FormField
              control={form.control}
              name="major"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Major</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} {...field}>
                      <SelectTrigger className=" h-[45px] focus:ring-0 ring-0 border-[2px] border-gray-200">
                        <SelectValue placeholder="Choose Major" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="it">It</SelectItem>
                        <SelectItem value="civil">Civil</SelectItem>
                        <SelectItem value="archi">Archi</SelectItem>
                        <SelectItem value="ep">Ep</SelectItem>
                        <SelectItem value="ec">Ec</SelectItem>
                        <SelectItem value="mc">Mc</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            {/* Gender */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">
                    Gender
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} {...field}>
                      <SelectTrigger className=" h-[45px] focus:ring-0 ring-0 border-[2px] border-gray-200">
                        <SelectValue placeholder="Choose Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="mt-1 flex text-[16px] flex-row gap-3 text-white px-8 h-[48px] "
            >
              <FaCheck size={18} />
              Submit
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

export default TeacherCreateForm;
