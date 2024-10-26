"use client";
import React, { useState } from "react";
import { RxCalendar } from "react-icons/rx";
import { MdAccessTime } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import EventCreateDialog from "./EventCreateDialog";
import { HiDotsHorizontal } from "react-icons/hi";
import { LuTrash2 } from "react-icons/lu";
import { backend_url } from "@/lib/constant";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  role: string;
};

const EventCard = ({ id, title, description, date, time, role }: Props) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleEventDelete = async () => {
    const res = await fetch(`${backend_url}/event/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    console.log("Delete Successful", data);
    router.refresh();
  };

  return (
    <article className="bg-gray-200 shadow-gray-300 shadow-sm p-5 rounded-lg">
      <Dialog
        open={open}
        onOpenChange={() => {
          console.log("Open Dialog");
          setTimeout(() => {
            setOpen((prev) => !prev);
          }, 200);
        }}
      >
        <Dropdown>
          <div className=" flex flex-row justify-between items-start">
            <div className="flex flex-col ">
              <h2 className="text-lg font-semibold ">{title}</h2>
              <p className="text-base text-gray-500 mt-1 mb-3 font-normal ">
                {description}
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  <RxCalendar size={17} />
                  <p className="text-sm">
                    {new Date(date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <MdAccessTime size={17} />
                  <p className="text-sm">{time}</p>
                </div>
              </div>
            </div>

            {role === "teacher" && (
              <DropdownTrigger>
                <Button className="p-0 m-0 w-fit h-fit items-start flex">
                  <HiDotsHorizontal size={22} />
                </Button>
              </DropdownTrigger>
            )}
          </div>
          <DropdownMenu
            aria-label="Static Actions"
            className="bg-white p-2 rounded-lg my-[-8px] shadow-gray-400 shadow-sm"
          >
            <DropdownItem key="edit">
              <DialogTrigger asChild>
                <button className="flex flex-row gap-4 items-center">
                  <CiEdit size={23} />
                  Edit event
                </button>
              </DialogTrigger>
            </DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              <button
                onClick={handleEventDelete}
                className="flex flex-row gap-4 items-center text-red-500"
              >
                <LuTrash2 size={20} />
                Delete event
              </button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <EventCreateDialog
          id={id}
          action="edit"
          name={title}
          descritption={description}
          date={date}
          time={time}
        />
      </Dialog>
    </article>
  );
};

export default EventCard;
