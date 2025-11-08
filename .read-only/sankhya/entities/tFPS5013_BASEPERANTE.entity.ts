import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5013InfobaseperanteEntity } from './tFPS5013_INFOBASEPERANTE.entity';

@Index('PK_TFPS5013_BASEPERANTE', ['cods5013Baseperante'], { unique: true })
@Index(
  'TFPS5013_BASEPERANTE_I01',
  ['cods5013Infobaseperante', 'tpvalore', 'indincide'],
  {},
)
@Entity('TFPS5013_BASEPERANTE', { schema: 'SANKHYA' })
export class Tfps5013BaseperanteEntity {
  @Column('int', { primary: true, name: 'CODS5013_BASEPERANTE' })
  cods5013Baseperante: number;

  @Column('int', { name: 'CODS5013_INFOBASEPERANTE' })
  cods5013Infobaseperante: number;

  @Column('varchar', { name: 'TPVALORE', length: 2 })
  tpvalore: string;

  @Column('varchar', { name: 'INDINCIDE', length: 1 })
  indincide: string;

  @Column('float', { name: 'BASEFGTSE', precision: 53 })
  basefgtse: number;

  @Column('float', { name: 'VRFGTSE', nullable: true, precision: 53 })
  vrfgtse: number | null;

  @ManyToOne(
    () => Tfps5013InfobaseperanteEntity,
    (tfps5013InfobaseperanteEntity) =>
      tfps5013InfobaseperanteEntity.tfps5013Baseperantes,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5013_INFOBASEPERANTE',
      referencedColumnName: 'cods5013Infobaseperante',
    },
  ])
  cods5013Infobaseperante2: Tfps5013InfobaseperanteEntity;
}
