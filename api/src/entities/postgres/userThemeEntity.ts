import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ThemeEntity } from './themeEntity';

@Entity()
export class UserThemeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  userId: number;

  @Column()
  themeId: number;
}
