import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDCM800', ['codemp', 'dtref', 'regniv1', 'cstCofins'], {
  unique: true,
})
@Entity('TGFEFDCM800', { schema: 'SANKHYA' })
export class Tgfefdcm800Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'M001'",
  })
  regniv1: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'M800'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'CST_COFINS', length: 2 })
  cstCofins: string;

  @Column('float', { name: 'VL_TOT_REC', nullable: true, precision: 53 })
  vlTotRec: number | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 255 })
  codCta: string | null;

  @Column('varchar', { name: 'DESC_COMPL', nullable: true, length: 3103 })
  descCompl: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
