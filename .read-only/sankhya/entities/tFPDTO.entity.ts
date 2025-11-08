import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPDTO', ['nureg', 'codemp', 'codfunc', 'codparc'], { unique: true })
@Entity('TFPDTO', { schema: 'SANKHYA' })
export class TfpdtoEntity {
  @Column('int', { primary: true, name: 'NUREG' })
  nureg: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { name: 'DIASTOMADOR', nullable: true })
  diastomador: number | null;

  @Column('smallint', { name: 'DIASREF', nullable: true })
  diasref: number | null;

  @Column('varchar', { name: 'NOMEPARC', nullable: true, length: 40 })
  nomeparc: string | null;

  @Column('varchar', { name: 'CGC_CPF', nullable: true, length: 40 })
  cgcCpf: string | null;
}
