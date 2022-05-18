import { Navigation } from "../navigation";
import React, { PropsWithChildren } from "react";

export const AppLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <header className="bg-secondary fixed z-50 h-20 w-full flex justify-center items-center sm:px-8 shadow-md">
        <Navigation />
      </header>
      <div className="pt-20">{children}</div>
    </React.Fragment>
  );
};
