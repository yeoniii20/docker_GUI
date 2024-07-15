import React, { createContext, useState, useContext, ReactNode } from "react";

interface Container {
  id: string;
  name: string;
  status: string;
  createdAt: string;
  imageName: string;
}

interface ContainerContextProps {
  container: Container | null;
  setContainer: (container: Container) => void;
}

const ContainerContext = createContext<ContainerContextProps | undefined>(
  undefined
);

export const ContainerProvider = ({ children }: { children: ReactNode }) => {
  const [container, setContainer] = useState<Container | null>(null);

  return (
    <ContainerContext.Provider value={{ container, setContainer }}>
      {children}
    </ContainerContext.Provider>
  );
};

export const useContainer = () => {
  const context = useContext(ContainerContext);
  if (!context) {
    throw new Error("useContainer must be used within a ContainerProvider");
  }
  return context;
};
