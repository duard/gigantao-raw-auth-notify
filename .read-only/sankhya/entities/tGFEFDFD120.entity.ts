import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFD120',
  ['codemp', 'dtref', 'regniv1', 'chave', 'numItem', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFD120', { schema: 'SANKHYA' })
export class Tgfefdfd120Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'D001'",
  })
  regniv1: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { primary: true, name: 'NUM_ITEM' })
  numItem: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'D120'" })
  registro: string;

  @Column('int', { name: 'COD_MUN_ORIG', nullable: true })
  codMunOrig: number | null;

  @Column('int', { name: 'COD_MUN_DEST', nullable: true })
  codMunDest: number | null;

  @Column('varchar', { name: 'VEIC_ID', nullable: true, length: 7 })
  veicId: string | null;

  @Column('varchar', { name: 'UF_ID', nullable: true, length: 2 })
  ufId: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
