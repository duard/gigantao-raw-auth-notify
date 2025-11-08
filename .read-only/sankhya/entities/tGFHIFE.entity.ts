import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TGFHIFE', ['id'], { unique: true })
@Entity('TGFHIFE', { schema: 'SANKHYA' })
export class TgfhifeEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'NOMEIMP', nullable: true, length: 10 })
  nomeimp: string | null;

  @Column('varchar', { name: 'GRUPOIMP', nullable: true, length: 30 })
  grupoimp: string | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'ENTSAI', nullable: true, length: 1 })
  entsai: string | null;

  @Column('varchar', { name: 'RETEMFIN', nullable: true, length: 1 })
  retemfin: string | null;

  @Column('smallint', { name: 'CST', nullable: true })
  cst: number | null;

  @Column('float', { name: 'ALIQ', nullable: true, precision: 53 })
  aliq: number | null;

  @Column('float', { name: 'REDBASE', nullable: true, precision: 53 })
  redbase: number | null;

  @Column('float', { name: 'IVA', nullable: true, precision: 53 })
  iva: number | null;

  @Column('float', { name: 'ALIQCRED', nullable: true, precision: 53 })
  aliqcred: number | null;

  @Column('float', { name: 'VLRPAUTA', nullable: true, precision: 53 })
  vlrpauta: number | null;

  @Column('float', { name: 'VLRPAUTACRED', nullable: true, precision: 53 })
  vlrpautacred: number | null;

  @Column('smallint', { name: 'CODTAB', nullable: true })
  codtab: number | null;

  @Column('varchar', { name: 'PERCVLR', nullable: true, length: 1 })
  percvlr: string | null;

  @Column('smallint', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('varchar', { name: 'IPIINCBASE', nullable: true, length: 1 })
  ipiincbase: string | null;

  @Column('varchar', { name: 'PRODSEMTRIB', nullable: true, length: 1 })
  prodsemtrib: string | null;

  @Column('float', { name: 'ALIQSUFRAMA', nullable: true, precision: 53 })
  aliqsuframa: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', { name: 'USUARIO', nullable: true, length: 20 })
  usuario: string | null;
}
