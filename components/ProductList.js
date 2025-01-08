import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const products = [
    {
      image: "/img/Linkedin.png", 
      title: "LinkedIn Premium",
      rating: 5,
      description: "On Your Account",
      price: "From 6 months | $25",
    },
    {
      image: "/img/coursera_plus.png",
      title: "Coursera PLUS",
      rating: 5,
      description: "On Your Account",
      price: "1 month | $10",
    },
    {
      image: "/img/canva.png",
      title: "Canva Pro Edu",
      rating: 5,
      description: "On Your Account",
      price: "Lifetime | $3",
    },
    {
      image: "/img/msof.png", 
      title: "Ms Office",
      rating: 5,
      description: "On Your Account",
      price: "1 Year & Lifetime | $8",
    },
    {
      image: "/img/figma.png",
      title: "Figma Pro",
      rating: 5,
      description: "On Your Account",
      price: "1 Year | $20",
    },
    {
      image: "/img/perplexity.png",
      title: "Perplexity AI",
      rating: 5,
      description: "On Your Account",
      price: "1 year | $35",
    },
    {
      image: "/img/Azure.png", 
      title: "Azure Credits",
      rating: 5,
      description: "On a Private Account from 100$",
      price: "1 year | $16",
    },
    {
      image: "/img/autodesk.png",
      title: "Autodesk",
      rating: 5,
      description: "On Your Account",
      price: "1 Year | $15",
    },
    {
      image: "/img/acc.png",
      title: "Creative Cloud",
      rating: 5,
      description: "On Your Account",
      price: "1 Year | $75",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          rating={product.rating}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}
