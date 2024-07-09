"use client";

import { useRouter } from "next/navigation";

interface QuickActionsProps {
  data: any[];
}

const QuickActions: React.FC<QuickActionsProps> = ({ data }) => {
  const router = useRouter();

  const handleRouter = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="space-y-2">
          {data.map(({ id, label, router, bgColor, hoverColor }) => (
            <div
              key={id}
              className={`block px-4 py-2 text-white text-center rounded ${bgColor} ${hoverColor}`}
              onClick={() => handleRouter(router)}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuickActions;
