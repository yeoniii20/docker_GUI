"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ContainerDetailTypes } from "../../../../../types/containers";
import { useContainerStore } from "../../../../../store/containerStore";

const ContainerDetail = () => {
  const router = useRouter();
  const { container, setContainer } = useContainerStore((state) => ({
    container: state.container,
    setContainer: state.setContainer,
  }));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!container || !container.id) {
      router.push("/");
    } else {
      fetchContainerDetails(container.id);
    }
  }, []);

  const fetchContainerDetails = async (id: string) => {
    try {
      const response = await fetch(`/api/containers?id=${id}`);
      const data: ContainerDetailTypes = await response.json();
      setContainer(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch container details:", error);
      setLoading(false);
    }
  };

  if (loading || !container) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container p-4 mx-auto text-black">
      <h1 className="mb-4 text-2xl font-bold">Container Details</h1>
      <div className="p-4 bg-white rounded shadow-md">
        <div className="mb-4">
          <span className="font-semibold">Container ID: </span>
          {container.id}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Name: </span>
          {container.name}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Status: </span>
          <span
            className={`px-2 py-1 rounded ${
              container.status === "running"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {container.status}
          </span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Created At: </span>
          {new Date(container.createdAt).toLocaleString()}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Image Name: </span>
          {container.imageName}
        </div>
      </div>
    </div>
  );
};

export default ContainerDetail;
