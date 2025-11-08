import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprefxEntity } from './tPREFX.entity';

@Index('PK_TPRPEFX', ['idefx', 'nome'], { unique: true })
@Entity('TPRPEFX', { schema: 'SANKHYA' })
export class TprpefxEntity {
  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('varchar', { primary: true, name: 'NOME', length: 50 })
  nome: string;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('int', { name: 'INTVAL' })
  intval: number;

  @Column('float', { name: 'DECVAL', precision: 53 })
  decval: number;

  @Column('datetime', { name: 'DATVAL' })
  datval: Date;

  @Column('varchar', { name: 'TEXTVAL', length: 3103 })
  textval: string;

  @ManyToOne(() => TprefxEntity, (tprefxEntity) => tprefxEntity.tprpefxes)
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx2: TprefxEntity;
}
