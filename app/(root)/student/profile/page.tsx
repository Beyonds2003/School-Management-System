import React from "react";

const page = () => {
  return (
    <main className="p-4 rounded-lg">
      <div className="rounded-xl bg-cyan-100  ">
        <div className="bg-blue-500 flex rounded-xl ">
          <img src="" alt="pp" className="p-5 rounded-full" />
          <div className="p-5">
            <p className="text-xl font-semibold text-white p-2">Name</p>
            <p className="text-white p-2">major | roll no:(optional)</p>
          </div>
        
        </div>
        <div className="p-4">
          <p className="font-bold text-[20px] py-4">Basic Detail</p>
          <div className="flex pb-5">
            <p className="pl-0 pr-40">Email@gmail.com</p>
            <p className="pl-10 pr-40">gender</p>            
            <p className="pl-10 pr-40">term</p>
            <p className="pl-10">ph no.(optional)</p>
          </div>
          <div>
            <p className="pt-4 pb-4">activities(optional)</p>
          </div>
        </div>
        <div className="p-4 ">
          <p className="font-bold text-[20px] py-4">Exam Result</p>
          <select name="Term" id="t" className="p-0 m-4 ml-0 bg-cyan-100 border-solid border-black border-2">
            <option disabled hidden selected>Term</option>
            <option value="first">First Term</option>
            <option value="second">Second Term</option>  
          </select>
          <select name="Year" id="y" className="p-0 m-4 bg-cyan-100 border-solid border-black border-2">
            <option disabled hidden selected>Year</option>
            <option value="first">First Year</option>
            <option value="second">Second Year</option>
            <option value="third">Third Year</option>
            <option value="forth">Forth Year</option>
            <option value="fifth">Fifth Year</option>
            <option value="sixth">Sixth Year</option>
          </select>
          <table className="text-center ">
            <tbody>
              <tr>
                <th className="border-solid border-black border-2 p-4 w-[160px]">Subjects</th>
                <td className="border-solid border-black border-2 p-4 w-[120px]">English</td>
                <td className="border-solid border-black border-2 p-4 w-[120px]">Maths</td>
                <td className="border-solid border-black border-2 p-4 w-[120px]">BEE</td>
                <td className="border-solid border-black border-2 p-4 w-[120px]">DC</td>
                <td className="border-solid border-black border-2 p-4 w-[120px]">DLD</td>
                <td className="border-solid border-black border-2 p-4 w-[120px]">WEB</td>
                <td className="border-solid border-black border-2 p-4 w-[120px]">C++</td>
              </tr>
              <tr>
                <th className="border-solid border-black border-2 p-4">Grades</th>
                <td className="border-solid border-black border-2 p-4">A</td>
                <td className="border-solid border-black border-2 p-4">C</td>
                <td className="border-solid border-black border-2 p-4">B</td>
                <td className="border-solid border-black border-2 p-4">B</td>
                <td className="border-solid border-black border-2 p-4">E</td>
                <td className="border-solid border-black border-2 p-4">C</td>
                <td className="border-solid border-black border-2 p-4">D</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4">
          <p className="font-bold text-[20px] py-4">Chart</p>
        </div>
      </div>
      
    </main>
  );
};

export default page;
