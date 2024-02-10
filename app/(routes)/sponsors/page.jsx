import React from 'react';
import fs from 'fs';
import path from 'path';
import Navbar from '@/app/components/navbar';

const ImageGallery = () => {
  const imageFolder = path.join(process.cwd(), 'public/sponsors'); 
  let imageFiles = [];
  try {
    imageFiles = fs.readdirSync(imageFolder);
  } catch (error) {
    console.error('Error reading image files:', error);
  }

  return (
    <div>
    <Navbar/>
    <div className="bg-gradient-to-b from-black to-gray-300">
      <br></br>
      <br></br>
    <p className="italic text-6xl font-averia flex justify-center ">Past Sponsors</p>
      <br></br>
      <br></br>
    <div className="grid grid-cols-3 gap-4 lg:px-20">
      {imageFiles.map((image, index) => (
        <img key={index} src={`/sponsors/${image}`} alt={`Image ${index}`} />
      ))}
    </div>
    </div>
    </div>
  );
};

export default ImageGallery;