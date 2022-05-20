import type { LinkProps } from "next/link";

export declare global {
  export type TService = {
    algorithm: string[];
    description: string;
    disabled?: boolean;
    previewSrc: string;
    price: string;
    serviceName: string;
    title: string;
  };

  export type TNavigationItem = LinkProps & { routeName: string };
}
