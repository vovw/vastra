import React from "react";
import fs from "fs";
import path from "path";
import Navbar from "@/app/components/navbar";

const ImageGallery = () => {
  const imageFolder = path.join(process.cwd(), "public/sponsors");
  let imageFiles = [];

  try {
    imageFiles = fs.readdirSync(imageFolder);
  } catch (error) {
    console.error("Error reading image files:", error);
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Past Sponsors
        </h2>

        <div className="rounded-lg bg-white p-6 text-center">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {imageFiles.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <img
                  src={`/sponsors/${image}`}
                  alt={`Image ${index}`}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
