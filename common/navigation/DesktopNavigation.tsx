import For from "common/for";
import Link from "next/link";
import React from "react";
import { NavigationProps } from "./Navigation";

export const DesktopNavigation = (props: NavigationProps) => {
  const { routes = [] } = props;

  return (
    <div className="hidden md:flex items-center space-x-16">
      <For
        items={routes}
        render={(linkProps) => {
          const { routeName, ...restLinkProps } = linkProps;

          return (
            <Link {...restLinkProps} key={restLinkProps.href.toString()}>
              <span className="cursor-pointer hover:underline">
                {routeName}
              </span>
            </Link>
          );
        }}
      />
    </div>
  );
};
