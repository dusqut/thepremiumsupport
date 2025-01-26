import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const products = [
    {
      image: "/Img/linkedin.png", 
      title: "LinkedIn Premium",
      rating: 5,
      description: "On Your Account",
      price: "From 6 months | $25",
    },
    {
      image: "/Img/coursera_plus.png",
      title: "Coursera PLUS",
      rating: 5,
      description: "On Your Account",
      price: "1 Year | $55",
    },
    {
      image: "/Img/canva.png",
      title: "Canva Pro Edu",
      rating: 5,
      description: "On Your Account",
      price: "Lifetime | $3",
    },
    {
      image: "/Img/msof.png", 
      title: "Ms Office",
      rating: 5,
      description: "On Your Account",
      price: "1 Year & Lifetime | $8",
    },
    {
      image: "/Img/figma.png",
      title: "Figma Pro",
      rating: 5,
      description: "On Your Account",
      price: "1 Year | $20",
    },
    {
      image: "/Img/perplexity.png",
      title: "Perplexity AI",
      rating: 5,
      description: "On Your Account",
      price: "1 year | $35",
    },
    {
      image: "/Img/azure.png", 
      title: "Azure Credits",
      rating: 5,
      description: "On a Private Account from 100$",
      price: "1 year | $16",
    },
    {
      image: "/Img/autodesk.png",
      title: "Autodesk",
      rating: 5,
      description: "On Your Account",
      price: "1 Year | $15",
    },
    {
      image: "/Img/acc.png",
      title: "Creative Cloud",
      rating: 5,
      description: "On Your Account",
      price: "1 Year | $75",
    },
    {
      image: "/Img/DataCamp.png",
      title: "DataCamp",
      rating: 5,
      description: "On Your Account",
      price: "1 Year | $32",
    },
    {
      image: "/Img/idm.png",
      title: "Internet Download Manager",
      rating: 5,
      description: "On Your Device",
      price: "Lifetime | $20",
    },
    {
      image: "/Img/gpt.webp",
      title: "Chat GPT 4",
      rating: 5,
      description: "Providing Credentials",
      price: "3 months | $20",
    },
    {
      image: "/Img/office.png",
      title: "Ms Office",
      rating: 5,
      description: "On Your Account",
      price: "Lifetime | $8",
    },
    {
      image: "/Img/windows.webp",
      title: "Windows 11/10 Pro",
      rating: 5,
      description: "On Your Account",
      price: "Lifetime | $8",
    },
    {
      image: "/Img/envato.png",
      title: "Envato Elements",
      rating: 5,
      description: "On Your Account",
      price: "1 Year | $67",
    },
    {
      image: "/Img/Voicemotion.png",
      title: "Voicemotion Pro",
      rating: 5,
      description: "On Your Account",
      price: "Lifetime | $16",
    },
    {
      image: "/Img/loom.svg",
      title: "Loom Pro",
      rating: 5,
      description: "On Your Web Account",
      price: "2 Years | $18",
    },
    {
      image: "/Img/notion.png",
      title: "Notion Pro",
      rating: 5,
      description: "Get a Private Account",
      price: "1 Year | $18",
    },
    {
      image: "/Img/JetBrains.png",
      title: "JetBrains Pro",
      rating: 5,
      description: "On Your Account",
      price: "1 Year | $45",
    },
    {
      image: "/Img/invideo.png",
      title: "Invideo Studio",
      rating: 5,
      description: "On Your Fresh Email",
      price: "1 Year | $25",
    },
    {
      image: "/Img/turnitin.webp",
      title: "Turnitin Pro",
      rating: 5,
      description: "On Your Account | Student",
      price: "1 Year | $25",
    },
    {
      image: "/Img/google-one.png",
      title: "Google One",
      rating: 5,
      description: "On Your Account | Student",
      price: "1 Year | 200GB or 2TB",
    },
    {
      image: "/Img/youtube.png",
      title: "Youtube Premium",
      rating: 5,
      description: "On Your Email Account",
      price: "1 Year | $13",
    },
    {
      image: "/Img/amazon.png",
      title: "Amazon Prime",
      rating: 5,
      description: "Get a Private Account",
      price: "6 months | $10",
    },

  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 lg:p-32">
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
