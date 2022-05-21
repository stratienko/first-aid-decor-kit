export const getNavigationItems = (
  pathname: string = "/"
): Array<TNavigationItem> => {
  const defaultNavItems: Array<TNavigationItem> = [
    {
      href: "/#about",
      passHref: true,
      routeName: "Про нас",
    },
    {
      href: "/#services",
      passHref: true,
      routeName: "Наші послуги",
    },
  ];

  return defaultNavItems;
};
