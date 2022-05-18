import Link from "next/link";
import React, { Fragment } from "react";
import { Logo } from "./Logo";
import { Menu } from "@headlessui/react";
import { MobileMenu } from "./MobileMenu";

export const Navigation = React.memo(() => {
  return (
    <Menu as={Fragment}>
      <nav className="relative h-full w-full max-w-360 flex justify-between items-center font-noto text-lg tracking-wider text-primary z-10">
        <div className="pl-4 sm:p-0">
          <Logo />
        </div>
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-16">
          <Link href={"/"} passHref>
            <span className="cursor-pointer hover:underline">Про нас</span>
          </Link>
          <Link href={"/"} passHref>
            <span className="cursor-pointer hover:underline">Послуги</span>
          </Link>
          <Link href={"/"} passHref>
            <span className="cursor-pointer hover:underline">Контакти</span>
          </Link>
        </div>
        {/* Mobile navigation */}
        <MobileMenu />
      </nav>
    </Menu>
  );
});
