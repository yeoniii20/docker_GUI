"use client";

import { useRouter } from "next/navigation";
import { FaPlus, FaDownload, FaNetworkWired, FaHdd } from "react-icons/fa";

interface QuickActionsProps {
  data: any[];
}

const QuickActions: React.FC<QuickActionsProps> = ({ data }) => {
  const router = useRouter();

  const handleRouter = (path: string) => {
    router.push(path);
  };

  const getIcon = (label: string) => {
    switch (label) {
      case "Create Container":
        return <FaPlus className="w-5 h-5 mr-2" />;
      case "Pull Image":
        return <FaDownload className="w-5 h-5 mr-2" />;
      case "Create Network":
        return <FaNetworkWired className="w-5 h-5 mr-2" />;
      case "Create Volume":
        return <FaHdd className="w-5 h-5 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="space-y-2">
        {data.map(({ id, label, router, bgColor, hoverColor }) => (
          <div
            key={id}
            className={`flex items-center justify-center w-full px-4 py-2 text-white text-center rounded-full cursor-pointer ${bgColor} ${hoverColor} transition duration-200 ease-in-out transform hover:scale-105`}
            onClick={() => handleRouter(router)}
          >
            {getIcon(label)}
            <span className="flex-1">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
