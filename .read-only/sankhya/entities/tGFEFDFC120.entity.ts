import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFC120', ['codemp', 'dtref', 'regniv1', 'chave', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDFC120', { schema: 'SANKHYA' })
export class Tgfefdfc120Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'C001'",
  })
  regniv1: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C120'" })
  registro: string;

  @Column('varchar', { name: 'COD_DOC_IMP', nullable: true, length: 1 })
  codDocImp: string | null;

  @Column('varchar', { name: 'NUM_DOC_IMP', nullable: true, length: 15 })
  numDocImp: string | null;

  @Column('float', { name: 'PIS_IMP', nullable: true, precision: 53 })
  pisImp: number | null;

  @Column('float', { name: 'COFINS_IMP', nullable: true, precision: 53 })
  cofinsImp: number | null;

  @Column('varchar', { name: 'NUM_ACDRAW', nullable: true, length: 20 })
  numAcdraw: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
