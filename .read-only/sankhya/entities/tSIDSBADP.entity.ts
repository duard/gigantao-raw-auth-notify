import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSIDSBADP', ['nudsb'], { unique: true })
@Entity('TSIDSBADP', { schema: 'SANKHYA' })
export class TsidsbadpEntity {
  @Column('bigint', { primary: true, name: 'NUDSB' })
  nudsb: string;

  @Column('varchar', { name: 'TITULO', length: 50 })
  titulo: string;

  @Column('varchar', { name: 'CONFIG', nullable: true })
  config: string | null;

  @Column('datetime', {
    name: 'DHALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dhalter: Date | null;

  @Column('datetime', {
    name: 'DHINC',
    nullable: true,
    default: () => 'getdate()',
  })
  dhinc: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsidsbadps)
  @JoinColumn([{ name: 'CODUSUINC', referencedColumnName: 'codusu' }])
  codusuinc: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsidsbadps2)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
