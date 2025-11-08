import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfiimpmobisEntity } from './tGFIIMPMOBIS.entity';

@Index('PK_TGFIMPMOBIS', ['nuimp'], { unique: true })
@Entity('TGFIMPMOBIS', { schema: 'SANKHYA' })
export class TgfimpmobisEntity {
  @Column('int', { primary: true, name: 'NUIMP' })
  nuimp: number;

  @Column('datetime', { name: 'DHIMP' })
  dhimp: Date;

  @Column('varchar', { name: 'TIPARQUIVO', length: 3 })
  tiparquivo: string;

  @Column('varchar', { name: 'NOMEARQ', length: 250 })
  nomearq: string;

  @Column('varchar', { name: 'ARQHEADER', length: 400 })
  arqheader: string;

  @Column('varchar', { name: 'REPROCESSAR', length: 1, default: () => "'N'" })
  reprocessar: string;

  @Column('smallint', { name: 'QTDPROC' })
  qtdproc: number;

  @Column('smallint', { name: 'QTDTOTPED' })
  qtdtotped: number;

  @Column('smallint', { name: 'QTDPEDIMP' })
  qtdpedimp: number;

  @Column('text', { name: 'MSG' })
  msg: string;

  @OneToMany(
    () => TgfiimpmobisEntity,
    (tgfiimpmobisEntity) => tgfiimpmobisEntity.nuimp2,
  )
  tgfiimpmobis: TgfiimpmobisEntity[];
}
