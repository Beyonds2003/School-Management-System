import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const EditTimetableRow = () => {
  return (
    //@ts-ignore
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-3xl">Edit Timetable Row</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default EditTimetableRow;
