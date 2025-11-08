import { Column, Entity, Index } from 'typeorm';

@Index('TFPMEDESP_PK', ['codmedesp'], { unique: true })
@Entity('TFPMEDESP', { schema: 'SANKHYA' })
export class TfpmedespEntity {
  @Column('smallint', { primary: true, name: 'CODMEDESP' })
  codmedesp: number;

  @Column('smallint', { name: 'CODREGCALC' })
  codregcalc: number;

  @Column('varchar', { name: 'GRUPOMEDIA', length: 70 })
  grupomedia: string;

  @Column('varchar', { name: 'MEDESPPERIODO', nullable: true, length: 1 })
  medespperiodo: string | null;

  @Column('smallint', { name: 'QTDMESESPERIODO', nullable: true })
  qtdmesesperiodo: number | null;

  @Column('varchar', { name: 'TPDIVIDENDO', nullable: true, length: 1 })
  tpdividendo: string | null;

  @Column('smallint', { name: 'MAIORVALQTDDIVIDENDO', nullable: true })
  maiorvalqtddividendo: number | null;

  @Column('varchar', { name: 'TPDIVISOR', nullable: true, length: 1 })
  tpdivisor: string | null;

  @Column('varchar', {
    name: 'RESCISAO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  rescisao: string | null;

  @Column('varchar', {
    name: 'FERIAS',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  ferias: string | null;

  @Column('varchar', {
    name: 'DECTERCRECIS',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  dectercrecis: string | null;

  @Column('varchar', {
    name: 'DECTERC',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  decterc: string | null;

  @Column('varchar', {
    name: 'FERRECIS',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  ferrecis: string | null;
}
