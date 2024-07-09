"use client";

import { FaClock } from "react-icons/fa";

const recentActivities = [
  { activity: 'Container "web_app" started', time: "5 minutes ago" },
  { activity: 'Image "nginx:latest" pulled', time: "10 minutes ago" },
  { activity: 'Network "frontend_network" created', time: "1 hour ago" },
  { activity: 'Volume "db_data" created', time: "2 hours ago" },
];

const RecentActivity = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2 lg:col-span-1">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <ul className="space-y-4">
        {recentActivities.map((item, index) => (
          <li key={index} className="flex items-center space-x-3">
            <FaClock className="text-gray-500 w-5 h-5 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="font-medium text-gray-700">{item.activity}</span>
              <span className="text-sm text-gray-500">{item.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
