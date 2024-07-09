"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MENU_ITEMS } from "../../../../data/common";

interface HeaderProps {
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <header className="bg-blue-600 p-4 text-white fixed w-full z-100">
      <div className="container ml-auto flex justify-end items-center">
        {/* <h1 className="text-2xl font-bold">Docker Dashboard</h1> */}
        <nav className="space-x-4 flex items-center">
          {MENU_ITEMS.map((item) => (
            <span
              key={item.path}
              className="hover:underline cursor-pointer"
              onClick={() => navigateTo(item.path)}
            >
              {item.name}
            </span>
          ))}
          <button
            className="lg:hidden bg-blue-500 text-white p-2 rounded-full shadow-lg ml-4"
            onClick={toggleMenu}
          >
            Menu
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
