"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DockerImageDetail } from "../../../../../types/images";
import { IMAGE_DATA } from "../../../../../data/images";
import {
  FaArrowLeft,
  FaInfoCircle,
  FaCalendarAlt,
  FaWeight,
  FaTag,
  FaDocker,
  FaLayerGroup,
  FaNetworkWired,
} from "react-icons/fa";

export default function ImageDetail({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [image, setImage] = useState<DockerImageDetail | null>(null);

  useEffect(() => {
    const imageDetail = IMAGE_DATA.find(
      (img) => img.id === params.slug
    ) as DockerImageDetail;
    setImage(imageDetail || null);
  }, [params.slug]);

  if (!image) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  const handleBackClick = () => {
    router.push("/images");
  };

  return (
    <div className="container p-4 mx-auto text-black">
      <button
        className="flex items-center text-blue-500 hover:text-blue-700"
        onClick={handleBackClick}
      >
        <FaArrowLeft className="mr-2" /> Back to list
      </button>
      <h3 className="text-3xl font-bold mb-6 mt-4">
        {image.name} : {image.tag}
      </h3>
      <div className="grid grid-cols-1 gap-6">
        <div className="border bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
          <div className="flex items-center space-x-2">
            <FaInfoCircle className="text-gray-500" />
            <p>
              <strong>ID:</strong> {image.id}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-gray-500" />
            <p>
              <strong>Created At:</strong> {image.createdAt}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaWeight className="text-gray-500" />
            <p>
              <strong>Size:</strong> {image.size}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaDocker className="text-gray-500" />
            <p>
              <strong>Repository:</strong> {image.repository}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaTag className="text-gray-500" />
            <p>
              <strong>Docker Version:</strong> {image.dockerVersion}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaInfoCircle className="text-gray-500" />
            <p>
              <strong>Author:</strong> {image.author}
            </p>
          </div>
        </div>

        <div className="border bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Technical Details</h2>
          <div className="flex items-center space-x-2">
            <FaLayerGroup className="text-gray-500" />
            <p>
              <strong>Architecture:</strong> {image.architecture}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaNetworkWired className="text-gray-500" />
            <p>
              <strong>OS:</strong> {image.os}
            </p>
          </div>
        </div>

        <div className="border bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Labels</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            {Object.entries(image.labels).map(([key, value]) => (
              <li key={key} className="text-gray-700">
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>

        <div className="border bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Ports</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            {image.ports.map((port) => (
              <li key={port} className="text-gray-700">
                {port}
              </li>
            ))}
          </ul>
        </div>

        <div className="border bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Environment Variables</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            {Object.entries(image.environmentVariables).map(([key, value]) => (
              <li key={key} className="text-gray-700">
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>

        <div className="border bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Volumes</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            {image.volumes.map((volume) => (
              <li key={volume} className="text-gray-700">
                {volume}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
