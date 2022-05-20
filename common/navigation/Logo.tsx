import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <div className="flex justify-center items-center text-xl cursor-default text-primary">
      <span className="flex mr-4">
        <Image
          width={48}
          height={48}
          unoptimized
          layout="fixed"
          src={"/icons/logo.svg"}
          alt="First Aid Decor Logo"
        />
      </span>
      <h1>First Aid Decor</h1>
    </div>
  );
};
