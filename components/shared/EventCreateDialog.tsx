"use client";
import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { FaCheck } from "react-icons/fa";
import { DatePicker } from "@/components/ui/date-picker";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createEventFormSchema } from "@/lib/formSchema";
import { z } from "zod";
import { Button } from "../ui/button";

type Props = {
  action: string;
  name: string;
  descritption: string;
  date: Date;
  time: string;
};

const EventCreateDialog = ({
  action,
  name,
  descritption,
  date,
  time,
}: Props) => {
  // 1. Define create event form.
  const form = useForm<z.infer<typeof createEventFormSchema>>({
    resolver: zodResolver(createEventFormSchema),
    defaultValues: {
      name: name,
      description: descritption,
      date: date,
      time: time,
    },
  });

  // 2. Handle form submission.
  function onSubmit(values: z.infer<typeof createEventFormSchema>) {
    // Do something with the form values.
    if (action === "create") {
      console.log("event create");
    } else if (action === "edit") {
      console.log("event edit");
    } else {
      return;
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-2xl">
          {action === "create" ? "Create" : "Edit"} Event
        </DialogTitle>
        <DialogDescription>
          {action === "create"
            ? "The event that you create can be see by every student!"
            : "The event that you edit can be see by every student!"}
        </DialogDescription>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 py-2"
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
                        placeholder="Enter name"
                        {...field}
                        className="w-full placeholder-gray-500 p-3 border-[2px] border-gray-200 rounded-md   focus:outline-none"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold">
                      Description
                    </FormLabel>
                    <FormControl>
                      <input
                        type="text"
                        {...field}
                        placeholder="Enter Description"
                        className="w-full placeholder-gray-500 p-3 border-[2px] border-gray-200 rounded-md   focus:outline-none"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* Date */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold">
                      Date
                    </FormLabel>
                    <FormControl>
                      <div>
                        <DatePicker field={field} />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* Time */}
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold">
                      Time
                    </FormLabel>
                    <FormControl>
                      <input
                        type="text"
                        {...field}
                        placeholder="Enter time (2:00 - 4:00 PM)"
                        className="w-full placeholder-gray-500 p-3 border-[2px] border-gray-200 rounded-md   focus:outline-none"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="mt-1 flex text-[16px] flex-row gap-3 text-white px-8 h-[48px] "
                >
                  <FaCheck size={18} />
                  {action === "create" ? "Submit" : "Edit"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogHeader>
    </DialogContent>
  );
};

export default EventCreateDialog;
