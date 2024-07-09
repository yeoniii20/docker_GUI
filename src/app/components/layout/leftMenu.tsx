"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { MENU_ITEMS } from "../../../../data/common";

interface LeftMenuProps {
  isOpen: boolean;
}

const LeftMenu: React.FC<LeftMenuProps> = ({ isOpen }) => {
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-gray-200 p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static z-9 `}
      >
        <nav className="space-y-4 mt-16 lg:mt-0">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.path}
              className={`block py-2 px-4 rounded cursor-pointer ${
                pathname === item.path
                  ? "bg-blue-400 text-white"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => navigateTo(item.path)}
            >
              {item.name}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default LeftMenu;
