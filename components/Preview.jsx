import React from "react";
import config from "@/app/assets/config.json";
console.log(config);


function Preview({
  color="Sun Soaked",interior="white",wheel="SlipStream Black"
})
   {
  return (
    <div>
      <div>
        <img
          src={config[color].wheels[wheel]}
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg"
          alt="Aerostealth"
        />
        <div className="py-3">
        <h3 className="font-bold text-xl text-blue-950">{config[color].finish}</h3>
        <p>A mysterious, seductive black with a metallic blue shimmer.</p>
        </div>
      </div>

      <div>
        <img
          src={`/images/interior/${interior}.jpeg`}
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
