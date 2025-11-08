import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgftelEntity } from './tGFTEL.entity';

@Index('PK_TGFHTE', ['codhist'], { unique: true })
@Entity('TGFHTE', { schema: 'SANKHYA' })
export class TgfhteEntity {
  @Column('smallint', { primary: true, name: 'CODHIST' })
  codhist: number;

  @Column('char', { name: 'DESCRHIST', length: 40 })
  descrhist: string;

  @Column('char', { name: 'COBRANCA', length: 1, default: () => "'N'" })
  cobranca: string;

  @Column('varchar', { name: 'CODUSUCOBR', length: 1, default: () => "'N'" })
  codusucobr: string;

  @Column('varchar', {
    name: 'GRAVCOBRADOR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  gravcobrador: string | null;

  @OneToMany(() => TgftelEntity, (tgftelEntity) => tgftelEntity.codhist)
  tgftels: TgftelEntity[];
}
