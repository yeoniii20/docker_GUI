"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CONTAINER_DETAIL_DATA } from "../../../../../data/containers";
import { ContainerDetailTypes } from "../../../../../types/containers";

export default function ContainerDetail({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const [container, setContainer] = useState<ContainerDetailTypes | null>(null);

  useEffect(() => {
    setContainer(CONTAINER_DETAIL_DATA);
  }, []);

  if (!container) {
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
}
