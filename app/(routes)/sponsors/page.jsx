import fs from 'fs';
import path from 'path';

const ImageGallery = () => {
  const imageFolder = path.join(process.cwd(), 'public'); 
  let imageFiles = [];
  try {
    imageFiles = fs.readdirSync(imageFolder);
  } catch (error) {
    console.error('Error reading image files:', error);
  }

  return (
    <div>
      {imageFiles.map((image, index) => (
        <img key={index} src={`/images/${image}`} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default ImageGallery;