import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDCM410', ['codemp', 'dtref', 'regniv1', 'cstPis', 'natRec'], {
  unique: true,
})
@Entity('TGFEFDCM410', { schema: 'SANKHYA' })
export class Tgfefdcm410Entity {
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

  @Column('varchar', { primary: true, name: 'CST_PIS', length: 2 })
  cstPis: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'M410'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'NAT_REC', length: 3 })
  natRec: string;

  @Column('float', { name: 'VL_REC', nullable: true, precision: 53 })
  vlRec: number | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 255 })
  codCta: string | null;

  @Column('varchar', { name: 'DESC_COMPL', nullable: true, length: 3103 })
  descCompl: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
