"use client";

import ContainerList from "@/app/components/containers/containerList";
import { useState } from "react";

const Home = () => {
  const [containers, setContainers] = useState([
    { id: "1", name: "web", status: "running" },
    { id: "2", name: "db", status: "stopped" },
  ]);

  const handleStart = (id: string) => {
    setContainers(
      containers.map((container) =>
        container.id === id ? { ...container, status: "running" } : container
      )
    );
  };

  const handleStop = (id: string) => {
    setContainers(
      containers.map((container) =>
        container.id === id ? { ...container, status: "stopped" } : container
      )
    );
  };

  const handleDelete = (id: string) => {
    setContainers(containers.filter((container) => container.id !== id));
  };

  return (
    <ContainerList
      containers={containers}
      onStart={handleStart}
      onStop={handleStop}
      onDelete={handleDelete}
    />
  );
};

export default Home;
