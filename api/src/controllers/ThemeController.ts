import { getRepository } from 'typeorm';
import { ThemeEntity } from '../entities/postgres/themeEntity';
import { UserThemeEntity } from '../entities/postgres/userThemeEntity';

export class ThemeController {
  static createTheme = () => {};

  static getCurrentTheme = async (user: any) => {
    const userThemeRepository = getRepository(UserThemeEntity, 'postgres');
    const themesRepository = getRepository(ThemeEntity, 'postgres');

    const userTheme = user
      ? await userThemeRepository.findOne({ userId: user.id })
      : undefined;

    const theme = userTheme
      ? await themesRepository.findOne({
          id: userTheme.themeId,
        })
      : await themesRepository.findOne({ default: true });

    return theme.toObject();
  };

  static setCurrentTheme = async (user: any, themeId?: number) => {
    const userThemeRepository = getRepository(UserThemeEntity, 'postgres');
    const themesRepository = getRepository(ThemeEntity, 'postgres');

    let userTheme = await userThemeRepository.findOne({ userId: user.id });

    if (!userTheme) {
      userTheme = new UserThemeEntity();
    }

    userTheme.userId = user.id;
    userTheme.themeId = themeId ?? 0;

    await userThemeRepository.save(userTheme);

    const theme = await themesRepository.findOne({
      id: userTheme.themeId,
    });

    return theme.toObject();
  };
}
