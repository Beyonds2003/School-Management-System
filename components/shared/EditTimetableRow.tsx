import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { editTimetableFormSchema } from "@/lib/formSchema";
import { z } from "zod";
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";

type Props = {
  major: { day: string; subject: string; code: string; status: string };
  time: string;
  day: number;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
  setCode: React.Dispatch<React.SetStateAction<string>>;
};

const EditTimetableRow = ({ major, time, day, setSubject, setCode }: Props) => {
  // 1. Define edit timetable  form.
  const form = useForm<z.infer<typeof editTimetableFormSchema>>({
    resolver: zodResolver(editTimetableFormSchema),
    defaultValues: {
      major: major.subject,
      majorCode: major.code,
    },
  });

  // 2. Handle form submission.
  function onSubmit(values: z.infer<typeof editTimetableFormSchema>) {
    // Do something with the form values.
    console.log(values);
    setSubject(values.major);
    setCode(values.majorCode);
  }

  return (
    //@ts-ignore
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-3xl">Edit Timetable Row</SheetTitle>
      </SheetHeader>
      <div className="">
        <h2 className="text-2xl font-semibold mt-4">
          {major.day} - {time}
        </h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
          {/* Major */}
          <FormField
            control={form.control}
            name="major"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">Major</FormLabel>
                <FormControl>
                  <input
                    type="text"
                    placeholder="Change major"
                    {...field}
                    className="w-full placeholder-gray-500 p-3 border-[2px] border-gray-200 rounded-md   focus:outline-none"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {/* Major Code */}
          <FormField
            control={form.control}
            name="majorCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">
                  Major Code
                </FormLabel>
                <FormControl>
                  <input
                    type="text"
                    placeholder="Change major code"
                    {...field}
                    className="w-full placeholder-gray-500 p-3 border-[2px] border-gray-200 rounded-md   focus:outline-none"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex justify-start">
            <SheetClose asChild>
              <Button
                type="submit"
                className="mt-3 flex text-[16px] flex-row gap-3 text-white px-6 h-[45px] "
              >
                <FaCheck size={16} />
                Edit
              </Button>
            </SheetClose>
          </div>
        </form>
      </Form>
    </SheetContent>
  );
};

export default EditTimetableRow;
