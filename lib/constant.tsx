import { ReactNode } from "react";
import { RxDashboard } from "react-icons/rx";
import { BsFillPeopleFill } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";
import { BsTable } from "react-icons/bs";
import { SlBookOpen, SlNotebook } from "react-icons/sl";
import { BiMessageRoundedError } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { LuPenSquare } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";

export const backend_url = "http://localhost:3001";

export interface MenuItemType {
  name: string;
  icon: ReactNode;
  teacher: {
    link: string;
  } | null;
  student: {
    link: string;
  } | null;
}

export const menu_items: MenuItemType[] = [
  {
    name: "Dashboard",
    icon: <RxDashboard size={20} />,
    teacher: { link: "/teacher" },
    student: { link: "/student" },
  },
  {
    name: "Student",
    icon: <BsFillPeopleFill size={20} />,
    teacher: { link: "/teacher/student" },
    student: null,
  },
  {
    name: "Teacher",
    icon: <PiStudent size={25} />,
    teacher: { link: "/teacher/teacher" },
    student: null,
  },
  {
    name: "Subject",
    icon: <SlBookOpen size={20} />,
    teacher: { link: "/teacher/subject" },
    student: null,
  },
  {
    name: "Timetable",
    icon: <BsTable size={20} />,
    teacher: { link: "/teacher/timetable" },
    student: null,
  },
  {
    name: "Classroom",
    icon: <GrGroup size={20} />,
    teacher: null,
    student: { link: "/student/classroom" },
  },
  {
    name: "Exam",
    icon: <LuPenSquare size={20} />,
    teacher: { link: "/teacher/exam" },
    student: { link: "/student/exam" },
  },
  {
    name: "Result",
    icon: <SlNotebook size={20} />,
    teacher: { link: "/teacher/result" },
    student: { link: "/student/result" },
  },
];

export const account_menu_items: MenuItemType[] = [
  {
    name: "Help and support",
    icon: <BiMessageRoundedError size={25} />,
    teacher: { link: "/" },
    student: { link: "/" },
  },
  {
    name: "Profile",
    icon: <CgProfile size={23} />,
    teacher: { link: "/teacher/profile" },
    student: { link: "/student/profile" },
  },
];

export const majorColor = {
  English: "bg-blue-100",
  Math: "bg-red-200",
  Web: "bg-yellow-100",
  "C++": "bg-green-100",
  Dld: "bg-orange-100",
  Dc: "bg-violet-200",
  Be: "bg-pink-100",
  Library: "bg-lime-100",
};

export const Subjects = [
  "Math",
  "English",
  "C++",
  "Web",
  "Dld",
  "Dc",
  "Be",
  "Library",
];

export type TimetableDataType = {
  time: string;
  year: number;
  term: string;
  subjects: {
    timetable_row_id: string;
    id: number;
    day: string;
    subject: string;
    code: string;
    status: string;
  }[];
};

export const emptyTimetableData: TimetableDataType[] = [
  {
    time: "9:00",
    year: 0,
    term: "",
    subjects: [
      {
        timetable_row_id: "",
        id: 1,
        day: "Mon",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 2,
        day: "Tue",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 3,
        day: "Wed",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 4,
        day: "Thu",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 5,
        day: "Fri",
        subject: "",
        code: "",
        status: "present",
      },
    ],
  },
  {
    time: "10:00",
    year: 0,
    term: "",
    subjects: [
      {
        timetable_row_id: "",
        id: 6,
        day: "Mon",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 7,
        day: "Tue",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 8,
        day: "Wed",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 9,
        day: "Thu",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 10,
        day: "Fri",
        subject: "",
        code: "",
        status: "present",
      },
    ],
  },
  {
    time: "11:00",
    year: 0,
    term: "",
    subjects: [
      {
        timetable_row_id: "",
        id: 11,
        day: "Mon",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 12,
        day: "Tue",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 13,
        day: "Wed",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 14,
        day: "Thu",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 15,
        day: "Fri",
        subject: "",
        code: "",
        status: "present",
      },
    ],
  },
  {
    time: "1:00",
    year: 0,
    term: "",
    subjects: [
      {
        timetable_row_id: "",
        id: 16,
        day: "Mon",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 17,
        day: "Tue",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 18,
        day: "Wed",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 19,
        day: "Thu",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 20,
        day: "Fri",
        subject: "",
        code: "",
        status: "present",
      },
    ],
  },
  {
    time: "2:00",
    year: 0,
    term: "",
    subjects: [
      {
        timetable_row_id: "",
        id: 21,
        day: "Mon",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 22,
        day: "Tue",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 23,
        day: "Wed",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 24,
        day: "Thu",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 25,
        day: "Fri",
        subject: "",
        code: "",
        status: "present",
      },
    ],
  },
  {
    time: "3:00",
    year: 0,
    term: "",
    subjects: [
      {
        timetable_row_id: "",
        id: 26,
        day: "Mon",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 27,
        day: "Tue",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 28,
        day: "Wed",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 29,
        day: "Thu",
        subject: "",
        code: "",
        status: "present",
      },
      {
        timetable_row_id: "",
        id: 30,
        day: "Fri",
        subject: "",
        code: "",
        status: "present",
      },
    ],
  },
];
