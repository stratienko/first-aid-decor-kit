import { Navigation } from "../navigation";
import React, { PropsWithChildren } from "react";

export const AppLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <header className="shadow-md bg-[#e5e5e5] fixed z-50 h-20 w-full flex justify-center items-center px-8">
        <Navigation />
      </header>
      <div className="pt-20">{children}</div>
    </React.Fragment>
  );
};
