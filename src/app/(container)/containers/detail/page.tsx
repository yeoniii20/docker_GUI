"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface ContainerProps {
  id: string;
}

const ContainerDetail: React.FC<ContainerProps> = ({ id }) => {
  const router = useRouter();

  return (
    <div className="container p-4 mx-auto text-black">
      <h1 className="mb-4 text-2xl font-bold">Container Details</h1>
      <p>Container ID: {id}</p>
    </div>
  );
};

export default ContainerDetail;
