import { ForProps } from ".";
import { Fragment, useMemo } from "react";

export const For = <T extends unknown = unknown>(props: ForProps<T>) => {
  const { items, render } = props;

  const nodes = useMemo(() => {
    return items.map(render);
  }, [items, render]);

  return <Fragment>{nodes}</Fragment>;
};
