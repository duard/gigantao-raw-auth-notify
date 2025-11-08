import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5501Entity } from './tFPS5501.entity';

@Index('PK_TFPS5501_ITCR', ['cods5501Itcr'], { unique: true })
@Entity('TFPS5501_ITCR', { schema: 'SANKHYA' })
export class Tfps5501ItcrEntity {
  @Column('int', { primary: true, name: 'CODS5501_ITCR' })
  cods5501Itcr: number;

  @Column('datetime', { name: 'DTREF', nullable: true })
  dtref: Date | null;

  @Column('smallint', { name: 'TPVALOR' })
  tpvalor: number;

  @Column('varchar', { name: 'TPCR', length: 6 })
  tpcr: string;

  @Column('float', { name: 'VRCR', precision: 53 })
  vrcr: number;

  @ManyToOne(
    () => Tfps5501Entity,
    (tfps5501Entity) => tfps5501Entity.tfps5501Itcrs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'CODS5501', referencedColumnName: 'cods5501' }])
  cods55: Tfps5501Entity;
}
