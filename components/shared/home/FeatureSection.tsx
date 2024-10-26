"use client";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { motion } from "framer-motion";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const FeatureSection = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <section className="min-h-screen  relative p-10 shadow-gray-500 shadow-sm">
      <article
        className={`overflow-hidden bg-white rounded-xl  grid grid-cols-1  lg:grid-cols-[1fr_1fr]`}
      >
        <motion.div
          className={`p-20`}
          animate={{
            transform: isHover
              ? "translate3d(-2.75rem, 0px, 0px) scale3d(0.85, 0.85, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
              : "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <h2 className="text-4xl text-gray-600">Description to</h2>
          <div className="flex items-center gap-4">
            <h1 className="text-7xl font-semibold mt-2">Student</h1>
            <DotLottieReact
              style={{ width: "68px", height: "74px" }}
              src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b1ba914b186aaf55c9e93b_icon-stars-black.json"
              loop
              autoplay
            />
          </div>
          <p className="mt-10 text-xl">
            Our comprehensive school management system simplifies student
            management by providing a user-friendly interface for easy access to
            important student information.
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
                <h3 className="mt-2 font-semibold text-xl">Classroom</h3>
                <p className="text-gray-500 mt-2 text-sm">
                  identify key pages and sections for any website in any
                  industry.
                </p>
              </article>
            </div>
            <div className="flex flex-row items-center gap-8 divide-x divide-gray-300">
              <article>
                <CiEdit size={35} />
                <h3 className="mt-2 font-semibold text-xl">Exam</h3>
                <p className="text-gray-500 mt-2 text-sm">
                  identify key pages and sections for any website in any
                  industry.
                </p>
              </article>
              <article className="pl-8">
                <CiEdit size={35} />
                <h3 className="mt-2 font-semibold text-xl">Result</h3>
                <p className="text-gray-500 mt-2 text-sm">
                  identify key pages and sections for any website in any
                  industry.
                </p>
              </article>
            </div>
          </div>
        </motion.div>
        <motion.div className="h-full flex relative">
          <motion.div
            animate={{
              transform: isHover
                ? "translate3d(-7rem, 0px, 0px) scale3d(1.02, 1.02, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                : "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            }}
            transition={{ duration: 0.3 }}
            style={{
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
              className="rounded-xl object-cover object-left "
            />
          </motion.div>
        </motion.div>
      </article>
    </section>
  );
};

export default FeatureSection;
