"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  VOLUME_DETAIL_DATA,
  MOUNTED_VOLUMES,
  FILE_SYSTEM,
} from "../../../../../data/volumes";

export default function VolumeDetail({ params }: { params: { slug: string } }) {
  const router = useRouter();

  const handleBack = () => {
    router.push("/volumes");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Volume Details
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">ID</h3>
            <p className="text-gray-600 mt-1 text-base">
              {VOLUME_DETAIL_DATA.id}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Name</h3>
            <p className="text-gray-600 mt-1 text-base">
              {VOLUME_DETAIL_DATA.name}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Driver</h3>
            <p className="text-gray-600 mt-1 text-base">
              {VOLUME_DETAIL_DATA.driver}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Mountpoint</h3>
            <p className="text-gray-600 mt-1 text-base">
              {VOLUME_DETAIL_DATA.mountpoint}
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Back to Volume List
          </button>
        </div>
      </div>

      {/* 마운트된 볼륨 정보 */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Mounted Volumes
        </h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Container ID</th>
              <th className="py-2 px-4 border-b">Mount Path</th>
            </tr>
          </thead>
          <tbody>
            {MOUNTED_VOLUMES.map((volume, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-center">
                  {volume.containerId}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {volume.mountPath}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 파일 브라우저 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          File Browser
        </h2>
        <ul className="list-disc list-inside pl-4">
          {FILE_SYSTEM.map((file, index) => (
            <li key={index} className="text-gray-600 text-base">
              {file}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
