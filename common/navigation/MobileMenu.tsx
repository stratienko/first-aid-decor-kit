import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment } from "react";

const MenuIcon = () => (
  <svg
    className="h-8 w-8 text-[#79736a]"
    x-description="Heroicon name: outline/menu"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="h-8 w-8 text-[#79736a]"
    x-description="Heroicon name: outline/x"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export const MobileMenu = () => {
  return (
    <Fragment>
      <Menu.Button className="md:hidden p-4">
        {({ open }) => {
          return open ? <CloseIcon /> : <MenuIcon />;
        }}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-0"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-0"
      >
        <Menu.Items className="divide-y absolute w-full flex flex-col top-20 right-0 origin-top-right bg-white shadow-lg">
          <Link href={"#"} passHref>
            <Menu.Item
              as={"span"}
              className="cursor-pointer hover:underline p-4"
            >
              Про нас
            </Menu.Item>
          </Link>
          <Link href={"#"} passHref>
            <Menu.Item
              as={"span"}
              className="cursor-pointer hover:underline p-4"
            >
              Послуги
            </Menu.Item>
          </Link>
          <Link href={"#"} passHref>
            <Menu.Item
              as={"span"}
              className="cursor-pointer hover:underline p-4"
            >
              Портфоліо
            </Menu.Item>
          </Link>
          <Link href={"#"} passHref>
            <Menu.Item
              as={"span"}
              className="cursor-pointer hover:underline p-4"
            >
              Контакти
            </Menu.Item>
          </Link>
        </Menu.Items>
      </Transition>
    </Fragment>
  );
};
