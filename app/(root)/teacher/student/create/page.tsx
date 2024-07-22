"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createStudentFormSchema } from "@/lib/formSchema";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = () => {
  // 1. Define create student form.
  const form = useForm<z.infer<typeof createStudentFormSchema>>({
    resolver: zodResolver(createStudentFormSchema),
  });

  // 2. Handle form submission.
  function onSubmit(values: z.infer<typeof createStudentFormSchema>) {
    // Do something with the form values.
    console.log(values);
  }

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center">
        <article className="mt-8 p-6 w-[600px] bg-white shadow-gray-500 shadow-sm rounded-lg">
          <h3 className="font-semibold text-2xl">Create Student</h3>
          <p className="text-gray-600 mt-1">
            Only the teacher can create student.
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 py-8"
            >
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold">
                      Name
                    </FormLabel>
                    <FormControl>
                      <input
                        type="text"
                        placeholder="Create your name"
                        {...field}
                        className="w-full placeholder-gray-500 p-3 border-[2px] border-gray-200 rounded-md   focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold">
                      Email
                    </FormLabel>
                    <FormControl>
                      <input
                        type="text"
                        {...field}
                        placeholder="Add your email"
                        className="w-full placeholder-gray-500 p-3 border-[2px] border-gray-200 rounded-md   focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
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
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                {/* Year */}
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select onValueChange={field.onChange} {...field}>
                          <SelectTrigger className="h-[45px] focus:ring-0 ring-0 border-[2px] border-gray-200">
                            <SelectValue placeholder="Year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Year</SelectItem>
                            <SelectItem value="2">2 Year</SelectItem>
                            <SelectItem value="3">3 Year</SelectItem>
                            <SelectItem value="4">4 Year</SelectItem>
                            <SelectItem value="5">5 Year</SelectItem>
                            <SelectItem value="6">6 Year</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Term */}
                <FormField
                  control={form.control}
                  name="term"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select onValueChange={field.onChange} {...field}>
                          <SelectTrigger className=" h-[45px] focus:ring-0 ring-0 border-[2px] border-gray-200">
                            <SelectValue placeholder="Term" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="First">First Term</SelectItem>
                            <SelectItem value="Second">Second Term</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Major */}
                <FormField
                  control={form.control}
                  name="major"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select onValueChange={field.onChange} {...field}>
                          <SelectTrigger className=" h-[45px] focus:ring-0 ring-0 border-[2px] border-gray-200">
                            <SelectValue placeholder="Major" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="It">It</SelectItem>
                            <SelectItem value="Civil">Civil</SelectItem>
                            <SelectItem value="Archi">Archi</SelectItem>
                            <SelectItem value="Ep">Ep</SelectItem>
                            <SelectItem value="Ec">Ec</SelectItem>
                            <SelectItem value="Mc">Mc</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Gender */}
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select onValueChange={field.onChange} {...field}>
                          <SelectTrigger className=" h-[45px] focus:ring-0 ring-0 border-[2px] border-gray-200">
                            <SelectValue placeholder="Gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="mt-1 text-white px-8 h-[45px] "
                >
                  Create
                </Button>
              </div>
            </form>
          </Form>
        </article>
      </div>
    </main>
  );
};

export default page;
