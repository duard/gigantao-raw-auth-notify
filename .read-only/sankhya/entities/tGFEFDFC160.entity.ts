import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFC160', ['codemp', 'dtref', 'regniv1', 'chave', 'registro'], {
  unique: true,
})
@Entity('TGFEFDFC160', { schema: 'SANKHYA' })
export class Tgfefdfc160Entity {
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

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'C160'",
  })
  registro: string;

  @Column('varchar', { name: 'COD_PART', nullable: true, length: 60 })
  codPart: string | null;

  @Column('varchar', { name: 'VEIC_ID', nullable: true, length: 7 })
  veicId: string | null;

  @Column('varchar', { name: 'QTD_VOL', nullable: true, length: 10 })
  qtdVol: string | null;

  @Column('float', { name: 'PESO_BRT', nullable: true, precision: 53 })
  pesoBrt: number | null;

  @Column('float', { name: 'PESO_LIQ', nullable: true, precision: 53 })
  pesoLiq: number | null;

  @Column('varchar', { name: 'UF_ID', nullable: true, length: 2 })
  ufId: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
