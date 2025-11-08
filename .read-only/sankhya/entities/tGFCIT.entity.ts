import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFCIT', ['codservtelecom'], { unique: true })
@Entity('TGFCIT', { schema: 'SANKHYA' })
export class TgfcitEntity {
  @Column('smallint', { primary: true, name: 'CODSERVTELECOM' })
  codservtelecom: number;

  @Column('varchar', { name: 'DESCRICAO', length: 255 })
  descricao: string;

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codservtelecom)
  tgfpros: TgfproEntity[];
}
