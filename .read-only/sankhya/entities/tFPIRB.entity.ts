import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPIRB', ['codemp', 'referencia', 'nufin'], { unique: true })
@Entity('TFPIRB', { schema: 'SANKHYA' })
export class TfpirbEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;
}
