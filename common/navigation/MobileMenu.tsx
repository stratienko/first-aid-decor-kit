import { Menu, Transition } from "@headlessui/react";
import For from "common/for";
import Link from "next/link";
import React, { Fragment } from "react";
import { NavigationProps } from "./Navigation";

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

export const MobileMenu = (props: NavigationProps) => {
  const { routes = [] } = props;

  return (
    <Fragment>
      <Menu.Button className="md:hidden p-4 focus:outline-none">
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
        <Menu.Items className="focus:outline-none border border-t-primary divide-y divide-primary absolute w-full flex flex-col top-20 right-0 origin-top-right text-primary bg-secondary shadow-lg">
          <For
            items={routes}
            render={(linkProps) => {
              const { routeName, ...restLinkProps } = linkProps;

              return (
                <Link {...restLinkProps} key={restLinkProps.href.toString()}>
                  <Menu.Item
                    as={"span"}
                    className="focus:outline-none cursor-pointer hover:underline p-4"
                  >
                    {routeName}
                  </Menu.Item>
                </Link>
              );
            }}
          />
        </Menu.Items>
      </Transition>
    </Fragment>
  );
};
