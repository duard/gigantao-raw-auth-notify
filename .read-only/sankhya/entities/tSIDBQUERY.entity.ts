import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSIDBQUERY', ['nuquery'], { unique: true })
@Entity('TSIDBQUERY', { schema: 'SANKHYA' })
export class TsidbqueryEntity {
  @Column('int', { primary: true, name: 'NUQUERY' })
  nuquery: number;

  @Column('varchar', { name: 'TITULOQUERY', length: 50 })
  tituloquery: string;

  @Column('text', { name: 'TEXTOQUERY', nullable: true })
  textoquery: string | null;

  @Column('datetime', {
    name: 'DHALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dhalter: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsidbqueries)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
