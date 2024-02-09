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
    <div className="bg-white">

    <p className="text-black text-6xl font-averia flex justify-center ">Past Sponsors</p>
    <div className="grid grid-cols-3 gap-4 lg:px-20">
      {imageFiles.map((image, index) => (
        <img key={index} src={`/sponsors/${image}`} alt={`Image ${index}`} />
      ))}
    </div>
    </div>
  );
};

export default ImageGallery;