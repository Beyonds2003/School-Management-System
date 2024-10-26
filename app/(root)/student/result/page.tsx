import ResultTable from "@/components/shared/ResultTable";
import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { getResultsResponse } from "@/lib/responseType";
import { backend_url } from "@/lib/constant";
import { headers } from "next/headers";
import { ResultSelect } from "@/components/shared/ResultSelect";
import { getUserData } from "@/components/shared/home/Test";

const getResults = async (
  examId: string | undefined,
): Promise<getResultsResponse> => {
  const res = await fetch(`${backend_url}/result/${examId}`, {
    method: "GET",
    cache: "no-cache",
    headers: headers(),
  });
  if (!res.ok) {
    console.log("Status", res.status);
  }
  const data = await res.json();
  return data;
};

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const userData = getUserData("student");
  const { data } = await getResults(searchParams.examId);

  console.log(data);
  return (
    <main className="p-4 space-y-8 bg-gray-100 h-screen">
      {/* Filter Result  */}
      <ResultSelect rootRoute="/student/result" />

      <div
        className="flex flex-row items-center gap-4 justify-end "
        style={{ marginTop: "-47px" }}
      >
        <Button className="flex text-base flex-row items-center gap-3 bg-primary text-white font-semibold p-[16px] py-[23px] rounded-md">
          <FiDownload size={20} />
          Download
        </Button>
      </div>

      <ResultTable data={data} />
    </main>
  );
};

export default page;
