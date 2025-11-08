import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCBCDM_ECD', ['codemp', 'codtdm', 'coddmt', 'codctactb'], {
  unique: true,
})
@Entity('TCBCDM_ECD', { schema: 'SANKHYA' })
export class TcbcdmEcdEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODTDM' })
  codtdm: number;

  @Column('varchar', { primary: true, name: 'CODDMT', length: 30 })
  coddmt: string;

  @Column('int', { primary: true, name: 'CODCTACTB' })
  codctactb: number;
}
