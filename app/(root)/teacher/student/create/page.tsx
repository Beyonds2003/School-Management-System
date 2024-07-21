import React from "react";

const page = () => {
  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <h2 className="font-semibold text-2xl">Students</h2>
      <div className="flex items-center justify-center">
        <article className="mt-8 p-6 w-[600px] bg-white shadow-gray-500 shadow-sm rounded-lg">
          <h3 className="font-semibold text-xl">Create</h3>
          <p className="text-gray-600">
            Create the student by filling the following form.
          </p>
        </article>
      </div>
    </main>
  );
};

export default page;
