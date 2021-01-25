export const validateDto = (value: any, dto: Record<string, unknown>) => {
  const keys = Object.keys(dto) as Array<keyof typeof dto>;
  return keys.every((key) => value[key] && typeof value[key] === dto[key]);
};
