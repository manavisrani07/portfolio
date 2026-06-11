"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function Portrait() {
  const [src, setSrc] = useState(profile.avatar);

  return (
    <div className="portrait-ring w-56 sm:w-64 lg:w-72">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Manav Israni"
        className="aspect-[4/5] w-full object-cover"
        onError={() => setSrc(profile.avatarFallback)}
      />
    </div>
  );
}
