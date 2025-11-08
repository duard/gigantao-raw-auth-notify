import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TsitarEntity } from './tSITAR.entity';

@Index('PK_TSIROT', ['codrot'], { unique: true })
@Entity('TSIROT', { schema: 'SANKHYA' })
export class TsirotEntity {
  @Column('smallint', { primary: true, name: 'CODROT' })
  codrot: number;

  @Column('char', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('char', { name: 'COMANDO', length: 40 })
  comando: string;

  @OneToMany(() => TsitarEntity, (tsitarEntity) => tsitarEntity.codrot2)
  tsitars: TsitarEntity[];
}
