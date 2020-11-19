export const toCamelCase = (obj: Record<string, any>) => {
  const keys = Object.keys(obj);
  const result: Record<string, any> = {};

  keys.forEach((key) => {
    const camelKey = key
      .split('_')
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join('');

    const preferedKey = camelKey[0].toLowerCase() + camelKey.slice(1);
    result[preferedKey] = obj[key];
  });

  return result;
};
