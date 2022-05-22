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

  if (pathname === "/404") return defaultNavItems;

  if (pathname != "/")
    return [
      { href: "/", passHref: true, routeName: "Додому" },
      ...defaultNavItems,
    ];

  return defaultNavItems;
};
