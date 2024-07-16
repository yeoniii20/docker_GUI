"use client";

// window
// {
//   "hosts": ["tcp://0.0.0.0:2375", "npipe://"]
// }

// macOS
// {
//   "hosts": ["tcp://0.0.0.0:2375", "unix:///var/run/docker.sock"]
// }

import React from "react";
import { ContainerListProps } from "../../../../types/containers";
import ContainerCard from "./containerCard";

const ContainerList: React.FC<ContainerListProps> = ({
  containers,
  onStart,
  onStop,
  onDelete,
}) => {
  return (
    <div className="container p-4 mx-auto text-black">
      <h1 className="mb-4 text-2xl font-bold">Docker Containers</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <ContainerCard
          containers={containers}
          onStart={onStart}
          onStop={onStop}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
};

export default ContainerList;
