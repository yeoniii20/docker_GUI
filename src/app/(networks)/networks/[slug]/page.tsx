"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { NETWORK_DATA } from "../../../../../data/networks";

export default function NetworkDetail({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();

  const handleBack = () => {
    router.push(`/network`);
  };

  return (
    <div className="container p-4 mx-auto text-gray-900">
      <h1 className="mb-6 text-3xl font-semibold text-center text-blue-600">
        Network Details
      </h1>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Network Info
            </div>
            <p className="mt-2 text-gray-500">
              <strong>ID:</strong> {NETWORK_DATA.id}
            </p>
            <p className="mt-2 text-gray-500">
              <strong>Name:</strong> {NETWORK_DATA.name}
            </p>
            <p className="mt-2 text-gray-500">
              <strong>Driver:</strong> {NETWORK_DATA.driver}
            </p>
            <p className="mt-2 text-gray-500">
              <strong>Subnet:</strong> {NETWORK_DATA.subnet}
            </p>
            <p className="mt-2 text-gray-500">
              <strong>Gateway:</strong> {NETWORK_DATA.gateway}
            </p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleBack}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Back to Network List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
