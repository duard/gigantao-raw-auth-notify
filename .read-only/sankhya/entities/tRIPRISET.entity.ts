import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TriipfcEntity } from './tRIIPFC.entity';
import { TriiprcEntity } from './tRIIPRC.entity';
import { TriiprjEntity } from './tRIIPRJ.entity';
import { TriipscEntity } from './tRIIPSC.entity';
import { TripaspEntity } from './tRIPASP.entity';
import { TripastEntity } from './tRIPAST.entity';
import { TrippspEntity } from './tRIPPSP.entity';
import { TrippstEntity } from './tRIPPST.entity';
import { TripajrEntity } from './tRIPAJR.entity';
import { TriprrcEntity } from './tRIPRRC.entity';

@Index(
  'PK_TRIPRISET',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave', 'nuprocesso', 'seqpriset'],
  { unique: true },
)
@Entity('TRIPRISET', { schema: 'SANKHYA' })
export class TriprisetEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 20 })
  chave: string;

  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('smallint', { primary: true, name: 'SEQPRISET' })
  seqpriset: number;

  @Column('char', { name: 'CODSUSP', nullable: true, length: 14 })
  codsusp: string | null;

  @Column('smallint', { name: 'INDSUSP', nullable: true })
  indsusp: number | null;

  @Column('datetime', { name: 'DTDECISAO', nullable: true })
  dtdecisao: Date | null;

  @Column('char', { name: 'INDDEPOSITO', nullable: true, length: 1 })
  inddeposito: string | null;

  @Column('datetime', { name: 'INIVALID', nullable: true })
  inivalid: Date | null;

  @Column('datetime', { name: 'FIMVALID', nullable: true })
  fimvalid: Date | null;

  @OneToMany(() => TriipfcEntity, (triipfcEntity) => triipfcEntity.tripriset)
  triipfcs: TriipfcEntity[];

  @OneToMany(() => TriiprcEntity, (triiprcEntity) => triiprcEntity.tripriset)
  triiprcs: TriiprcEntity[];

  @OneToMany(() => TriiprjEntity, (triiprjEntity) => triiprjEntity.tripriset)
  triiprjs: TriiprjEntity[];

  @OneToMany(() => TriipscEntity, (triipscEntity) => triipscEntity.tripriset)
  triipscs: TriipscEntity[];

  @OneToMany(() => TripaspEntity, (tripaspEntity) => tripaspEntity.tripriset)
  tripasps: TripaspEntity[];

  @OneToMany(() => TripastEntity, (tripastEntity) => tripastEntity.tripriset)
  tripasts: TripastEntity[];

  @OneToMany(() => TrippspEntity, (trippspEntity) => trippspEntity.tripriset)
  trippsps: TrippspEntity[];

  @OneToMany(() => TrippstEntity, (trippstEntity) => trippstEntity.tripriset)
  trippsts: TrippstEntity[];

  @ManyToOne(() => TripajrEntity, (tripajrEntity) => tripajrEntity.triprisets, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE', referencedColumnName: 'chave' },
    { name: 'NUPROCESSO', referencedColumnName: 'nuprocesso' },
  ])
  tripajr: TripajrEntity;

  @OneToMany(() => TriprrcEntity, (triprrcEntity) => triprrcEntity.tripriset)
  triprrcs: TriprrcEntity[];
}
