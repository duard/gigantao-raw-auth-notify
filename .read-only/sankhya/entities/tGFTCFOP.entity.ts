import { Column, Entity, Index } from 'typeorm';

@Index('PK_CFO_CODTRIB', ['codcfo', 'codtrib'], { unique: true })
@Entity('TGFTCFOP', { schema: 'SANKHYA' })
export class TgftcfopEntity {
  @Column('int', { primary: true, name: 'CODCFO' })
  codcfo: number;

  @Column('smallint', { primary: true, name: 'CODTRIB' })
  codtrib: number;

  @Column('char', { name: 'TRIBUTADASCIAP', length: 1, default: () => "'N'" })
  tributadasciap: string;
}
