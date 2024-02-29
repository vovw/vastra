import React from "react";
import fs from "fs";
import path from "path";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/fotter";

const ImageGallery = () => {
  const imageFolder = path.join(process.cwd(), "public/sponsors");
  let imageFiles = [];
  try {
    imageFiles = fs.readdirSync(imageFolder);
  } catch (error) {
    console.error("Error reading image files:", error);
  }

  return (
    <div>
      <Navbar />
      <div className="to-white-300 bg-gradient-to-b from-white">
        <br></br>
        <br></br>
        <p className="flex justify-center font-serif text-6xl text-black">
          Past Sponsors
        </p>

        <br></br>
        <br></br>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:px-20">
          {imageFiles.map((image, index) => (
            <img
              key={index}
              src={`/sponsors/${image}`}
              alt={`Image ${index}`}
            />
          ))}
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ImageGallery;
