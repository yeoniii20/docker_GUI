"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ResourceUsage = () => {
  const cpuUsage = 45;
  const memoryUsage = 65;
  const diskUsage = 75;
  const networkUsage = 30; // 새로운 네트워크 사용량
  const ioUsage = 50; // 새로운 I/O 사용량

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-xl font-semibold mb-4">System Resource Usage</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">CPU Usage</h3>
          <div className="w-32 h-32">
            <CircularProgressbar
              value={cpuUsage}
              strokeWidth={13}
              text={`${cpuUsage}%`}
              styles={buildStyles({
                textColor: "black",
                pathColor: "blue",
                trailColor: "gray",
              })}
            />
          </div>
          <p className="mt-2 text-gray-600">Used: 2.25 GHz</p>
          <p className="text-gray-600">Max: 5.00 GHz</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Memory Usage</h3>
          <div className="w-32 h-32">
            <CircularProgressbar
              value={memoryUsage}
              strokeWidth={13}
              text={`${memoryUsage}%`}
              styles={buildStyles({
                textColor: "black",
                pathColor: "green",
                trailColor: "gray",
              })}
            />
          </div>
          <p className="mt-2 text-gray-600">Used: 6.5 GB</p>
          <p className="text-gray-600">Max: 16 GB</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Disk Usage</h3>
          <div className="w-32 h-32">
            <CircularProgressbar
              value={diskUsage}
              strokeWidth={13}
              text={`${diskUsage}%`}
              styles={buildStyles({
                textColor: "black",
                pathColor: "orange",
                trailColor: "gray",
              })}
            />
          </div>
          <p className="mt-2 text-gray-600">Used: 750 GB</p>
          <p className="text-gray-600">Max: 1 TB</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Network Usage</h3>
          <div className="w-32 h-32">
            <CircularProgressbar
              value={networkUsage}
              strokeWidth={13}
              text={`${networkUsage}%`}
              styles={buildStyles({
                textColor: "black",
                pathColor: "purple",
                trailColor: "gray",
              })}
            />
          </div>
          <p className="mt-2 text-gray-600">Used: 300 Mbps</p>
          <p className="text-gray-600">Max: 1 Gbps</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">I/O Usage</h3>
          <div className="w-32 h-32">
            <CircularProgressbar
              value={ioUsage}
              strokeWidth={13}
              text={`${ioUsage}%`}
              styles={buildStyles({
                textColor: "black",
                pathColor: "red",
                trailColor: "gray",
              })}
            />
          </div>
          <p className="mt-2 text-gray-600">Used: 50 MB/s</p>
          <p className="text-gray-600">Max: 100 MB/s</p>
        </div>
      </div>
    </div>
  );
};

export default ResourceUsage;
