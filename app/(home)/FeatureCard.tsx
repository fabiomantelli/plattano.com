'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { event } from "@/lib/gtag/events";

export interface Feature {
  logo: string;
  title: string;
  description: string;
  cta: string;
  href?: string;
}


export default function FeatureCard({ logo, title, description, cta, href }: Feature) {
  const cardContent = (
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
      <div className="w-32 h-16 mb-4 flex items-center justify-center filter grayscale transition-all duration-200 group-hover:grayscale-0">
        <Image
          src={logo}
          alt={`${title} logo`}
          width={128}
          height={64}
          className="object-contain transition-transform duration-200 group-hover:scale-105 w-full h-full"
          priority
        />
      </div>

      <h3 className="w-4/5 mx-auto text-xl font-bold mb-2">{title}</h3>

      <p className="flex-1 w-4/5 mx-auto flex items-center justify-center mb-4">{description}</p>

      <button
        onClick={() =>
          event({
            action: 'click_feature_cta',
            category: 'feature_card',
            label: title,
          })
        }
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

  return href ? (
    <Link href={href} passHref>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}