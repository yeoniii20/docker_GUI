"use client";

import ContainerList from "@/app/components/containers/containerList";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "../../../../types/containers";

const Home = () => {
  const [containers, setContainers] = useState<Container[]>([]);

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

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/docker");
      console.log("Container Data >>>", response.data);
      setContainers(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
