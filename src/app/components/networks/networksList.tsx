"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { NetworkListProps } from "../../../../types/networks";

const NetworkList: React.FC<NetworkListProps> = ({ networks, onDelete }) => {
  const router = useRouter();

  const handleCardClick = (id: string) => {
    router.push(`/networks/${id}`);
  };

  return (
    <div className="container p-4 mx-auto text-black">
      <h1 className="mb-4 text-2xl font-bold">Docker Networks</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {networks.map((network) => (
          <div
            key={network.id}
            className="p-4 bg-white border rounded shadow cursor-pointer"
            onClick={() => handleCardClick(network.id)}
          >
            <div className="mb-2 text-xl font-bold">{network.name}</div>
            <div className="mb-2 text-gray-700">ID: {network.id}</div>
            <div className="mb-4 text-gray-700">Driver: {network.driver}</div>
            <div className="space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(network.id);
                }}
                className="px-2 py-1 text-white bg-red-500 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkList;
