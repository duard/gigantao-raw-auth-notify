import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFDEE', ['nudocecf'], { unique: true })
@Index('TGFDEE_I01', ['codmaq', 'numcrzdoc', 'tipdoc'], {})
@Entity('TGFDEE', { schema: 'SANKHYA' })
export class TgfdeeEntity {
  @Column('int', { primary: true, name: 'NUDOCECF' })
  nudocecf: number;

  @Column('int', { name: 'CODMAQ' })
  codmaq: number;

  @Column('int', { name: 'NUMCRZDOC' })
  numcrzdoc: number;

  @Column('int', { name: 'NUMCOODOC' })
  numcoodoc: number;

  @Column('int', { name: 'NUMCCFCUPOM', nullable: true })
  numccfcupom: number | null;

  @Column('int', { name: 'NUMGNFDOC', nullable: true })
  numgnfdoc: number | null;

  @Column('int', { name: 'NUMGRGDOC', nullable: true })
  numgrgdoc: number | null;

  @Column('int', { name: 'NUMCDCDOC', nullable: true })
  numcdcdoc: number | null;

  @Column('varchar', { name: 'TIPDOC', length: 2, default: () => "'MP'" })
  tipdoc: string;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('varchar', { name: 'DESCRFORMAPAGTO', nullable: true, length: 20 })
  descrformapagto: string | null;

  @Column('float', { name: 'VLRPAGO', nullable: true, precision: 53 })
  vlrpago: number | null;

  @Column('varchar', { name: 'ESTORNADO', length: 1, default: () => "'N'" })
  estornado: string;

  @Column('float', { name: 'VLRESTORNO', nullable: true, precision: 53 })
  vlrestorno: number | null;

  @Column('datetime', { name: 'DTEMISSAO', nullable: true })
  dtemissao: Date | null;

  @Column('int', { name: 'HREMISSAO', nullable: true })
  hremissao: number | null;

  @Column('varchar', { name: 'MD5PAF', nullable: true, length: 32 })
  md5Paf: string | null;

  @Column('varchar', { name: 'SUPRIMENTO', length: 1, default: () => "'N'" })
  suprimento: string;

  @Column('char', { name: 'ATUALEST', nullable: true, length: 1 })
  atualest: string | null;
}
