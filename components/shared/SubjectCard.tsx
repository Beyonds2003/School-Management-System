import React from "react";
import { LuBook } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import { AnimatedTooltip } from "../ui/animated-tooltip";

type Props = {
  name: string;
  teachers: {
    teacherId: number;
    teacherName: string;
    teacherImage: string;
  }[];
};

const SubjectCard = ({ name, teachers }: Props) => {
  return (
    <article className="p-4 border border-gray-300 rounded-lg">
      <div className="flex flex-row items-center gap-2">
        <LuBook size={22} />
        <p className="text-2xl font-[620]">{name}</p>
      </div>
      <div className="flex flex-row items-center gap-2 mt-1">
        <PiStudent size={19} color="#6B7280" />
        <p className="text-base text-gray-600">
          {teachers.length} Teacher{teachers.length > 1 ? "s" : ""}
        </p>
      </div>

      <div className="flex flex-row items-center">
        {teachers.map((teacher) => {
          return (
            <div className="flex  justify-center flex-col mt-7 gap-2">
              <AnimatedTooltip
                id={teacher.teacherId}
                name={teacher.teacherName}
                image={teacher.teacherImage}
                designation="Teacher"
              />
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default SubjectCard;
