import React from "react";
import { FaPlus } from "react-icons/fa6";
import EventCard from "@/components/shared/EventCard";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import EventCreateDialog from "./EventCreateDialog";
import { headers } from "next/headers";
import { backend_url } from "@/lib/constant";
import { getEventResponse } from "@/lib/responseType";

const getEvents = async (): Promise<getEventResponse> => {
  const res = await fetch(`${backend_url}/event?page=${1}&limit=${5}`, {
    next: { tags: ["events"] },
    headers: new Headers(headers()),
  });
  const data = await res.json();
  return data;
};

const EventCardContainer = async ({
  role,
}: {
  role: "teacher" | "student";
}) => {
  const { events, page, limit, totalEvent } = await getEvents();

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
          id=""
          action="create"
          name={""}
          descritption={""}
          date={new Date()}
          time={""}
        />
      </Dialog>

      <div className="mt-4 flex flex-col gap-3 max-h-[340px] overflow-y-auto no-scrollbar">
        {events.length === 0 && (
          <div className="h-[160px] flex justify-center items-center">
            <p>No event exit</p>
          </div>
        )}
        {events.map((item) => (
          <EventCard
            key={item.id}
            id={item.id}
            title={item.name}
            description={item.description}
            date={new Date(item.date)}
            time={item.time}
            role={role}
          />
        ))}
      </div>
    </article>
  );
};

export default EventCardContainer;
