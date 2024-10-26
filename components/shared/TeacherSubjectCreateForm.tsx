"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MultiSelector,
  MultiSelectorTrigger,
  MultiSelectorInput,
  MultiSelectorContent,
  MultiSelectorList,
  MultiSelectorItem,
} from "@/components/ui/multi-select";
import { FaCheck } from "react-icons/fa";
import { backend_url } from "@/lib/constant";

const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
];

const TeacherSubjectCreateForm = ({
  teacherId,
  teacherMajor,
}: {
  teacherId: string;
  teacherMajor: string;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [year, setYear] = useState("");
  const [term, setTerm] = useState("");
  const [values, setValues] = useState<{
    subjects: { id: string; name: string }[];
  }>({
    subjects: [],
  });
  const [addedSubjects, setAddedSubjects] = useState<
    { id: string; name: string; year: number; term: number; major: string }[]
  >([]);

  const [subjects, setSubjects] = useState<{ id: string; name: string }[]>([]);

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${backend_url}/teacher/addSubjectToTeacher`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          teacherId,
          year,
          term,
          subjects: values.subjects,
        }),
      });

      const { data } = await res.json();
      console.log(data);
      setAddedSubjects(data);
      setValues({
        subjects: [],
      });
      setYear("");
      setTerm("");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(addedSubjects);

  useEffect(() => {
    const getSubjects = async () => {
      try {
        console.log("Major", teacherMajor, year, term);
        setLoading(true);
        const res = await fetch(
          `${backend_url}/subject?year=${year}&term=${term}&major=${teacherMajor}`,
          {
            method: "GET",
            cache: "no-cache",
            credentials: "include",
          },
        );
        const { data } = await res.json();
        setSubjects(data === undefined ? [] : data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    if (year !== "" && term !== "") {
      getSubjects();
    }
  }, [values, year, term]);

  useEffect(() => {
    if (year !== "" || term !== "") {
      setValues({
        subjects: [],
      });
    }
  }, [year, term]);

  return (
    <article className="mt-8 p-6 py-0 w-[600px]  bg-white shadow-gray-500 shadow-sm rounded-lg relative">
      <div className="py-10 text-white z-10 relative mt-2">
        <h1 className="font-semibold text-3xl">Add Subject</h1>
        <p className="text-gray-200 mt-2">
          The subject that have been added will be visible in your timeline.
        </p>
      </div>
      <div className="space-y-8 py-10">
        <h2 className="text-lg font-semibold mb-8 mt-4">
          Choose the subject that you teach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-2 ">
          {/* Teach Year */}
          <Select value={year} onValueChange={(field) => setYear(field)}>
            <SelectTrigger className="h-[45px] focus:ring-0 ring-0 border-[2px] border-gray-200">
              <SelectValue placeholder="Choose Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Year</SelectItem>
              <SelectItem value="2">2 Year</SelectItem>
              <SelectItem value="3">3 Year</SelectItem>
              <SelectItem value="4">4 Year</SelectItem>
              <SelectItem value="5">5 Year</SelectItem>
              <SelectItem value="6">6 Year</SelectItem>
            </SelectContent>
          </Select>

          {/* Term */}
          <Select onValueChange={(field) => setTerm(field)} value={term}>
            <SelectTrigger className=" h-[45px] focus:ring-0 ring-0 border-[2px] border-gray-200">
              <SelectValue placeholder="Choose Term" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">First Term</SelectItem>
              <SelectItem value="2">Second Term</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Subject */}
        <MultiSelector
          onValuesChange={(field) =>
            setValues({
              ...values,
              subjects: field.map((name: string) => {
                const subject = subjects.find((sub) => sub.name === name);
                return subject
                  ? { id: subject.id, name: subject.name }
                  : { id: "", name };
              }),
            })
          }
          values={values.subjects.map((subject) => subject.name)}
          loop={false}
        >
          <MultiSelectorTrigger className=" py-3 col-span-2 focus:ring-0 ring-0 border-[2px] border-gray-200">
            <MultiSelectorInput placeholder="Subjects" />
          </MultiSelectorTrigger>
          <MultiSelectorContent>
            <MultiSelectorList>
              {subjects.map((option, i) => (
                <MultiSelectorItem key={i} value={option.name}>
                  {option.name}
                </MultiSelectorItem>
              ))}
            </MultiSelectorList>
          </MultiSelectorContent>
        </MultiSelector>

        <div className="flex justify-end">
          <Button
            disabled={
              year === "" || term === "" || values.subjects.length === 0
            }
            onClick={handleSubmit}
            type={"submit"}
            className="mt-1 bg-primary rounded-lg disabled:bg-primary/50 flex text-[16px] flex-row gap-3 text-white px-8 h-[48px] "
          >
            <FaCheck size={16} />
            Add
          </Button>
        </div>
        {addedSubjects && (
          <div>
            <h3 className="text-lg font-semibold mb-2 mt-4">
              Subject that have been added:
            </h3>
            <ul>
              {addedSubjects.map((subject) => (
                <li className="text-[16px] addedSubjectLi" key={subject.id}>
                  {subject.major.toUpperCase()} / {subject.year} Year /{" "}
                  {subject.term} Term / {subject.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Blue Background */}
      <div
        className="absolute top-0 left-0 right-[0px] bg-primary h-44"
        style={{ borderRadius: "0 0 300px 0" }}
      />
    </article>
  );
};

export default TeacherSubjectCreateForm;
