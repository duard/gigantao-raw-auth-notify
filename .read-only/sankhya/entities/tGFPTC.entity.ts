import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfeppEntity } from './tGFEPP.entity';
import { TgfmedEntity } from './tGFMED.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFPTC', ['codptc'], { unique: true })
@Entity('TGFPTC', { schema: 'SANKHYA' })
export class TgfptcEntity {
  @Column('int', { primary: true, name: 'CODPTC' })
  codptc: number;

  @Column('varchar', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @OneToMany(() => TgfeppEntity, (tgfeppEntity) => tgfeppEntity.codptc)
  tgfepps: TgfeppEntity[];

  @OneToMany(() => TgfmedEntity, (tgfmedEntity) => tgfmedEntity.codptc2)
  tgfmeds: TgfmedEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfptcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
