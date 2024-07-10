"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";

const CreateContainer: React.FC = () => {
  const router = useRouter();
  const [containerName, setContainerName] = useState("");
  const [imageName, setImageName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add container creation logic here
    console.log(
      `Creating container: ${containerName} with image: ${imageName}`
    );
    router.push("/containers");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Create Docker Container
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded shadow"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Container Name</label>
          <input
            type="text"
            value={containerName}
            onChange={(e) => setContainerName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image Name</label>
          <input
            type="text"
            value={imageName}
            onChange={(e) => setImageName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <FaPlus className="mr-2" />
          Create Container
        </button>
      </form>
    </div>
  );
};

export default CreateContainer;
