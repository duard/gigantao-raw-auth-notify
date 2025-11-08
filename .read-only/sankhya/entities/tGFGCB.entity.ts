import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFGCB', ['codgrupo'], { unique: true })
@Entity('TGFGCB', { schema: 'SANKHYA' })
export class TgfgcbEntity {
  @Column('int', { primary: true, name: 'CODGRUPO' })
  codgrupo: number;

  @Column('varchar', { name: 'DESCRICAO', length: 60 })
  descricao: string;

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codgrupo2)
  tgfpars: TgfparEntity[];
}
