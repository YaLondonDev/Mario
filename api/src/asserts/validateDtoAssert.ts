import { validateDto } from '../utils/validateDto';

export const validateDtoAssert = <T>(
  value: any,
  dto: Record<string, unknown>,
): asserts value is T => {
  if (!validateDto(value, dto)) {
    throw new Error('Invalid credentials');
  }
};
