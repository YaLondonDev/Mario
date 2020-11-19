export const toSnakeCase = (obj: Record<string, any>) => {
  const keys = Object.keys(obj);
  const result: Record<string, any> = {};

  keys.forEach((key) => {
    const snakeKey = key
      .replace(/[A-Z]/g, (match) => `_${match}`)
      .toLowerCase();
    result[snakeKey] = obj[key];
  });

  return result;
};
