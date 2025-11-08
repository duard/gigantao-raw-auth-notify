import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TripempEntity } from './tRIPEMP.entity';
import { TripimpEntity } from './tRIPIMP.entity';
import { TripajEntity } from './tRIPAJ.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TripparcEntity } from './tRIPPARC.entity';
import { TripprodEntity } from './tRIPPROD.entity';
import { TriptopEntity } from './tRIPTOP.entity';
import { TriptpsvEntity } from './tRIPTPSV.entity';

@Index('PK_TRIPISET', ['nuprocesso', 'sequencia'], { unique: true })
@Entity('TRIPISET', { schema: 'SANKHYA' })
export class TripisetEntity {
  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CODSUSP', nullable: true, length: 14 })
  codsusp: string | null;

  @Column('smallint', { name: 'INDSUSPREINF', nullable: true })
  indsuspreinf: number | null;

  @Column('smallint', { name: 'INDNATACAOJUD', nullable: true })
  indnatacaojud: number | null;

  @Column('varchar', { name: 'DESCRDECISAO', nullable: true, length: 100 })
  descrdecisao: string | null;

  @Column('datetime', { name: 'DTDECISAO' })
  dtdecisao: Date;

  @Column('char', { name: 'INDDEPOSITO', length: 1, default: () => "'N'" })
  inddeposito: string;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('float', { name: 'PERCSUSPIMP', nullable: true, precision: 53 })
  percsuspimp: number | null;

  @Column('datetime', { name: 'DTINIVIGOR', default: () => 'getdate()' })
  dtinivigor: Date;

  @Column('datetime', { name: 'DTFIMVIGOR', nullable: true })
  dtfimvigor: Date | null;

  @OneToMany(() => TripempEntity, (tripempEntity) => tripempEntity.tripiset)
  tripemps: TripempEntity[];

  @OneToMany(() => TripimpEntity, (tripimpEntity) => tripimpEntity.tripiset)
  tripimps: TripimpEntity[];

  @ManyToOne(() => TripajEntity, (tripajEntity) => tripajEntity.tripisets)
  @JoinColumn([{ name: 'NUPROCESSO', referencedColumnName: 'nuprocesso' }])
  nuprocesso2: TripajEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tripisets)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TripparcEntity, (tripparcEntity) => tripparcEntity.tripiset)
  tripparcs: TripparcEntity[];

  @OneToMany(() => TripprodEntity, (tripprodEntity) => tripprodEntity.tripiset)
  tripprods: TripprodEntity[];

  @OneToMany(() => TriptopEntity, (triptopEntity) => triptopEntity.tripiset)
  triptops: TriptopEntity[];

  @OneToMany(() => TriptpsvEntity, (triptpsvEntity) => triptpsvEntity.tripiset)
  triptpsvs: TriptpsvEntity[];
}
