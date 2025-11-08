import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF1600', ['codemp', 'dtref', 'regniv1', 'codparc'], {
  unique: true,
})
@Entity('TGFEFDF1600', { schema: 'SANKHYA' })
export class Tgfefdf1600Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'1001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1600'" })
  registro: string;

  @Column('varchar', { name: 'COD_PART', nullable: true, length: 60 })
  codPart: string | null;

  @Column('float', { name: 'TOT_CREDITO', nullable: true, precision: 53 })
  totCredito: number | null;

  @Column('float', { name: 'TOT_DEBITO', nullable: true, precision: 53 })
  totDebito: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
