export const createThemeDto = {
  name: 'string',
  accentColor: 'string',
  foregroundAccentColor: 'string',
  backgroundColor: 'string',
  foregroundColor: 'string',
  creatorId: 'number',
  default: 'boolean',
};

export type TCreateThemeDto = typeof createThemeDto;
