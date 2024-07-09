"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { VOLUMES_DATA } from "../../../../data/volumes";

const VolumeList: React.FC = () => {
  const router = useRouter();

  const handleRowClick = (id: string) => {
    router.push(`/volumes/${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(`Deleting volume with id ${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Docker Volumes</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Driver</th>
            <th className="py-2">Mountpoint</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {VOLUMES_DATA.map((volume) => (
            <tr
              key={volume.id}
              className="border-t hover:bg-gray-100"
              onClick={() => handleRowClick(volume.id)}
            >
              <td className="py-2 text-center">{volume.id}</td>
              <td className="py-2 text-center">{volume.name}</td>
              <td className="py-2 text-center">{volume.driver}</td>
              <td className="py-2 text-center">{volume.mountpoint}</td>
              <td className="py-2 space-x-2 text-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(volume.id);
                  }}
                  className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-700"
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

export default VolumeList;
