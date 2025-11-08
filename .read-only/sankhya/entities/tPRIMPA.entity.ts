import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TPRIMPA',
  ['idiproc', 'codprodmp', 'controlemp', 'codprodmpalt', 'controlempalt'],
  {
    unique: true,
  },
)
@Entity('TPRIMPA', { schema: 'SANKHYA' })
export class TprimpaEntity {
  @Column('int', { primary: true, name: 'IDIPROC' })
  idiproc: number;

  @Column('int', { primary: true, name: 'CODPRODMP' })
  codprodmp: number;

  @Column('varchar', { primary: true, name: 'CONTROLEMP', length: 10 })
  controlemp: string;

  @Column('int', { primary: true, name: 'CODPRODMPALT' })
  codprodmpalt: number;

  @Column('varchar', { primary: true, name: 'CONTROLEMPALT', length: 10 })
  controlempalt: string;

  @Column('int', { name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', { name: 'CONTROLEPA', length: 11 })
  controlepa: string;

  @Column('smallint', { name: 'ORDEM' })
  ordem: number;

  @Column('float', { name: 'QTDMISTURA', precision: 53, default: () => '(0)' })
  qtdmistura: number;

  @Column('float', { name: 'QTDFATNOTA', precision: 53, default: () => '(0)' })
  qtdfatnota: number;
}
