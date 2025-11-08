import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5503IdeestabEntity } from './tFPS5503_IDEESTAB.entity';

@Index('PK_TFPS5503_BASEPERREF', ['cods5503Baseperref'], { unique: true })
@Entity('TFPS5503_BASEPERREF', { schema: 'SANKHYA' })
export class Tfps5503BaseperrefEntity {
  @Column('int', { primary: true, name: 'CODS5503_BASEPERREF' })
  cods5503Baseperref: number;

  @Column('varchar', { name: 'PERREF', nullable: true, length: 7 })
  perref: string | null;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('varchar', { name: 'TPVALORPROCTRAB', nullable: true, length: 2 })
  tpvalorproctrab: string | null;

  @Column('float', { name: 'REMFGTSPROCTRAB', nullable: true, precision: 53 })
  remfgtsproctrab: number | null;

  @Column('float', { name: 'DPSFGTSPROCTRAB', nullable: true, precision: 53 })
  dpsfgtsproctrab: number | null;

  @Column('float', { name: 'REMFGTSSEFIP', nullable: true, precision: 53 })
  remfgtssefip: number | null;

  @Column('float', { name: 'DPSFGTSSEFIP', nullable: true, precision: 53 })
  dpsfgtssefip: number | null;

  @Column('float', { name: 'REMFGTSDECANT', nullable: true, precision: 53 })
  remfgtsdecant: number | null;

  @Column('float', { name: 'DPSFGTSDECANT', nullable: true, precision: 53 })
  dpsfgtsdecant: number | null;

  @ManyToOne(
    () => Tfps5503IdeestabEntity,
    (tfps5503IdeestabEntity) => tfps5503IdeestabEntity.tfps5503Baseperrefs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5503_IDEESTAB', referencedColumnName: 'cods5503Ideestab' },
  ])
  cods5503Ideestab: Tfps5503IdeestabEntity;
}
