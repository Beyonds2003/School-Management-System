import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const FirstSection = () => {
  return (
    <section className="h-screen flex items-center relative overflow-hidden">
      <Image
        src="/images/school-image.jpg"
        fill
        alt="University Campus"
        className=" object-fill ml-[20%]"
      />

      <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-start text-start  items-center pl-7 bg-gradient-to-r from-primary from-20% via-primary/0 via-60% to-transparent to-30%">
        <div className="text-white w-[700px] mt-20">
          <p className="text-[50px] font-semibold text-primary-foreground mb-6 leading-tight">
            Welcome to <br /> Our{" "}
            <abbr
              title="University Campus Management System"
              className="no-underline cursor-pointer"
            >
              UCMS
            </abbr>
          </p>
          <p className="text-gray-100 text-lg leading-relaxed">
            Simplify the management of your university daily tasks and processes
            with <br /> our intuitive and easy-to-use management system.
          </p>
          <Button className="bg-white pr-7 text-black text-lg font-semibold p-2 px-6 rounded-lg mt-6">
            About Us
          </Button>
        </div>
      </div>

      {/* Achivements Image */}
      <div className="absolute bottom-2 right-2 flex flex-row gap-4">
        <Image
          src="/images/aun_qa_label.png"
          alt="Achievements"
          width={120}
          height={120}
          className="bg-white rounded-sm"
        />
        <Image
          src="/images/iso9001_label.png"
          alt="Achievements"
          width={120}
          height={120}
          className="rounded-sm"
        />
      </div>
    </section>
  );
};

export default FirstSection;
