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
    <header className="bg-blue-600 py-4 pl-4 text-white fixed w-full z-10">
      <div className="container flex items-center justify-between">
        <button
          className="bg-blue-500 text-white p-2 rounded-full shadow-lg"
          onClick={toggleMenu}
        >
          Menu
        </button>
        <nav className="space-x-4 flex items-end">
          {MENU_ITEMS.map((item) => (
            <span
              key={item.path}
              className="hover:underline cursor-pointer"
              onClick={() => navigateTo(item.path)}
            >
              {item.name}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
