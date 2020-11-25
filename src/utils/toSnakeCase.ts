export const toSnakeCase = (obj: Record<string, unknown>) => {
  const keys = Object.keys(obj);
  const result: Record<string, unknown> = {};

  keys.forEach((key) => {
    const snakeKey = key
      .replace(/[A-Z]/g, (match) => `_${match}`)
      .toLowerCase();
    result[snakeKey] = obj[key];
  });

  return result;
};
