"use client";

import "./globals.css";
import LeftMenu from "./components/layout/leftMenu";
import Header from "./components/layout/header";
import React, { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header toggleMenu={toggleMenu} />
          <div className="flex flex-1 mt-14">
            <LeftMenu isOpen={isMenuOpen} />
            <main
              className={`flex-1 p-2 transition-all duration-300 ease-in-out ${
                isMenuOpen ? "ml-64" : "ml-0"
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
