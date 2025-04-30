// components/FeatureCard.tsx
import Image from "next/image";
import React from "react";

export interface Feature {
  logo: string;
  title: string;
  description: string;
  cta: string;
}

export default function FeatureCard({ logo, title, description, cta }: Feature) {
  return (
    <div
      className="
        group
        w-full max-w-sm
        font-ubuntu
        dark:bg-white
        bg-primary text-black
        p-6 rounded-2xl
        shadow-lg shadow-black/10 dark:shadow-gray-600/50
        hover:shadow-xl dark:hover:shadow-gray-600/70
        transition-colors transition-shadow duration-200
        flex flex-col items-center text-center
      "
    >
      {/* Logo: grayscale by default, restores color on hover */}
      <div className="w-32 h-16 mb-4 flex items-center justify-center filter grayscale transition-all duration-200 group-hover:grayscale-0">
        <Image
          src={logo}
          alt={`${title} logo`}
          width={128}
          height={64}
          className="object-contain transition-transform duration-200 group-hover:scale-105"
          priority
        />
      </div>

      {/* Title */}
      <h3 className="w-4/5 mx-auto text-xl font-bold mb-2">{title}</h3>

      {/* Description */}
      <p className="flex-1 w-4/5 mx-auto flex items-center justify-center mb-4">{description}</p>

      {/* CTA button */}
      <button
        className="
          mt-auto
          inline-flex items-center justify-center
          w-[70%] mx-auto px-4 py-2
          dark:bg-primary
          bg-black text-white
          rounded-lg
        "
      >
        <span className="text-white">{cta}</span>
      </button>
    </div>
  );
}
