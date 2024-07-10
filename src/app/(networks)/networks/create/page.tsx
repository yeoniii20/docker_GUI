"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaNetworkWired } from "react-icons/fa";

const CreateNetwork: React.FC = () => {
  const router = useRouter();
  const [networkName, setNetworkName] = useState("");
  const [driver, setDriver] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 네트워크 생성 로직 추가
    console.log(`Creating network: ${networkName} with driver: ${driver}`);
    router.push("/networks");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Create Docker Network
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded shadow"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Network Name</label>
          <input
            type="text"
            value={networkName}
            onChange={(e) => setNetworkName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Driver</label>
          <input
            type="text"
            value={driver}
            onChange={(e) => setDriver(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <FaNetworkWired className="mr-2" />
          Create Network
        </button>
      </form>
    </div>
  );
};

export default CreateNetwork;
