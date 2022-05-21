const homePagePattern = /^\/$/;
const notFoundPattern = /^\/(404)$/;
const servicesPagePattern = /^\/services\//;

export const getNavigationItems = (
  pathname: string
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

  if (homePagePattern.test(pathname)) return defaultNavItems;

  if (notFoundPattern.test(pathname))
    return [
      {
        href: "/",
        passHref: true,
        routeName: "Додому",
      },
    ];

  if (servicesPagePattern.test(pathname))
    return [
      {
        href: "/",
        passHref: true,
        routeName: "Додому",
      },
      ...defaultNavItems,
    ];

  return [];
};
