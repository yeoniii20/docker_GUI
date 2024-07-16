"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useContainerStore } from "../../../../store/containerStore";
import { ContainerListProps } from "../../../../types/containers";
import { FaPlay, FaStop, FaTrash } from "react-icons/fa";
import ActionButton from "../common/actionBtn";

const ContainerCard: React.FC<ContainerListProps> = ({
  containers,
  onStart,
  onStop,
  onDelete,
}) => {
  const router = useRouter();
  const setContainer = useContainerStore((state) => state.setContainer);

  const handleCardClick = (container: any) => {
    setContainer(container);
    router.push("/containers/detail");
  };

  const truncateId = (id: string, maxLength: number = 15) => {
    return id.length > maxLength ? `${id.slice(0, maxLength)}...` : id;
  };

  return (
    <>
      {containers.map((container) => (
        <div
          key={container.id}
          className="p-4 bg-white border rounded shadow cursor-pointer hover:shadow-lg"
          onClick={() => handleCardClick(container)}
        >
          <div className="mb-2 text-xl font-bold">{container.name}</div>
          <div className="mb-2 text-gray-700">
            ID: {truncateId(container.id)}
          </div>
          <div className="mb-4 text-gray-700">Status: {container.status}</div>
          <div className="space-x-2 flex justify-center">
            <ActionButton
              onClick={(e: any) => {
                e.stopPropagation();
                onStart(container.id);
              }}
              icon={FaPlay}
              color="bg-green-500"
            >
              Start
            </ActionButton>
            <ActionButton
              onClick={(e: any) => {
                e.stopPropagation();
                onStop(container.id);
              }}
              icon={FaStop}
              color="bg-yellow-500"
            >
              Stop
            </ActionButton>
            <ActionButton
              onClick={(e: any) => {
                e.stopPropagation();
                onDelete(container.id);
              }}
              icon={FaTrash}
              color="bg-red-500"
            >
              Delete
            </ActionButton>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContainerCard;
