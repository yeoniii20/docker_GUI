"use client";

import React from "react";
import {
  FaDocker,
  FaHdd,
  FaNetworkWired,
  FaCube,
  FaBoxes,
} from "react-icons/fa";

const systemOverviewData = [
  {
    id: 1,
    bgColor: "bg-blue-100",
    icon: (
      <FaDocker className="text-blue-500 w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 flex-shrink-0" />
    ),
    title: "Running Containers",
    value: "5",
  },
  {
    id: 2,
    bgColor: "bg-red-100",
    icon: (
      <FaHdd className="text-red-500 w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 flex-shrink-0" />
    ),
    title: "Stopped Containers",
    value: "2",
  },
  {
    id: 3,
    bgColor: "bg-green-100",
    icon: (
      <FaCube className="text-green-500 w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 flex-shrink-0" />
    ),
    title: "Images",
    value: "10",
  },
  {
    id: 4,
    bgColor: "bg-yellow-100",
    icon: (
      <FaNetworkWired className="text-yellow-500 w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 flex-shrink-0" />
    ),
    title: "Networks",
    value: "3",
  },
  {
    id: 5,
    bgColor: "bg-purple-100",
    icon: (
      <FaBoxes className="text-purple-500 w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 flex-shrink-0" />
    ),
    title: "Volumes",
    value: "4",
  },
];

const SystemOverView = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
        System Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
        {systemOverviewData.map((item) => (
          <div
            key={item.id}
            className={`flex items-center ${item.bgColor} p-3 sm:p-4 rounded-lg shadow`}
          >
            {item.icon}
            <div className="flex justify-between w-full">
              <p className="text-base sm:text-sm font-semibold">{item.title}</p>
              <p className="text-gray-600 text-sm sm:text-base font-semibold self-end">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemOverView;
