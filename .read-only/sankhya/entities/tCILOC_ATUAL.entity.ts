import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCILOC_ATUAL', ['codprod', 'codbem'], { unique: true })
@Entity('TCILOC_ATUAL', { schema: 'SANKHYA' })
export class TcilocAtualEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('datetime', { name: 'DTENTRADA' })
  dtentrada: Date;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODDEPTO', nullable: true })
  coddepto: number | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;
}
