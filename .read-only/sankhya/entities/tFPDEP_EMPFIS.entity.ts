import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPDEP_EMPFIS', ['codemp', 'coddep', 'codparc', 'codregfis'], {
  unique: true,
})
@Entity('TFPDEP_EMPFIS', { schema: 'SANKHYA' })
export class TfpdepEmpfisEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODDEP' })
  coddep: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { primary: true, name: 'CODREGFIS' })
  codregfis: number;
}
