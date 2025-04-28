// components/FeaturesSection.tsx
import React from "react"
import FeatureCard from "./FeatureCard"
import { features } from "@/data/features"

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {features.map((feat, idx) => (
            <FeatureCard key={idx} {...feat} />
          ))}
        </div>
      </div>
    </section>
  )
}