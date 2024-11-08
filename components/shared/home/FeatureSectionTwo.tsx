"use client";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { motion } from "framer-motion";
import Image from "next/image";

const FeatureSectionTwo = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <section className="h-auto relative p-10 pt-10 pb-20">
      <article
        className={`overflow-hidden bg-white rounded-xl  grid grid-cols-1  lg:grid-cols-[1fr_1fr]`}
      >
        <motion.div className="h-full flex relative">
          <motion.div
            animate={{
              transform: isHover
                ? "translate3d(7rem, 0px, 0px) scale3d(1.02, 1.02, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                : "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            }}
            transition={{ duration: 0.3 }}
            style={{
              inset: "auto 0% auto auto",
              transformStyle: "preserve-3d",
            }}
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            className="min-w-[1000px] my-20 h-[-webkit-fill-available] bg-[#F1F0EE] rounded-xl transition-all absolute right-0 left-0"
          >
            <Image
              src={"/images/project.png"}
              alt="project"
              fill
              className="rounded-xl object-cover object-right"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className={`p-20`}
          animate={{
            transform: isHover
              ? "translate3d(2.75rem, 0px, 0px) scale3d(0.85, 0.85, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
              : "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <h2 className="text-4xl text-gray-500">Description to</h2>
          <h1 className="text-7xl font-semibold mt-2">Teacher</h1>
          <p className="mt-10 text-xl">
            Our school management system simplifies administrative tasks,
            empowers teachers with advanced tools, enhances student learning
            experiences, and keeps things organized.
          </p>
          <div className="grid grid-cols-1 gap-8 mt-28 mb-4">
            <div className="flex flex-row items-center gap-8 divide-x divide-gray-300">
              <article>
                <CiEdit size={35} />
                <h3 className="mt-2 font-semibold text-xl">Dashboard</h3>
                <p className="text-gray-500 mt-2 text-sm">
                  identify key pages and sections for any website in any
                  industry.
                </p>
              </article>
              <article className="pl-8">
                <CiEdit size={35} />
                <h3 className="mt-2 font-semibold text-xl">Exam</h3>
                <p className="text-gray-500 mt-2 text-sm">
                  identify key pages and sections for any website in any
                  industry.
                </p>
              </article>
            </div>
            <div className="flex flex-row items-center gap-8 divide-x divide-gray-300">
              <article>
                <CiEdit size={35} />
                <h3 className="mt-2 font-semibold text-xl">Result</h3>
                <p className="text-gray-500 mt-2 text-sm">
                  identify key pages and sections for any website in any
                  industry.
                </p>
              </article>
              <article className="pl-8">
                <CiEdit size={35} />
                <h3 className="mt-2 font-semibold text-xl">Timetable</h3>
                <p className="text-gray-500 mt-2 text-sm">
                  identify key pages and sections for any website in any
                  industry.
                </p>
              </article>
            </div>
          </div>
        </motion.div>
      </article>
    </section>
  );
};

export default FeatureSectionTwo;
