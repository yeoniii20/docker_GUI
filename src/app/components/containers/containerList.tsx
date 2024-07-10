"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { ContainerListProps } from "../../../../types/containers";
import { FaPlay, FaStop, FaTrash } from "react-icons/fa";

const ContainerList: React.FC<ContainerListProps> = ({
  containers,
  onStart,
  onStop,
  onDelete,
}) => {
  const router = useRouter();

  const handleCardClick = (id: string) => {
    router.push(`/containers/${id}`);
  };

  return (
    <div className="container p-4 mx-auto text-black">
      <h1 className="mb-4 text-2xl font-bold">Docker Containers</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {containers.map((container) => (
          <div
            key={container.id}
            className="p-4 bg-white border rounded shadow cursor-pointer hover:shadow-lg"
            onClick={() => handleCardClick(container.id)}
          >
            <div className="mb-2 text-xl font-bold">{container.name}</div>
            <div className="mb-2 text-gray-700">ID: {container.id}</div>
            <div className="mb-4 text-gray-700">Status: {container.status}</div>
            <div className="space-x-2 flex justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onStart(container.id);
                }}
                className="px-2 py-1 text-white bg-green-500 rounded-full flex items-center space-x-1 hover:bg-green-600"
              >
                <FaPlay />
                <span>Start</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onStop(container.id);
                }}
                className="px-2 py-1 text-white bg-yellow-500 rounded-full flex items-center space-x-1 hover:bg-yellow-600"
              >
                <FaStop />
                <span>Stop</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(container.id);
                }}
                className="px-2 py-1 text-white bg-red-500 rounded-full flex items-center space-x-1 hover:bg-red-600"
              >
                <FaTrash />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContainerList;
