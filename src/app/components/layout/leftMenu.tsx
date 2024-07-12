"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { MENU_ITEMS } from "../../../../data/common";

interface LeftMenuProps {
  isOpen: boolean;
  isMdOrSmaller: boolean;
}

const LeftMenu: React.FC<LeftMenuProps> = ({ isOpen, isMdOrSmaller }) => {
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 ${
        isMdOrSmaller ? "w-16" : "w-64"
      } bg-gray-200 p-4 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-9`}
    >
      <nav className="space-y-4 mt-16">
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <div
              key={item.path}
              className={`${
                isMdOrSmaller ? "" : "px-4"
              } gap-2 py-2 rounded cursor-pointer flex items-center  ${
                active
                  ? "bg-blue-400 text-white"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => navigateTo(item.path)}
            >
              <Icon
                className={`${active ? "text-white" : "text-gray-700"} pl-2`}
                size={24}
              />
              {!isMdOrSmaller && <span>{item.name}</span>}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default LeftMenu;
