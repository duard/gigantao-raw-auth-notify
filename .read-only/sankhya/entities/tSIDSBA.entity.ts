import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSIDSBA', ['nudsb'], { unique: true })
@Entity('TSIDSBA', { schema: 'SANKHYA' })
export class TsidsbaEntity {
  @Column('int', { primary: true, name: 'NUDSB' })
  nudsb: number;

  @Column('varchar', { name: 'TITULO', length: 50 })
  titulo: string;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 3103 })
  descricao: string | null;

  @Column('text', { name: 'CONFIG', nullable: true })
  config: string | null;

  @Column('varchar', { name: 'GRUPO', nullable: true, length: 50 })
  grupo: string | null;

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

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsidsbas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsidsbas2)
  @JoinColumn([{ name: 'CODUSUINC', referencedColumnName: 'codusu' }])
  codusuinc: TsiusuEntity;
}
