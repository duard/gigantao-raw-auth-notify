import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GfrfindespesaEntity } from './gFRFINDESPESA.entity';
import { GfrfinreceitasEntity } from './gFRFINRECEITAS.entity';

@Index('PK__GFRFINRE__3214EC27410E1B98', ['id'], { unique: true })
@Entity('GFRFINRECOR', { schema: 'SANKHYA' })
export class GfrfinrecorEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('char', { name: 'FREQUENCIA', length: 1 })
  frequencia: string;

  @Column('smallint', { name: 'QUANTIDADE', nullable: true })
  quantidade: number | null;

  @Column('char', { name: 'INDETERMINADA', length: 1 })
  indeterminada: string;

  @OneToMany(
    () => GfrfindespesaEntity,
    (gfrfindespesaEntity) => gfrfindespesaEntity.recorrencia,
  )
  gfrfindespesas: GfrfindespesaEntity[];

  @OneToMany(
    () => GfrfinreceitasEntity,
    (gfrfinreceitasEntity) => gfrfinreceitasEntity.recorrencia,
  )
  gfrfinreceitas: GfrfinreceitasEntity[];
}
