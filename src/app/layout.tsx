"use client";

import "./globals.css";
import LeftMenu from "./components/layout/leftMenu";
import Header from "./components/layout/header";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMdOrSmaller = useMediaQuery({ query: "(max-width: 768px)" });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header toggleMenu={toggleMenu} />
          <div className="flex flex-1 mt-14">
            <LeftMenu isOpen={isMenuOpen} isMdOrSmaller={isMdOrSmaller} />
            <main
              className={`flex-1 p-2 transition-all duration-300 ease-in-out ${
                isMenuOpen ? (isMdOrSmaller ? "ml-16" : "ml-64") : "ml-0"
              }`}
            >
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
