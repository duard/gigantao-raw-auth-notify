import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPDHTC', ['codemp', 'codfunc', 'dttrab'], { unique: true })
@Index('TFPDHTC_I01', ['codemp', 'codfunc', 'referencia'], {})
@Entity('TFPDHTC', { schema: 'SANKHYA' })
export class TfpdhtcEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DTTRAB' })
  dttrab: Date;

  @Column('float', { name: 'HORASTRAB', precision: 53 })
  horastrab: number;

  @Column('datetime', { name: 'REFERENCIA' })
  referencia: Date;
}
