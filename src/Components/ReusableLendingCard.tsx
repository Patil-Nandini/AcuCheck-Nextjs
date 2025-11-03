"use client";

import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  tags: string[];
}

export default function ReusableLendingCard({
  title,
  description,
  tags,
}: FeatureCardProps) {
  return (
    <div className="relative w-full max-w-[272px] xl:max-w-[310px] min-h-[300px] max-h-[380px] rounded-3xl overflow-hidden  px-5 py-15 text-white flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/cardBg1.webm" type="video/webm" />
      </video>

      <div className="relative z-10 space-y-2">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-[#45EEFA] to-[#3598DB] bg-clip-text text-transparent leading-snug pt-10">
          {title}
        </h3>

        <p className="text-sm text-[#E7E0FF] leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="px-3 py-1 text-xs font-medium"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
