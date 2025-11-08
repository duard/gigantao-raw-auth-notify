import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimfacEntity } from './tIMFAC.entity';
import { TimimvEntity } from './tIMIMV.entity';

@Index('PK_TIMTPI', ['tpicodigo'], { unique: true })
@Entity('TIMTPI', { schema: 'SANKHYA' })
export class TimtpiEntity {
  @Column('int', { primary: true, name: 'TPICODIGO' })
  tpicodigo: number;

  @Column('varchar', { name: 'TPITIPO', length: 2 })
  tpitipo: string;

  @Column('varchar', { name: 'TPITIPODEIMOVEL', length: 30 })
  tpitipodeimovel: string;

  @Column('char', { name: 'TPILEGADO', nullable: true, length: 1 })
  tpilegado: string | null;

  @Column('varchar', { name: 'TPIWIMOVEISTIPO', nullable: true, length: 100 })
  tpiwimoveistipo: string | null;

  @Column('varchar', {
    name: 'TPIWIMOVEISSUBTIPO',
    nullable: true,
    length: 100,
  })
  tpiwimoveissubtipo: string | null;

  @Column('varchar', { name: 'TPICQMTIPO', nullable: true, length: 100 })
  tpicqmtipo: string | null;

  @Column('char', { name: 'TPIEXIGESEGIND', length: 1, default: () => "'S'" })
  tpiexigesegind: string;

  @Column('varchar', { name: 'TPIVIVAREAL', nullable: true, length: 50 })
  tpivivareal: string | null;

  @Column('varchar', { name: 'TPIZAPTIPOIMOVEL', nullable: true, length: 100 })
  tpizaptipoimovel: string | null;

  @Column('varchar', {
    name: 'TPIZAPSUBTIPOIMOVEL',
    nullable: true,
    length: 100,
  })
  tpizapsubtipoimovel: string | null;

  @Column('varchar', {
    name: 'TPIZAPCATEGRIAIMOVEL',
    nullable: true,
    length: 100,
  })
  tpizapcategriaimovel: string | null;

  @OneToMany(() => TimfacEntity, (timfacEntity) => timfacEntity.factipoimovel)
  timfacs: TimfacEntity[];

  @OneToMany(() => TimimvEntity, (timimvEntity) => timimvEntity.imvtipodoimovel)
  timimvs: TimimvEntity[];
}
