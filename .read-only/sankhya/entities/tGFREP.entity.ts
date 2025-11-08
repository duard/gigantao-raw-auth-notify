import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFREP', ['codtipoper', 'tiprest', 'codcolrest', 'serie'], {
  unique: true,
})
@Entity('TGFREP', { schema: 'SANKHYA' })
export class TgfrepEntity {
  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('char', {
    primary: true,
    name: 'TIPREST',
    length: 1,
    default: () => "'P'",
  })
  tiprest: string;

  @Column('int', { primary: true, name: 'CODCOLREST' })
  codcolrest: number;

  @Column('char', { primary: true, name: 'SERIE', length: 3 })
  serie: string;

  @Column('char', { name: 'RESTRICAO', length: 1, default: () => "'N'" })
  restricao: string;
}
