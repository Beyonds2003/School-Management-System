"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { backend_url } from "@/lib/constant";
import Loading_spinner from "../ui/loading_spinner";
import { Button } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

export const ResultSelect = ({ rootRoute }: { rootRoute: string }) => {
  const router = useRouter();
  const [value, setValue] = useState({
    year: "",
    term: "",
    major: "",
    examType: "",
  });
  const [examName, setExamName] = useState<{ id: string; name: string }[]>([]);
  const [exam, setExam] = useState<{ id: string; name: string }>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getExamName = async () => {
      if (
        value.year !== "" &&
        value.term !== "" &&
        value.major !== "" &&
        value.examType !== ""
      ) {
        try {
          setLoading(true);
          const res = await fetch(
            `${backend_url}/exam/names?year=${value.year}&term=${value.term}&major=${value.major}&examType=${value.examType}`,
            {
              method: "GET",
              credentials: "include",
            },
          );
          const { data } = await res.json();
          setExamName(data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }
    };

    getExamName();
  }, [value]);

  const handleSearch = () => {
    router.push(`${rootRoute}?examId=${exam?.id}`);
  };

  return (
    <div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center mt-6">
        <Select
          onValueChange={(val) => setValue({ ...value, year: val })}
          value={value.year}
        >
          <SelectTrigger className="h-[50px] focus:ring-0 ring-0 shadow-sm shadow-gray-400 ">
            <SelectValue placeholder="Year" />
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
        <Select
          onValueChange={(val) => setValue({ ...value, term: val })}
          value={value.term}
        >
          <SelectTrigger className=" h-[50px] focus:ring-0 ring-0 shadow-sm shadow-gray-400 ">
            <SelectValue placeholder="Term" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">First Term</SelectItem>
            <SelectItem value="2">Second Term</SelectItem>
          </SelectContent>
        </Select>
        <Select
          onValueChange={(val) => setValue({ ...value, major: val })}
          value={value.major}
        >
          <SelectTrigger className=" h-[50px] focus:ring-0 ring-0 shadow-sm shadow-gray-400 ">
            <SelectValue placeholder="Major" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="it">It</SelectItem>
            <SelectItem value="civil">Civil</SelectItem>
            <SelectItem value="archi">Archi</SelectItem>
            <SelectItem value="ep">Ep</SelectItem>
            <SelectItem value="ec">Ec</SelectItem>
            <SelectItem value="mc">Mc</SelectItem>
          </SelectContent>
        </Select>
        <Select
          onValueChange={(val) => setValue({ ...value, examType: val })}
          value={value.examType}
        >
          <SelectTrigger className=" h-[50px] focus:ring-0 ring-0 shadow-sm shadow-gray-400 ">
            <SelectValue placeholder="Exam Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="final">Final</SelectItem>
            <SelectItem value="tutorial">Tutorial</SelectItem>
            <SelectItem value="assignment">Assignment</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex flex-row items-center gap-4">
          <Select
            onValueChange={(val) => setExam({ id: val, name: "" })}
            disabled={
              !value.year ||
              !value.term ||
              !value.major ||
              !value.examType ||
              examName.length === 0
            }
          >
            <SelectTrigger className=" h-[50px] focus:ring-0 ring-0 shadow-sm shadow-gray-400 ">
              <SelectValue placeholder="Choose Exam" />
            </SelectTrigger>
            <SelectContent>
              {loading ? (
                <SelectItem value="loading">
                  <div className="flex items-center justify-center">
                    <Loading_spinner />
                  </div>
                </SelectItem>
              ) : (
                <>
                  {examName?.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.name}
                    </SelectItem>
                  ))}
                </>
              )}
            </SelectContent>
          </Select>
          <Button
            disabled={exam === undefined}
            onClick={handleSearch}
            className="bg-primary p-[23px] disabled:bg-primary/50 px-4 rounded-lg text-white shadow-gray-500 shadow-sm"
          >
            <FaSearch size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};
