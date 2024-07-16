"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ContainerDetailTypes } from "../../../../../types/containers";
import { FaSync } from "react-icons/fa";

export default function ContainerDetail({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const [container, setContainer] = useState<ContainerDetailTypes | null>(null);

  const fetchContainerDetails = async () => {
    try {
      const response = await fetch(`/api/docker/containers/${params.slug}`);
      const data: ContainerDetailTypes = await response.json();
      setContainer(data);
    } catch (error) {
      console.error("Failed to fetch container details:", error);
    }
  };

  const refreshData = () => {
    fetchContainerDetails();
  };

  useEffect(() => {
    fetchContainerDetails();
  }, [params.slug]);

  if (!container) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 text-black">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Container Details</h1>
        <button
          onClick={refreshData}
          className="flex items-center px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          <FaSync className="mr-2" />
          Refresh
        </button>
      </div>
      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
          <div className="mb-2">
            <span className="font-semibold">Container ID: </span>
            {container.id}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Name: </span>
            {container.name}
          </div>
          <div className="mb-2">
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
          <div className="mb-2">
            <span className="font-semibold">Created At: </span>
            {new Date(container.createdAt).toLocaleString()}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Image Name: </span>
            {container.imageName}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Ports</h2>
          <div>{container.ports.join(", ")}</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Mounts</h2>
          <ul className="list-disc list-inside ml-4">
            {container.mounts.map((mount, index) => (
              <li key={index}>{mount}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Environment Variables</h2>
          <ul className="list-disc list-inside ml-4">
            {Object.entries(container.env).map(([key, value], index) => (
              <li key={index}>
                {key}: {value as string}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Logs</h2>
          <pre className="bg-gray-100 p-4 rounded">{container.logs}</pre>
        </div>
      </div>
    </div>
  );
}
