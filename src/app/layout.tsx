"use client";

import "./globals.css";
import LeftMenu from "./components/layout/leftMenu";
import Header from "./components/layout/header";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { ContainerProvider } from "../../context/containerContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMdOrSmaller, setIsMdOrSmaller] = useState(false);

  const mediaQuery = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    setIsMdOrSmaller(mediaQuery);
  }, [mediaQuery]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <body>
        <ContainerProvider>
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
        </ContainerProvider>
      </body>
    </html>
  );
}
