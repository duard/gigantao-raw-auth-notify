import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfilgEntity } from './tGFILG.entity';

@Index('PK_TGFLOG', ['nulog'], { unique: true })
@Entity('TGFLOG', { schema: 'SANKHYA' })
export class TgflogEntity {
  @Column('int', { primary: true, name: 'NULOG' })
  nulog: number;

  @Column('char', { name: 'NOMETAB', length: 30 })
  nometab: string;

  @Column('smallint', { name: 'FILIAL' })
  filial: number;

  @Column('datetime', { name: 'DTEXPIMP' })
  dtexpimp: Date;

  @Column('smallint', { name: 'TOTREG' })
  totreg: number;

  @Column('smallint', { name: 'TOTREGPROC' })
  totregproc: number;

  @Column('smallint', { name: 'TOTREJEITADO' })
  totrejeitado: number;

  @Column('char', { name: 'EXPORTIMPORT', length: 1 })
  exportimport: string;

  @OneToMany(() => TgfilgEntity, (tgfilgEntity) => tgfilgEntity.nulog2)
  tgfilgs: TgfilgEntity[];
}
