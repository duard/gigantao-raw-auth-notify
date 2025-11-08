import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcecabEntity } from './tCECAB.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCEADI', ['nuimp', 'nroadicao'], { unique: true })
@Entity('TCEADI', { schema: 'SANKHYA' })
export class TceadiEntity {
  @Column('int', { primary: true, name: 'NUIMP' })
  nuimp: number;

  @Column('varchar', { primary: true, name: 'NROADICAO', length: 3 })
  nroadicao: string;

  @Column('float', { name: 'VLRFRETE', nullable: true, precision: 53 })
  vlrfrete: number | null;

  @Column('float', { name: 'VLRSEG', nullable: true, precision: 53 })
  vlrseg: number | null;

  @Column('float', { name: 'VLRTHC', nullable: true, precision: 53 })
  vlrthc: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('float', { name: 'VLRAFRMM', nullable: true, precision: 53 })
  vlrafrmm: number | null;

  @ManyToOne(() => TcecabEntity, (tcecabEntity) => tcecabEntity.tceadis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUIMP', referencedColumnName: 'nuimp' }])
  nuimp2: TcecabEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tceadis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
