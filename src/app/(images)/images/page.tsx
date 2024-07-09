"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaDocker, FaTag, FaInfoCircle } from "react-icons/fa";
import { IMAGES } from "../../../../data/images";

const Home = () => {
  const router = useRouter();

  const handleImageClick = (id: string) => {
    router.push(`/images/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Docker Images</h1>
      <ul className="space-y-4">
        {IMAGES.map((image) => (
          <li
            key={image.id}
            className="border p-4 rounded-lg shadow bg-white flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <FaDocker className="text-blue-500 w-6 h-6" />
              <div>
                <div className="text-lg font-semibold text-gray-800">
                  {image.name}:{image.tag}
                </div>
                <div className="text-sm text-gray-600">
                  <FaTag className="inline-block mr-1" />
                  {image.tag}
                </div>
                <div className="text-sm text-gray-600">
                  <FaInfoCircle className="inline-block mr-1" />
                  {image.description}
                </div>
              </div>
            </div>
            <div>
              <Link href={`/images/${image.id}`}>
                <button
                  onClick={() => handleImageClick(image.id)}
                  className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
                >
                  View Details
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
