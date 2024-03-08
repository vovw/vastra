"use client";
import React, { useState } from "react";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import Footer from "@/app/components/fotter";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const images = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.JPG",
    "/gallery/6.JPG",
    "/gallery/7.JPG",
    "/gallery/8.JPG",
    "/gallery/9.JPG",
    "/gallery/10.jpeg",
    "/gallery/11.jpeg",
    "/gallery/12.jpeg",
    "/gallery/13.jpeg",
    "/gallery/14.jpeg",
    "/gallery/15.jpeg",
    "/gallery/16.jpeg",
    "/gallery/17.jpeg",
    "/gallery/18.jpeg",
    "/gallery/19.jpeg",
    "/gallery/20.jpeg",
    "/gallery/21.jpeg",
    "/gallery/22.jpeg",
    "/gallery/23.jpeg",
    "/gallery/24.jpeg",
    "/gallery/25.jpeg",
    "/gallery/26.jpeg",
    "/gallery/27.jpeg",
    "/gallery/28.jpeg",
    "/gallery/29.jpeg",
    "/gallery/30.jpeg",
    "/gallery/31.jpeg",
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-3xl font-bold text-white">Gallery</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={image}
                alt={`Image ${index}`}
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={800}
              height={600}
              className="max-h-full max-w-full"
            />
            <button
              className="absolute right-2 top-2 text-white hover:text-gray-300"
              onClick={handleCloseModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default GalleryPage;
