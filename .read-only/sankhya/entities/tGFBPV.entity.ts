import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFBPV', ['sequencia', 'codtipvenda'], { unique: true })
@Entity('TGFBPV', { schema: 'SANKHYA' })
export class TgfbpvEntity {
  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'DIAINICIALVENDA' })
  diainicialvenda: number;

  @Column('smallint', { name: 'DIAFINALVENDA' })
  diafinalvenda: number;

  @Column('smallint', { name: 'DIABASEVENCIMENTO' })
  diabasevencimento: number;

  @Column('smallint', { primary: true, name: 'CODTIPVENDA' })
  codtipvenda: number;

  @Column('smallint', { name: 'BASEMESVENCIMENTO', default: () => "'0'" })
  basemesvencimento: number;
}
