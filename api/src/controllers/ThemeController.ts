import { createQueryBuilder, getRepository } from 'typeorm';
import { TCreateThemeDto } from '../dto/createThemeDto';
import { ThemeEntity } from '../entities/postgres/themeEntity';
import { UserThemeEntity } from '../entities/postgres/userThemeEntity';

export class ThemeController {
  static createTheme = async (user: any, themeDto: TCreateThemeDto) => {
    const themesRepository = getRepository(ThemeEntity, 'postgres');

    const theme = await themesRepository.create({
      ...themeDto,
      creatorId: user.id,
      default: false,
    });

    const result = await themesRepository.save(theme);
    return result.id;
  };

  static getThemes = async (user?: any) => {
    let themes: ThemeEntity[] = [];
    const themesRepository = getRepository(ThemeEntity, 'postgres');

    if (!user) {
      themes = await themesRepository.find({ default: true });
    } else {
      themes = await createQueryBuilder(ThemeEntity, 'theme_entity', 'postgres')
        .where('"default" = :default', { default: true })
        .orWhere('"creatorId" = :creatorId', { creatorId: user.id })
        .orderBy('id')
        .getMany();
    }

    return themes.map((theme) => theme.toObject());
  };

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
