import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFAIMPPED', ['nuimp'], { unique: true })
@Entity('TGFAIMPPED', { schema: 'SANKHYA' })
export class TgfaimppedEntity {
  @Column('int', { primary: true, name: 'NUIMP' })
  nuimp: number;

  @Column('varchar', { name: 'NOMEARQ', length: 200 })
  nomearq: string;

  @Column('datetime', { name: 'DHIMP' })
  dhimp: Date;

  @Column('smallint', { name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { name: 'QTDPEDIDOS' })
  qtdpedidos: number;

  @Column('smallint', { name: 'QTDIMP' })
  qtdimp: number;

  @Column('smallint', { name: 'QTDNIMP' })
  qtdnimp: number;

  @Column('smallint', { name: 'QTDVEZES' })
  qtdvezes: number;

  @Column('char', { name: 'REPROCESSAR', length: 1, default: () => "'N'" })
  reprocessar: string;
}
