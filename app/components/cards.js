"use client";

import React from "react";
import Image from "next/image";

const Card = ({ imageSource, title, description }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-800 shadow-lg">
      <div className="relative h-48">
        <Image src={imageSource} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Card;
