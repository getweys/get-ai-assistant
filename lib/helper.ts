export const splitName = (value: string) => {
  const name = value
    .split(" ")
    .map((n) => n[0])
    .join("");

  return name;
};
