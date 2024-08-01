import ProfileImage from "@/components/shared/ProfileImage";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ResultChart from "@/components/shared/ResultChart";

const page = () => {
  return (
    <main className=" m-4 rounded-xl shadow-gray-500 shadow-sm overflow-hidden ">
      {/* Student Profile Header Card */}
      <article className="w-full h-auto bg-primary text-white p-4 py-6 relative overflow-hidden">
        <div className="flex flex-row gap-6 items-center">
          <ProfileImage
            image=""
            name="John Doe"
            width={80}
            height={80}
            textSize="text-3xl"
          />
          <div className="space-y-1">
            <h2 className="text-3xl font-[700]">John Doe</h2>
            <p className="ml-1">IT Major | Roll - 9</p>
          </div>
              </div>

      </article>

      <div className="p-6 mt-4">
        {/* Basic Detail */}
        <div className="">
          <h2 className="text-2xl font-semibold">Basic Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6 ml-3">
            <div>
              <h4 className="text-lg text-gray-400 font-semibold">Email</h4>
              <p className="mt-1 font-[500]">addykyaw3@gmail.com</p>
            </div>
            <div className="">
              <h4 className="text-lg text-gray-400 font-semibold">Year</h4>
              <p className="ml-3 mt-1 font-[500]">2</p>
            </div>
            <div>
              <h4 className="text-lg text-gray-400 font-semibold">Term</h4>
              <p className="ml-3 mt-1 font-[500]">2</p>
            </div>
            <div>
              <h4 className="text-lg text-gray-400 font-semibold">Gender</h4>
              <p className="ml-3 mt-1 font-[500]">Male</p>
            </div>
          </div>
        </div>

        {/* Performance */}
        <div className="mt-12 px-1">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold">Result</h2>
            <div className="flex flex-row items-center gap-4">
              <Select>
                <SelectTrigger className="h-[50px] w-[150px] focus:ring-0 ring-0 shadow-sm shadow-gray-200 ">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Year</SelectItem>
                  <SelectItem value="2">2 Year</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className=" h-[50px] w-[150px] focus:ring-0 ring-0 shadow-sm shadow-gray-200 ">
                  <SelectValue placeholder="Term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="first term">First Term</SelectItem>
                  <SelectItem value="second term">Second Term</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <ResultChart />
        </div>
      </div>
    </main>
  );
};

export default page;
