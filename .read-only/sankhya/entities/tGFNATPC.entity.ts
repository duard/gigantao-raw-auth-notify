import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfnatEntity } from './tGFNAT.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfnatpcempEntity } from './tGFNATPCEMP.entity';

@Index('PK_TGFNATPC', ['nunatpiscof'], { unique: true })
@Index('TGFNATPC_I01', ['codnat', 'nunatpiscof'], {})
@Index('TGFNATPC_I02', ['codnat', 'dtinivalidade', 'dtfimvalidade'], {})
@Entity('TGFNATPC', { schema: 'SANKHYA' })
export class TgfnatpcEntity {
  @Column('int', { primary: true, name: 'NUNATPISCOF' })
  nunatpiscof: number;

  @Column('int', { name: 'CODNAT' })
  codnat: number;

  @Column('datetime', { name: 'DTINIVALIDADE' })
  dtinivalidade: Date;

  @Column('datetime', { name: 'DTFIMVALIDADE', nullable: true })
  dtfimvalidade: Date | null;

  @Column('smallint', { name: 'CSTPIS', nullable: true })
  cstpis: number | null;

  @Column('smallint', { name: 'CSTCOFINS', nullable: true })
  cstcofins: number | null;

  @Column('float', { name: 'ALIQPIS', nullable: true, precision: 53 })
  aliqpis: number | null;

  @Column('float', { name: 'ALIQCOFINS', nullable: true, precision: 53 })
  aliqcofins: number | null;

  @Column('varchar', { name: 'NATBCCRED', nullable: true, length: 2 })
  natbccred: string | null;

  @Column('char', { name: 'REGIMEEFD', length: 1, default: () => "'A'" })
  regimeefd: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfnatpcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfnatpcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(
    () => TgfnatpcempEntity,
    (tgfnatpcempEntity) => tgfnatpcempEntity.nunatpiscof2,
  )
  tgfnatpcemps: TgfnatpcempEntity[];
}
