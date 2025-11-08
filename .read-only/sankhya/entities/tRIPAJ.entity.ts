import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsicidEntity } from './tSICID.entity';
import { TripisetEntity } from './tRIPISET.entity';

@Index('PK_TRIPAJ', ['nuprocesso'], { unique: true })
@Entity('TRIPAJ', { schema: 'SANKHYA' })
export class TripajEntity {
  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('varchar', { name: 'NUMPROCESSO', nullable: true, length: 60 })
  numprocesso: string | null;

  @Column('smallint', { name: 'TIPO', nullable: true })
  tipo: number | null;

  @Column('smallint', { name: 'INDORIGPROC', nullable: true })
  indorigproc: number | null;

  @Column('datetime', { name: 'DTINIVALIDADE', nullable: true })
  dtinivalidade: Date | null;

  @Column('datetime', { name: 'DTFIMVALIDADE', nullable: true })
  dtfimvalidade: Date | null;

  @Column('smallint', { name: 'AUTORIA', default: () => '(1)' })
  autoria: number;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('varchar', { name: 'CODIDENTVARA', nullable: true, length: 4 })
  codidentvara: string | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('varchar', { name: 'DESCRCOMPLREG1011', nullable: true, length: 255 })
  descrcomplreg1011: string | null;

  @Column('varchar', {
    name: 'GERTAGPROXMLNFE',
    length: 1,
    default: () => "'N'",
  })
  gertagproxmlnfe: string;

  @Column('smallint', { name: 'ORIGEMPROCESSO', nullable: true })
  origemprocesso: number | null;

  @Column('smallint', { name: 'TIPATOCONCES', nullable: true })
  tipatoconces: number | null;

  @Column('int', { name: 'ADVATUAPROC', nullable: true })
  advatuaproc: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tripajs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tripajs)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @OneToMany(
    () => TripisetEntity,
    (tripisetEntity) => tripisetEntity.nuprocesso2,
  )
  tripisets: TripisetEntity[];
}
