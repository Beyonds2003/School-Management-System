import React from "react";
import { ContainerScroll } from "../../ui/container-scroll-animation";
import Image from "next/image";

const FourthSection = () => {
  return (
    <section className="min-h-screen relative py-10">
      <div className="bg-white container rounded-xl py-10">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center mb-20">
              <h1 className="text-7xl font-semibold text-center">
                Streamline Your School <br />{" "}
                <p className="text-6xl">Operations with Ease</p>
              </h1>
              <p className="text-center mt-8 text-lg text-gray-600 max-w-[770px]">
                Our school management system is designed to simplify
                administrative tasks, improve communication and enhance the
                overall effciency of yourschool. With features such as event,
                exam, result and timetable management, our system empowers
                educators and administrators to focus on what matters most -
                providing quality education.
              </p>
            </div>
          }
        >
          <Image
            src={`/images/project.png`}
            alt="hero"
            height={500}
            width={1400}
            className="mx-auto rounded-2xl object-fill h-full "
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
};

export default FourthSection;
