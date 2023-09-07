"use client"
import React from 'react';
import Image from 'next/image';

const ProductCard = ({ image = '', productName, productDescription, productPara}) => {
  return (
    <div className="md:h-[500px] bg-white rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={productName}
        className=""
      />
      <div className="p-4">
        <p className="text-black mt-2 text-4xl font-bold mb-2">{productDescription}</p>
        <p className="text-gray-600">{productPara}</p>
      </div>
    </div>
  );
};

export default ProductCard;
