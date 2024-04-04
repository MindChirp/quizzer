export const stringToColor = (value: string, alpha: string) => {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash);
  }

  return `hsla(${hash % 360}, 85%, 35%, ${alpha})`;
};