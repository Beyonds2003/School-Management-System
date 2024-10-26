import React from "react";
import ProfileImage from "./ProfileImage";

type Props = {
  id: string;
  image: string;
  name: string;
  major: string;
};

const TeacherCard = ({ id, image, name, major }: Props) => {
  return (
    <article className=" mt-4 relative flex flex-row gap-4 shadow-gray-500 shadow-sm rounded-lg p-4 items-center">
      {/* Image */}
      <ProfileImage
        image={image}
        name={name}
        width={60}
        height={60}
        textSize="text-lg"
      />

      {/* Detail */}
      <div className="space-y-1">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p>{major.toUpperCase()}</p>
      </div>
    </article>
  );
};

export default TeacherCard;
