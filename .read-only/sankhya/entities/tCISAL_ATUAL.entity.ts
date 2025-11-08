import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCISAL_ATUAL', ['codprod', 'codbem'], { unique: true })
@Entity('TCISAL_ATUAL', { schema: 'SANKHYA' })
export class TcisalAtualEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('datetime', { name: 'REFERENCIA' })
  referencia: Date;

  @Column('money', { name: 'SALDO' })
  saldo: number;

  @Column('money', { name: 'TOTALDEP' })
  totaldep: number;
}
