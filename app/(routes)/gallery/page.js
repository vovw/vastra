import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/navbar";

// Sample JSON object containing image URLs
const galleryData = [
  {
    id: 1,
    imageUrl: "/VJTI.jpg",
  },
  {
    id: 2,
    imageUrl: "/VJTI.jpg",
  },
  {
    id: 3,
    imageUrl: "/VJTI.jpg",
  },
  {
    id: 4,
    imageUrl: "/VJTI.jpg",
  },
  {
    id: 5,
    imageUrl: "/VJTI.jpg",
  },
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-3xl font-bold text-white">Gallery</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {galleryData.map((image) => (
            <div
              key={image.id}
              className="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-lg"
            >
              <Image
                src={image.imageUrl}
                alt={`Image ${image.id}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
