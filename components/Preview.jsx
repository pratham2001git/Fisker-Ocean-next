import React from "react";
import Image from "next/image";

function Preview() {
  return (
    <div>
      <div>
        <img
          src={"/images/aerostealth.jpg"}
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg"
          alt="Aerostealth"
        />
        <h3>Metallic Gloss</h3>
        <p>A mysterious, seductive black with a metallic blue shimmer.</p>
      </div>

      <div>
        <img
          src={"/images/dark.jpeg"}
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg"
          alt="Aerostealth"
        />
      </div>
    </div>
  );
}

export default Preview;
