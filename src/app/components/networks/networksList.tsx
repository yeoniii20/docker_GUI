"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { NetworkListProps } from "../../../../types/networks";

const NetworkList: React.FC<NetworkListProps> = ({ networks, onDelete }) => {
  const router = useRouter();

  const handleRowClick = (id: string) => {
    router.push(`/networks/${id}`);
  };

  return (
    <div className="container p-4 mx-auto text-black">
      <h1 className="mb-4 text-2xl font-bold">Docker Networks</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Driver</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {networks.map((network) => (
            <tr
              key={network.id}
              className="border-t"
              onClick={() => handleRowClick(network.id)}
            >
              <td className="py-2 text-center">{network.id}</td>
              <td className="py-2 text-center">{network.name}</td>
              <td className="py-2 text-center">{network.driver}</td>
              <td className="py-2 space-x-2 text-center">
                <button
                  onClick={() => onDelete(network.id)}
                  className="px-2 py-1 text-white bg-red-500 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NetworkList;
