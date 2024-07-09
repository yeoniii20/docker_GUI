"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DockerImageDetail } from "../../../../../types/images";
import { IMAGE_DATA } from "../../../../../data/images";

export default function ImageDetail({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [image, setImage] = useState<DockerImageDetail | null>(null);

  useEffect(() => {
    setImage(IMAGE_DATA);
  }, []);

  if (!image) {
    return <div>Loading...</div>;
  }

  const handleBackClick = () => {
    router.push("/images");
  };

  return (
    <>
      <div className="container p-4 mx-auto text-black">
        <div
          className="text-blue-500 hover:text-blue-700 mt-4 block"
          onClick={handleBackClick}
        >
          Back to list
        </div>
        <h1 className="text-2xl font-bold mb-4">
          {image.name}:{image.tag}
        </h1>
        <div className="border bg-white p-4 rounded-lg shadow">
          <p>
            <strong>ID:</strong> {image.id}
          </p>
          <p>
            <strong>Created At:</strong> {image.createdAt}
          </p>
          <p>
            <strong>Size:</strong> {image.size}
          </p>
        </div>
      </div>
      ;
    </>
  );
}
