"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function Portrait() {
  const [src, setSrc] = useState(profile.avatar);

  return (
    <div className="portrait-ring w-24 sm:w-40 md:w-52 lg:w-64 shrink-0">
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
