"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaDownload } from "react-icons/fa";

const PullImage: React.FC = () => {
  const router = useRouter();
  const [imageName, setImageName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add image pull logic here
    console.log(`Pulling image: ${imageName}`);
    router.push("/images");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Pull Docker Image</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded shadow"
      >
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
          <FaDownload className="mr-2" />
          Pull Image
        </button>
      </form>
    </div>
  );
};

export default PullImage;
