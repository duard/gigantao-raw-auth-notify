import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcecabEntity } from './tCECAB.entity';

@Index('PK_TCECON', ['nuimp', 'sequencia'], { unique: true })
@Entity('TCECON', { schema: 'SANKHYA' })
export class TceconEntity {
  @Column('int', { primary: true, name: 'NUIMP' })
  nuimp: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'NROCONTAINER', nullable: true, length: 15 })
  nrocontainer: string | null;

  @ManyToOne(() => TcecabEntity, (tcecabEntity) => tcecabEntity.tcecons, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUIMP', referencedColumnName: 'nuimp' }])
  nuimp2: TcecabEntity;
}
