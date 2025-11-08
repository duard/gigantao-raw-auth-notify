import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSIERF', ['codusu', 'nomeinstancia', 'pkregistro'], { unique: true })
@Entity('TSIERF', { schema: 'SANKHYA' })
export class TsierfEntity {
  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { primary: true, name: 'NOMEINSTANCIA', length: 255 })
  nomeinstancia: string;

  @Column('varchar', { primary: true, name: 'PKREGISTRO', length: 512 })
  pkregistro: string;

  @Column('datetime', { name: 'DHULTIMOACESSO', nullable: true })
  dhultimoacesso: Date | null;

  @Column('char', { name: 'FAVORITO', length: 1, default: () => "'N'" })
  favorito: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsierfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
