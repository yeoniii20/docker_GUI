"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Container {
  id: string;
  name: string;
  status: string;
  createdAt: string;
  imageName: string;
}

const ContainerDetail: React.FC = () => {
  const router = useRouter();
  const [container, setContainer] = useState<Container | null>(null);

  useEffect(() => {
    // 실제 API 호출 대신 임시 데이터 사용
    const tempData: Container = {
      id: "example_id",
      name: "example_container",
      status: "running",
      createdAt: "2023-07-09T12:00:00Z",
      imageName: "example_image",
    };
    setContainer(tempData);
  }, []);

  if (!container) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container p-4 mx-auto text-black">
      <h1 className="mb-4 text-2xl font-bold">Container Details</h1>
      <div className="p-4 bg-white rounded shadow-md">
        <div className="mb-4">
          <span className="font-semibold">Container ID: </span>
          {container.id}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Name: </span>
          {container.name}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Status: </span>
          <span
            className={`px-2 py-1 rounded ${
              container.status === "running"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {container.status}
          </span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Created At: </span>
          {new Date(container.createdAt).toLocaleString()}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Image Name: </span>
          {container.imageName}
        </div>
      </div>
    </div>
  );
};

export default ContainerDetail;
