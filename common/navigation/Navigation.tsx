import React, { Fragment, useMemo } from "react";
import { Logo } from "./Logo";
import { Menu } from "@headlessui/react";
import { MobileMenu } from "./MobileMenu";
import { DesktopNavigation } from "./DesktopNavigation";
import { useRouter } from "next/router";
import { getNavigationItems } from "constants/navigation";

export type NavigationProps = {
  routes?: Array<TNavigationItem>;
};

export const Navigation = React.memo(() => {
  const { pathname } = useRouter();

  const routes = useMemo(() => getNavigationItems(pathname), [pathname]);

  return (
    <Menu as={Fragment}>
      <nav className="relative h-full w-full max-w-360 flex justify-between items-center font-noto text-lg tracking-wider text-primary z-20">
        <div className="pl-4 sm:p-0">
          <Logo />
        </div>
        <DesktopNavigation routes={routes} />
        <MobileMenu routes={routes} />
      </nav>
    </Menu>
  );
});
