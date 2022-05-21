import Navigation from "../navigation";
import React, { PropsWithChildren } from "react";

export const AppLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <header className="bg-secondary relative z-50 h-20 w-full flex justify-center items-center sm:px-8 shadow-md">
        <Navigation />
      </header>
      {children}
    </React.Fragment>
  );
};
