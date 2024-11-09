"use client";
import Image from "next/image";
import React from "react";
import { account_menu_items, backend_url, menu_items } from "@/lib/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiLogOut } from "react-icons/bi";

const Menu = ({ role }: { role: "teacher" | "student" }) => {
  const pathname = usePathname();

  return (
    <aside className="fixed w-[300px] h-full bg-primary">
      {/* Menu Header */}
      <Link
        href="/"
        className="flex flex-row items-center gap-5 p-5 cursor-pointer"
      >
        <Image
          src="/images/Hmawbi-logo.png"
          alt="Hmawbi logo"
          width={40}
          height={40}
        />
        <div className="text-white flex flex-col gap-1">
          <h3 className="font-semibold text-lg">
            Technological University (Hmawbi)
          </h3>
        </div>
      </Link>

      <div className="divider" />

      {/* Menu Body */}
      <div className="h-[85dvh] overflow-y-scroll no-scrollbar">
        {/* Menu Items */}
        <div className="px-10 pt-8">
          <p className="text-white font-thin text-sm">MENU</p>
          {menu_items.map((menu_item: any, index) => {
            return (
              <div key={index}>
                {menu_item[role] && (
                  <Link
                    href={menu_item[role].link}
                    key={index}
                    className={`menu-item-container ${pathname === menu_item[role].link
                      ? "bg-white bg-opacity-10"
                      : ""
                      }`}
                  >
                    <div className="text-white flex flex-row items-center gap-3 ">
                      <div>{menu_item.icon}</div>
                      <h3 className="font-semibold text-base">
                        {menu_item.name}
                      </h3>
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Account Items */}
        <div className="px-10 pt-4">
          <p className="text-white font-thin text-sm">ACCOUNT</p>
          {account_menu_items.map((menu_item: any, index) => (
            <Link
              href={menu_item[role].link}
              key={index}
              className="menu-item-container"
            >
              <div className="text-white flex flex-row items-center gap-3">
                <div>{menu_item.icon}</div>
                <h3 className="font-semibold text-base">{menu_item.name}</h3>
              </div>
            </Link>
          ))}

          {/* Logout */}
          <button
            onClick={async () => {
              const [res, res2] = await Promise.all([
                fetch(`${backend_url}/auth/logout`, {
                  method: "GET",
                  credentials: "include",
                }),
                fetch("/api/removeCookie", {
                  method: "GET",
                }),
              ]);
              window.location.href = "/";
            }}
            className="menu-item-container w-full"
          >
            <div className="text-white flex flex-row items-center gap-3">
              <BiLogOut size={25} />
              <h3 className="font-semibold text-base">Logout</h3>
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Menu;
