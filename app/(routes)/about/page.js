import Navbar from "@/app/components/navbar";
import Card from "@/app/components/cards";
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-3xl font-bold text-white">About Vastra ✨</h2>
        <div className="flex flex-col gap-6">
          <Card
            imageSource="/path/to/image1.jpg"
            title="Card Title 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Card
            imageSource="/path/to/image2.jpg"
            title="Card Title 2"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
          />
          <Card
            imageSource="/path/to/image3.jpg"
            title="Card Title 3"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
