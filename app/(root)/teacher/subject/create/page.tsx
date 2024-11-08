"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createStudentFormSchema,
  createSubjectFormSchema,
} from "@/lib/formSchema";
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
import Loading_spinner from "@/components/ui/loading_spinner";
import { useToast } from "@/hooks/use-toast";

const page = () => {
  const toast = useToast();
  // 1. Define create student form.
  const form = useForm<z.infer<typeof createSubjectFormSchema>>({
    resolver: zodResolver(createSubjectFormSchema),
  });

  // 2. Handle form submission.
  async function onSubmit(values: z.infer<typeof createSubjectFormSchema>) {
    try {
      const res = await fetch(`${backend_url}/subject`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name: values.name,
          code: values.code,
          year: +values.year,
          term: +values.term,
          major: values.major,
        }),
      });

      const data = await res.json();
      console.log("Subjects", data);
      form.reset({
        name: "",
        code: "",
        year: undefined,
        term: undefined,
        major: undefined,
      });
      if (res.status === 201) {
        toast.toast({
          title: "Success",
          description: data.message,
        });
      } else {
        toast.toast({
          title: "Error",
          description: data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center">
        <article className="mt-8 p-6 py-0 w-[600px] overflow-hidden bg-white shadow-gray-500 shadow-sm rounded-lg relative">
          <div className="py-10 text-white z-10 relative mt-2">
            <h3 className="font-semibold text-3xl">Create Subject</h3>
            <p className="text-gray-200 mt-2">
              Only the teacher can create subject.
            </p>
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
                    <FormLabel className="text-lg font-semibold">
                      Name
                    </FormLabel>
                    <FormControl>
                      <input
                        type="text"
                        placeholder="Enter Subject Name"
                        {...field}
                        className="w-full placeholder-gray-500 p-3 border-[2px] border-gray-200 rounded-md   focus:outline-none"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* Code */}
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold">
                      Code
                    </FormLabel>
                    <FormControl>
                      <input
                        type="text"
                        {...field}
                        placeholder="Enter Subject Code"
                        className="w-full placeholder-gray-500 p-3 border-[2px] border-gray-200 rounded-md   focus:outline-none"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* Major */}
              <FormField
                control={form.control}
                name="major"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold">
                      Major
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value || ""}
                      >
                        <SelectTrigger className=" h-[45px] focus:ring-0 ring-0 border-[2px] border-gray-200">
                          {field.value ? (
                            <SelectValue placeholder="Choose Major" />
                          ) : (
                            "Choose Major"
                          )}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Year */}
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold">
                        Year
                      </FormLabel>
                      <FormControl>
                        <Select
                          value={field.value || ""}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="h-[45px] focus:ring-0 ring-0 border-[2px] border-gray-200">
                            {field.value ? (
                              <SelectValue placeholder="Choose Year" />
                            ) : (
                              "Choose Year"
                            )}
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
                    </FormItem>
                  )}
                />
                {/* Term */}
                <FormField
                  control={form.control}
                  name="term"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold">
                        Term
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value || ""}
                        >
                          <SelectTrigger className=" h-[45px] focus:ring-0 ring-0 border-[2px] border-gray-200">
                            {field.value ? (
                              <SelectValue placeholder="Choose Term" />
                            ) : (
                              "Choose Term"
                            )}
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">First Term</SelectItem>
                            <SelectItem value="2">Second Term</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-end">
                <Button
                  isLoading={form.formState.isSubmitting}
                  disabled={form.formState.isSubmitting}
                  spinner={<Loading_spinner />}
                  type="submit"
                  className="mt-1 disabled:bg-primary/50 bg-primary rounded-lg flex text-[16px] flex-row gap-3 text-white px-8 h-[48px] "
                >
                  {!form.formState.isSubmitting && <FaCheck size={18} />}
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
      </div>
    </main>
  );
};

export default page;
