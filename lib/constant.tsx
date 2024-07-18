import { ReactNode } from "react";
import { RxDashboard } from "react-icons/rx";
import { BsFillPeopleFill } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";
import { BsTable } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import { BiMessageRoundedError } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { LuPenSquare } from "react-icons/lu";

export interface MenuItemType {
  name: string;
  icon: ReactNode;
  link: string;
}

export const menu_items: MenuItemType[] = [
  {
    name: "Dashboard",
    icon: <RxDashboard size={20} />,
    link: "/teacher",
  },
  {
    name: "Student",
    icon: <BsFillPeopleFill size={20} />,
    link: "/teacher/student",
  },
  {
    name: "Teacher",
    icon: <PiStudent size={25} />,
    link: "/teacher/teacher",
  },
  {
    name: "Timetable",
    icon: <BsTable size={20} />,
    link: "/teacher/timetable",
  },
  {
    name: "Exam",
    icon: <LuPenSquare size={20} />,
    link: "/teacher/exam",
  },
  {
    name: "Result",
    icon: <SlBookOpen size={20} />,
    link: "/teacher/result",
  },
];

export const account_menu_items: MenuItemType[] = [
  {
    name: "Help and support",
    icon: <BiMessageRoundedError size={25} />,
    link: "",
  },
  {
    name: "Profile",
    icon: <CgProfile size={23} />,
    link: "",
  },
  {
    name: "Logout",
    icon: <BiLogOut size={25} />,
    link: "",
  },
];
