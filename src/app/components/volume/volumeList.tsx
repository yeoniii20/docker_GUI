"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { VOLUMES_DATA } from "../../../../data/volumes";
import { FaTrash, FaHdd, FaInfoCircle } from "react-icons/fa";

const VolumeList: React.FC = () => {
  const router = useRouter();

  const handleCardClick = (id: string) => {
    router.push(`/volumes/${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(`Deleting volume with id ${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Docker Volumes</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {VOLUMES_DATA.map((volume) => (
          <div
            key={volume.id}
            className="relative p-4 bg-white border rounded shadow cursor-pointer hover:shadow-lg"
            onClick={() => handleCardClick(volume.id)}
          >
            <div className="mb-2 text-xl font-bold text-center flex items-center justify-center space-x-2">
              <FaHdd className="text-gray-600" />
              <span>{volume.name}</span>
            </div>
            <div className="mb-2 text-gray-700 flex items-center space-x-2">
              <FaInfoCircle className="text-gray-600" />
              <span>ID: {volume.id}</span>
            </div>
            <div className="mb-2 text-gray-700 flex items-center space-x-2">
              <FaInfoCircle className="text-gray-600" />
              <span>Driver: {volume.driver}</span>
            </div>
            <div className="mb-4 text-gray-700 flex items-center space-x-2">
              <FaInfoCircle className="text-gray-600" />
              <span>Mountpoint: {volume.mountpoint}</span>
            </div>
            <div className="flex justify-center space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(volume.id);
                }}
                className="px-3 py-2 text-white bg-red-500 rounded-full hover:bg-red-700 flex items-center space-x-1"
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

export default VolumeList;
