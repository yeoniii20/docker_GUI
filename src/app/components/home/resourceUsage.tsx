"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { RESOURCE_DATA } from "../../../../data/home";

const ResourceUsage = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-xl font-semibold mb-4">System Resource Usage</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {RESOURCE_DATA.map((resource) => (
          <div key={resource.id} className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
            <div className="w-40 h-40">
              <CircularProgressbar
                value={resource.value}
                strokeWidth={13}
                text={resource.pathUsage}
                styles={buildStyles({
                  textColor: "black",
                  pathColor: resource.pathColor,
                  trailColor: "gray",
                })}
              />
            </div>
            <p className="mt-2 text-gray-600">
              Used: {resource.used} {resource.unit}
            </p>
            <p className="text-gray-600">Max: {resource.max}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceUsage;
