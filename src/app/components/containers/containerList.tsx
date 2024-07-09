import { useRouter } from "next/navigation";
import React from "react";

interface Container {
  id: string;
  name: string;
  status: string;
}

interface ContainerListProps {
  containers: Container[];
  onStart: (id: string) => void;
  onStop: (id: string) => void;
  onDelete: (id: string) => void;
}

const ContainerList: React.FC<ContainerListProps> = ({
  containers,
  onStart,
  onStop,
  onDelete,
}) => {
  const router = useRouter();

  const handleRowClick = (id: string) => {
    // router.push(`/containers/detail`);
    router.push(`/containers/${id}`);
  };

  return (
    <div className="container p-4 mx-auto text-black">
      <h1 className="mb-4 text-2xl font-bold">Docker Containers</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {containers.map((container) => (
            <tr
              key={container.id}
              className="border-t"
              onClick={() => handleRowClick(container.id)}
            >
              <td className="py-2 text-center">{container.id}</td>
              <td className="py-2 text-center">{container.name}</td>
              <td className="py-2 text-center">{container.status}</td>
              <td className="py-2 space-x-2 text-center">
                <button
                  onClick={() => onStart(container.id)}
                  className="px-2 py-1 text-white bg-green-500 rounded"
                >
                  Start
                </button>
                <button
                  onClick={() => onStop(container.id)}
                  className="px-2 py-1 text-white bg-yellow-500 rounded"
                >
                  Stop
                </button>
                <button
                  onClick={() => onDelete(container.id)}
                  className="px-2 py-1 text-white bg-red-500 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContainerList;
