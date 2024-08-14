"use client";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import EventCard from "@/components/shared/EventCard";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import EventCreateDialog from "./EventCreateDialog";
import { usePathname } from "next/navigation";

const EventCardContainer = () => {
  const pathname = usePathname();
  const role = pathname.split("/")[1];
  return (
    <article className="mt-4 p-4 bg-white shadow-gray-500 shadow-sm rounded-lg">
      <Dialog>
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-lg font-semibold">Upcoming Events</h2>
          {role === "teacher" && (
            <DialogTrigger asChild>
              <button className="bg-blue-300 p-2 rounded-lg">
                <FaPlus size={20} />
              </button>
            </DialogTrigger>
          )}
        </div>
        <EventCreateDialog
          action="create"
          name={""}
          descritption={""}
          date={new Date()}
          time={""}
        />
      </Dialog>

      <div className="mt-4 flex flex-col gap-3">
        <EventCard
          title={"Water Festival"}
          date={new Date("December 17, 2023")}
          time={"2:00 - 4:00 PM"}
          role={role}
        />
        <EventCard
          title={"GSI Speaking"}
          date={new Date()}
          time={"2:00 - 4:00 PM"}
          role={role}
        />
      </div>
    </article>
  );
};

export default EventCardContainer;
