"use client";
import Image from "next/image";
import React, { useState } from "react";
import { getTextColorBasedOnBackground, stringToColor } from "@/lib/utils";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  id,
  name,
  designation,
  image,
}: {
  id: number;
  name: string;
  designation: string;
  image: string;
}) => {
  const avatarColor = stringToColor(name);
  const avatarTextColor = getTextColorBasedOnBackground(avatarColor);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <div
      className="-mr-4  relative group"
      key={name}
      onMouseEnter={() => setHoveredIndex(id)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence mode="popLayout">
        {hoveredIndex === id && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap",
            }}
            className="absolute -top-12 -left-10 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-white z-50 shadow-md px-4 py-2 shadow-gray-300"
          >
            <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px  h-px " />
            <div className="absolute left-10 w-[20%] z-30 -bottom-px  h-px " />
            <div className="font-bold text-primary relative z-30 text-base">
              {name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div>
        {image === "" ? (
          <div
            onMouseMove={handleMouseMove}
            className="object-cover cursor-pointer flex items-center justify-center pb-[2px]  object-top rounded-full border-2 group-hover:scale-110 group-hover:z-30 border-white  relative transition duration-300"
            style={{
              backgroundColor: avatarColor,
              width: 50,
              height: 50,
            }}
          >
            <p
              className={`text-lg font-semibold`}
              style={{ color: avatarTextColor }}
            >
              {name.split(" ").length > 1
                ? name.split(" ")[0][0] + name.split(" ")[1][0]
                : name[0]}
            </p>
          </div>
        ) : (
          <Image
            onMouseMove={handleMouseMove}
            src={image}
            width={50 + 2}
            height={50 + 2}
            className="object-cover cursor-pointer !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
            alt="student profile image"
          />
        )}
      </div>
    </div>
  );
};
