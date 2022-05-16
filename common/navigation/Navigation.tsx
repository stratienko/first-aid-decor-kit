import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";

export const Navigation = React.memo(() => {
  return (
    <nav className="relative py-6 w-full max-w-360 flex justify-between items-center font-noto text-lg tracking-wider text-[#79736a]">
      <div className="">
        <Logo />
      </div>
      <div className="hidden md:flex items-center space-x-16">
        <Link href={"#"} passHref>
          <span className="cursor-pointer hover:underline">Про нас</span>
        </Link>
        <Link href={"#"} passHref>
          <span className="cursor-pointer hover:underline">Послуги</span>
        </Link>
        <Link href={"#"} passHref>
          <span className="cursor-pointer hover:underline">Портфоліо</span>
        </Link>
        <Link href={"#"} passHref>
          <span className="cursor-pointer hover:underline">Контакти</span>
        </Link>
      </div>
    </nav>
  );
});
