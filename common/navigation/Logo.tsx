import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <div className="flex justify-center items-center text-xl cursor-default text-[#3f4241]">
      <span className="flex mr-4">
        <Image
          width={48}
          height={48}
          unoptimized
          layout="fixed"
          src={"/images/icons/logo.svg"}
          alt="First Aid Decor Kit Logo"
        />
      </span>
      <h1>First Aid Decor</h1>
    </div>
  );
};
