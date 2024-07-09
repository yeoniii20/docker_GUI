"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { IMAGES } from "../../../../data/images";

const Home = () => {
  const router = useRouter();

  const handleImageClick = (id: string) => {
    router.push(`/images/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Docker Images</h1>
      <ul className="space-y-4 ">
        {IMAGES.map((image) => (
          <li key={image.id} className="border p-4 rounded-lg shadow bg-white">
            <Link href={`/images/${image.id}`}>
              <div
                className="text-blue-500 hover:text-blue-700"
                onClick={() => handleImageClick(image.id)}
              >
                {image.name}:{image.tag}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
