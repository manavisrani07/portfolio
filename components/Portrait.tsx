"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function Portrait() {
  const [src, setSrc] = useState(profile.avatar);

  return (
    <div className="portrait-ring w-32 sm:w-44 md:w-56 lg:w-72 shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Manav Israni"
        className="aspect-square w-full object-cover object-top"
        onError={() => setSrc(profile.avatarFallback)}
      />
    </div>
  );
}
