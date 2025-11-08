import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFFSI', ['codemp', 'codparc'], { unique: true })
@Entity('TGFFSI', { schema: 'SANKHYA' })
export class TgffsiEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { name: 'TPENTIDADE' })
  tpentidade: number;

  @Column('float', { name: 'PERCENTUAL', nullable: true, precision: 53 })
  percentual: number | null;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;
}
