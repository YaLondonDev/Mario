import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ThemeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  accentColor: string;

  @Column()
  foregroundAccentColor: string;

  @Column()
  backgroundColor: string;

  @Column()
  foregroundColor: string;

  @Column()
  creatorId: string;

  @Column()
  default: boolean;

  public toObject() {
    return {
      id: this.id,
      name: this.name,
      accentColor: this.accentColor,
      foregroundAccentColor: this.foregroundAccentColor,
      backgroundColor: this.backgroundColor,
      creatorId: this.creatorId,
      default: this.default,
    };
  }
}
