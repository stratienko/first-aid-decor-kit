import Image from "next/image";
import React from "react";
import logo from "public/icons/logo.svg";

export const Logo = () => {
  return (
    <div className="group p-2 flex justify-center items-center text-xl text-primary">
      <span className="flex mr-4">
        <Image
          src={logo}
          width={48}
          height={48}
          layout="fixed"
          priority={true}
          alt="First Aid Decor Logo"
        />
      </span>
      <h1 className="group-hover:underline">First Aid Decor</h1>
    </div>
  );
};
