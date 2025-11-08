import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPHFR', ['codreint'], { unique: true })
@Entity('TFPHFR', { schema: 'SANKHYA' })
export class TfphfrEntity {
  @Column('int', { primary: true, name: 'CODREINT' })
  codreint: number;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('varchar', { name: 'AFASTFGTS', nullable: true, length: 2 })
  afastfgts: string | null;

  @Column('smallint', { name: 'AFASTRAIS', nullable: true })
  afastrais: number | null;

  @Column('smallint', { name: 'CAUSAAFAST', nullable: true })
  causaafast: number | null;

  @Column('datetime', { name: 'DTEFETRETORNO', nullable: true })
  dtefetretorno: Date | null;

  @Column('datetime', { name: 'DTAFASTAMENTO', nullable: true })
  dtafastamento: Date | null;

  @Column('datetime', { name: 'DTDEM', nullable: true })
  dtdem: Date | null;

  @Column('datetime', { name: 'DTAVISOPREVIO', nullable: true })
  dtavisoprevio: Date | null;

  @Column('smallint', { name: 'CODSAQ', nullable: true })
  codsaq: number | null;

  @Column('char', { name: 'PRIMEMPREGO', nullable: true, length: 1 })
  primemprego: string | null;
}
