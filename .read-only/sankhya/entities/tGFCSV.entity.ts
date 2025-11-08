import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfmcsEntity } from './tGFMCS.entity';

@Index('PK_TGFCSV', ['codcomp'], { unique: true })
@Entity('TGFCSV', { schema: 'SANKHYA' })
export class TgfcsvEntity {
  @Column('int', { primary: true, name: 'CODCOMP' })
  codcomp: number;

  @Column('varchar', { name: 'DESCRCOMP', length: 255 })
  descrcomp: string;

  @OneToMany(() => TgfmcsEntity, (tgfmcsEntity) => tgfmcsEntity.codcomp2)
  tgfmcs: TgfmcsEntity[];
}
