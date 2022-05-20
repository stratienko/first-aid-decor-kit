export type ForProps<T extends unknown = unknown> = {
  items: Array<T>;
  render(item: T, index: number): JSX.Element | null;
};

export { For as default } from "./For";
