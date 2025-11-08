import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFD160', ['codemp', 'dtref', 'regniv1', 'chave', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDFD160', { schema: 'SANKHYA' })
export class Tgfefdfd160Entity {
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

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'D160'" })
  registro: string;

  @Column('varchar', { name: 'DESPACHO', nullable: true, length: 15 })
  despacho: string | null;

  @Column('varchar', { name: 'CNPJ_CPF_REM', nullable: true, length: 14 })
  cnpjCpfRem: string | null;

  @Column('varchar', { name: 'IE_REM', nullable: true, length: 14 })
  ieRem: string | null;

  @Column('int', { name: 'COD_MUN_ORI', nullable: true })
  codMunOri: number | null;

  @Column('varchar', { name: 'CNPJ_CPF_DEST', nullable: true, length: 14 })
  cnpjCpfDest: string | null;

  @Column('varchar', { name: 'IE_DEST', nullable: true, length: 14 })
  ieDest: string | null;

  @Column('int', { name: 'COD_MUN_DEST', nullable: true })
  codMunDest: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
