import React from "react";
import Link from "next/link";

export default function ProductCard({ image, title, rating, description, price }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 md:gap-2 border rounded-lg shadow-md p-2" id="AllProducts">
      <img src={image} alt={title} className="w-full h-57 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-bold leading-tight">{title}</h3>
      <p className="text-yellow-500 text-lg leading-tight mt-1">{"★".repeat(rating)}</p>
      <p className="text-gray-500 text-sm mt-2">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-indigo-500 font-medium">{price}</span>
        <Link href="https://wa.me/94713675980">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-green-800">+</button>
        </Link>
      </div>
    </div>
  );
}
