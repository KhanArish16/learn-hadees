import React from "react";
import Link from "next/link";

function Card({ id, title, description, imageUrl, altText }) {
  return (
    <div className="w-full max-w-md mx-auto mt-5 border-1 border-black">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-gray-100">
        <img
          src={imageUrl}
          alt={altText}
          width={600}
          height={400}
          className="w-full h-64 object-cover"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div className="p-4 space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">$49.99</span>
            <Link href={`/`}>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
