import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsrslEntity } from './tCSRSL.entity';

@Index('PK_TCSCSL', ['nusla', 'numreg', 'seqcor'], { unique: true })
@Entity('TCSCSL', { schema: 'SANKHYA' })
export class TcscslEntity {
  @Column('int', { primary: true, name: 'NUSLA' })
  nusla: number;

  @Column('smallint', { primary: true, name: 'NUMREG' })
  numreg: number;

  @Column('smallint', { primary: true, name: 'SEQCOR' })
  seqcor: number;

  @Column('char', { name: 'DECORESTA', length: 1 })
  decoresta: string;

  @Column('char', { name: 'TIPOTEMPO', length: 1 })
  tipotempo: string;

  @Column('smallint', { name: 'VALORTEMPO' })
  valortempo: number;

  @Column('int', { name: 'CORRGB' })
  corrgb: number;

  @ManyToOne(() => TcsrslEntity, (tcsrslEntity) => tcsrslEntity.tcscsls)
  @JoinColumn([
    { name: 'NUSLA', referencedColumnName: 'nusla' },
    { name: 'NUMREG', referencedColumnName: 'numreg' },
  ])
  tcsrsl: TcsrslEntity;
}
