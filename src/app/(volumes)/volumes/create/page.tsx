"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaHdd } from "react-icons/fa";

const CreateVolume: React.FC = () => {
  const router = useRouter();
  const [volumeName, setVolumeName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add volume creation logic here
    console.log(`Creating volume: ${volumeName}`);
    router.push("/volumes");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Create Docker Volume
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded shadow"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Volume Name</label>
          <input
            type="text"
            value={volumeName}
            onChange={(e) => setVolumeName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <FaHdd className="mr-2" />
          Create Volume
        </button>
      </form>
    </div>
  );
};

export default CreateVolume;
